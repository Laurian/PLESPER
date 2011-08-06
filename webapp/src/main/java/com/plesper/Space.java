package com.plesper;

import com.sun.jersey.api.view.Viewable;
import java.io.InputStream;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.PathSegment;

/**
 *
 * @author Laurian Gridinoc
 */
@Path("/")
public class Space {
    
    private @Context ServletContext servletContext;
    
    @GET
    @Path("/")
    @Produces(MediaType.TEXT_HTML)
    public Viewable view() {
        return new Viewable("/index.jsp", "");
    }

    @GET
    @Path("/{space}")
    @Produces(MediaType.TEXT_HTML)
    public Viewable view(@PathParam("space") String space) {
        return new Viewable("/index.jsp", space);
    }
    
    
}
