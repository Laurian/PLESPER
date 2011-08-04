	$(function(){
            
                var inc = 0;
		
		$('.hover').live('click', function(){
						$(this).toggleClass('flip');
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
                
                $('#deck').sortable({
                    handle: '.front',
                    placeholder: 'ui-state-highlight3',
                    helper: function(event, element) {
                        return $(element).clone().css({
                            '-webkit-transform': 'none'
                        });
                    },
                    start: function() {
                        $('#deck').isotope('destroy');
                        //$('.panel').css({'-webkit-perspective': 'none'});
                    },
                    stop: function() {
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
                        //$('.panel').css({'-webkit-perspective': 600});
                        
                        jsPlumb.repaintEverything();

                    }
                });
                
//                $('.panel').resizable({
//                    helper: 'ui-state-highlight2',
//                    //containment: 'parent',
//                    stop: function (event, ui) {
//                        $('#deck').isotope('reLayout');
//                    }
//                });
				
		$('.gsc-result').live('click', function(event){
			if (event.target.nodeName == "A") return;
			
			var $article = $('<article class="front"></article>');
			var $title = $('<h1></h1>')
				.text($(this).find('.gs-title').text());
			var $body = $('<div class="back"></div>')
				.text($(this).find('.gs-snippet').text());
			
			$article.append($title);
			
                        inc++;
			var $element = $('<div class="hover panel"></div>')
				.append($article).attr('id', 'e' + inc);

			$element.append($body);
			
			var $deck = $('#deck');
			$deck.isotope('insert', $element);
			
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
			
			$(this).effect('transfer', {to: $mask, className: "ui-effects-transfer"}, 500, function() {
				$mask.remove();
                                var endpointOptions = { 
                                    isSource:true, 
                                    isTarget:true,
                                    connectorOverlays: [ 
                                        //[ "Arrow", { location:0.5 } ] 
                                        [ "Label", { label:"foo", location:0.25 } ]
                                    ],
                                    anchor:[ "TopCenter","RightMiddle","BottomCenter","LeftMiddle" ]
                                };
                                var endpoint = jsPlumb.addEndpoint('e' + inc, endpointOptions);
                                var endpoint2 = jsPlumb.addEndpoint('e' + inc, endpointOptions);
			});
                        
                        $article.resizable({
                            //grid: [10, 10],
                            animate:    false,
                            animateDuration: 0,
                            helper: 'ui-state-highlight2',
                            stop: function (event, ui) {
                                $(this).parent()
                                    .width(ui.size.width)
                                    .height(ui.size.height);
                                $('#deck').isotope('reLayout');
                                jsPlumb.repaintEverything();
                            }
                        });
		});			


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
	
	// ///
	 ;(function() {
	 
	 	window.jsPlumbDemo = {
	 
	 		init : function() {			
	 
	 			var fillColor = "gray";
	 			// notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
	 			// than the curves on the first demo, which use the default curviness value.
	 			jsPlumb.Defaults.Connector = [ "Bezier", { curviness:50 } ];
	 			jsPlumb.Defaults.DragOptions = { cursor: "pointer", zIndex:2000 };
	 			jsPlumb.Defaults.PaintStyle = { strokeStyle:"gray", lineWidth:2 };
	 			jsPlumb.Defaults.EndpointStyle = { radius:9, fillStyle:"gray" };
	 			jsPlumb.Defaults.Anchors =  [ "BottomCenter", "TopCenter" ];
                                
                                
                                jsPlumb.setDraggableByDefault(false);
	 
	 			// declare some common values:
	 			var arrowCommon = { foldback:0.7, fillStyle:fillColor, width:14 };
	 			// use three-arg spec to create two different arrows with the common values:
	 			var overlays = [
	 				[ "Arrow", { location:0.7 }, arrowCommon ],
	 				[ "Arrow", { location:0.3, direction:-1 }, arrowCommon ]
	 			];
                                
                                jsPlumb.connect({source:"p1", target:"p2", overlays:overlays});
                                
	 
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
	// 
        jsPlumb.bind("ready", function() {
	 
	 	// chrome fix.
	 	document.onselectstart = function () { return false; };				
	 
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