$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 250) {
		$("#header__nav").addClass("navbar-scroll")
	} 
	else {
		$("#header__nav").removeClass("navbar-scroll")
	}
});