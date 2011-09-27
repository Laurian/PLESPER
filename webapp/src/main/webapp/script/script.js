// TODO: SLEEP THEN REWRITE ALL

$(function(){
            
    $(".panel").live('click', function(evt) {
		//alert(0);
            if (!$('html').hasClass('noScroll0')) return;
            //$('html').addClass('noScroll0');
            if (isoOn) $('#deck').isotope('reLayout');
            $(this).zoomTo({targetsize:0.75, duration:600});
            evt.stopPropagation();
			//zoomed
			$(".panel").not(this).removeClass('focus');
            $(this).addClass('focus');
    });
    
	//$(".panel").live();
	
    $(".zoom").live('click', function(evt){
		//alert(1);
        if (!$('html').hasClass('noScroll0')) {
            $('html').addClass('noScroll0');
            if (isoOn) $('#deck').isotope('reLayout');
            evt.stopPropagation();
            
			var $tile = $(this).parents('.panel');
			$tile.zoomTo({targetsize:0.75, duration:600});
			//zoomed
			$(".panel").not($tile).removeClass('focus');
			$tile.addClass('focus');
			
        } else {			
            $('html').removeClass('noScroll0');
            evt.stopPropagation();
            $("body").zoomTo({targetsize:1.0, duration:600});
            if (isoOn) $('#deck').isotope('reLayout');
        }
    });


    
    //fixme
//    $(".panel").click(function(evt) {
//            evt.stopPropagation();
//    });

    $(window).click(function(evt) {
			$(".panel").removeClass('focus');
            $('html').removeClass('noScroll0');
            $("body").zoomTo({targetsize:1.0, duration:600});
            evt.stopPropagation();
            if (isoOn) $('#deck').isotope('reLayout');
    });
    $("body").zoomTo({targetsize:1.0, duration:600});        
            
    VS.init({
      container : $('.visual_search'),
      query     : '',
      callbacks : {
        search       : function(query) {},
        facetMatches : function(callback) {
    callback([
      'account', 'filter', 'access', 'title',
      {label: 'city',    category: 'location'},
      {label: 'address', category: 'location'},
      {label: 'country', category: 'location'},
      {label: 'state',   category: 'location'},
    ]);
  },
        valueMatches : function(facet, searchTerm, callback) {
    switch (facet) {
    case 'account':
        callback([
          {value: '1-amanda', label: 'Amanda'},
          {value: '2-aron',   label: 'Aron'},
          {value: '3-eric',   label: 'Eric'},
          {value: '4-jeremy', label: 'Jeremy'},
          {value: '5-samuel', label: 'Samuel'},
          {value: '6-scott',  label: 'Scott'}
        ]);
        break;
      case 'filter':
        callback(['published', 'unpublished', 'draft']);
        break;
      case 'access':
        callback(['public', 'private', 'protected']);
        break;
      case 'title':
        callback([
          'Pentagon Papers',
          'CoffeeScript Manual',
          'Laboratory for Object Oriented Thinking',
          'A Repository Grows in Brooklyn'
        ]);
        break;
    }
  }
      }
    });
            
                $('#start button').button().click(function() {
                    document.location = document.location + './' + MD5(new Date() + '' + Math.random());
                });
                
                $("#radio").buttonset();
                
                $('#radio0').click(function() {
					$('#cse').show();
                    iso();
                });
                $('#radio3').click(function() {
					//kill search
					$('#cse').hide();
                    plumb();        
                });
		
		$('.hover').live('dblclick', function(event){
                        event.stopImmediatePropagation();
			//$(this).toggleClass('flip');
                        if (! $(this).hasClass('flip')) {
                            $(this).addClass('flip');
                        }
		});
                
                $('.panel textarea').live('blur', function() {
                    $(this).parents('.hover').removeClass('flip');
                });
					
					
		$('#deck').isotope({
                                itemSelector: '.panel',
                                masonry : {
                                    columnWidth : 10
                                },
				animationOptions: {
				    duration: 150,
				    easing: 'linear',
				    queue: false
				},
				itemPositionDataEnabled: true,
                                transformsEnabled: false
		});
                
                
//// pubsub

            var connectedEndpoint;
            var callbackAdded = false;
            var detectedTransport = null;

//            function getKeyCode(ev) {
//                if (window.event) return window.event.keyCode;
//                return ev.keyCode;
//            }

//            function getElementById() {
//                return document.getElementById(arguments[0]);
//            }

//            function getTransport(t) {
//                transport = t.options[t.selectedIndex].value;
//                if (transport == 'autodetect') {
//                    transport = 'websocket';
//                }
//
//                return false;
//            }

//            function getElementByIdValue() {
//                detectedTransport = null;
//                return document.getElementById(arguments[0]).value;
//            }

            function subscribe() {
                // jquery.atmosphere.response
                function callback(response) {
                    // Websocket events.
                    $.atmosphere.log('info', ["response.state: " + response.state]);
                    $.atmosphere.log('info', ["response.transport: " + response.transport]);

                    detectedTransport = response.transport;
                    if (response.transport != 'polling' && response.state != 'connected' && response.state != 'closed') {
                        $.atmosphere.log('info', ["response.responseBody: " + response.responseBody]);
                        if (response.status == 200) {
                            var data = response.responseBody;
                            if (data.length > 0) {
                                //$('ul').prepend($('<li></li>').text(" Message Received: " + data));
                                console.log(" Message Received: " + data);
                            }
                        }
                    }
                }

                var location = '/pubsub/' + $('body').attr('data-space');
                $.atmosphere.subscribe(location, !callbackAdded ? callback : null,
                  $.atmosphere.request = { transport: 'websocket' });
                connectedEndpoint = $.atmosphere.response;
                callbackAdded = true;
            }

            function connect() {
//                getElementById('phrase').value = '';
//                getElementById('sendMessage').className = '';
//                getElementById('phrase').focus();
                subscribe();
//                getElementById('connect').value = "Switch transport";
            }

//            getElementById('connect').onclick = function(event) {
//                if (getElementById('topic').value == '') {
//                    alert("Please enter a PubSub topic to subscribe");
//                    return;
//                }
//                connect();
//            }

//            getElementById('topic').onkeyup = function(event) {
//                getElementById('sendMessage').className = 'hidden';
//                var keyc = getKeyCode(event);
//                if (keyc == 13 || keyc == 10) {
//                    connect();
//                    return false;
//                }
//            }

//            getElementById('phrase').setAttribute('autocomplete', 'OFF');
//            getElementById('phrase').onkeyup = function(event) {
//                var keyc = getKeyCode(event);
//                if (keyc == 13 || keyc == 10) {
//
//                    var m = " sent using " + detectedTransport;
//                    if (detectedTransport == null) {
//                        detectedTransport = getElementByIdValue('transport');
//                        m = " sent trying to use " + detectedTransport;
//                    }
//
//                    connectedEndpoint.push('/api/pubsub/' + getElementByIdValue('topic'),
//                            null,
//                            $.atmosphere.request = {data: 'message=' + getElementByIdValue('phrase') + m});
//
//                    getElementById('phrase').value = '';
//                    return false;
//                }
//                return true;
//            };

//            getElementById('send_message').onclick = function(event) {
//                if (getElementById('topic').value == '') {
//                    alert("Please enter a message to publish");
//                    return;
//                }
//
//                var m = " sent using " + detectedTransport;
//                if (detectedTransport == null) {
//                    detectedTransport = getElementByIdValue('transport');
//                    m = " sent trying to use " + detectedTransport;
//                }
//
//                connectedEndpoint.push('/api/pubsub/' + getElementById('topic').value,
//                        null,
//                        $.atmosphere.request = {data: 'message=' + getElementByIdValue('phrase') + m});
//
//                getElementById('phrase').value = '';
//                return false;
//            };

             //connect();
             
             function send(message) {
                 connectedEndpoint.push('/pubsub/' + $('body').attr('data-space'),
                        null,
                        $.atmosphere.request = {data: 'message=' + message});
             }

//// pubsub
                
//TODO fix sorting                
                
//                $('#deck').sortable({
//                    handle: '.front',
//                    placeholder: 'ui-state-highlight3',
//                    helper: function(event, element) {
//                        return $(element).clone().css({
//                            '-webkit-transform': 'none'
//                        });
//                    },
//                    start: function() {
//                        $('#deck').isotope('destroy');
//                        //$('.panel').css({'-webkit-perspective': 'none'});
//                    },
//                    stop: function() {
//                        $('#deck').isotope({
//                            itemSelector: '.panel',
//                                masonry : {
//                                    columnWidth : 10
//                                },
//				animationOptions: {
//				    duration: 150,
//				    easing: 'linear',
//				    queue: false
//				},
//				itemPositionDataEnabled: true,
//                                transformsEnabled: false
//                        });
//                        //$('.panel').css({'-webkit-perspective': 600});
//                        
//                        jsPlumb.repaintEverything();
//
//                    }
//                });
                
//                $('.panel').resizable({
//                    helper: 'ui-state-highlight2',
//                    //containment: 'parent',
//                    stop: function (event, ui) {
//                        $('#deck').isotope('reLayout');
//                    }
//                });
				
		$('.gsc-result').live('click', function(event){
			if (event.target.nodeName == "A") return;
			
                        var url = $(this).find('a.gs-title').attr('href');
                        var title = $(this).find('.gs-title').text();
                        var body = $(this).find('.gs-snippet').text();
                        
                        add(url, title, body, $(this));                
		});			


                // TODO make this work with spaces
                // 
		// $('#tilda').terminal("/rpc", {
		// 			login: false,
		// 			greetings: "You are authenticated"}
		// 		);
		
		//tilda
		$.fn.tilda = function(eval, options) {
		        if ($('body').data('tilda')) {
		            return $('body').data('tilda').terminal;
		        }
		        this.addClass('tilda');
		        options = options || {};
		        eval = eval || function(command, term) {
		            term.echo("you don't set eval for tilda");
		        };
		        var settings = {
		            prompt: '>',
		            name: 'tilda',
		            //height: 100,
		            enabled: false,
		            greetings: 'Quake like console'
		        };
		        if (options) {
		            $.extend(settings, options);
		        }
		        this.append('<div class="td"></div>');
		        var self = this;
		        self.terminal = this.find('.td').terminal(eval, settings);
		        var focus = false;
		        $(document.documentElement).keypress(function(e) {
		            if (e.charCode == 96) {
		                self.slideToggle('fast');
		                self.terminal.set_command('');
		                self.terminal.focus(focus = !focus);
		            }
		        });
		        $('body').data('tilda', this);
		        this.hide();
		        return self;
		    };
		//tilda
		$('#tilda').tilda(
			function(command, terminal) {
				terminal.echo('you type command "' + command + '"');
			}
		);
		
	});
	
	// ///TODO move this
	 ;(function() {
	 
	 	window.jsPlumbDemo = {
	 
	 		init : function() {			
	 
	 			var fillColor = "gray";
	 			// notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
	 			// than the curves on the first demo, which use the default curviness value.
	 			jsPlumb.Defaults.Connector = [ "Bezier", {curviness:50} ];
	 			jsPlumb.Defaults.DragOptions = {cursor: "pointer", zIndex:2000};
	 			jsPlumb.Defaults.PaintStyle = {strokeStyle:"#268bd2", lineWidth:2};
	 			jsPlumb.Defaults.EndpointStyle = {radius:5, fillStyle:"#268bd2"};
	 			jsPlumb.Defaults.Anchors =  [ "BottomCenter", "TopCenter" ];
                                
                                
                                jsPlumb.setDraggableByDefault(false);
	 
	 			// declare some common values:
	 			var arrowCommon = {foldback:0.7, fillStyle:fillColor, width:10};
	 			// use three-arg spec to create two different arrows with the common values:
//	 			var overlays = [
//	 				[ "Arrow", {location:0.7}, arrowCommon ],
//	 				[ "Arrow", {location:0.3, direction:-1}, arrowCommon ]
//	 			];
                                
                                //jsPlumb.connect({source:"p1", target:"p2", overlays:overlays});
                                
	 
//	 			jsPlumb.connect({source:"window3", target:"window6", overlays:overlays});
//	 			jsPlumb.connect({source:"window1", target:"window2", overlays:overlays});
//	 			jsPlumb.connect({source:"window1", target:"window3", overlays:overlays});
//	 			jsPlumb.connect({source:"window2", target:"window4", overlays:overlays});
//	 			jsPlumb.connect({source:"window2", target:"window5", overlays:overlays});
	 		}
	 	};
	 
	 })();
	// 
	// ///
	// FIXME we're in DOM ready already? nope.
        jsPlumb.bind("ready", function() {
	 
	 	// chrome fix.
	 	document.onselectstart = function () {return false;};				
	 
	     // render mode
	 	var resetRenderMode = function(desiredMode) {
	 		var newMode = jsPlumb.setRenderMode(desiredMode);
	 		$(".rmode").removeClass("selected");
	 		$(".rmode[mode='" + newMode + "']").addClass("selected");
 		var disableList = (newMode === jsPlumb.VML) ? ".rmode[mode='canvas'],.rmode[mode='svg']" : ".rmode[mode='vml']"; 
	 		$(disableList).attr("disabled", true);				
	 		jsPlumbDemo.init();
	 	};
	 
	 	$(".rmode").bind("click", function() {
 		var desiredMode = $(this).attr("mode");
	 		if (jsPlumbDemo.reset) jsPlumbDemo.reset();
	 		jsPlumb.reset();
	 		resetRenderMode(desiredMode);					
	 	});
	 
	 	resetRenderMode(jsPlumb.CANVAS);
	 
	 });
         
