---
title: SVG patterns

image: https://img-fotki.yandex.ru/get/198569/5091629.a4/0_91d26_40a60240_orig
description: 'pattern is an element that can be used as a fill or a stroke. A pattern can contain all kinds of content: shapes, symbols, text or raster images — in any combination.'

tags: [svg, patterns]

links:
- href: http://www.w3.org/TR/SVG/pservers.html#Patterns
  text: Patterns
- href: https://codepen.io/collection/AyaLRg
  text: A collection of SVG pattern demos
---

<code>pattern</code> is an element that can be used as a fill or a stroke. A pattern can contain all kinds of content: shapes, symbols, text or raster images — in any combination.
<!--more-->

The simplest code example looks like this:

```html
<pattern id="pattern"
  width="100%" height="100%">
  ...
</pattern>
```

Besides <code>id</code>, without which the pattern can't be applied to an element, you must specify the pattern's width and height, because by default both values equal zero (and the pattern won't be displayed).

Let's add some content to the pattern, for example this circle:

<svg class="svg" width="300" height="200">
  <circle r="30%" cx="50%" cy="50%"
    fill="crimson"/>
</svg>

```html
<pattern id="pattern"
  width="100%" height="100%">
  <circle r="30%" cx="50%" cy="50%"
    fill="crimson"/>
</pattern>
```

A pattern on its own is not displayed on the page. To see the pattern in action, you need to apply it to a shape; this can be done, for example, with the <code>fill</code> attribute:

```html
<polygon fill="url(#pattern)"
  points="85,0 170,61 137,161 32,161 0,61"/>
```

Or the same via CSS:

```css
polygon {
  fill: url(#pattern);
}
```

The result:

<p data-height="380" data-theme-id="4974" data-slug-hash="WoNQpZ" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" data-pen-title="WoNQpZ" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/WoNQpZ/">WoNQpZ</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<i>The main examples will show patterns used as fills, but they can also be used <a href="https://codepen.io/yoksel/pen/ZBeNLQ">in strokes</a>, in which case the pattern is set in the <code>stroke</code> property.</i>

We can see that the circle with center coordinates <code>50% 50%</code> sits in the middle of the SVG image, not in the middle of the shape with the pattern; it's also obvious that the radius <code>30%</code> is calculated relative to the whole image, not relative to the shape being filled. This behavior is not always desirable, and it can be changed with the attributes described below.

This is the simplest pattern variant; it works when you need, for example, to simply fill a shape with an image:

<p data-height="380" data-theme-id="4974" data-slug-hash="ObJOLM" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" data-pen-title="ObJOLM" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/ObJOLM/">ObJOLM</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

For more complex cases you need to properly understand the pattern's other properties.

<h2 id="pattern-units">patternUnits</h2>

This attribute sets the coordinate system for the pattern's outer dimensions, that is, it affects the <code>x</code>, <code>y</code>, <code>width</code> and <code>height</code> attributes.

Possible values:

<code>userSpaceOnUse</code> — the coordinate system of the parent SVG element is used. With this value, sizes and coordinates can be set both in percentages and in units of the current coordinate system;

<code>objectBoundingBox</code> — the coordinate system of the element the pattern is applied to is used. With this value, sizes and coordinates can be set in percentages or in values from 0.0 to 1.0.

By default <code>patternUnits</code> uses the value <code>objectBoundingBox</code>.

<p data-height="550" data-theme-id="4974" data-slug-hash="ORKNMy" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern sizes" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/ORKNMy/">patternUnits and pattern sizes</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h2 id="pattern-content-units">patternContentUnits</h2>

<code>patternContentUnits</code> defines the coordinate system for the pattern's content. <strong>Important:</strong> if the pattern is given a <code>viewBox</code>, this attribute won't work.

Possible values:

<code>userSpaceOnUse</code> — the coordinate system of the parent SVG element is used. With this value, sizes and coordinates can be set both in percentages and in units of the current coordinate system;

<code>objectBoundingBox</code> — the coordinate system of the element the pattern is applied to is used. With this value, sizes and coordinates can only be set in numbers from 0.0 to 1.0. Percentage values won't work here, because they behave very strangely (<a href="https://codepen.io/yoksel/details/yVyJxj#comment-id-162085">you can read more about it here</a>).

By default <code>patternContentUnits</code> uses the value <code>userSpaceOnUse</code>.

<p data-height="550" data-theme-id="4974" data-slug-hash="zoxYjy" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternContentUnits and pattern content" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/zoxYjy/">patternContentUnits and pattern content</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h2 id="pattern-transform">patternTransform</h2>

This attribute lets you add a transformation to the pattern.

By default in SVG the transform origin (<code>transform-origin</code>) sits in the top left corner of the SVG element. For rotation (<code>rotate</code>) you can set the transform origin along with the rotation angle; it looks roughly like this:

```html
patternTransform="rotate(45, 250, 150)"
```

The first number is the rotation angle, the second and third are the coordinates of the rotation center.

In this code the coordinates are given in units of the current coordinate system; this will work with <code>patternUnits="userSpaceOnUse"</code>. When using <code>patternUnits="objectBoundingBox"</code>, coordinates must be given in relative values in the range from 0.0 to 1.0, and the transform code in that case should look like this:

```html
patternTransform="rotate(45, .5, .5)"
```

This should work, but it doesn't, as you can see in the demo below (drag the slider):

<p data-height="550" data-theme-id="4974" data-slug-hash="bBdMJK" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternTransform (and bug with transform-origin)" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/bBdMJK/">patternTransform (and bug with transform-origin)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<a href="https://codepen.io/yoksel/full/mOJaOE">Experiments showed</a> that in this case the transform origin coordinates, just as with <code>patternUnits="userSpaceOnUse"</code>, can be given in units of the current coordinate system. It will work, although it shouldn't.

Given this strange behavior, I would recommend not using <code>patternTransform</code> together with <code>patternUnits="objectBoundingBox"</code>.

<h2 id="x-y">x, y</h2>

These attributes let you set the position of the pattern tile relative to the top left corner:

<p data-height="550" data-theme-id="4974" data-slug-hash="NbxxZX" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (x & y)" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/NbxxZX/">patternUnits and pattern coordinates (x & y)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h2 id="width-height">width, height</h2>

These attributes define the size of the pattern tile, and without <code>viewBox</code> they don't affect the size of the content — anything that doesn't fit is simply clipped:

<p data-height="550" data-theme-id="4974" data-slug-hash="pNgEGV" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, no viewBox)" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/pNgEGV/">patternUnits and pattern coordinates (width & height, no viewBox)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If <code>viewBox</code> is set, the content will be fitted to the pattern tile size, keeping the proportions set by the <code>viewBox</code>. If the tile's and the content's proportions don't match, empty space remains around the content:

