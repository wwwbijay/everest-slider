// JavaScript Document
/*
* Name : Everest Slider 
* Description : Slides Images
* Version : 1.0.3
* Author : Bijay Joshi
* Url : www.bijayjoshi.com.np
* Last modified on : 11 January 2013
*/

/**/

var outer_wrap ='<div class="slider_outer" />'; //outer wrapper of everest slider
var inner_wrap_class ='everest_wrapper'; //div class of inner wrapper
var cl_class_prev ='prev'; //class of previous control link
var cl_class_next ='next'; //class of next control link
var class_active ='active'; //class of active page



/*Do not Modify Below this*/
(function(a){
  a.fn.everest=function(timro_opt){
	a.fn.everest.mero_opt={duration:500, delay: 2000, auto: true, pages: true, control: true, responsive: false }
	var e= a.extend({},a.fn.everest.mero_opt,timro_opt);	
	var slider_select = $(this);
	var itemwidth;
	var total= slider_select.children().length;
	var total_width; 
	var position= 0;
	var itemheight;
	//add Styles to #slider and wrap it with .everest_wrapper div
	slider_select.css({
	   position: 'absolute',
	   left: '0',
	   top: '0',
		}).wrap(outer_wrap).wrap('<div class="'+inner_wrap_class+'" />');
	slider_select.children().css({
			'float': 'left'
			});
initialize();
//coding for responsive starts
if(e.responsive){
	$('.'+outer_wrap).css('width', '100%');
	$('.'+inner_wrap_class).css('width', '100%');
	$('.'+inner_wrap_class +' img').css('width', '100%');
	initialize();
	$(window).resize(function(){
		initialize();
	});
	}
function initialize(){
		itemwidth= $('.'+inner_wrap_class).width();
		total_width= itemwidth * total;
		itemheight = slider_select.children().height();
		$('.'+inner_wrap_class).css('height',itemheight);
		slider_select.css('width',total_width);
		slider_select.children().css('width',itemwidth);
		}	
//coding for responsive ends

	

//codings for next and prev controllers
if(e.control){
	$('.'+inner_wrap_class).after('<a class="'+cl_class_prev+'">&lt;&lt; &nbsp;</a><a class="'+cl_class_next+'"> &nbsp;&gt;&gt;</a>');

//Runs following code if next link is clicked
	$('.'+cl_class_next).click(function(){
		position -= itemwidth;
		if(position < - (total_width-10)){
			position=0;
			}
		slider_select.animate({
			left: position,
			}, e.duration );
		pageState();
		});
//Runs following code if previous link is clicked
	$('.'+cl_class_prev).click(function(){
			if(position > -1){
				position= -total_width;
				}
			position += itemwidth;
				slider_select.animate({
					left: position,
					}, e.duration );
				pageState();
			});

}//control condition ends

//Codings for pages	
if(e.pages){
	$('.'+inner_wrap_class).after('<div class="pages" />');
	
	for (var i = 1; i <= total; i++) {
		$('.pages').append('<a title="'+i+'">'+i+'</a>');
		}//for loop ends
		
//when a page is clicked.
$(".pages a").click(function(){
								var pos = $(this).attr("title");
								position = -(itemwidth * (pos-1));
								if(position < - (total_width-10)){
										position=0;
										}
								slider_select.animate({
												left: position,
												}, e.duration );
								pageState();
								}); //click function ends
}//pages condition ends



//Codings for auto sliding	
	if( e.auto ){
		execute();
		}
	$('.prev,.next,.pages a').mouseenter(function(){
		slider_select.animate().stop( true, false);
		});

/*
* Description : Runs if auto sliding is true
* returns : Nothing
*/	
function execute(){
	position -= itemwidth;
		if(position < - (total_width-10)){
			position=0;
			}
		slider_select.animate({
			left: position,
			}, e.duration, execute).delay(e.delay);
		pageState();
	
	}//function execute ends

/*
* Description : finds state of pages	
* returns : Nothing
*/	
function pageState(){
				$('.pages a').removeClass(class_active);
				var child= Math.abs(position/itemwidth)+1;
				$('.pages a:nth-child('+ child +')').addClass(class_active);							 
					}		
	
	
	}//function everest ends.
})(jQuery);
	
			
	
