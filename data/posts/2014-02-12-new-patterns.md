---
title: Fresh CSS Patterns

tags: [gradients, experiments, patterns, draw-on-css]

image: //img-fotki.yandex.ru/get/9322/5091629.9b/0_7efbf_83aa6b97_L.png
description: 'I suddenly became interested in the topic of CSS patterns and made several new ones. I was interested in whether it was possible to make smooth waves and spirals, whether it would be possible to imitate a pattern from colored paper, and how to make a postage stamp without using images.'
---

I suddenly became interested in the topic of CSS patterns and made several new ones.
I was interested in: is it possible to make smooth waves and spirals, will it be possible to imitate a pattern from colored paper, and how to make a postage stamp without using images.<!--more-->

I must say that without SCSS these patterns would have been practically impossible, so Codepen with preprocessors opened new horizons for me.

No pictures were harmed during the creation of the patterns.

<b>Waves</b>. The ruffles are also made with a gradient!

<p data-height="350" data-theme-id="0" data-slug-hash="mgakB" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mgakB'>Thinking of Sea</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<b>Complex pattern</b> from a bunch of details. In my opinion, not suitable for real life:

<p data-height="350" data-theme-id="0" data-slug-hash="dezAt" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/dezAt'>Css Pattern</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Surprisingly, you can create <b>swirls</b> using gradients. I already tried to make them <a href="/gipnoshtuki/">other ways</a>, it turned out so-so, but here are full-fledged beautiful spirals. I can't believe my eyes :)

<p data-height="350" data-theme-id="0" data-slug-hash="mEakp" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mEakp'>Frosty Spirals</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<b>Colored paper:</b>

<p data-height="350" data-theme-id="0" data-slug-hash="iAerl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/iAerl'>Colored paper</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<b>Postage stamp</b>, the edges of which are made with the same gradients. In fact, it’s the reverse version of ruffles. Surprisingly simple and elegant.
I tried to do it with <code>border-image</code>, but nothing useful came out with gradients.
Pictures+<code>border-image</code> should work, I didn't try it because my goal was gradients.
The advantage of gradients in this case is that you can easily change the color and size of the curly frame, although this will require a source code in Sass.
I think it turned out great:

<p data-height="350" data-theme-id="0" data-slug-hash="GLsfA" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/GLsfA'>Postage stamp</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The gradients are incredible, I recommend getting to know them better if you haven't already.
