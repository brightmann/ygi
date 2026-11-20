---
title: First letter

tags: [text]

description: :first-letter is a pseudo-element representing the first character in the text.
---

<code>:first-letter</code> is a pseudo-element that represents the first character in the text.

Only works for block elements.

A limited number of properties apply to <code>:first-letter</code>:<!--more-->

<ul><li><code>float</code></li>
<li><code>width</code> (only for element with float)</li>
<li><code>margin</code></li>
<li><code>padding</code></li>
<li><code>background</code></li>
<li><code>border</code></li>
<li><code>vertical-align</code> (only to element without float)</li>
<li><code>line-height</code></li>
<li><code>text-decoration</code></li>
<li><code>text-transform</code></li>
<li><code>letter-spacing</code></li>
<li><code>word-spacing</code></li>
<li><code>font</code> properties</li>
<li><code>color</code></li></ul>

Example:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/first-letter/demo_1.html?output"></iframe>

Adding <code>float</code> "sinks" the letter into the text

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/first-letter/demo_2.html?output"></iframe>

<code>:first-letter</code> does not work if there is a picture before the text, but it works if you hide it with <code>display: none</code>:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/first-letter/demo_3.html?output"></iframe>

I liked this design option for <code>:first-letter</code>:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/first-letter/demo_4.html?output"></iframe>

<code>float</code> allows you to set the width and center alignment of the <code>:first-letter</code> text.

You can format the first character in the text in different ways, but you need to know for sure that the text will not begin with a picture.

Specification: <a href="http://www.w3.org/TR/css3-selectors/#first-letter">w3.org/TR/css3-selectors/#first-letter</a>
