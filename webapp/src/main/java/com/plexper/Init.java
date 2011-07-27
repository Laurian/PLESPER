package com.plexper;

import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Web application lifecycle listener.
 * @author laurian
 */
public class Init implements ServletContextListener {
    
    private Properties properties;

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        properties = new Properties();
        
        ClassLoader classLoader = this.getClass().getClassLoader();
        InputStream inputStream = classLoader.getResourceAsStream("git.properties");
        ServletContext context = servletContextEvent.getServletContext();
        
        try {
            properties.load(inputStream);
            
            Enumeration enumeration = properties.keys();
            String property, value;
            while (enumeration.hasMoreElements()) {
                property = enumeration.nextElement().toString();
                context.setAttribute(property, properties.getProperty(property));
            }
            
            
        } catch (IOException ex) {
            Logger.getLogger(Init.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        //throw new UnsupportedOperationException("Not supported yet.");
    }
}
