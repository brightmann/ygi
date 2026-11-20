---
title: Box-sizing

tags: [layout]

description: The box-sizing property allows you to specify how box sizes behave when there are borders and margins.

links:
- href: http://www.paulirish.com/2012/box-sizing-border-box-ftw/
  text: '* { Box-sizing: Border-box } FTW'
---

The <code>box-sizing</code> property allows you to specify how box sizes behave when there are frames and margins.
Apply to elements that have specified dimensions.<!--more-->

Specification: <a href="http://www.w3.org/TR/css3-ui/#box-sizing">w3.org/TR/css3-ui/#box-sizing</a>

Possible values:

<code>content-box</code> - padding and borders are drawn outside the box box and increase its size (default).

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/box-sizing/demo_1.html?css"></iframe>


<code>padding-box</code> - frames are drawn outside the block box and increase its size, <code>padding</code> is drawn inside the element and does not affect the size. Worked only in Firefox, as of November 2018 it is no longer supported.

<code>border-box</code> - the element retains the specified dimensions, padding and frames are drawn inside the element.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/box-sizing/demo_3.html?css"></iframe>

The property is quite widely supported by browsers, in some cases prefixes are required.
More details can be found at <a href="http://caniuse.com/#feat=css3-boxsizing">caniuse.com/#feat=css3-boxsizing</a>