<p data-height="550" data-theme-id="4974" data-slug-hash="ObMmRO" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, has viewBox)" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/ObMmRO/">patternUnits and pattern coordinates (width & height, has viewBox)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If the content must fill the tile entirely, even with distortion, you need to specify that proportions don't have to be kept; for that, add <code>preserveAspectRatio="none"</code>:

<p data-height="550" data-theme-id="4974" data-slug-hash="NbxopY" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, has viewBox + preserveAspectRatio='none')" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/NbxopY/">patternUnits and pattern coordinates (width & height, has viewBox + preserveAspectRatio="none")</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As a reminder, by default the pattern's width and height equal zero, so the sizes must be specified explicitly, otherwise the pattern won't be displayed.

<h2>viewBox, preserveAspectRatio</h2>

If you're not familiar with them, this section gives a bit of background.

These attributes are not pattern-specific; they can also be used both for some other elements inside the parent SVG and for the SVG element itself.

The contents of an SVG image are drawn on an infinite canvas, and by default the visible area matches the size of the SVG element itself. If a <code>viewBox</code> is set, it defines the size and coordinates of the rectangle that determines the visible area. If the visible area's size set in <code>viewBox</code> doesn't match the SVG element's size, the visible area will stretch or shrink to fit entirely. This attribute also defines the aspect ratio that must be preserved when the element is resized. You can read more about <code>viewBox</code> in the <a href="https://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute">specification</a>.

