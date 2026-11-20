---
title: CSS and SVG masks

tags: [svg, masks]

image: //img-fotki.yandex.ru/get/9802/5091629.9d/0_80ea0_df30236f_L.png
description: 'There are several ways to clip an element to a mask. Some are supported by all modern browsers, others are supported very poorly and cannot yet be used. In some methods, the mask can be text. Technologies used: CSS, SVG + CSS, pure SVG.'

excerpt: <p>There are several ways to crop an element using a mask. Some are supported by all modern browsers, while others are poorly supported and cannot yet be used. In some methods, the mask can be text.</p>

customCSS: css-and-svg-masks.css
include: /assets/img/svg/css-and-svg-masks.svg

links:
- href: http://www.html5rocks.com/en/tutorials/masking/adobe/
  text: CSS Masking
- href: http://thenittygritty.co/css-masking
  text: CSS Masks – How To Use Masking In CSS Now
- href: https://developer.apple.com/library/safari/documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html
  text: Using Masks
- href: http://tympanus.net/codrops/2013/12/02/techniques-for-creating-textured-text/
  text: Techniques for Creating Textured Text
- href: http://lea.verou.me/2012/05/text-masking-the-standards-way/
  text: Text masking — The standards way
---

While understanding the design possibilities of SVG, I became interested in the theme of masks.

It all started with this experiment:<!--more-->

<p data-height="450" data-theme-id="4974" data-slug-hash="xmshn" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/xmshn/'>SVG gradients for text</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Google font is used for the inscription, the fill is made with a pattern with gradients, and the inscription does not cease to be text - it can be selected and copied!

<i>It should be noted here that it would be much easier to use just a gradient as a fill, without wrapping it in a pattern, but for this it was necessary to set the <code>spreadMethod="repeat"</code> property to the gradient so that it would repeat, and in Firefox in this case the gradient would break for some reason.</i>

I looked at the support for this demo in different browsers, remembered about <code>-webkit-background-clip: text</code>, which is only supported in webkits, and decided to see what else was interesting in this direction.

There are several ways to clip an element to a mask. Some are supported by all modern browsers, others are supported very poorly and cannot yet be used. In some methods, the mask can be text.

Technologies used:

* <b>CSS</b> - the mask is created in CSS and applied to HTML elements;
* <b>SVG + CSS</b> - SVG mask is applied to HTML elements using CSS;
* <b>SVG</b> - The SVG mask is applied to SVG elements. Using CSS, but the key here is that both the mask and the masked element are SVG.

The best browser support is for masks made entirely in SVG.

It's not that I studied the issue in depth - I wanted to see all the methods in one place and with information about browser support, so I made <a href="https://codepen.io/yoksel/full/fsdbu/">this demo</a> - with code examples and links to the specifications.

All methods are presented in it as is - without fallbacks, so you can open the page in the browser you are interested in and see how it supports the method you need. I really hope that one day we will see all masks working in all modern browsers.

Masks come in different types: some allow you to clip an element along a vector shape (path) - <code>clip</code>, <code>clip-path</code>, others focus on the brightness of colors or the alpha channel of the image - <code>mask</code> and <code>mask-image</code> - these methods allow you to get a mask with blurred edges.
You can use text as a mask in SVG <code>clip-path</code>, SVG <code>mask</code>, <code>-webkit-background-clip</code> and SVG <code>fill</code>. The latter is not a mask in the literal sense of the word, but the result looks like <code>-webkit-background-clip</code>, and is supported by all modern browsers.

You can find all the masks on <a href="https://codepen.io/yoksel/full/fsdbu/">demo page</a>, but I will only talk about the most well-supported ones - of course, they are all in SVG.
All examples in the post are live demos, not screenshots.

<h2 id="svg-clip-path">SVG clip-path for SVG elements</h2>

<a href="http://www.w3.org/TR/SVG11/masking.html#EstablishingANewClippingPath">Specification</a>

<code>clipPath</code> allows you to use a vector mask of any shape.
Using SVG <code>clipPath</code> for HTML elements is only supported in Firefox, but if you transfer the markup to SVG, the mask will work in all modern browsers.

Shapes within <code>clipPath</code> can be combined to create more complex ones, and <code>clipPath</code> can also use text. The text used in <code>clipPath</code> cannot be selected and copied, while the text of the element being clipped can be, however, it is copied in a strange way.

<svg width="200" height="190">
  <g class="g--clip-path-img">
  <image xlink:href="//img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300" />
  </g>
</svg>

<svg width="450" height="190">
<g class="g--clip-path-text">
  <foreignObject data-id="fo-text" x="0" y="4" width="450" height="200">
  Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget adipiscing magna. Nunc massa justo, placerat at porta at, mollis nec eros. Nullam eu justo erat. Curabitur eget rhoncus purus, interdum posuere ligula. Ut ultricies fermentum dignissim. Aliquam et arcu tempus, euismod nisi eu, lobortis est. Integer ultrices aliquet enim eu ultrices. Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget adipiscing magna. Nunc massa justo, placerat at porta at, mollis nec eros. Nullam eu justo erat. Curabitur eget rhoncus purus, interdum posuere ligula. Ut ultricies fermentum dignissim. Aliquam et arcu tempus, euismod nisi eu, lobortis est. Integer ultrices aliquet enim eu ultrices.
</foreignObject>
</g>
</svg>

<b>SVG:</b>

```html
<!-- Путь обрезки с полигоном -->
<clipPath id="clipping">
  <polygon points="98.4999978 153.75..."/>
</clipPath>

<!-- Путь обрезки с текстом -->
<clipPath id="clipping-text">
  <text x="0" y=".88em">Text</text>
</clipPath>
```

<b>CSS:</b>

