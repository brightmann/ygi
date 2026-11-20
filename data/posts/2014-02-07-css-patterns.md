---
title: CSS patterns

tags: [gradients, experiments, patterns, draw-on-css]

image: //img-fotki.yandex.ru/get/9833/5091629.9b/0_7ef0c_63d54a5d_L.png
description: The ability to control backgrounds through CSS, combined with gradients, gives absolutely incredible possibilities. You can use gradients to draw almost anything from simple cells, stripes and circles to quite complex patterns. You can play endlessly.
---

The ability to control backgrounds through CSS, combined with gradients, gives absolutely incredible possibilities. You can use gradients to draw almost anything from simple cells, stripes and circles to quite complex patterns. You can play endlessly.

<!--more-->

The general principle is this: a gradient is created that needs to be repeated. By default, it will occupy the entire available area, but if you set the size of the background, you will get an image of the desired size that will cover the entire background of the element.
If you set the gradient values ​​as percentages or <code>em</code>, then you can easily control the size of the pattern by editing the font size and/or <code>background-size</code>.

For example, you can make simple stripes:

```css
background: linear-gradient(
  white 50%,
  transparent 50%
);
background-size: 2em 2em;
background-color: black;
```

<p data-height="300" data-theme-id="0" data-slug-hash="lcbAa" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/lcbAa'>lcbAa</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

White stripes alternate with transparency and can be placed on any background. By controlling the boundary between color and transparency, you can adjust the width of the stripes.

If you specify translucent white or black instead of white, you can get a universal pattern that will look good on any background:

<p data-height="300" data-theme-id="0" data-slug-hash="IeDAp" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/IeDAp'>IeDAp</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Using two gradients with colored translucent lines you can make a checkered tablecloth:

<p data-height="320" data-theme-id="0" data-slug-hash="qclad" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/qclad'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Using multi-colored stripes you can make small decorative elements:

<p data-height="300" data-theme-id="0" data-slug-hash="zfcjm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zfcjm'>zfcjm</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

If you need a more complex striped background, it makes sense to pay attention to the cicada principle:

- <a href="http://www.sitepoint.com/the-cicada-principle-and-why-it-matters-to-web-designers/">The Cicada Principle and Why It Matters to Web Designers</a>
- <a href="http://habrahabr.ru/post/117160/">The cicada principle and why it is important for web designers</a> (translation of the previous article)
- <a href="http://habrahabr.ru/post/148639/">The cicada principle in pure CSS</a>

The principle is to use several backgrounds of different sizes. This means that they will also dock in different places, so it will be impossible to find repeating areas or docking points in the background. In my opinion, it was a brilliant idea.

Backgrounds overlap each other from the largest (at the top) to the smallest (at the very bottom). As a result, the joints of the smallest and most repetitive will be covered by the overlying layers.

I made 4 striped backgrounds of different colors and gave them different sizes:

```css
background-size: 7em 7em, 5em 5em, 3em 3em, 1em 1em;
```

These are prime numbers, that is, those that are not divisible by anything other than themselves.

This is what the result looks like (<a href="http://cdpn.io/khprw">link to full size</a>):

<p data-height="350" data-theme-id="0" data-slug-hash="khprw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/khprw'>khprw</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Looks like magic :)

It’s also easy to get, for example, a lined notebook sheet from striped gradients:

<p data-height="350" data-theme-id="0" data-slug-hash="jBobD" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/jBobD'>jBobD</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Or in a cage:

<p data-height="350" data-theme-id="0" data-slug-hash="zkImJ" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zkImJ'>zkImJ</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

With simple lines everything is pretty clear, but what if you need a pattern of oblique lines?

<code>repeating-linear-gradient</code> should help, but in practice the gradient behaves <a href="http://cdpn.io/IBCJD">at random</a> (stretch the browser window).

<b>Upd. from 07/03/20:</b>At the moment, repeating gradients are drawn correctly in most browsers.

Let's try to make it with simple stripes rotated by 45°.

Example code:

```css
background: linear-gradient(-45deg,
  $transparent 50%,
  darkkhaki 50%, darkkhaki 60%,
  $transparent 60%
);
```

