---
title: Inline styles in background-image

image: https://img-fotki.yandex.ru/get/41743/5091629.a4/0_90dda_849784af_orig
description: 'While playing with code, I discovered something surprising: it turns out that inside the CSS background property you can use other CSS properties, for example box-shadow, outline, transform and even another background!'

tags: [svg, gradients, box-shadow, experiments, transform]

links:
 - name: 'Data URI + SVG'
   url: https://r.va.gg/2012/05/data-uri-svg.html
 - name: 'Optimizing SVGs in data URIs'
   url: https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
 - name: URL-encoder for SVG
   url: https://yoksel.github.io/url-encoder/ru
 - name: Background tricks with SVG, Box shadows and CSS Gradients
   url: https://codepen.io/collection/DyJRrY/2/
---

While playing with code, I discovered something surprising: it turns out that inside the CSS <code>background</code> property you can use other CSS properties, for example <code>box-shadow</code>, <code>outline</code>, <code>transform</code> and even another <code>background</code>.<!--more-->

Obviously, we can't just take and stuff one CSS property into another: shadows and transforms have to be applied to an element. As a background we can use colors, gradients and images, but not only that: SVG can also be used as a background, and not only as a link to an external file — the code of an SVG element can be inserted directly into CSS, which is done with this construct: <code>background-image: url("data:image/svg+xml,...");</code>.

SVG can be inserted into CSS just as it is, but such code won't work in IE. However, if you <a href="https://yoksel.github.io/url-encoder/ru">escape it</a>, the code will work in all browsers including IE9.

<p data-height="400" data-theme-id="4974" data-slug-hash="ammZbr" data-default-tab="css,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/ammZbr/">(encoded svg)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

And now if you set some styles in the <code>style</code> attribute of this <code>svg</code> inside the <code>background</code>, they will work! You can use ordinary styles for HTML elements, that is borders (including <code>border-image</code>), shadows, backgrounds (including CSS gradients) and even transforms!

For example, you can take this code:

```html
<svg xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 100 100' width='50' height='50'
  style='transform: rotate(45deg) scale(.8,.8);
    transform-origin: 50% 50%;
    border-radius: 1rem;
    background: linear-gradient(darkviolet, turquoise);
    box-shadow: 0 0 7px 3px white inset;'>
    <circle r='30%' cx='50%' cy='50%' fill='gold'/>
</svg>
```

escape it and use it as a background, and all the inline styles will be preserved:

<p data-height="400" data-theme-id="4974" data-slug-hash="BLQjoW" data-default-tab="css,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/BLQjoW/">(encoded svg with inline styles)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The yellow circle is a <code>circle</code> inside the <code>svg</code>; everything else is inline styles: a gradient, a shadow and transforms.

Actually, to use inline styles you only need the <code>svg</code> element; its contents don't matter and can be absent:

```html
<svg xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 100 100' width='50' height='50'
  style='transform: rotate(45deg) scale(.8,.8);
    transform-origin: 50% 50%;
    border-radius: 1rem;
    background: linear-gradient(darkviolet, turquoise);
    box-shadow: 0 0 7px 3px white inset;'
    ><!-- тут ничего нет --></svg>
```

And everything will still work:

<p data-height="400" data-theme-id="4974" data-slug-hash="WGoKAv" data-default-tab="css,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/WGoKAv/">(encoded svg with inline styles)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h2>Cross-browser compatibility</h2>

Interestingly, these styles work in all modern browsers, but each has its own idea of what it should look like in the end:

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/chrome.png" alt="Chrome">

<figcaption>
  <h3>Chrome</h3>
  <p>Shadows, transforms and gradients work; the gradient rotates together with the shape. Empty places in the corners of the background tile are filled with the gradient.</p>
  <p><code>transform-origin</code> is at the point <code>0, 0</code> by default.</p>
</figcaption>
</figure>

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/ff.png" alt="Firefox">

<figcaption>
    <h3>Firefox</h3>
    <p>Shadows, transforms and gradients work, but the shadow rotates together with the shape, while the gradient doesn't.</p>
    <p><code>transform-origin</code> is at the point <code>0, 0</code> by default.</p>
</figcaption>
</figure>

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/safari.png" alt="Safari">

<figcaption>
    <h3>Safari</h3>
    <p>Shadows, transforms and gradients work; the gradient rotates together with the shape. Empty places in the corners of the background tile are not filled with anything.</p>
    <p><code>transform-origin</code> is at the point <code>0, 0</code> by default.</p>
</figcaption>
</figure>

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/ie.png" alt="IE11">
<figcaption>
<h3>IE11</h3>
<p>Transforms and gradients work, shadows don't. The gradient rotates together with the shape. Empty places in the corners of the background tile are not filled.</p>

<p><code>transform-origin</code> is at the point <code>50%, 50%</code> by default.</p>

<p>Unlike the other browsers, <code>transform-origin</code> specified in percentages doesn't work here — and the whole background breaks. Also, if you give the shape a <code>border</code>, only it will be displayed, while gradients and shadows disappear.</p>
</figcaption>
</figure>

On the one hand, inline styles in backgrounds render differently everywhere; on the other hand, it's such a strange construct that it's unclear why it works at all.

Styles in backgrounds open up vast opportunities for experiments and also let you dream about various features that backgrounds don't have now but that you really wish they did.

For example, when making patterns with gradients, sometimes you want to simply take and rotate a background tile, say by 45 degrees, to get scales:

<figure>
<p data-height="350" data-theme-id="4974" data-slug-hash="gwrKzJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/gwrKzJ/">[Chrome, Opera] SVG  + CSS gradient + Box Shadow</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Displays properly only in Chrome and Opera)</figcaption>
</figure>

Another variant of scales:

<figure>
<p data-height="350" data-theme-id="4974" data-slug-hash="amkjXg" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/amkjXg/">SVG  + CSS gradient</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera)</figcaption>
</figure>

Or, say, you want to make a complex background from several gradients and rotate the whole group at once (in this case such a group is a semi-transparent three-color gradient):

<figure>
<p data-height="420" data-theme-id="4974" data-slug-hash="RGRRvo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/RGRRvo/">Animated pattern: SVG  + CSS gradient</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera)</figcaption>
</figure>

Or, for example, you want to change the size of the background, but in such a way that some lines keep their size. <code>box-shadow</code> works exactly like that when <code>background-size</code> is resized:

<figure>
<p data-height="400" data-theme-id="0" data-slug-hash="ORNqdx" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/ORNqdx/">Animated pattern for HTML element without gradients</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera, Firefox, Safari)</figcaption>
</figure>

Only the background tile is resized; the size of the shadows doesn't change. From this you can make, for example, a kaleidoscopic pattern:

<figure>
<p data-height="430" data-theme-id="4974" data-slug-hash="QKNPjJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/QKNPjJ/">Animated pattern without gradients: + transform!</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera, Firefox, Safari)</figcaption>
</figure>

Using <code>border-image</code> with gradients you can make quite intricate things:

<figure>
<p data-height="350" data-theme-id="0" data-slug-hash="amkLvw" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/amkLvw/">Border-image inside background-image</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera, Firefox, Safari)</figcaption>
</figure>

You can play endlessly.

I don't know how this knowledge can be put to use, but this finding struck me so much that I decided to tell about it. And I'm still impressed that transforms and <code>border-image</code> can be used inside <code>background-image</code>, although there's probably no practical use in it.

If you have ideas where this could be applied, share them.

All my experiments with inline styles can be seen <a href="https://codepen.io/collection/DyJRrY/">in this collection</a> (best viewed in Chrome and Opera).
