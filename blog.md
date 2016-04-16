---
layout: page
title: Blog
permalink: /blog/
---
<hr class="divider-magenta">
<div class="intro">
	<h4>I've always been a writer</h4>
	<p>It has always been that way. From winning that Reading Rainbow poetry competition back in '88, to the years I spent documenting life with lyrics as the medium of choice, I've always felt like my <em>pen game</em> was, if not strong, at least existent because of passion.</p>
	<p>This new collection of writing is a dedicated space to expand on something I love, maybe something new that I learn, something that frustrates me, or all of the above (like code!).</p>
</div>
<ul class="post-list">
	{% for post in site.posts %}
		<li class="post-card">
			<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
				<div class="post-card-item">
					<h4 class="post-card-title">{{ post.title }}</h4>
					<img class="post-card-img" src="{{site.url}}/assets/{{post.img}}">
					<p class="post-subtitle">{{ post.subtitle }}</p>
					<p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
				</div>
			</a>
		</li>
	{% endfor %}
</ul>