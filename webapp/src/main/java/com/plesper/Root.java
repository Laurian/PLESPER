package com.plesper;

import com.sun.jersey.api.view.Viewable;
import com.sun.jersey.spi.resource.Singleton;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import org.atmosphere.samples.pubsub.JQueryPubSub;

/**
 *
 * @author Laurian Gridinoc
 */
@Path("/")
@Singleton 
public class Root {

    private @Context
        ServletContext servletContext;
    
    private Properties properties = new Properties();
    public static Root self; // yeah, I know...
    
    Map<String, Space> spaces = Collections.synchronizedMap(new HashMap<String, Space>());

    private Space rootSpace;
    
    public Root() throws IOException {
        properties.load(
                this.getClass().getClassLoader().getResourceAsStream("app.properties"));
        self = this;
        rootSpace = new Space("", this);
    }

    @GET
    @Path("/")
    @Produces(MediaType.TEXT_HTML)
    public Viewable view() {
        return new Viewable("/index.jsp", rootSpace);
    }

    @GET
    @Path("/{space}")
    @Produces(MediaType.TEXT_HTML)
    public Viewable view(@PathParam("space") String spaceId) {
        Space space;
        
        if (spaces.containsKey(spaceId)) {
            space = spaces.get(spaceId);
        } else {
            space = new Space(spaceId, this);
            spaces.put(spaceId, space);
        }
        
        return new Viewable("/index.jsp", space);
    }

    public Properties getProperties() {
        return properties;
    }
    

}
