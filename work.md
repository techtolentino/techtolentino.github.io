---
layout: default
title: Work
subtitle: Beyond the firewalls
projects:
  - name: Brickworks
    url: http://randytolentino.com/brickworks
    repo: https://github.com/techtolentino/brickworks
    description: Brickworks is a collection of commonly used classes and styles that I found myself reusing throughout multiple projects. Eventually, I decided to create my own docs and examples.
    tech: Jekyll, Scss, Sketch

---

As a software front end developer at IBM, most of the work I do is internal and sits within the company intranet. However, from time to time, I'll work on side projects, mostly for the sake of learning.

The following projects are among some of the things that I have previously worked on.

<div>	
	{% for project in page.projects %}
		<h4>{{project.name}}</h4>
			<p><a href="{{project.url}}">Demo</a> | <a href="{{project.url}}">GitHub</a></p>
		<p>{{project.description}}</p>
	{% endfor%}
</div>