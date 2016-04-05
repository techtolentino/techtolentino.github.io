document.addEventListener('DOMContentLoaded', function() {
	var navTabs = document.getElementsByClassName('header-link');

	if(window.location.href.indexOf("about") > -1) {
		console.log('this is the about page');
	}

	console.log(window.location.href);
});