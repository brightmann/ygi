---
title: SVG plus Angular minus Firefox

tags: [svg, firefox]

image: https://img-fotki.yandex.ru/get/15538/5091629.a3/0_86805_56cc8e5e_orig
description: SVG is an amazing technology, not least thanks to its original pitfalls. A couple of fresh problems were discovered in the interaction of SVG with Angular, and they occurred only in Firefox.

---

SVG is an amazing technology, not least thanks to its original pitfalls. If you've started working with SVG, you definitely won't be bored.

A couple of fresh problems were discovered in the interaction of SVG with Angular, and they occurred only in Firefox. I decided to describe the problems and their solutions here: as a note to myself, and for the benefit of others.<!--more-->

<h2>Problem # 1.</h2>

Given: SVG icons inserted via <code>use</code> in the needed places on the page. The construct works like clockwork in all modern browsers, but then Angular comes along and changes <a href="http://www.w3.org/TR/html-markup/base.html"><code>base</code></a>. In all browsers everything works, except Firefox: in it the icons disappear, but only if the link in <code>base</code> doesn't match the current page's address.

There's even a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=652991">bug</a> about this from 2011, but the problem still exists.

Demo (view in Firefox):

<iframe class="frame--border" src="../assets/demo/svg-in-firefox/svg-no-base.html" style="width: 100%; height: 370px">
</iframe>
<a href="../assets/demo/svg-in-firefox/svg-no-base.html">Link to the demo</a>

<i>Both circles are inside one SVG; on a button click it's copied entirely. The blue circle on the left is just a shape, so you can see that the SVG has something in it at all. The red circle on the right is a symbol inserted via <code>use</code>. The symbol is declared above inside the same SVG.</i>

Solution: if you add the <code>xml:base</code> attribute to the SVG tag and set the current page's URL in it, the icons start working regardless of the link in <code>base</code>.

Check in Firefox:

<iframe class="frame--border" src="../assets/demo/svg-in-firefox/svg-has-base.html" style="width: 100%; height: 370px"></iframe>

<a href="../assets/demo/svg-in-firefox/svg-has-base.html">Link to the demo</a>

<h2>Problem # 2.</h2>

Icons rendered inside <code>ng-repeat</code> may not display on the page. The code is correct, it's on the page, but there's nothing in <code>use</code>, although the same code taken out of <code>ng-repeat</code> works perfectly.

Solution:

1. Take the contents of the <code>xlink:href</code> attribute of the <code>use</code> element.
2. Clear <code>xlink:href</code>.
3. Insert the old value into <code>xlink:href</code>.

After this the icons start displaying.

The approach is strange, but it works.

To tell the truth, both solutions look not very elegant, and everything would be much simpler if SVG in Firefox just behaved like in other browsers, but no.

If you know prettier ways to solve these problems, please tell me about them.
