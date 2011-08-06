<%@page contentType="text/html;charset=UTF-8" language="java"%><%@taglib uri="http://htmlcompressor.googlecode.com/taglib/compressor" prefix="compress"%><!-- compress:html enabled="true" removeComments="true" compressJavaScript="true" yuiJsDisableOptimizations="true" --><!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title>PLESPER (${it.properties["git.commit.id.abbrev"]})</title>

        <meta name="description" content="">
	<meta name="author" content="">

	<!-- Mobile viewport optimized: j.mp/bplateviewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Place favicon.ico and apple-touch-icon.png in the root directory: 	
	mathiasbynens.be/notes/touch-icons -->

	<link rel="stylesheet" href="${it.properties["git.commit.id.abbrev"]},style/style,jquery.terminal,smoothness/jquery-ui-1.8.14.custom.css">
        <style>

        </style>

	<script src="${it.properties["git.commit.id.abbrev"]},script/lib/modernizr-2.0.min,respond.min.js"></script>
</head>
<body>
	<div id="tilda"></div>
	<header>
            <h1>PLESPER</h1>
	</header>	
	
	<div id="page">
		
	<div id="deck">
<!--		<div class="hover panel" id="p1">
			<div class="front">
				front 1
			</div>
			<div class="back">
				back 1
			</div>			
		</div>
		<div class="hover panel" id="p2">
			<div class="front">
				front 2
			</div>
			<div class="back">
				back 2
			</div>			
		</div>-->
	</div>

	
	
	<div>
		<div id="cse" style="width: 100%;">Loading</div>
	</div>
        
	</div>
        
        <footer><a href="https://github.com/Laurian/PLESPER/commit/${it.properties["git.commit.id.abbrev"]}">version ${it.properties["git.commit.id.abbrev"]}</a></footer>
        <a href="https://github.com/Laurian/PLESPER"><img style="z-index: 1025; position: absolute; top: 0; right: 0; border: 0;" src="https://a248.e.akamai.net/assets.github.com/img/4c7dc970b89fd04b81c8e221ba88ff99a06c6b61/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub"></a>

	<script src="${it.properties["git.commit.id.abbrev"]},script/lib/jquery-1.6.2.min,jquery.isotope,jquery-ui-1.8.14.custom,jquery.terminal-0.3.4.js"></script>
	<script src="${it.properties["git.commit.id.abbrev"]},script/plugins,script.js"></script>
	
	
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
        <link rel="stylesheet" href="http://www.google.com/cse/style/look/default.css">
        <link rel="stylesheet" href="${it.properties["git.commit.id.abbrev"]},style/google.css">

<!--[if lt IE 7 ]>
<script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
<script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->
</body>
</html><!-- /compress:html -->