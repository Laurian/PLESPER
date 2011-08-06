/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.atmosphere.cpr.AtmosphereResourceEvent;
import org.atmosphere.cpr.AtmosphereResourceEventListener;

/**
 *
 * @author laurian
 */
public class Bcast implements AtmosphereResourceEventListener {
    
    AtmosphereResourceEvent<HttpServletRequest, HttpServletResponse> e;

    @Override
    public void onSuspend(AtmosphereResourceEvent<HttpServletRequest, HttpServletResponse> event) {
        //throw new UnsupportedOperationException("Not supported yet.");
        e = event;
    }

    @Override
    public void onResume(AtmosphereResourceEvent<HttpServletRequest, HttpServletResponse> event) {
        //throw new UnsupportedOperationException("Not supported yet.");
        e = event;
    }

    @Override
    public void onDisconnect(AtmosphereResourceEvent<HttpServletRequest, HttpServletResponse> event) {
        //throw new UnsupportedOperationException("Not supported yet.");
        e = event;
    }

    @Override
    public void onBroadcast(AtmosphereResourceEvent<HttpServletRequest, HttpServletResponse> event) {
        //throw new UnsupportedOperationException("Not supported yet.");
        e = event;
    }

    @Override
    public void onThrowable(AtmosphereResourceEvent<HttpServletRequest, HttpServletResponse> event) {
        //throw new UnsupportedOperationException("Not supported yet.");
        e = event;
    }
    
    public void bcast(Object o) {
        e.getResource().getBroadcaster().broadcast(o);
    }
}
