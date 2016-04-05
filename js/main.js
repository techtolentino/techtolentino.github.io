document.addEventListener('DOMContentLoaded', function() {
	var navTabs = document.getElementsByClassName('header-link');

	if(window.location.href.indexOf("about") > -1) {
		navTabs[0].classList.toggle('active-tab');
	}

	if(window.location.href.indexOf("blog") > -1) {
		navTabs[1].classList.toggle('active-tab');
	}

	if(window.location.href.indexOf("work") > -1) {
		navTabs[2].classList.toggle('active-tab');
	}	

	console.log(window.location.href);
});