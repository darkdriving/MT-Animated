$(function() {

    $('#removeClasses').click(function(){
        $('#mt-leftRail').toggleClass('mt-reverse');
    });

});



/* From Modernizr */
function whichTransitionEvent(){
    var t;
    var el = document.getElementById('mt-inlineBanner');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();
transitionEvent && e.addEventListener(transitionEvent, function() {
	alert('Transition complete!  This is the callback, no library needed!');
});

/*
	The "whichTransitionEvent" can be swapped for "animation" instead of "transition" texts, as can the usage :)
*/
