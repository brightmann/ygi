---
title: Soap bubbles in SVG

image: https://img-fotki.yandex.ru/get/59115/5091629.a4/0_90850_bd3003bc_orig
description: 'The bubbles came to me almost by accident, while I was experimenting with SVG gradients.'

tags: [svg, gradients, masks]

include: /assets/img/svg/bubble.svg
customCSS: bubble.css
---

Honestly, the bubbles happened almost by accident, when I needed to properly study gradients and started experimenting with what they can do. And I still don't quite understand how it turned out possible, using only SVG — a vector format — to make such a weightless soap bubble. <!--more-->

<p data-height="500" data-theme-id="4974" data-slug-hash="EyZgLo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/EyZgLo/">SVG Bubbles</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

In fact, if you break it down, there's nothing complicated here, and all the magic lies in using masks in combination with gradients.

<i>You can read in detail about how SVG masks work <a href="/svg-masks/">here</a>, and about gradients — <a href="/svg-gradients/">right here</a>.</i>

Let's break the bubble into layers (from the bottom layer to the top):

<div class="bubbles-group gray-stripes-bg items-5">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--bottom"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#light--bottom"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#light--top"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--top"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#colors"/>
</svg>
</div>

The bubble consists of five layers, each of which is a shape with a gradient; some of them also have masks (which contain gradients too).

Important: all of the bubble's content sits inside the <code>svg</code> tag:

```html
<svg viewBox="0 0 200 200" width="150" height="150">
  <!-- слои будут тут -->
</svg>
```

Also note the required <code>viewBox</code> attribute: it's needed so that when the image is resized the internal coordinate system resizes along with it, and elements don't scatter all over but stay in their places. This is especially important for coordinates that can't be given in percentages.

In the examples the <code>svg</code> tag will be omitted, but don't forget to add it if you use the code examples from the article.

<h2 id="colored-layer">The colorful layer</h2>

Let's start with the most important (and topmost) layer; it imitates the bubble's surface with rainbow swirls:

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"
  mask="url(#mask--colors-transparency)"></circle>
</svg>

Essentially, two gradients are applied to the shape, one of them inside a mask. This construction gives you a shape with a linear gradient and radial transparency at the same time.

<h3>How to make it:</h3>

<ol class="layer-steps-list">
<li>
<h4>We create a shape with a colorful gradient</h4>

<p>
  We write the gradient:
</p>

```html
<linearGradient id="gradient--colors"
  x1="0" y1="100%"
  x2="100%" y2="0">
  <stop offset="0%"
    stop-color="dodgerblue"/>
  <stop offset="50%"
    stop-color="fuchsia"/>
  <stop offset="100%"
    stop-color="yellow"/>
</linearGradient>
```

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--colors)"
    ></rect>
</svg>

<p>We apply it to a shape:</p>

```html
<circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"> <!-- градиентная заливка -->
</circle>
```

<svg class="svg gray-stripes-bg"
  viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
    cx="50%" cy="50%"
    fill="url(#gradient--colors)"
    ></circle>
</svg>

<p>We get a colorful base that lacks lightness and transparency.</p>
</li>

<li>
<h4>We add transparency</h4>

<p>For this we'll use a radial gradient with black and white shades of different degrees of transparency (the values were chosen by trial and error):</p>

```html
<radialGradient id="gradient--colors-transparency">
  <stop offset="30%"
    stop-color="black"
    stop-opacity=".2"/>
  <stop offset="97%"
    stop-color="white"
    stop-opacity=".4"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>
```

<svg class="svg gray-stripes-bg"
viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--colors-transparency--no-fx)"
    ></rect>
</svg>

<p>To make the transparency look more natural, we need to slightly shift the gradient's center; for this we'll use the <code>fx</code> and <code>fy</code> attributes:</p>

```html
<radialGradient id="gradient--colors-transparency"
  fx="25%" fy="25%"> <!-- смещение центра градиента -->
  <stop offset="0%"
    stop-color="black"/>
  <stop offset="30%"
    stop-color="black"
    stop-opacity=".2"/>
  <stop offset="97%"
    stop-color="white"
    stop-opacity=".4"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>
```

<p>Here's what we get:</p>

