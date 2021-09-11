$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.load').delay(4000).fadeOut('fast');
});