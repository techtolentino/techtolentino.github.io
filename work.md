---
layout: page
title: Work
permalink: /work/
---
<hr class="divider-grey">
<div class="intro">
	<h4>All in the name of learning</h4>
	<p>As a Front-End Software Developer, most of my days are spent working with full-stack front-end engineers, and we  work closely with a talented UX & visual design team.</p>
	<p>However, in my spare time, I like to spin out little apps as I'm learning/applying something new. The following projects are nowhere near close to the production level code that I work in everyday - these are more just for fun.</p>
</div>
<ul class="project-list">
	{% for project in site.projects %}
		<li class="project-card">
			<a class="project-link" href="{{ project.url | prepend: site.baseurl }}">
				<div class="project-card-item">
					<h4 class="project-title">{{project.title}}</h4>
					<img class="project-image" src="{{site.url}}/assets/{{project.image}}">
					<p class="project-subtitle">{{project.subtitle}}</p>
					<p class="project-meta">{{project.created}}</p>
				</div>
			</a>
		</li>
	{% endfor %}
</ul>