---
title: "@font-face support"

tags: [fonts]

image: //img-fotki.yandex.ru/get/9488/5091629.9d/0_82d8a_f3c1d233_orig.png
description: It's known that custom fonts can work in unexpected ways. If they aren't supported by the browser or device, anything at all may appear instead of the symbols. Ideally there would be nothing, but other variants are possible, up to colorful icons of unpredictable content.
---

Continuing to explore different ways of making icons, I decided to look for something about @font-face support on mobile devices.

It's known that custom fonts can work in unexpected ways. If they aren't supported by the browser or device, anything at all may appear instead of the symbols. Ideally there would be nothing, but other variants are possible, up to <a href="http://cdn.css-tricks.com/wp-content/uploads/2014/03/icon-font-fail.png">colorful icons of unpredictable content</a>. <!--more-->

You can see what a non-working font looks like in Opera Mini, for example:

<figure style="display: inline-block;">
    <figcaption>Chrome</figcaption>
    <a href="//img-fotki.yandex.ru/get/9542/5091629.9e/0_83050_af90c20f_orig"><img src="//img-fotki.yandex.ru/get/9542/5091629.9e/0_83050_af90c20f_L.png" alt="entypo.com" title="entypo.com"/></a>
</figure>  <figure style="display: inline-block;">
    <figcaption>Opera Mini</figcaption>
    <a href="//img-fotki.yandex.ru/get/9307/5091629.9e/0_8304f_e631f284_orig"><img src="//img-fotki.yandex.ru/get/9307/5091629.9e/0_8304f_e631f284_L.png" alt="entypo.com in Opera Mini" title="entypo.com in Opera Mini"/></a>
</figure>


On which devices might there be surprises with font rendering? What percentage of devices don't support custom fonts?

Short answer:

<img src="//img-fotki.yandex.ru/get/9488/5091629.9d/0_82d8a_f3c1d233_orig.png" width="500" height="376" border="0" title="@font-face support" alt="@font-face support"/>

The image is taken from this presentation: <a href="https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.g178014302_047">@font-face for icons? Compatibility research</a>

Article about testing @font-face support: <a href="http://blog.kaelig.fr/post/33373448491/testing-font-face-support-on-mobile-and-tablet">Testing @font-face Support on Mobile and Tablet</a>

One can conclude that if icons must look the same on all devices — it's better not to use a font; SVG would be a more suitable option.

A couple more useful articles on choosing between SVG and a font:

<a href="http://ianfeather.co.uk/ten-reasons-we-switched-from-an-icon-font-to-svg/">Ten reasons we switched from an icon font to SVG</a>

<a href="http://css-tricks.com/icon-fonts-vs-svg/">Inline SVG vs Icon Fonts</a>