```css
/* Для текстовой маски можно задать параметры шрифта */
#clipping-text {
  font: bold italic 15em/1 Georgia;
}

/* Применение маски */
.item {
  clip-path: url(#clipping);
}
```

<h2 id="svg-mask-in-svg">SVG mask for SVG elements</h2>

<a href="http://www.w3.org/TR/SVG11/masking.html#Masking">Specification</a>

SVG <code>mask</code> allows you to specify an element or combination of elements that will act as an alpha or brightness mask. SVG <code>mask</code> for HTML elements is also only supported in Firefox, but works everywhere when you transfer the markup to SVG.

Shapes can serve as a mask, and the degree of transparency depends on the brightness of the fill color (light colors are transparency, dark colors are opacity). The shapes declared below in the code clip the layers above them.
You can also use images as a mask.

SVG <code>mask</code> (as opposed to <code>clipPath</code>) allows you to make a mask with blurred edges.

<svg width="200" height="300">
  <g class="g--svg-mask-svg">
    <image xlink:href="//img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300"/>
  </g>
</svg>

<svg width="200" height="300">
<g class="g--svg-mask-svg-soft">
  <image xlink:href="//img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300"/>
</g>
</svg>

<svg width="200" height="300" >
<g class="g--svg-mask-svg-lum">
  <rect y="0"  width="200" height="300" fill="url(#ymc-gradient)"/>
</g>
</svg>

<b>SVG:</b>

```html
<!-- Маска с сочетанием градиентов и фигур -->
<mask id="masking" maskUnits="objectBoundingBox">
  <!-- Фигура с полосатым градиентом -->
  <rect y="0" width="1" height="1" fill="url(#gradient)" />
  <!-- Круги -->
  <circle cx=".5" cy=".5" r=".4" fill="gray" />
  <circle cx=".5" cy=".5" r=".3" fill="white" />
  ...
</mask>

<!-- Маска из картинки -->
<mask id="masking-lum" maskUnits="objectBoundingBox"
  x="0" y="0">
  <image xlink:href="АДРЕС КАРТИНКИ" width="200" height="300" />
</mask>
```

<b>CSS:</b>

```css
.item {
  mask: url(#masking);
}
```

<h2 id="svg-fill">SVG fill</h2>

<a href="http://www.w3.org/TR/SVG/painting.html#FillProperties">Specification</a>

<code>fill</code> is a fill, not a mask, but it allows you to simulate masks quite well. The fill can be a color, gradient or pattern.

A pattern (<code>pattern</code>) is an SVG element. You can put anything in it and then use the contents of the container as a repeating background. In it you can create a pattern <a href="https://codepen.io/yoksel/full/bwDzx">from other SVG elements</a>, and also wrap a picture or text in it.

True, there are some difficulties with the text: in SVG, the text cannot be transferred by itself. To make text with hyphens, as in regular HTML, it needs to be wrapped in <code>foreignObject</code>, but filling with such a pattern <a href="https://codepen.io/yoksel/full/BidHq">does not work</a>, although in <a href="http://www.w3.org/TR/SVG11/pservers.html#Patterns">the spec for the pattern</a> it is written that <code>foreignObject</code> can be inserted into a pattern.

So, to fill with text, you need to insert it through the <code>text</code> tag, and wrap each line in <code>tspan</code> and set it to the desired position. The method is cumbersome, but it works.

Using pictures as a pattern, you can get inscriptions with any texture that your imagination suggests. Moreover, the method will work in all modern browsers, unlike <code>-webkit-background-clip: text</code>, so much less fallbacks will be required.

Actually, text without a fill, but with a textured stroke, can also be created: in this case, the pattern should be set to the <code>stroke</code> property.

The examples are made for text, but <code>fill</code> and <code>stroke</code> work exactly the same for shapes.

When you use a text fill, the text is still text: it can be selected and copied (try the examples below), and you can set the size and font.

<svg width="380" height="140">
<g class="g--svg-fill">
  <text x="0" y=".78em">Text</text>
</g>
</svg>

<svg width="380" height="130">
<g class="g--svg-fill-text">
  <text x="0" y=".75em">Text</text>
</g>
</svg>

<svg width="380" height="130">
<g class="g--svg-stroke">
  <text x="0" y=".75em">Text</text>
</g>
</svg>

<b>SVG:</b>

```html
<!-- Паттерн с картинкой -->
<pattern id="pattern" patternUnits="userSpaceOnUse"
  width="200" height="300" viewbox="0 0 200 300">
  <image xlink:href="YOUR IMAGE" width="200" height="300" />
</pattern>

<!-- Паттерн с текстом -->
<pattern id="pattern-text" patternUnits="userSpaceOnUse"
  width="450" height="95">
  <text x="0" y="0">
    <tspan x="0" y="1em">Nam tristique vestibulum
        nulla nec accumsan...
    </tspan>
    ...
  </text>
</pattern>
```

<b>CSS:</b>

```css
/* Заливка с паттерном */
text {
  fill: url(#pattern);
}

/* Обводка с паттерном */
text {
  stroke: url(#pattern);
  fill: none;
}
```

<b>Important clarification:</b> in Firefox and old Opera, links like <code>mask: url(#masking);</code> do not work if the page with SVG gradients, patterns and masks is in one directory, and CSS is in another. This can be treated by specifying the full path from the root of the site, for example <code>mask: url(/page-url/#masking);</code>, so that browsers know where exactly to look for an element with this ID.
Thanks to <a href="https://twitter.com/legomushroom">legomushroom</a> for pointing out the problem.

SVG capabilities allow you to make a wide variety of masks and use them in a variety of ways, and they have very good browser support. When you consider that many SVG properties can be animated using JS, the prospects open up very interesting.