<svg class="svg gray-stripes-bg"
viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--colors-transparency)"
    ></rect>
</svg>

<p>Now we make the mask. A rectangle goes into the <code>mask</code>, and the freshly created gradient is used as its fill:</p>

```html
<mask id="mask--colors-transparency">
  <rect fill="url(#gradient--colors-transparency)"
    width="100%" height="100%"></rect>
</mask>
```

<p>Then we add the mask to the shape with the colorful fill:</p>

```html
<circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"
  mask="url(#mask--colors-transparency)"> <!-- маска -->
</circle>
```

<p>The result:</p>

<svg class="svg gray-stripes-bg"
  viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
    cx="50%" cy="50%"
    fill="url(#gradient--colors)"
    mask="url(#mask--colors-transparency)"
    ></circle>
</svg>
</li>
</ol>

<p>The full code of the colorful layer:</p>

```html
<!-- Разноцветный градиент -->
<linearGradient id="gradient--colors"
  x1="0" y1="100%"
  x2="100%" y2="0">
  <stop offset="0%"
    stop-color="dodgerblue"/>
  <stop offset="50%"
    stop-color="fuchsia"/>
  <stop offset="100%"
    stop-color="yellow"/>
</linearGradient>

<!-- Градиент прозрачности разноцветного слоя -->
<radialGradient id="gradient--colors-transparency"
  fx="25%" fy="25%">
  <stop offset="0%"
    stop-color="black"/>
  <stop offset="30%"
    stop-color="black"
    stop-opacity=".2"/>
  <stop offset="97%"
    stop-color="white"
    stop-opacity=".4"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>

<!-- Маска прозрачности разноцветного слоя -->
<mask id="mask--colors-transparency">
  <rect fill="url(#gradient--colors-transparency)"
    width="100%" height="100%"></rect>
</mask>

<!-- Фигура с маской и разноцветным градиентом -->
<circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"
  mask="url(#mask--colors-transparency)">
</circle>
```

We get a semi-transparent rainbow surface, still not very soap-bubble-like.

After googling images for <a href="https://www.google.ru/search?q=soap+bubbles+vector&newwindow=1&biw=1246&bih=617&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjG27zPq8HOAhXjB5oKHWNvA_MQsAQIGg#newwindow=1&tbm=isch&q=soap+bubble&imgrc=R2pNfXjZcboCdM%3A">soap bubble</a>, I thought the bubble could use inner reflections at the top and bottom.

<h2 id="reflections">Reflections</h2>

For the reflections I used two shapes with a solid fill and a mask that adds transparency to them.

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
<circle r="50%"
    cx="50%" cy="50%"
    fill="aqua"
    mask="url(#mask--light-bottom)"
    ></circle>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
  cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)"
  ></circle>
</svg>
</div>

The transparency is made with a mask, although theoretically it could have been done with gradients alone. But I wanted the reflections to be identical, and besides, using only white and black in the mask gives you more controllable gradients.

<h3>How to make it:</h3>

<ol class="layer-steps-list">
<li>
<h4>We create shapes with a solid fill</h4>

```html
<circle r="50%" cx="50%" cy="50%"
  fill="aqua"> <!-- голубая заливка -->
</circle>

<circle r="50%" cx="50%" cy="50%"
  fill="yellow"> <!-- желтая заливка -->
</circle>
```

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
     cx="50%" cy="50%"
     fill="aqua"
     ></circle>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
  cx="50%" cy="50%"
  fill="yellow"
  ></circle>
</svg>
</div>
</li>

<li>
<h4>We add transparency with masks</h4>

<p>This gradient also uses white and black at different degrees of transparency, and the center color is shifted upward with the <code>fy</code> attribute:</p>

```html
<radialGradient id="gradient--bw-light"
  fy="10%">
  <stop offset="60%"
    stop-color="black"
    stop-opacity="0"/>
  <stop offset="90%"
    stop-color="white"
    stop-opacity=".25"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>
```

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--bw-light)"
    ></rect>
</svg>

<p>Using this gradient, let's create two masks: for the top reflection and for the bottom one. The mask for the top reflection uses the same gradient, but the rectangle with the gradient is turned upside down.</p>