<code>preserveAspectRatio</code> controls how the content behaves when the parent element is resized, and it has a large set of values for that. The default value is <code>xMidYMid meet</code>, meaning the content must fit entirely while keeping its proportions (<code>meet</code>) and be aligned to the center (<code>xMidYMid</code>). Similarly, you can control the behavior of background images with <code>background-size</code> or the behavior of one element inside another with <code>object-fit</code>.
It's important to remember that <code>preserveAspectRatio</code> doesn't work without <code>viewBox</code>.
You can learn more about <code>preserveAspectRatio</code> values in the <a href="https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute">specification</a>.

With a <code>viewBox</code> set, the element tries to fit entirely into the given area while keeping its proportions when resized. If keeping proportions isn't needed, the <code>preserveAspectRatio</code> attribute is set to <code>none</code>.

<h2 id="xlink-href">xlink:href</h2>

Like some other SVG elements, patterns can inherit each other's properties. A reference to the pattern whose content and properties should be inherited is set in the <code>xlink:href</code> attribute.

All properties and content that are not overridden in the current pattern are inherited from the referenced pattern. In the example below, the right pattern inherits the content and transformation from the left one:

<p data-height="550" data-theme-id="4974" data-slug-hash="BQKBgP" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternTransform and xlink:href" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/BQKBgP/">patternTransform and xlink:href</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h2 id="snippets">Code examples</h2>

This whole set of attributes not only lets you control the pattern flexibly, but also blows your mind a little when you try to use them.

In my experience, the most convenient code comes from using <code>viewBox</code>, <code>width</code> and <code>height</code> together. <code>viewBox</code> defines the size of the visible area before any scaling is applied, that is, which part of the pattern's content should be used as a tile — it's a bit like using the Crop tool in Photoshop. Then, by specifying width and height, you control the size of the resulting tile. That is, the tile can initially be any size, and the size you need can be adjusted later.

An important point: so that there are no gaps between tiles, <code>width</code> and <code>height</code> must keep the proportions set in <code>viewBox</code>. The size values shouldn't depend on the size of the shape or the SVG element, so you need one more required attribute — <code>patternUnits</code> with the value <code>userSpaceOnUse</code> (that is, you need to use the coordinate system of the whole SVG element).

Code example:

```html
<pattern id="pattern"
   patternUnits="userSpaceOnUse"
   viewBox="0 0 275 175"
   width="150" height="95">
   ...
</pattern>
```

The result:

<p data-height="550" data-theme-id="4974" data-slug-hash="yVVWoM" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, has viewBox)" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/yVVWoM/">patternUnits and pattern coordinates (width & height, has viewBox)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

We change the pattern sizes and it obediently scales. The shape's size doesn't affect the pattern:

<p data-height="550" data-theme-id="4974" data-slug-hash="YpNvjB" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="width, height & viewBox + resize shape" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/YpNvjB/">width, height & viewBox + resize shape</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

For my experiments I usually choose this variant; it's more convenient to work with.

But what if the pattern should react to changes in the element's size?

<b>Option 1.</b> You need to set <code>patternContentUnits</code> to <code>objectBoundingBox</code>. That is, inside the pattern the coordinate system should be built relative to the element the pattern is applied to.

Code example:

```html
<pattern id="pattern"
   patternContentUnits="objectBoundingBox"
   width="50%" height="50%">
   ...
</pattern>
```