var inc = 0; //ugly
function add(url, title, body, $transfer) {
////


    var $article = $('<div class="front"></div>');
    var $title = $('<h1></h1>')
            .text(title);
    var $body = $('<div class=text></div>')
            .text(body);

    $article.append($title)
        .append($body);
    $body.after('<a class="link" href="'+url+'" target=_new>Open original page</a>');
                        
    // TODO have this cached at filter level
    $.get('./api/article/info', {
        url:    url
    }, function(data) {
        //console.log(data);
        
//        if (data.cresponse != null) {
//            resolveReferences(data.cresponse);
//            console.log(createHierarchy(data.cresponse));
//        }
        
        if (data.response != null) {
            $title.html(data.response.title);
            
            if (data.response.html) {
                $title.after(data.response.html);
            } else if (data.response.url && data.response.type == "photo") {
                $image = $('<img src="' + data.response.url + '">');
                $image.bind('load', function() {
                if (this.clientWidth > $image.parent().width())
                    $image.css({
                        width: '100%',
                        'maximum-width': this.clientWidth
                    });
                });
                $title.before($image);
            }
            return;
        }
        
        $title.html(data.title);
            //.after(data.text);
        // $body.html(data.text);
		// para
		var para = data.text.split('\n');
		for(p = 0; p < para.length; p++) {
			var $p = $('<p></p>').text(para[p]);
			$body.append($p);
			$p.click(function() {
				$('.front menu').remove();
				var $menu = $('<menu>tweet ... <span>open</span></menu>');
				$(this).after($menu);
				
				$menu.find('span').click(function() {
					alert(1);
				});
			});
		} 

            
        if (data.image != null) {
            $image = $('<img src="' + data.image + '">');
            $image.bind('load', function() {
                if (this.clientWidth > $image.parent().width())
                    $image.css({
                        width: '100%',
                        'maximum-width': this.clientWidth
                    });
            });
            $title.after($image);
        }
//                            for (i = 0; i < data.images.length; i++) {
//                                $body.append('<img src="' + data.images[i] + '" style="width:64px">')
//                            }
    });


//<!-- sample -->         
//   <div class="hover panel" id="p1">
//       <div class="card">
//            <div class="front">
//                <img src="http://flickholdr.com/210/100/mondrian" alt="Placeholder image from flickholdr.com" />
//                <h1>long title long title long title long title long title long title long title long title long title long title long title </h1>
//                <div>
//                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis scelerisque urna quis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec venenatis sapien. Vivamus vulputate velit non elit ornare ac commodo orci venenatis. Curabitur eget mauris risus. Nunc a enim id quam congue sagittis. Phasellus ut purus a nunc eleifend porta</p>
//                </div>
//            </div>
//            <div class="back">
//                <textarea placeholder="notes…"></textarea>
//            </div>	
//       </div>
//       <div class="meta"><span class="zoom">zoom</span></div>
//   </div>
//   <!-- /sample -->

    inc++;
    var $element = $('<div class="hover panel"></div>')
            .attr('id', 'e' + inc).addClass('p'+MD5(url));
    var $card = $('<div class="card"></div>'); 
     
    $card.append($article);
    $article.after('<div class="back"><textarea placeholder="notes..."></textarea></div>');

    $element.append($card);
    $card.after('<div class="meta"><span class="zoom">zoom</span></div>');

    var $deck = $('#deck');
    $deck.isotope('insert', $element);

    // TODO without 3D transforms isotope-item-position might not be needed anymore
    var ipos = $element.data('isotope-item-position');
    var dpos = $deck.offset();

    var $mask = $('<div></div>').css({
            position: 	'absolute',
            width: 	 	'210px',
            height:	 	'210px',
            left: 		ipos.x + dpos.left, 
            top: 		ipos.y + dpos.top
    });

    $('body').append($mask);

    $transfer.effect('transfer', {to: $mask, className: "ui-effects-transfer"}, 500, function() {
            $mask.remove();
//            var endpointOptions = { 
//                isSource:true, 
//                isTarget:true,
//                connectorOverlays: [ 
//                    [ "Arrow", {location:0.5} ] 
//                    //[ "Label", { label:"foo", location:0.25 } ]
//                ],
//                anchor:[ "TopCenter","RightMiddle","BottomCenter","LeftMiddle" ]
//            };
//            var endpoint = jsPlumb.addEndpoint('e' + inc, endpointOptions);
//            var endpoint2 = jsPlumb.addEndpoint('e' + inc, endpointOptions);
    });

// FIXME
//    $element.resizable({
//        //grid: [10, 10],
//        animate:    false,
//        animateDuration: 0,
//        helper: 'ui-state-highlight2',
//        stop: function (event, ui) {
//            $(this).parent()
//                .width(ui.size.width)
//                .height(ui.size.height);
//            $('#deck').isotope('reLayout');
//            jsPlumb.repaintEverything();
//        }
//    });
////                

        $element.addSwipeEvents().
		  bind('doubletap', function(evt, touch) {
		    if (!$('html').hasClass('noScroll0')) {
	            $('html').addClass('noScroll0');
	            if (isoOn) $('#deck').isotope('reLayout');
	            evt.stopPropagation();

				var $tile = $(this);//.parents('.panel');
				$tile.zoomTo({targetsize:0.75, duration:600});
				//zoomed
				$(".panel").not($tile).removeClass('focus');
				$tile.addClass('focus');

	        } else {			
	            $('html').removeClass('noScroll0');
	            evt.stopPropagation();
	            $("body").zoomTo({targetsize:1.0, duration:600});
	            if (isoOn) $('#deck').isotope('reLayout');
	        }
		  })
}

