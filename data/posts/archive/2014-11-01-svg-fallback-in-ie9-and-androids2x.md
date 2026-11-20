---
title: A CSS trick for SVG support in old browsers

tags: [svg]

image: https://img-fotki.yandex.ru/get/6734/5091629.a3/0_86377_63bd7b1e_orig
description: "There is a solution for replacing inline SVG with background images in browsers where inline SVG is not supported. It is built on the assumption that the page has the class .ie8 we need, by which background images are enabled for SVG elements. I became curious: is it possible to provide support for the approach in all old browsers using only CSS?"

links:
- href: http://pauginer.com/post/36614680636/invisible-gradient-technique
  text: "The invisible gradient technique: Cross-browser support for SVG (with image fallback) using CSS"
- href: /svg-in-ie8
  text: Rakes on pure SVG
- href: https://www.npmjs.org/package/svg_fallback
  text: svg_fallback (plugin)
- href: /grunt-plugin
  text: Why I wrote a Grunt plugin
- href: http://blogs.telerik.com/kendoui/posts/12-02-17/using_svg_on_android_2_x_and_kendo_ui_dataviz
  text: Using SVG on Android 2.x

---
An interesting question came up for me once. There is a <a href="https://www.npmjs.org/package/svg_fallback">solution</a> for replacing inline SVG with background images in browsers where inline SVG is not supported. It is built on the assumption that the page has the class <code>.ie8</code> we need, by which background images are enabled for SVG elements.

The obvious drawback of the approach is that we have to separately take care of the presence of the class we need — when generating the page on the server, or by detecting the browser with JS.

<!--more-->

The second obvious drawback is that the approach doesn't work for other browsers without inline SVG support, for example Opera Mini and Android 2.x.

I became curious: is it possible to provide support in all old browsers using only CSS?

And it seems I found a solution. It's strange, but it works. I was interested in whether it works in the following browsers:

* IE8 and 9
* Android 2.x
* Opera 12, Opera Mini

It was tested on this construct:

 SVG:

```html
<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon">
  <circle r="55" cx="50%" cy="50%" fill="yellowgreen"/>
  <text x="50%" y="50%" dy=".4em" text-anchor="middle"
      style="font: 38px/1 Trebuchet MS; fill: #FFF">SVG</text>
</svg>
```

CSS:


```css
.svg-icon {
  display: inline-block;
  margin: 3em 2em;
  width: 180px;
  height: 130px;
  background: url(https://img-fotki.yandex.ru/get/5807/5091629.a3/0_86371_b2660de0_orig)
        no-repeat center center;
  border: 1px solid #555;
}
```

If the browser doesn't support SVG, we will see only this background image:

<img src="https://img-fotki.yandex.ru/get/5807/5091629.a3/0_86371_b2660de0_orig"/>

If it does — both the background and the SVG. If you're viewing the page in a modern browser, the demo will show you exactly this variant:

<p data-height="350" data-theme-id="4974" data-slug-hash="sbzEp" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/sbzEp/'>Test support of SVG fallback</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<i>Actually, in browsers without SVG support the text "SVG" will also be visible, but in real life that's unlikely to be a problem, unless you put text inside icons.</i>

The task is to remove the background in browsers with SVG support.

Pictures for clarity:

<img src="https://img-fotki.yandex.ru/get/6734/5091629.a3/0_86377_63bd7b1e_orig" class="vlm"/> — this is what the demo looks like now

<img src="https://img-fotki.yandex.ru/get/6828/5091629.a3/0_86372_1655bbc0_orig.png" class="vlm"/> — this is how it should look in browsers without SVG support

<img src="https://img-fotki.yandex.ru/get/2914/5091629.a3/0_86378_6105ccc8_orig" class="vlm"/> — and this is how it should look in browsers where SVG is supported

That is, by default the PNG placeholder is always shown, and it needs to be hidden only in modern browsers. We need some CSS construct whose support across browsers coincides with SVG support.

The first variant that comes to mind is multiple backgrounds, for example:


```css
background: none, none;
```

A good variant, but Android 2.x browsers understand multiple backgrounds and don't understand SVG, so with this approach the page in them will have neither one nor the other.

Link for testing: <a href="https://codepen.io/yoksel/full/FirKg">https://codepen.io/yoksel/full/FirKg</a>.

The next idea is to remove the background using an <a href="http://pauginer.com/post/36614680636/invisible-gradient-technique">invisible gradient</a>.

Approximate code:


```css
background: linear-gradient(transparent, transparent);
```

The approach works everywhere needed, except IE9 — it doesn't understand gradients, so both the SVG and the background will be displayed in it.

Link for testing: <a href="https://codepen.io/yoksel/full/fxCzH">https://codepen.io/yoksel/full/fxCzH</a>.

Some solution is needed that removes the background in IE9 and breaks nothing in the rest.

I couldn't find anything suitable among the CSS properties for <a href="http://caniuse.com/#search=background">controlling backgrounds</a>, but something interesting unexpectedly turned up in the <a href="http://caniuse.com/#search=viewport%20units">units of measurement</a>.

If you use viewport units — <code>vw</code> or <code>vh</code> — to control the size or position of a background, Android 2.x browsers and Opera Mini will completely ignore the property containing them. That is, you can write:


```css
background-position: -1000vh 0;
```

and this code will remove the background image in IE9.

Not all browsers understand viewport units, so the final version of the code needs to combine the last two approaches:


```css
/* современные браузеры кроме IE9 */
background: linear-gradient(transparent, transparent);
 /* IE9 */
background-position: -1000vh 0;
```

Demo:

<p data-height="350" data-theme-id="4974" data-slug-hash="tKzeB" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/tKzeB/'>Test support of SVG fallback</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Link for testing: <a href="https://codepen.io/yoksel/full/tKzeB">codepen.io/yoksel/full/tKzeB</a>

I may have missed something, but at the moment my tests show that this approach works.

Browsers where I tested:

* IE8 and 9
* Android 2.3
* Opera 12, Opera Mini

To test in Android 2.3 I used <a href="http://www.browserstack.com/screenshots">browserstack.com/screenshots</a>, choosing the Samsung Galaxy S2 there. I'd be grateful if someone tests on a real device and reports the results.

In general, if you have the opportunity to test the <a href="https://codepen.io/yoksel/full/tKzeB">demo</a> on devices where inline SVG might be a problem — please check and report how it goes; this approach currently needs thorough testing.

Let's hope that old devices will gradually sink into oblivion and we won't have to invent such strange solutions at the intersection of magic and CSS anymore.
