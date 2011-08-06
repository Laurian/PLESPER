package com.plesper;

import com.sun.jersey.api.view.Viewable;
import java.io.IOException;
import java.util.Properties;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Laurian Gridinoc
 */
@Path("/")
public class Space {

    private @Context
    ServletContext servletContext;
    private Properties properties = new Properties();

    public Space() throws IOException {
        properties.load(
                this.getClass().getClassLoader().getResourceAsStream("app.properties"));
    }

    @GET
    @Path("/")
    @Produces(MediaType.TEXT_HTML)
    public Viewable view() {
        return new Viewable("/index.jsp", this);
    }

    @GET
    @Path("/{space}")
    @Produces(MediaType.TEXT_HTML)
    public Viewable view(@PathParam("space") String space) {
        return new Viewable("/index.jsp", this);
    }

    public Properties getProperties() {
        return properties;
    }

    public void setProperties(Properties properties) {
        this.properties = properties;
    }
}