Result:

<p data-height="320" data-theme-id="0" data-slug-hash="uBdhC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/uBdhC'>uBdhC</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

In the example you can clearly see that the pattern consists of repeating squares, the gradient goes from the lower left corner to the upper right, but there is nothing in the opposite corners, and the line turns out to be broken.

To close the gaps, let's add another gradient:


```css
background: linear-gradient(-45deg,
      $transparent 50%,
      darkkhaki 50%, darkkhaki 60%,
      $transparent 60%
      ),
    linear-gradient(-45deg,
      crimson 10%,
      $transparent 10%
      );
```

I made the corner bright so that you could see where it went:

<p data-height="320" data-theme-id="0" data-slug-hash="jmeEd" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/jmeEd'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

We paint the corner in the desired color and get neat oblique lines:

<p data-height="320" data-theme-id="0" data-slug-hash="ExBcC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ExBcC'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

True, I had to slightly adjust the stopping points of the colors in the first gradient (<code>50%</code> → <code>49.9%</code>), but now the joints are not visible at all.

If instead of an angle you specify a direction with keywords, for example <code>to left top</code>, this will allow you to change the angle of the gradient by changing its size, because in this case the gradient will always be directed from one corner to another regardless of <code>background-size</code>.

Example code:


```css
background: linear-gradient(to left top,
      transparent 48.9%,
      skyblue 51%, skyblue 78%,
      transparent 80%
      ),
    linear-gradient(to left top,
      skyblue 28%,
      transparent 30%
      );
  background-size: 2em 6em;
```

The last line specifies a rectangular gradient. Thanks to the direction and percentage values ​​of the stops, you can change its size as much as you like - the angle of the lines will change, but the pattern itself will not suffer from this:

<p data-height="350" data-theme-id="0" data-slug-hash="qlCjz" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/qlCjz'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

In some cases, the edges of the lines become jagged, and their drawing depends on the browser: Chrome copes better, in Firefox steps are visible.
To make the edge smooth, you can make the junction between the colors not clear, but blurry, 1-2% wide.
You should also be aware of the problem with transparent colors in Firefox - this can be solved by using the desired shade with full transparency.

By experimenting with lines you can get other interesting patterns:

<p data-height="320" data-theme-id="0" data-slug-hash="brosh" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/brosh'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="fFJpl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/fFJpl'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="rqcHC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rqcHC'>Diamonds</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="ajJes" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ajJes'>Tablecloth</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="EHbBw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/EHbBw'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="saJtl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/saJtl'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="Etomx" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Etomx'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

However, I got carried away. You can also do interesting things with radial gradients. Here, for example, are ordinary peas:

<p data-height="320" data-theme-id="0" data-slug-hash="eolqw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/eolqw'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

In order for the gradient border to be smooth, without jagged edges, the transparency border should be made a little further than the color stopping point.
Webkit, as usual, does a better job of anti-aliasing.

Here's another example:

<p data-height="320" data-theme-id="0" data-slug-hash="muxnF" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/muxnF'>Circles and dottes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The principle of creating patterns is the same as for linear gradients. Moreover, by combining linear and radial gradients, you can get more complex ones from simple geometric shapes:

<p data-height="320" data-theme-id="0" data-slug-hash="jufvg" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/jufvg'>Hearts</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="oeksa" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/oeksa'>Drops</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

You can make quite complex patterns; for this it is best to use the capabilities of preprocessors:

<p data-height="320" data-theme-id="0" data-slug-hash="DiIBm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/DiIBm'>Waves</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="ijxKy" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ijxKy'>Circles</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The disadvantages of such patterns are usually the length and complexity of the code, as well as insufficient support by older browsers. They may require a picture.
Pros: Gradients weigh nothing, you don’t need to request them from the server, and you can easily change the colors and size of the pattern.

More patterns can be seen in the inspiring gallery from Lea Verou: <a href="http://lea.verou.me/css3patterns/">lea.verou.me/css3patterns/</a>.

Patterns tutorial from Lea Verou: <a href="http://24ways.org/2011/css3-patterns-explained/">CSS3 Patterns, Explained</a>
