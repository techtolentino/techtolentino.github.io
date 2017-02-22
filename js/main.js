document.addEventListener('DOMContentLoaded', function() {
	var navTabs = document.getElementsByClassName('nav-list--link');

	if(window.location.href.indexOf("about") > -1) {
		navTabs[1].classList.toggle('nav-list--ACTIVE');
	} else if (window.location.href.indexOf("work") > -1) {
		navTabs[2].classList.toggle('nav-list--ACTIVE');
	} else if (window.location.href.indexOf("contact") > -1) {
		navTabs[3].classList.toggle('nav-list--ACTIVE');
	} else {
		navTabs[0].classList.toggle('nav-list--ACTIVE');
	}
});