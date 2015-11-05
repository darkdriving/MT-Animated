$(function() {

    $('#removeClasses').click(function(){
        $('#mt-rightRail').toggleClass('mt-slideRight');
    });

    var myButton = $('.closeBanner'),
    myBox = $('#mt-rightRail');

    myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {
        $('#mt-rightRail').removeClass('mt-slideRight');
    });

    myButton.click(function () {
        myBox.addClass('mt-slideRight mt-reverse');
        myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',

        function(e) {
            $('#mt-tippyBottom').switchClass('mt-slideUpAndOut','mt-slideDown');
        });
    });

});

/*
	The "whichTransitionEvent" can be swapped for "animation" instead of "transition" texts, as can the usage :)
*/
