---
title: svg_fallback plugin update

tags: [svg]

image: https://img-fotki.yandex.ru/get/15589/5091629.a3/0_86697_b717911b_orig
description: "In the previous post everyone was a bit puzzled: why not detect the browser with existing approaches and why give up JS libraries? I had a reason to look for a way to do an SVG fallback without external dependencies: a solution was needed for the plugin."

links:
- href: /svg-in-ie8
  text: Pitfalls of pure SVG
- href: https://www.npmjs.org/package/svg_fallback
  text: svg_fallback (Grunt plugin)
- href: /grunt-plugin
  text: Why I wrote a Grunt plugin
---

In the previous <a href="/svg-fallback-in-ie9-and-androids2x/">post</a> everyone was a bit puzzled: why not detect the browser with existing approaches and why give up JS libraries? The questions are quite natural, but I had a reason to look for a way to do an SVG fallback without external dependencies: a solution was needed for the Grunt plugin.<!--more-->

Initial data: my Grunt plugin, which takes SVG icons and makes an IE8 fallback out of them. That is, it generates PNG and CSS files that can be used in any browsers, but only the <code>.ie8</code> class is hardcoded into the CSS. That was a quick solution that was then meant to be made more universal.

The new solution had to be not only universal but also simple. That is, the user takes the icon library, generates the files, includes them in their project and everything just works. Any external dependencies would mean the user would have to remember about them too, and also take care that the classes match the ones used in the fallback's CSS code. In my opinion, that's a so-so construction, and that's exactly why I wanted to find a CSS solution.

<a href="/svg-fallback-in-ie9-and-androids2x">The solution is found</a>, and I've already included its code in the <a href="https://www.npmjs.org/package/svg_fallback">svg_fallback</a> plugin. I'm not sure it's the best solution possible, but it's universal and it just works.

So, if you use <a href="https://www.npmjs.org/package/svg_fallback">svg_fallback</a>, update the plugin, try it, share your impressions. Also, if you know of any better solutions for this task, I'd be glad to hear about them.
