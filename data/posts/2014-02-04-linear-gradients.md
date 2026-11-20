---
title: "Linear Gradients"

tags: [gradients, draw-on-css]

image: //img-fotki.yandex.ru/get/9760/5091629.9b/0_7ee9b_73c4e981_XL.png
description: 'CSS gradients allow you to create a background of two or more colors that smoothly transition from one to another. They can be used anywhere images are used: in backgrounds, as list bullets, they can be set in content or border-image.'

links:
- href: http://www.colorzilla.com/gradient-editor/
  text: Ultimate CSS Gradient Generator
- href: http://www.webdirections.org/resources/lea-verou-mastering-css3-gradients/
  text: Presentation about gradients by Lea Verou
- href: http://leaverou.github.io/css-colors/
  text: leaverou.github.io/css-colors
- href: /tsveta
  text: Colors in Css
---

CSS gradients allow you to create a background of two or more colors that smoothly transition from one to another.
They have been with us for quite a long time, and have quite <a href="http://caniuse.com/#feat=css-gradients">good browser support</a>. Most modern browsers understand them without prefixes; for IE9 and older there is <a href="http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx">Gradient Filter</a>, and for IE9 you can use SVG.

Specification: <a href="http://www.w3.org/TR/css3-images/#gradients">w3.org/TR/css3-images/#gradients</a>.<!--more-->

Gradients can be used anywhere images are used: in backgrounds, as list bullets, they can be specified in <code>content</code> or <code>border-image</code>.

<h2 id="linear-gradient">linear-gradient</h2>

Linear gradients are quite easy to use. For the most basic gradient, just set the start and end colors:

```css
background: linear-gradient(orangered, gold);
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/linear-gradients/demo_1.html?output"></iframe>

There can be any number of colors more than two.
You can also control the direction of the gradient and the boundaries (stopping points) of the colors.

<h2 id="angle">Angle or direction of the gradient</h2>

The direction can be specified in degrees or keywords.

<b>In degrees:</b> from 0 to 360, for example <code>270deg</code>.

<b>Key words:</b>

<code>to top</code> = <code>0deg</code>;

<code>to right</code> = <code>90deg</code>;

<code>to bottom</code> = <code>180deg</code> - default value;

<code>to left</code> = <code>270deg</code>.

Keywords can be combined to create a diagonal gradient, such as <code>to top left</code>.

Below you can see how different directions work in stretching from lilac to yellow:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/linear-gradients/demo_2.html?output"></iframe>

Here is the code for the very first square, for example:

```css
.top-left {
   background: linear-gradient(to top left, purple, crimson, orangered, gold);
}
```

Keep in mind that <code>to top right</code> is not the same as <code>45deg</code>. The gradient colors are perpendicular to the gradient direction line. With <code>to top right</code> the line goes from the lower left to the upper right corner, with <code>45deg</code> - it is located strictly at this angle, regardless of the size of the figure.

The difference is clearly visible in rectangular figures:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/linear-gradients/demo_3.html?output"></iframe>

<h2 id="stop-color">Color position control</h2>

Breakpoint values ​​for gradient colors are specified in units or percentages and can be greater than 100% or less than 0%.

Examples of setting values ​​in <code>%</code>, in <code>em</code> and values ​​that go beyond the boundaries of the element:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/linear-gradients/demo_4.html?output"></iframe>

The closer the stopping points of neighboring colors are, the clearer the boundary between them will be. This way you can easily make striped backgrounds:

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/linear-gradients/demo_5.html?output"></iframe>

This is how you can create, for example, a background for a side column, stretched to the entire height of the parent element:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/linear-gradients/demo_6.html?output"></iframe>

The stripes on the sidebar background are another gradient consisting of alternating full transparency and white with 30% transparency.
Gradients with translucent colors are convenient because they can be applied over a background of any color.

The gradient in the example is set in complex, long code because the stripes should only be placed above the background for the sidebar. If you don't try to make everything the background for one block, you could solve the problem using a pseudo-element.

If there are no restrictions, the code can be much shorter:

```css
.light {
  background: peachpuff linear-gradient(90deg,
    rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .4) 50%
  ) center center / 2em;
}

.dark {
  background: steelblue linear-gradient(
    rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .2) 50%
  ) center center / 100% 1em;
}
```

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/linear-gradients/demo_7.html?output"></iframe>

In the first line we set the background color of the element, type and direction (the color and direction can be omitted), in the second line we define the colors of the gradient and the border between them, in the third we set the position and size of the resulting image. The most important part is the size. By default, the background is repeated, so the resulting pattern will fill the background of the element.
Very easy and understandable :)

The entire entry can be made in one line, but for readability it is more convenient to write in several, especially for complex gradients.

It's also important to know that the <code>transparent</code> keyword means transparent black, not transparent white, so if you use it in Firefox you might end up with something like this:

<a href="http://jsbin.com/OvOwEma/2/edit"><img src="//img-fotki.yandex.ru/get/9749/5091629.9b/0_7ee9a_ced3963c_XL.png" alt="Gradient dirt"></a>
Working example (view in Firefox): <a href="http://jsbin.com/OvOwEma/2/edit">jsbin.com/OvOwEma/2/edit</a>.

To avoid this, use completely transparent colors of the desired shade, for example, white: <code>rgba(255, 255, 255, 0)</code> or black <code>rgba(0, 0, 0, 0)</code>. You can read about different ways to set colors <a href="/tsveta">here</a>.

To find out the rgb notation of a specific color, you can use <b><a href="http://leaverou.github.io/css-colors/">leaverou.github.io/css-colors</a></b>, a tool from <a href="http://lea.verou.me/">Lea Verou</a>.

<h2 id="repeating-linear-gradient">repeating-linear-gradient</h2>

In addition to the usual <code>linear-gradient</code>, you can make a <code>repeating-linear-gradient</code> - a repeating gradient

Example code:

```css
background: repeating-linear-gradient(
  green, green .5em,
  transparent .5em, transparent 1em
);
```

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/linear-gradients/demo_8.html?output"></iframe>

Unfortunately, repeating gradients behave haphazardly and are only suitable for patterns that don't care about precision. If you need precision, use <code>linear-gradient</code> in combination with <code>background-size</code> and <code>background-repeat</code>.

<b>Upd. from 07/03/20:</b>At the moment, repeating gradients will be rendered correctly in most browsers, and you can freely use them.

<h2 id="pitfalls">Restrictions</h2>

Gradients have the same limitation as <code>box-shadow</code>: they cannot be given individual colors or direction. This leads to code duplication and an urgent need to use preprocessors when creating complex gradients.

Another limitation is that gradients are not animated, which <a href="/animation-for-gradients">can be worked around to some extent</a>.

There is a very convenient tool for quickly creating cross-browser gradients: <b><a href="http://colorzilla.com/gradient-editor/">colorzilla.com/gradient-editor/</a></b>. In addition to code for modern browsers, it will offer code for older IE and SVG for 9th.

Combined with basic background image controls, gradients give you the most flexibility to create backgrounds of varying degrees of complexity without using images at all. You can use gradients to create complex and interesting patterns, but that’s a completely different topic.