var isoOn = true; //ugly, wrong, etc.
function iso() {
    if (isoOn) return;
    isoOn = true;
    jsPlumb.setDraggable($('.panel'), false);
    $('.panel').css({'-webkit-transform':'scale3d(1, 1, 1);'});
    $('.panel').css({'-webkit-perspective': 'none'});
    $('.panel').removeClass('ui-state-disabled');
    //$('.panel').find('canvas').css({'pointer-events': 'none'});
    
    $('#deck').isotope({
                                itemSelector: '.panel',
                                masonry : {
                                    columnWidth : 10
                                },
				animationOptions: {
				    duration: 150,
				    easing: 'linear',
				    queue: false
				},
				itemPositionDataEnabled: true,
                                transformsEnabled: false
		});
    jsPlumb.repaintEverything();
}

function plumb() {
    if (!isoOn) return;
    isoOn = false;
    $('#deck').isotope('destroy');
    $('.panel').css({'-webkit-transform': 'none '});
    $('.panel').css({'-webkit-perspective': 'none '});
    //$('.panel').find('canvas').css({'pointer-events': 'auto'});
    jsPlumb.setDraggable($('.panel'), true);
    jsPlumb.draggable($('.panel'));

    jsPlumb.repaintEverything();
    var endpointOptions = { 
                isSource:true, 
                isTarget:true,
                connectorOverlays: [ 
                    [ "Arrow", {location:0.5} ] 
                    //[ "Label", { label:"foo", location:0.25 } ]
                ],
                anchor:[ "TopCenter","RightMiddle","BottomCenter","LeftMiddle" ]
            };
    for (i = 0; i < inc; i++) {
        if ($('#e' + i).length > 0)
            jsPlumb.addEndpoint('e' + i, endpointOptions);
    }
    jsPlumb.repaintEverything();
}

