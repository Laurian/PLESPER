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
import java.util.ArrayList;

import net.sf.ehcache.CacheManager;

import org.apache.http.impl.client.DefaultHttpClient;

import ac.simons.oembed.DefaultOembedProvider;
import ac.simons.oembed.Oembed;
import ac.simons.oembed.OembedException;
import ac.simons.oembed.OembedJsonParser;
import ac.simons.oembed.OembedResponse;

/**
 *
 * @author Laurian Gridinoc
 */
@Path("/article")
@XmlRootElement
public class Extractor {

    private static final Configuration DEFAULT_CONFIG = new Configuration();
    private static final Configuration NO_IMAGE_CONFIG = new Configuration();
    
    private static final CacheManager cacheManager = CacheManager.create();

    static {
        DEFAULT_CONFIG.setMinBytesForImages(100);
    
        //TODO move these to config file
        DEFAULT_CONFIG.setLocalStoragePath("/tmp/goose");
        DEFAULT_CONFIG.setImagemagickConvertPath("/usr/local/bin/convert");
        DEFAULT_CONFIG.setImagemagickIdentifyPath("/usr/local/bin/identify");
                
        NO_IMAGE_CONFIG.setEnableImageFetching(false);
    }
    
    public String title, text, image, domain, link, shortLink;
    //public ArrayList<String> images = new ArrayList<String>();
    public OembedResponse response;

    @Path("/info")
    @GET
    @Produces("application/json")
    public Extractor getArticleData(@QueryParam("url") String url) {
        
        oEmbed(url);
        
        Article a = getArticle(url);

        title = a.getTitle();
        text = a.getCleanedArticleText();
        domain = a.getDomain();
        link = a.getCanonicalLink();
        //images = a.getImageCandidates();

	if (a.getTopImage() != null)
            image = a.getTopImage().getImageSrc();
        

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
				new DefaultOembedProvider()
					.withName("oohEmbed")
					.withFormat("json")
					.withEndpoint("http://oohembed.com/oohembed/")
                                        .withUrlScheme(".*")
                                        //.withMaxWidth(210)
				);
                response = oembed.transformUrl(url);
            }
        } catch (OembedException ex) {
            Logger.getLogger(Extractor.class.getName()).log(Level.SEVERE, null, ex);
        }        
                    

    }
    
//    class CustomExtractor extends ContentExtractor {
//        
//        public CustomExtractor(Configuration config) {
//            super(config);
//            imageExtractor = null;
//        }
//        
//        
//        
//    }
}