```html
<!-- Маска для нижнего отражения -->
<mask id="mask--light-bottom">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"></rect>
</mask>

<!-- Маска для верхнего отражения -->
<mask id="mask--light-top">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"
    transform="rotate(180, 100, 100)"></rect>
</mask>
```

<p>We add the masks to the filled shapes:</p>

```html
<!-- Нижнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="aqua"
  mask="url(#mask--light-bottom)"> <!-- маска -->
</circle>

<!-- Верхнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)"> <!-- маска -->
</circle>
```

<p>The result:</p>

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
     cx="50%" cy="50%"
     fill="aqua"
     mask="url(#mask--light-bottom)"
     ></circle>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
  cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)"
  ></circle>
</svg>
</div>
</li>

</ol>

The full code of the reflections layer:

```html
<!-- Градиент для прозрачности -->
<radialGradient id="gradient--bw-light" fy="10%">
  <stop offset="60%"
    stop-color="black"
    stop-opacity="0"/>
  <stop offset="90%"
    stop-color="white"
    stop-opacity=".25"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>

<!-- Маска для нижнего отражения -->
<mask id="mask--light-bottom">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"></rect>
</mask>

<!-- Маска для верхнего отражения -->
<mask id="mask--light-top">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"
    transform="rotate(180, 100, 100)"></rect>
</mask>

<!-- Нижнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="aqua"
  mask="url(#mask--light-bottom)">
</circle>

<!-- Верхнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)">
</circle>
```

Let's combine the layers. The reflections are inner, so their layers go under the colorful layer:

<svg class="svg gray-stripes-bg"
  viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#light--bottom"/>
  <use xlink:href="#light--top"/>
  <use xlink:href="#colors"/>
</svg>

The bubble became more colorful, but right now its surface looks matte. To make it glossy, we need to add highlights.

<h2 id="flares">Highlights</h2>

They're made of two ellipses with gradient fills:

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--top"/>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--bottom"/>
</svg>
</div>

<i>The outline stroke shows the bubble's boundaries.</i>

<h3>How to make it:</h3>

<ol class="layer-steps-list">
<li>
<h4>We create the gradient</h4>

<p>It consists of white shades of different degrees of transparency, with the center color shifted toward the top edge:</p>

```html
<radialGradient id="gradient--spot"
  fy="20%">
  <stop offset="10%"
    stop-color="white"
    stop-opacity=".7"/>
  <stop offset="70%"
    stop-color="white"
    stop-opacity="0"/>
</radialGradient>
```

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
<rect width="100%" height="100%"
  fill="url(#gradient--spot)"
  ></rect>
</svg>
</li>

<li>
<h4>We draw the ellipses</h4>

<p>We place one at the top left, the other at the bottom right, and add the gradient fill:</p>

```html
<!-- Верхний блик -->
<ellipse rx="65" ry="25" cx="55" cy="55"
   fill="url(#gradient--spot)">
</ellipse>

<!-- Нижний блик -->
<ellipse rx="40" ry="20" cx="150" cy="150"
   fill="url(#gradient--spot)">
</ellipse>
```

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="55" ry="25"
  cx="55" cy="55"
  fill="url(#gradient--spot)">
  </ellipse>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="40" ry="20"
  cx="150" cy="150"
  fill="url(#gradient--spot)">
  </ellipse>
</svg>
</div>

<p>Since the radial gradient is applied to ellipses, it got squashed to fit the shape entirely.</p>
</li>

<li>
<h4>We add transformations</h4>

<p>To make the highlights visually sit on the bubble's surface, they need to be rotated a bit:</p>

```html
<!-- Верхний блик -->
<ellipse rx="55" ry="25" cx="55" cy="55"
   fill="url(#gradient--spot)"
   transform="rotate(-45, 55, 55)"> <!-- трансформация -->
</ellipse>

<!-- Нижний блик -->
<ellipse rx="40" ry="20" cx="150" cy="150"
   fill="url(#gradient--spot)"
   transform="rotate(-225, 150, 150)"> <!-- трансформация -->
</ellipse>
```

<p>The result:</p>

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="55" ry="25"
  cx="55" cy="55"
  fill="url(#gradient--spot)"
  transform="rotate(-45, 55, 55)">
  </ellipse>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="40" ry="20"
  cx="150" cy="150"
  fill="url(#gradient--spot)"
  transform="rotate(-225, 150, 150)">
  </ellipse>