// hook URLs in search
function hookSearch() {
    //var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    var urlregex = new RegExp("^(http|https|feed)\://.*$");

    var $search = $('input.gsc-search-button');
    var $query = $('input.gsc-input');
    
    $('form.gsc-search-box').submit(function(event) {
        if (urlregex.test($.trim($query.val()))) {
            event.stopImmediatePropagation();
            var url = $.trim($query.val());
            add(url, url, '', $query);
            $('div.gsc-clear-button').trigger('click');
            //$query.val(url);
        }
    });

    
    $search.click(function(event) {
        if (urlregex.test($.trim($query.val()))) {
            event.stopImmediatePropagation();
            var url = $.trim($query.val());
            add(url, url, '', $query);
            $('div.gsc-clear-button').trigger('click');
            //$query.val(url);
        }
    });

    $query.keyup(function(event) {
        if (urlregex.test($.trim($query.val()))) {
            if ($search.attr('value') != 'Search') return;
            $search.attr('value', 'Load URL').stop(true).effect("highlight", {
                color:  '#268bd2',
                mode:   'show'
            }, 3000);
        } else {
            if ($search.attr('value') == 'Search') return;
            $search.attr('value', 'Search').stop(true).effect("highlight", {
                color:  '#dc322f',
                mode:   'show'
            }, 3000);;            
        }
    });

}

