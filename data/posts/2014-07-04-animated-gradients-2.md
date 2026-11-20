---
title: Animating the gradients again

tags: [animation, gradients, experiments, draw-on-css]

image: //img-fotki.yandex.ru/get/6846/5091629.a0/0_83fcf_1a481db2_orig
description: The previous solution still seems somewhat redundant to me, but then another method came to mind, this time with pseudo-elements and opacity.
---

The previous <a href="/animation-for-gradients/">solution</a> still seems a bit redundant to me, but then another method came to mind, this time with pseudo-elements and <code>opacity</code>.<!--more-->

Demo:

<p data-height="450" data-theme-id="4974" data-slug-hash="rEzbe" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rEzbe/'>Animated gradient with pseudo elements</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Working principle:

<ol>
<li>Create an element with a gradient.</li>
<li>Add a pseudo-element of the same size with a gradient, which should become the second step of the animation. Set it to <code>opacity: 0</code>.</li>
<li>By <code>:hover</code> of the parent or via <code>animation</code> we change the <code>opacity</code> of the pseudo-element to 1.</li>
</ol>

If an element has text, it will need its own wrapper to lift it above the pseudo-elements.

For example, I made buttons:

<p data-height="268" data-theme-id="4974" data-slug-hash="JoraL" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/JoraL/'>Blurry buttons with softly animated gradients</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Of course, it would be better if the gradients were simply animated, but the lack of such an option stimulates the search for new ways to circumvent the limitations.
