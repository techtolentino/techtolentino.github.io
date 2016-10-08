document.addEventListener("DOMContentLoaded", function(event) {
	if (document.URL.indexOf("about") >= 0){
		document.getElementById('navAbout').classList.add('nav--ACTIVE');
	} else if (document.URL.indexOf("blog") >= 0){
		document.getElementById('navBlog').classList.add('nav--ACTIVE');
	} else if (document.URL.indexOf("contact") >= 0){
		document.getElementById('navContact').classList.add('nav--ACTIVE');
	} else {
		document.getElementById('navHome').classList.add('nav--ACTIVE');
	}
});
