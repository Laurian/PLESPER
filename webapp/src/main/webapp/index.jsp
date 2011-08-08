<%@page contentType="text/html;charset=UTF-8" language="java"%><%@taglib uri="http://htmlcompressor.googlecode.com/taglib/compressor" prefix="compress"%><compress:html enabled="true" removeComments="true" compressJavaScript="true" yuiJsDisableOptimizations="true"><!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<%
    String prefix = "";
    if ("true".equals(
            ((com.plesper.Space) request.getAttribute("it")).getRoot()
            .getProperties().getProperty("dev"))) {
        prefix = Long.toHexString(Long.reverse(System.currentTimeMillis()));
    }
%>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>PLESPER (version ${it.root.properties["git.commit.id.abbrev"]})</title>

    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Mobile viewport optimized: j.mp/bplateviewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory: 	
    mathiasbynens.be/notes/touch-icons -->

    <link rel="stylesheet" href="<%=prefix%>~${it.root.properties["git.commit.id.abbrev"]},style/style,jquery.terminal,visualsearch-datauri,zoomooz,dark/jquery-ui-1.8.14.custom.css">
    <link rel="stylesheet" href="http://www.google.com/cse/style/look/default.css">
    <link rel="stylesheet" href="<%=prefix%>~${it.root.properties["git.commit.id.abbrev"]},style/google.css">


    <script src="<%=prefix%>~${it.root.properties["git.commit.id.abbrev"]},script/lib/modernizr-2.0.min,respond.min.js"></script>
</head>
<body class="spaceid${it.name}" data-space="${it.name}">
    <div id="tilda"></div>
    <header>
        <h1>PLESPER</h1>
        
        <div id="radio">
            <form>
		<input type="radio" id="radio0" name="radio" checked="checked"><label for="radio0">Tiles</label>
		<input type="radio" id="radio1" name="radio" disabled><label for="radio1">Treemap</label>
		<input type="radio" id="radio2" name="radio" disabled><label for="radio2">Map</label>
		<input type="radio" id="radio3" name="radio"><label for="radio3">Relations</label>
            </form>
        </div>
        
    </header>	

    <div id="start">
        <div>
            <h3>PLESPER</h3>
            <p>
                This is an exploration of the PLESPER spatial navigation concept, as well as of the capabilities of some off-the-shelf javascript libraries.
            </p>
            
            <p>
                To learn more about the thinking behind this please check <a href="http://gridinoc.name/blog/category/mojo/">my MoJo blog posts</a>.
            </p>
            
            <h4>In order to experiment please <button>Create new space</button></h4>

            <p>
                Here is a video that outlines the concept.
            </p>
            
            <a href="https://github.com/Laurian/PLESPER"><img style="z-index: 2025; position: absolute; top: 0; right: 0; border: 0;" src="https://a248.e.akamai.net/assets.github.com/img/4c7dc970b89fd04b81c8e221ba88ff99a06c6b61/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub"></a>

            <footer>
<!--                <div class="copy">&copy;</div>-->
                <div class="text">Copyleft <a href="http://laurian.gridinoc.name">Laurian Gridinoc</a>. All Wrongs Reserved.</div>
                <a href="https://github.com/Laurian/PLESPER/commit/${it.root.properties["git.commit.id.abbrev"]}">version ${it.root.properties["git.commit.id.abbrev"]}</a>
            </footer>
        </div>
    </div>
    
    <div id="page">
        
        <div class="visual_search"></div>

        <div id="deck">
            
   <!-- sample -->         
<!--   <div class="hover panel" id="p1">
       <div class="card">
            <div class="front">
                <img src="http://flickholdr.com/210/100/mondrian" alt="Placeholder image from flickholdr.com" />
                <h1>long title long title long title long title long title long title long title long title long title long title long title </h1>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis scelerisque urna quis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec venenatis sapien. Vivamus vulputate velit non elit ornare ac commodo orci venenatis. Curabitur eget mauris risus. Nunc a enim id quam congue sagittis. Phasellus ut purus a nunc eleifend porta</p>
                </div>
            </div>
            <div class="back">
                <textarea placeholder="notes…"></textarea>
            </div>	
       </div>
       <div class="meta"><span class="zoom">zoom</span></div>
   </div>-->
   <!-- /sample -->
            
            
	</div>

        <div>        
            <div id="cse" style="width: 100%;">Loading</div>
        </div>

    </div>

<!--    <footer>
        <a href="https://github.com/Laurian/PLESPER/commit/${it.root.properties["git.commit.id.abbrev"]}">version ${it.root.properties["git.commit.id.abbrev"]}</a>
    </footer>-->
    
    
    <script src="<%=prefix%>~${it.root.properties["git.commit.id.abbrev"]},script/lib/jquery-1.6.2.min,jquery.form,jquery.atmosphere,jquery.isotope,jquery-ui-1.8.14.custom,jquery.terminal-0.3.4,underscore-1.1.5,backbone-0.5.0,visualsearch,sylvester,purecssmatrix,jquery.animtrans,jquery.zoomooz,../plugins,script.js"></script>
    <script src="http://www.google.com/jsapi"></script>
    <script>
var _gaq=[['_setAccount','UA-2526475-5'],['_trackPageview'],['_trackPageLoadTime']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));

google.load('search', '1', {language : 'en'});
//var _gaq = _gaq || [];
//_gaq.push(["_setAccount", "UA-2526475-5"]);
function _trackQuery(control, searcher, query) {
var gaQueryParamName = "q";
var loc = document.location;
var url = [
  loc.pathname,
  loc.search,
  loc.search ? '&' : '?',
  gaQueryParamName == '' ? 'q' : encodeURIComponent(gaQueryParamName),
  '=',
  encodeURIComponent(query)
].join('');
_gaq.push(["_trackPageview", url]);
}
google.setOnLoadCallback(function() {
var customSearchControl = new google.search.CustomSearchControl('013519187268247392580:xfaeneoqdwu');
customSearchControl.setResultSetSize(google.search.Search.LARGE_RESULTSET);
customSearchControl.setSearchStartingCallback(null, _trackQuery);
var options = new google.search.DrawOptions();
options.setAutoComplete(true);    
customSearchControl.draw('cse', options);
hookSearch();
}, true);
    </script>
    
<!--[if lt IE 7 ]>
<script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
<script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->
</body>
</html></compress:html>