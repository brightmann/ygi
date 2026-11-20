---
title: Background-blend-mode

tags: [blend-modes, patterns]

image: //img-fotki.yandex.ru/get/6728/5091629.a0/0_83425_21180cd2_orig.png
description: Blending modes in Firefox 30 or the new adventures of CSS gradients.

links:
- href: http://www.w3.org/TR/2014/CR-compositing-1-20140220/#background-blend-mode
  text: The background-blend-mode property
- href: http://blogs.adobe.com/webplatform/2014/06/12/background-blending-now-available-in-firefox-30/
  text: Background blending now available in Firefox 30
- href: http://bennettfeely.com/gradients/
  text: Gradients gallery
- href: http://dev.opera.com/articles/getting-to-know-css-blend-modes/
  text: Getting to know CSS Blend Modes
- href: /css-patterns/
  text: CSS patterns
- href: /new-patterns/
  text: Fresh CSS Patterns
- href: /3d-and-gradients/
  text: CSS gradients and 3D
- href: http://prgssr.ru/development/sekrety-rezhimov-nalozheniya.html
  text: Secrets of blending modes
- href: http://una.im/vintage-washout/
  text: CSS Image Effects
---

This week, <a href="https://developer.mozilla.org/en-US/Firefox/Releases/30">Firefox 30</a> enabled the <code>background-blend-mode</code> property by default. Thus, Firefox became the third browser to support this property (the other two are Opera and Chrome). Safari will support this feature in the next version, I couldn't find anything about IE's plans.
<!--more-->

<b>Attention:</b> all demos in the post are working examples without fallbacks. To view it, it is best to use the latest versions of Chrome, Opera or Firefox.

What does this new property do and what capabilities does it give us?

<code>background-blend-mode</code> controls the blend modes of the background layers specified in the CSS.

Example:

<p data-height="350" data-theme-id="4974" data-slug-hash="gftIl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/gftIl/'>gftIl</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>Hover over the image to see the original image.</i>

<code>background-blend-mode</code> is similar to layer blend modes in Photoshop, and the list of possible property values ​​will likely look familiar to you:

- normal
- multiply
- screen
- overlay
- darken
- lighten
- color-dodge
-  color-burn
- hard-light
- soft-light
- difference
- exclusion
- hue
-  saturation
- color
- luminosity

How does this work?

Let’s take, for example, a picture with a cat and set it as the background:


```css
background: teal url(http://placekitten.com/250/200);
```

To apply layers, it is necessary that there be more than one layer. In our case, the first layer is color (<code>teal</code>).

Now you can add a blend mode, for example:


```css
background: teal url(http://placekitten.com/250/200);
background-blend-mode: hard-light;

```

Result:

<p data-height="620" data-theme-id="4974" data-slug-hash="kGAsK" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/kGAsK/'>kGAsK</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

You can play around with the modes here or see a list of them on one page <a href="https://codepen.io/yoksel/full/Kirkd/">here</a>.

There can be more than two background layers, and for each layer you can separately set the blending mode:


```css
background: teal url(http://placekitten.com/250/200);
background-blend-mode: hard-light, multiply, normal;

```

Backgrounds can contain not only images, but also gradients, which allows you to create various interesting effects:

<p data-height="550" data-theme-id="4974" data-slug-hash="mJohl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mJohl/'>mJohl</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

How can I use <code>background-blend-mode</code>?

Suppose you have a website in a certain color scheme, and you need to place several pictures in the design:

<p data-height="650" data-theme-id="4974" data-slug-hash="AyLEs" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/AyLEs/'>background-blend-mode for usage in design</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

So the pictures don’t really fit into the color scheme. Previously, in order to tint images to match the color of the site, you would need to open a graphics editor and do this operation with each picture, but now this can be done in one line:


```css
background-blend-mode: luminosity;
```

Result:

<p data-height="650" data-theme-id="4974" data-slug-hash="yCHuJ" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/yCHuJ/'>background-blend-mode for usage in design</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The method has its advantages:

1. Saves time - no need to manually color the pictures used in the design. Blending modes are especially useful in prototyping, when images are likely to change.
2. Allows you to easily create an effect where, when hovering, the picture is shown in its original color. In this case, you do not need to prepare two images and change them when you hover the cursor - one is enough.

And if the site’s color scheme later changes, you won’t need to recolor the pictures to match the new scheme—everything will happen by itself:

<p data-height="650" data-theme-id="4974" data-slug-hash="BuHLE" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/BuHLE/'>background-blend-mode for usage in design</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

True, I was not able to make a smooth change of blending modes. As far as I understand, they are not animated. But this can be bypassed using pseudo-elements: via <code>:before</code> a duplicate layer with the same image is created, and its transparency changes upon hover - this can be done smoothly (example on the right):

<p data-height="400" data-theme-id="4974" data-slug-hash="FCLHx" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/FCLHx/'>FCLHx</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Another way to color a picture in a design is to add a striped gradient:

<p data-height="650" data-theme-id="4974" data-slug-hash="ngjFd" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ngjFd/'>background-blend-mode for usage in design</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

A nice bonus of <code>background-blend-mode</code> is smooth degradation: if the browser does not support blend modes, the visitor will see a regular picture. It may not fit well into the color scheme, but it's better than nothing.

Interestingly, in some modes the result differs depending on whether the picture is superimposed on a color or a color on top of a picture (on the left is a picture on top of a color, on the right is the opposite):

<p data-height="550" data-theme-id="4974" data-slug-hash="rLygi" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rLygi/'>Is it matter color on top or image on top?</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Overlaying color on an image allows you to get more interesting results, similar to color filters, but this option is worse in terms of degradation, because if the modes do not work, the top layer will be displayed on the page - that is, the color fill.

With images, everything is more or less clear, but for CSS gradients, blending modes truly open up new horizons. Now gradient layers can not only appear underneath each other in areas of full or partial transparency, but they can also interact with underlying layers to form new combinations. Making such gradients is certainly more difficult, but also more interesting.

There is already a first gallery with examples: <a href="http://bennettfeely.com/gradients/">bennettfeely.com/gradients/</a>. Below on the page you can find a JS fallback and weighting of the same gradients made in CSS or in the form of images in various formats. CSS wins, of course.

And even if not all browsers yet allow you to use <code>background-blend-mode</code>, it makes sense to ask which of the images you use can already be replaced with CSS patterns in order to gain weight and performance.

Inspired by the examples from the gallery, I decided to see what else could be done. One of the fun discoveries is a chessboard:

<p data-height="350" data-theme-id="4974" data-slug-hash="aKbjw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/aKbjw/'>Easy way to make chess-board : )</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Without blending modes, making such cells is a little puzzling (although you can get many others based on such a gradient). With modes, cells are made from only two gradients; a third one will be needed if the cells should not be black and white, but colored.

True, the pattern does not always lend itself well to repainting; this is some drawback of the method. On the other hand, in this case, the cells can be filled not only with color, but also with a gradient, which would not be very convenient to do in the previous method.

A few more gradients:

<p data-height="350" data-theme-id="4974" data-slug-hash="HkJtq" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/HkJtq/'>Playing with background-blend-mode</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="IECap" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/IECap/'>Grassy waves</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="DGKvA" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/DGKvA/'>Playing with background-blend-mode</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="eglhn" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/eglhn/'>Sunny</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="aoikj" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/aoikj/'>Rainbow eyes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="sejrl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/sejrl/'>Lightblue</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="LvIrj" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/LvIrj/'>Rainbow cells</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="cflrn" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/cflrn/'>Water</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="vbwKF" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/vbwKF/'>vbwKF</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="xitbD" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/xitbD/'>Red</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="fDpwL" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/fDpwL/'>Radial gradients + background-blend-mode</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="wCeDt" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/wCeDt/'>The Cicada background + background-blend-modes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

You can edit any of them by turning off blending modes and see what changes (and also see how the patterns look in browsers without property support), you can try swapping modes, entering your own values ​​or changing the background color. Sometimes in the process of such experiments several more patterns are obtained from one pattern.

<code>background-blend-mode</code> looks very attractive, allowing you to add a little Photoshop magic to your usual CSS.
