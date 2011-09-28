package test;

/* Demo.java https://github.com/embedly/embedly-java */

import java.util.HashMap;

import org.json.JSONArray;

//import org.apache.commons.logging.LogFactory;

import com.embedly.api.Api;
import java.util.ArrayList;

public class Demo {
  public static void main(String[] args) {
      //Api.setLog(LogFactory.getLog(Api.class));
      Api api = new Api("Mozilla/5.0 (compatible; mytestapp/1.0; my@email.com)",
                    "xxxx"); // <-- put key here
     
      HashMap<String, Object> params = new HashMap<String, Object>();
      params.put("url", "http://www.youtube.com/watch?v=sPbJ4Z5D-n4&feature=topvideos");

      JSONArray json = api.oembed(params);
      System.out.println(""+json);

      System.out.println("------------------------------------------------------");

      ArrayList<String> urls = new ArrayList<String>();
      urls.add("http://www.youtube.com/watch?v=sPbJ4Z5D-n4&feature=topvideos");
      urls.add("http://twitpic.com/3yr7hk");
      params = new HashMap<String, Object>();
      params.put("urls", urls);

      //JSONArray 
      json = api.oembed(params);
      System.out.println(""+json);

      System.out.println("------------------------------------------------------");

      api = new Api("Mozilla/5.0 (compatible; mytestapp/1.0; my@email.com)",
                    "xxxx"); // <-- put key here
      params = new HashMap<String, Object>();
      params.put("url", "http://www.guardian.co.uk/media/2011/jan/21/andy-coulson-phone-hacking-statement");

      //JSONArray 
      json = api.oembed(params);
      System.out.println(""+json);

  }
}
