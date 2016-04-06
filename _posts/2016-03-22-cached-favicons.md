---
layout: post
title:  "Cached Favicons"
subtitle: "Favicon caching issue"
img: svg-favicon.svg
alt: favicon icon
date:   2016-03-22 06:05:00 -0600
---
Ever since I've been helping out in Open Source projects, I've been running into this annoying issue with Google Chrome caching favicons. Chrome seems to love the latest favicon that was used on localhost. And while I really like the newest Open Austin logo (seen in the image above as a favicon), unfortunately, it's not mine.

Sure, one could argue *'well, technically it's only on your localhost, right?'*. Yes, of course. But the fact remains - tiny details (or bugs?) like that can be a distraction trying to perfect your site.

At the time of this writing, I hadn't created a favicon for my new site, just yet. So here's what I did to fix it in my local environment:

<hr class="divider-magenta-full">

**1) Find the Favicon cached file**  

I searched online for where these favicons might possibly be cached. In one solution, someone posted that you can eventually find it in the `.../Chrome/Default` directory. Well, I didn't have a **default** directory on my Mac. So, I just poked around a little more and found this:

`~/library/Application Support/Google/Chrome/Profile 1/`

**2) Remove the following files**  

So, I'm not sure which file was the culprit, so I just deleted 'em both!

```
📄 Favicons
📄 Favicons-journal
```

**3) Boom!**  

Now, when you go back to the tab, you *should see* that the previously cached favicon will be replaced by a blank document icon.


