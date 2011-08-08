// THIS IS A MESS!

package com.plesper.content;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.xml.bind.annotation.XmlRootElement;

import com.jimplush.goose.Article;
import com.jimplush.goose.Configuration;
import com.jimplush.goose.ContentExtractor;

import net.sf.ehcache.CacheManager;

import org.apache.http.impl.client.DefaultHttpClient;

import ac.simons.oembed.DefaultOembedProvider;
import ac.simons.oembed.Oembed;
import ac.simons.oembed.OembedException;
import ac.simons.oembed.OembedResponse;
import com.sun.syndication.feed.synd.SyndEntry;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import mx.bigdata.jcalais.CalaisClient;
import mx.bigdata.jcalais.CalaisConfig;
import mx.bigdata.jcalais.CalaisObject;
import mx.bigdata.jcalais.CalaisResponse;
import mx.bigdata.jcalais.rest.CalaisRestClient;

/**
 *
 * @author Laurian Gridinoc
 */
@Path("/api/article")
@XmlRootElement
public class Extractor {

    private static final Configuration DEFAULT_CONFIG = new Configuration();
    private static final Configuration NO_IMAGE_CONFIG = new Configuration();
    private static final CacheManager cacheManager = CacheManager.create();
    private static final CalaisConfig config = new CalaisConfig();

    static {
        DEFAULT_CONFIG.setMinBytesForImages(100);

        //TODO move these to config file
        DEFAULT_CONFIG.setLocalStoragePath("/tmp/goose");
        DEFAULT_CONFIG.setImagemagickConvertPath("/usr/local/bin/convert");
        DEFAULT_CONFIG.setImagemagickIdentifyPath("/usr/local/bin/identify");

        NO_IMAGE_CONFIG.setEnableImageFetching(false);

        //config.set(CalaisConfig.UserParam.EXTERNAL_ID, "User generated ID");
        config.set(CalaisConfig.ProcessingParam.CALCULATE_RELEVANCE_SCORE, "true");
    }
    public String title, text, image, domain, link, shortLink;
    //public ArrayList<String> images = new ArrayList<String>();
    public OembedResponse response;
    //public CalaisResponse cresponse;
    public HashMap calais;
//    //public SyndFeed feed;

    @Path("/info")
    @GET
    @Produces("application/json")
    public Extractor getArticleData(@QueryParam("url") String url) {

        //TODO parallelise this
        
        // TODO import feed items
        //feed(url);
        
        oEmbed(url);

        Article a = getArticle(url);

        title = a.getTitle();
        text = a.getCleanedArticleText();
        domain = a.getDomain();
        link = a.getCanonicalLink();
        
        // TODO fork & fix the Goose for this
        //images = a.getImageCandidates();

        if (a.getTopImage() != null) {
            image = a.getTopImage().getImageSrc();
        }

        // TODO use Calais tags, etc
        //enrich(url, text);

        return this;
    }

    private Article getArticle(String url) {
        ContentExtractor extractor = new ContentExtractor(DEFAULT_CONFIG);
        //ContentExtractor extractor = new CustomExtractor(DEFAULT_CONFIG); 
        return extractor.extractContent(url);
    }

    private void oEmbed(String url) {
        Oembed oembed = new Oembed(new DefaultHttpClient());
        oembed.setCacheManager(cacheManager);
        oembed.setAutodiscovery(true);

        try {
            response = oembed.transformUrl(url);
        } catch (OembedException ex) {
            Logger.getLogger(Extractor.class.getName()).log(Level.SEVERE, null, ex);
        }

        //TODO fix "is_plus" Vimeo error?

        try {
            if (response == null) {
                oembed.withProvider(
                        new DefaultOembedProvider().withName("oohEmbed").withFormat("json").withEndpoint("http://oohembed.com/oohembed/").withUrlScheme(".*") //.withMaxWidth(210)
                        );
                response = oembed.transformUrl(url);
            }
        } catch (OembedException ex) {
            Logger.getLogger(Extractor.class.getName()).log(Level.SEVERE, null, ex);
        }


    }

    private void enrich(String url, String content) {
        CalaisResponse cresponse = null;
        CalaisClient client = new CalaisRestClient("pyns63uge4wqjvg5knus4beu");

        try {


            System.out.println("----------------------------------------------");
            System.out.println("contentURL " + url);
            System.out.println("contentURL " + content.length());
            cresponse = client.analyze(new URL(url));
        } catch (Exception ex) {
            Logger.getLogger(Extractor.class.getName()).log(Level.SEVERE, null, ex);
            try {
                if (content.length() > 90000) {
                    content = content.substring(0, 90000);
                }

                System.out.println("----------------------------------------------");
                System.out.println("----------------------------------------------");
                System.out.println("content " + content.length());
                cresponse = client.analyze(content);
            } catch (Exception ex1) {
                Logger.getLogger(Extractor.class.getName()).log(Level.SEVERE, null, ex1);
            }
        }
        if (cresponse == null) {
            return;
        }

        System.out.println("----------------------------------------------");
        System.out.println("getEntities");

//        HashMap entities = new HashMap();
//        calais.put("Entities", entities);

        for (CalaisObject entity : cresponse.getEntities()) {
            System.out.println(entity.getField("_type") + ":"
                    + entity.getField("name"));
//            entities.put()
        }

        System.out.println("getTopics");
        for (CalaisObject topic : cresponse.getTopics()) {
            System.out.println(topic.getField("categoryName"));
        }

        System.out.println("getSocialTags");
        for (CalaisObject tags : cresponse.getSocialTags()) {
            System.out.println(tags.getField("_typeGroup") + ":"
                    + tags.getField("name"));
        }

        // TODO broadcast this to all the users on the same space
        //JQueryPubSub.test.bcast("OPEN CALAIS!");
    }

    private void feed(String url) {
        try {
            SyndFeed feed = null;
            SyndFeedInput input = new SyndFeedInput();
            feed = input.build(new XmlReader(new URL(url)));

            List<SyndEntry> entries = feed.getEntries();
            if (entries == null) {
                entries = new ArrayList<SyndEntry>();
            }
            
            Iterator<SyndEntry> iterator = entries.iterator();
            
            System.out.println("FEED?----------------------------------------------");
            while (iterator.hasNext()) {
                System.out.println(iterator.next().getTitle());
            }
            
        } catch (Exception ex) {
            Logger.getLogger(Extractor.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
