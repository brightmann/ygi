---
title: Color wheel in CSS

tags: [experiments]

description: css-tricks.com published an interesting way to get a color wheel with CSS. The tutorial has code for SASS; I tried doing it with plain CSS and using fewer elements.

links:
- href: http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
  text: docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
- href: http://dev.w3.org/fxtf/filters/
  text: http://dev.w3.org/fxtf/filters/
- href: http://css-tricks.com/svg-filters-on-text/
  text: css-tricks.com/svg-filters-on-text/
- href: http://www.html5rocks.com/en/tutorials/filters/understanding-css/
  text: html5rocks.com/en/tutorials/filters/understanding-css/
- href: https://codepen.io/indigane/pen/lbLjs
  text: codepen.io/indigane/pen/lbLjs
---

<a href="http://css-tricks.com/">css-tricks.com</a> published an interesting way to get a color wheel with CSS: <a href="http://css-tricks.com/conical-gradients-css/">css-tricks.com/conical-gradients-css</a>.

The tutorial has code for SASS; I tried doing it with plain CSS and using fewer elements:<!--more-->

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/tsvetovoj-krug-na-css/demo_1.html?output"></iframe>

The blur in the original example is done with <code>-webkit-filter: blur(1.7em);</code>, so it will only work in Webkit-based browsers.
But you can use SVG filters and get the blur in other browsers too:

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/tsvetovoj-krug-na-css/demo_2.html?output"></iframe>
