---
title: Smart scrolling with Scroll Snap Points

tags: [firefox]

image: https://img-fotki.yandex.ru/get/3006/5091629.a4/0_8b19d_a6284f4f_orig
description: "Since version 39 of Firefox, interesting CSS properties have appeared that allow you to control the behavior of scrolling content."

links:
- href: http://www.w3.org/TR/css-snappoints-1/
  text: CSS Scroll Snap Points
- href: http://caniuse.com/#search=snap
  text: caniuse.com/#search=snap
- href: https://blog.gospodarets.com/css-scroll-snap
  text: Native CSS Scroll Snap Points
---

Since version 39 of Firefox, interesting CSS properties have appeared that allow you to control the behavior of scrolling content.<!--more-->

Specification: <a href="http://www.w3.org/TR/css-snappoints-1/">Scroll Snap Points</a>.

Let's take this gallery as an example:

<p data-height="550" data-theme-id="4974" data-slug-hash="zGWGzo" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zGWGzo/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Try scrolling through pictures, and you will see that scrolling does not take into account the contents of the scrolled area. Scrolling can stop anywhere, biting off half a picture and without bothering with alignment.

Regular scrolling doesn't allow you to step through content that uses pagination or meaningful sections, so scrolling with smarter behavior would be better suited here.

Smart scrolling would also be very useful for a photo gallery, so that in full-screen mode, large images always scroll smoothly one step at a time, regardless of the actual scrolling - without being cut off and always accurately filling the viewing area.

Usually the problem is solved using Js, but now there is a solution in CSS.

<div class="post__warning"><b>Attention:</b> at the time of writing, all the following demos only work in <b>Firefox 39+</b>.</div>

Take a look at this demo in the latest Firefox:

<p data-height="550" data-theme-id="4974" data-slug-hash="RPMPOv" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/RPMPOv/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Try scrolling and you will see that in this example the pictures always neatly fill the viewing area. How is this done?

First, let's create a gallery; it requires a very simple code.

HTML:

```html
<div class="gallery">
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
</div>
```

CSS:

```css
.gallery {
  width: 500px;
  height: 333px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
```

The size of the gallery in this case corresponds to the size of the pictures in it. The code in the demo is a little longer, I only left the important ones here.

This was the code for a gallery with normal scrolling, let's add a little magic:


```css
.gallery {
  ...
  /* Scroll Snap Properties */
  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(100%);
}
```

With just a couple of lines of code, the gallery scrolls step by step, showing only one picture at a time. Beauty!

Let's look at the properties that allow us to do this:


<section id="scroll-snap-type" data-name="scroll-snap-type"><h2>scroll-snap-type</h2>

Determines how closely scrollable content should be aligned relative to the parent element.
Set to a scrollable container.

<code>none</code> - “snapping” is disabled, scrolling behaves as usual. Default value.
<code>mandatory</code> - precise “snapping”: when scrolling, elements are aligned exactly to their parent.
<code>proximity</code> - approximate "snapping": depending on the speed of scrolling, elements can be shown in parts or aligned to their parent.

<p data-height="550" data-theme-id="4974" data-slug-hash="RPMWeP" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/RPMWeP/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="550" data-theme-id="4974" data-slug-hash="qdoOQw" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/qdoOQw/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section id="scroll-snap-points-x" data-name="scroll-snap-points-x"><h2>scroll-snap-points-x, scroll-snap-points-y</h2>

Defines the scroll step, set to the scroll container.

<code>none</code> - the step is not specified, the content scrolls jerkily. Default value.
<code>repeat(<length>)</code> - determines the step size when scrolling, the value can be set as a percentage. <code>scroll-snap-points-x: repeat(100%);</code> means that the step length is equal to the width of the container.

<p data-height="550" data-theme-id="4974" data-slug-hash="XbEXro" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/XbEXro/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<code>scroll-snap-points-x: repeat(50%);</code> in combination with <code>scroll-snap-type: mandatory;</code> behaves similar to <code>scroll-snap-type: proximity;</code>: scrolling is relaxed and at the same time with a manageable step size.

<p data-height="550" data-theme-id="4974" data-slug-hash="Qbmywa" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Qbmywa/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section id="scroll-snap-destination" data-name="scroll-snap-destination"><h2>scroll-snap-destination</h2>

Defines the "stick" point within a scrollable container. The first value specifies the X coordinate, the second – the Y coordinate.
Can be set as a percentage.
Set to a scrollable container.

Default value: <code>0px 0px</code>.

Normally content "snaps" to the left edge, but with <code>scroll-snap-destination: 100% 0;</code> it will stick to the right. I increased the width of the container to make it easier to see.

<p data-height="550" data-theme-id="4974" data-slug-hash="mJxVer" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mJxVer/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section id="scroll-snap-coordinate" data-name="scroll-snap-coordinate"><h2>scroll-snap-coordinate</h2>

Defines the coordinates of the "snap" point for scrollable elements.

<code>none</code> - the element does not have a sticking point. Default value.
<code><position></code> - sets the “snap” point relative to the scrollable element. The first value specifies the X coordinate, the second – the Y coordinate.
Can be set as a percentage.

A handy feature if the scrollable container is larger than the elements it contains: thanks to the combination of <code>scroll-snap-coordinate: 50% 0;</code> for child elements and <code>scroll-snap-destination: 50% 0;</code> for the parent, scrollable elements will always be aligned exactly in the center of the scroll area:

<p data-height="550" data-theme-id="4974" data-slug-hash="LVdGZE" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/LVdGZE/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

At the same time, “snapping” works great for elements of different widths:

<p data-height="550" data-theme-id="4974" data-slug-hash="oXqbWb" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/oXqbWb/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section><h2>Browser support</h2>

Unfortunately, smart scrolling is currently <a href="http://caniuse.com/#search=snap">not supported everywhere</a>: full support is only in Firefox 39+, it is also partially supported with the <code>-ms-</code> prefix in IE10+, and support will appear in Safari starting with the next version.

In addition, the specification is still in draft stage and may change in the future, and scrolling itself in the current implementation does not always behave in a predictable way.

At the moment, smart scrolling cannot be fully used, but the ability to control scrolling without using Js looks promising, so I want to believe that one day it will be supported by all modern browsers.
</section>
