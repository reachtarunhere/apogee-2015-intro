//CONFIG: 
var elementsToTrack = ["#large-header","#about","#lectures","#papers","#home","#events","#sponsors","#contact"];

var pixelOffset = -100;
var inClassName = "inViewPort";
var outClassName = "outViewPort";
//===============================================================================

//add function to see of elements exist (otherwise removing an elemnet from DOM but not from array breaks everything)
jQuery.fn.exists = function(){return this.length>0;}

//define vars out of scope
var viewPortHeight = $(window).height();
var scrollFromTop = $(window).scrollTop();
var scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));

//function for recalculating all positioning vars in scroll/resize
function recalcVars(){
	viewPortHeight = $(window).height();
	scrollFromTop = $(window).scrollTop();
	scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));
	for (var i = 0; i < elementsToTrack.length; i++) {
		if ($(elementsToTrack[i]).exists()) {
			checkInViewport(scrollFromBottom, elementsToTrack[i]);
		}
   	}
   	if($(window).scrollTop() >= 100 && $(window).scrollTop() <= 250) {
		var dif = ($(window).scrollTop() - 100)/150;
		$(".goDown").css("opacity",1-dif);
	}
}

//catch window events
$(window).resize(function(e){recalcVars();});
document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);
function ScrollStart(){recalcVars();}
function Scroll(){
	recalcVars();
}

//function that handles if an element is in the viewport or not 
function checkInViewport(scrollBottom, domElement){
	var elementPos = $(domElement).offset().top;
	var elementHeight= $(domElement).height();
	if((parseInt(scrollBottom)+parseInt(pixelOffset)) > elementPos && (elementPos+elementHeight) > $(window).scrollTop()){
		$(domElement).addClass(inClassName).removeClass(outClassName);
	} else {
		$(domElement).removeClass(inClassName).addClass(outClassName);
	}
	
}



var flag = 0;
$(document).ready(function(){
setGuestDescriptionContainerHeight();
$(".papersicon").click
(	function asd()
	{	if(flag === 1)
			return;
		flag = 1;
		var bg = $(this).css('background-image');
		content = $(this).find("p").text();
		setTimeout(function(){
		$("#flipperimage").toggleClass("rot");
		setTimeout(function(){$("#flipperimage").css('background-image',bg);},300);
		},1500);
		
		fcw = $(".flippercontent").width();
		fih = $(".flipper").height();
		$(".flippercontent").animate({height:"0px"},1000);
		//$(".flippercontent").animate({width:"0px"},1000);
		setTimeout(function(){$("#flipperdescription").text(content).hide(0)},900);
		setTimeout(function(){$("#flipperdescription").show(0)},2100);
		//setTimeout(function(){$(".flippercontent").animate({width:900+"px"},1000)},2100);
		setTimeout(function(){$(".flippercontent").animate({height:$("#flipperdescription").height()+40+"px"},1000)},2100);
		setTimeout(function(){flag = 0;},900);
	}
)
});

window.onresize = function()
{	setEventsContainerHeight();
	setLogoAnimationContainerHeight();
	setGearsAnimationContainerHeight();
	setPapersIconsContainerwidth();
	setGuestDescriptionContainerHeight();
}


