<%@page contentType="text/html;charset=UTF-8" language="java"%><%@taglib uri="http://htmlcompressor.googlecode.com/taglib/compressor" prefix="compress"%><!-- compress:html enabled="true" removeComments="true" compressJavaScript="true" yuiJsDisableOptimizations="true" --><!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<% 
    String id = application.getAttribute("git.commit.id.abbrev").toString();
%>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title>PLESPER (<%=id%>)</title>

        <meta name="description" content="">
	<meta name="author" content="">

	<!-- Mobile viewport optimized: j.mp/bplateviewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Place favicon.ico and apple-touch-icon.png in the root directory: 	
	mathiasbynens.be/notes/touch-icons -->

	<link rel="stylesheet" href="<%=id%>,style/style,jquery.terminal,smoothness/jquery-ui-1.8.14.custom.css">
        <style>
            /*.panel {
                border: 1px dotted yellow !important;
            }*/
            .ui-state-highlight2 {
                border: 1px dotted blueviolet !important;
            }
            .ui-state-highlight3 {
                border: 1px dotted red !important;
                background-color: red !important;
                opacity:    1 !important;
            }
            #deck canvas {
                z-index: 1000;
            }
        </style>

	<script src="<%=id%>,script/lib/modernizr-2.0.min,respond.min.js"></script>
</head>
<body>
	<div id="tilda"></div>
	<header>
            <h1>PLESPER</h1>
	</header>	
	
	<div id="page">
		
	<div id="deck">
		<div class="hover panel" id="p1">
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
		</div>
	</div>

	
	
	<!-- <div id="demo">
				<div class="window" id="window1">window one</div>
				<div class="window" id="window2">window two</div>
				<div class="window" id="window3">window three</div>
				<div class="window" id="window4">window four</div>
				<div class="window" id="window5">window five</div>
				<div class="window" id="window6">window six</div>
			</div>
			<style>
			.window { 
				border:0.1em dotted #d4e06b; 
				opacity:0.8; 
				filter:alpha(opacity=80); 
				width:14em; height:4em; 
				z-index:20; 
				position:absolute; 
				color:black;
				font-family:helvetica, sans;
				padding-top:0.9em; 
				font-size:0.9em;
				text-align:center;
				background-color:white;
			}
			#window1 { left:20em;}
			#window2 { left:10em;top:12em;}
			#window3 { left:40em;top:12em;}
			#window4 { left:4em;top:24em;}
			#window5 { left:22em;top:24em;}
			#window6 { left:47em;top:24em;}
			#window7 { top:18em;left:40em;}
			#window8 { left:63em;top:32em;}
			</style> -->
	
	<div>
		
		<div id="cse" style="width: 100%;">Loading</div>
		<script src="http://www.google.com/jsapi"></script>
		<script> 
		  google.load('search', '1', {language : 'en'});
		  google.setOnLoadCallback(function() {
		    var customSearchControl = new google.search.CustomSearchControl('013519187268247392580:xfaeneoqdwu');
		    customSearchControl.setResultSetSize(google.search.Search.LARGE_RESULTSET);
		    var options = new google.search.DrawOptions();
		    options.setAutoComplete(true);    
		    customSearchControl.draw('cse', options);
		  }, true);
		</script>
		<link rel="stylesheet" href="http://www.google.com/cse/style/look/default.css">
		<link rel="stylesheet" href="<%=id%>,style/google.css">
		 
	</div>
        
	</div>

	<script src="<%=id%>,script/lib/jquery-1.6.2.min,jquery.isotope,jquery-ui-1.8.14.custom,jquery.terminal-0.3.4.js"></script>
        <script src="script/lib/jquery.jsplumb-1.3.1.js"></script>
	<script src="<%=id%>,script/plugins,script.js"></script>
	
	<script>
        // WIP
	
	
	</script>
	
	<!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
	<script>
		// var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview'],['_trackPageLoadTime']];
		// (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
		// g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
		// s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>

<!--[if lt IE 7 ]>
<script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
<script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->
</body>
</html><!-- /compress:html -->