$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 550) {
		$("#header__nav").addClass("navbar-scroll")
	} 
	else {
		$("#header__nav").removeClass("navbar-scroll")
	}
});

// Get the container element
var btnContainer = document.getElementById("header__navItemBox");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("header__navItem");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active__link");
    current[0].className = current[0].className.replace(" active__link", "");
    this.className += " active__link";
  });
}