As a reminder, with <code>patternContentUnits="objectBoundingBox"</code> the sizes and coordinates <i>inside</i> the pattern can only be set in numbers from 0.0 to 1.0; percentages won't work. Since all the content sizes are set relative to the shape's size, they will stretch together with it, without keeping proportions. You can see this in the demo:

<p data-height="550" data-theme-id="4974" data-slug-hash="wogXQK" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="width, height & viewBox + resize shape" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/wogXQK/">width, height & viewBox + resize shape</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<b>Option 2.</b> It's simpler and more convenient, because the pattern's content keeps its own coordinate system and units. With this approach <code>patternUnits</code> is not set, because the default value is used: <code>objectBoundingBox</code>. The pattern tile sizes are set in percentages or in values from 0.0 to 1.0; they will depend on the shape's size. To make the pattern's content resize together with it, you need to add <code>viewBox</code>, and to make it fill the whole tile, even with distorted proportions, add <code>preserveAspectRatio="none"</code>:

```html
<pattern id="pattern"
   width="75%" height="75%"
   viewBox="0 0 275 175"
   preserveAspectRatio="none"
   >
   ...
</pattern>
```

The result:

<p data-height="550" data-theme-id="4974" data-slug-hash="KaoobK" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="width, height & viewBox + preserveAspectRatio" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KaoobK/">width, height & viewBox + preserveAspectRatio</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This way you can make a fluid pattern with minimal effort.

<h2 id="examples">Pattern examples</h2>

A pattern with a raster image:

<p data-height="300" data-theme-id="4974" data-slug-hash="eGAxK" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/eGAxK/'>eGAxK</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

A pattern with vector content:

<p data-height="300" data-theme-id="4974" data-slug-hash="nkqdJ" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/nkqdJ/'>SVG pattern</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

A pattern with text content:

<p data-height="550" data-theme-id="4974" data-slug-hash="WopeZb" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="WopeZb" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/WopeZb/">WopeZb</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you can see, with patterns you can fill text with text : )

All my pattern demos are collected in <a href="https://codepen.io/collection/AyaLRg/">this collection</a>.

<h2 id="animation">Animation</h2>

Pattern content can be animated with CSS and JS. Animations made with Javascript will work everywhere (<a href="https://codepen.io/yoksel/pen/qdbPwd">demo</a>); CSS animations may have browser support problems.

In Firefox, CSS transforms don't work inside a pattern (<a href="https://codepen.io/yoksel/pen/ObWKea">here's a demo</a> to test it) — they neither work nor animate, although they work fine in Chrome. In some cases a shape resize can be imitated by controlling the stroke thickness.
CSS animation of fill and stroke works in almost all browsers except IE (doesn't work in IE11; I haven't checked Edge).

You can see examples in the same <a href="https://codepen.io/collection/AyaLRg/">collection</a>; many of the demos contain animations.

<h2 id="usage">Use cases</h2>

You can wrap practically anything in patterns. They can be used not only for repeating backgrounds made of ordinary images, but also for more interesting and complex things. Inside patterns you can use constructions built from gradients and symbols; animations can live not only inside the pattern but also in the components it uses, for example in a gradient fill. Patterns can be applied to any elements inside SVG, including text:

<p data-height="350" data-theme-id="4974" data-slug-hash="MKeVMB" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Animated SVG pattern with GSAP" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/MKeVMB/">Animated SVG pattern with GSAP</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

And the pattern itself, as we saw in one of the previous demos, can also contain text.

An element with a pattern can be <a href="https://codepen.io/yoksel/pen/WbvwpR">clipped by a mask</a>, or it can itself <a href="https://codepen.io/yoksel/pen/hpqbC">sit inside a mask</a>. The constructions can be absolutely insane.

You can do a lot of interesting things with patterns, and despite some difficulty in using them, they're definitely worth figuring out.

PS: Honestly, even despite my relatively long acquaintance with patterns, they still give me trouble. Nevertheless, if you have questions, I'll do my best to answer them.
