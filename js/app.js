$(document).foundation({
	orbit: {
      slide_number: false,
      bullets: false,
      timer: false,
      variable_height: false
  }
});

$(function() {

	/* Remove Animation Classes Upon Initial Animation Completion */
	$('#mt-tippyTop').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		$(this).removeClass('mtSlideDown mtFade');
	});

	$('#mt-rightRail').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		$(this).removeClass('mtSlideRight');
	});

	$('#mt-inlineBanner').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		$(this).removeClass('mtFade');
	});

	$('#mt-inlineBannerZoom').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		$(this).removeClass('mtZoom');
	});


	/* Dismiss Sliding Banners */
	$('.dismissTippyTop').click(function () {
		$('#mt-tippyTop').addClass('mtSlideDown mtReverse');
		$('#mt-tippyTop').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			$(this).hide();
		});
		return false;
	});

	$('.dismissLeftRail').click(function () {
		$('#mt-leftRail').addClass('mtSlideLeft mtReverse');
		return false;
	});

	$('.dismissRightRail').click(function () {
		$('#mt-rightRail').addClass('mtSlideRight mtReverse');
		$('#mt-rightRail').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {

		});
		return false;
	});


	/* Dismiss Fading Banners */
	$('.dismissTippyTopFade').click(function () {
		$('#mt-tippyTop').addClass('mtFade mtReverse');
		$('#mt-tippyTop').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			$(this).hide();
		});
		return false;
	});

	$('.dismissInlineFader').click(function () {
		$('#mt-inlineBanner').addClass('mtFade mtReverse');
		$('#mt-inlineBanner').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			$(this).hide();
		});
		return false;
	});


	/* Dismiss Zooming Banner */
	$('.dismissInlineZoomer').click(function () {
		$('#mt-inlineBannerZoom').addClass('mtZoom mtReverse');
		$('#mt-inlineBannerZoom').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			$(this).hide();
		});
		return false;
	});






	

});
