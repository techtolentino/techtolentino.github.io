document.addEventListener('DOMContentLoaded', function() {
	var navTabs = document.getElementsByClassName('header-link');

	if(window.location.href.indexOf("about") > -1) {
		navTabs[0].classList.toggle('active-tab-blue');
		
	}

	if(window.location.href.indexOf("blog") > -1) {
		navTabs[1].classList.toggle('active-tab-magenta');
	}

	if(window.location.href.indexOf("work") > -1) {
		navTabs[2].classList.toggle('active-tab-grey');
	}	

	console.log(window.location.href);
});