</svg>
</div>
</li>
</ol>

<p>The full code of the highlights layer:</p>

```html
<!-- Градиент блика -->
<radialGradient id="gradient--spot" fy="20%">
  <stop offset="10%"
    stop-color="white"
    stop-opacity=".7"/>
  <stop offset="70%"
    stop-color="white"
    stop-opacity="0"/>
</radialGradient>

<!-- Верхний блик -->
<ellipse rx="55" ry="25" cx="55" cy="55"
   fill="url(#gradient--spot)"
   transform="rotate(-45, 55, 55)">
</ellipse>

<!-- Нижний блик -->
<ellipse rx="40" ry="20" cx="150" cy="150"
   fill="url(#gradient--spot)"
   transform="rotate(-225, 150, 150)">
</ellipse>
```

<h2 id="final">Final assembly</h2>

Now we can assemble all the code into the final version. In the examples I grouped the different components of one layer together, but if we now just dump all the code in one pile, first of all we'd get the wrong layer order, and second, such code would simply be inconvenient to use.

The code contains two types of elements, and it's convenient to group them by type. The first type is plain shapes (in our case, circles and ellipses) — these are the visible layers that make up the bubble. The second type is elements that aren't displayed on the page but affect the appearance of the displayed shapes: masks and gradients.

The non-displayed elements are conveniently placed in <code>defs</code> — an element meant specifically for storing reusable things. Neither the element itself nor its content is displayed on the page.

The displayed elements should be placed after <code>defs</code>. Pay attention to the layer order and remember that the lower a layer is in the code, the closer it is to the viewer; that is, the bottom highlight should come first in the code, and the layer with the colorful gradient last.

Approximate code (masks and gradients omitted; the full code is below):

```html
<svg viewBox="0 0 200 200" width="150" height="150">
  <defs>
    <!-- здесь должны быть маски и градиенты -->
  </defs>

  <!-- Нижний блик -->
  <ellipse rx="40" ry="20" cx="150" cy="150"
    fill="url(#gradient--spot)"
    transform="rotate(-225, 150, 150)">
  </ellipse>

  <!-- Нижнее отражение -->
  <circle r="50%" cx="50%" cy="50%"
    fill="aqua"
    mask="url(#mask--light-bottom)">
  </circle>

  <!-- Верхнее отражение -->
  <circle r="50%" cx="50%" cy="50%"
    fill="yellow"
    mask="url(#mask--light-top)">
  </circle>

  <!-- Верхний блик -->
  <ellipse rx="55" ry="25" cx="55" cy="55"
    fill="url(#gradient--spot)"
    transform="rotate(-45, 55, 55)">
  </ellipse>

  <!-- Фигура с маской и разноцветным градиентом -->
  <circle r="50%" cx="50%" cy="50%"
    fill="url(#gradient--colors)"
    mask="url(#mask--colors-transparency)">
  </circle>

</svg>
```

And the whole bubble complete:

<p data-height="400" data-theme-id="4974" data-slug-hash="grEWZw" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/grEWZw/">grEWZw</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Notice that the white highlights look colorful. Since the bottom highlight is, as it were, reflected off the bubble's inner surface and, relative to the viewer, sits on its farthest wall, in the layer stack it's the deepest of all, at the very bottom (and first in the code).

The top highlight is supposed to be on the bubble's outer wall, closest to the viewer, but to bring its colors somewhat in line too, it was placed not as the topmost layer but under the layer with the rainbow swirls.

<h2>Conclusion</h2>

Using a combination of masks and gradients you can make a vector soap bubble. Vector's advantage over raster is that it can be stretched and shrunk as much as you like without quality loss, and besides, the colors of such a bubble can be animated.

I don't think this is the most accurate depiction of a soap bubble, but photorealism wasn't my goal — I wanted to find out how complex gradients can be and what benefit can be extracted from combining gradients and masks. The results are impressive, and I'm sure that, using the methods described above, developers with rich imagination can make a lot of interesting things.

Also, if you have interesting demos using SVG gradients in mind, share the links in the comments.
