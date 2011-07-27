
package com.plexper.test;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
//import org.semispace.SemiSpace;
//import org.semispace.SemiSpaceInterface;
//import org.semispace.space.tutorial.Element;

/** Example resource class hosted at the URI path "/myresource"
 */
@Path("/myresource")
public class MyResource {
    
    /** Method processing HTTP GET requests, producing "text/plain" MIME media
     * type.
     * @return String that will be send back as a response of type "text/plain".
     */
    @GET 
    @Produces("text/plain")
    public String getIt() {
        
//        SemiSpaceInterface space = SemiSpace.retrieveSpace();
        //Element element = new Element();
        
        return "Hi there!";
    }
}
