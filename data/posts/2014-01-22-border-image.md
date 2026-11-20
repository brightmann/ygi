---
title: Border-image

tags: [borders]

image: //img-fotki.yandex.ru/get/9264/5091629.9a/0_7ec6d_c2452b04_L.png
description: Border-image is a property that specifies the background image for the element's border. It makes it easy to do incredible things that previously required 3 to 8 pictures and manipulation of markup.

links:
- href: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Border-image_generator
  text: Border-image generator
---

<code>Border-image</code> is a property that allows you to set a background image for an element's border. The property fills a frame with a given picture, distributing parts of the image so that the corner parts are in the corners of the frame, and the spaces between them are filled with the rest of the image.

Specification: <a href="http://www.w3.org/TR/css3-background/#border-images">w3.org/TR/css3-background/#border-images</a>.

This property makes it easy to do incredible things that previously required 3 to 8 pictures and manipulation of markup.<!--more-->

<b>Browser support:</b>

<a href="http://caniuse.com/#search=border-image">Not supported in IE10 and below. In the old opera it works with a prefix.</a>
Users of older browsers (or with images disabled) will see a default border defined in <code>border</code>, so it makes sense to give it a suitable style and color.

Example:

<iframe class="live-snippet" style="height: 360px" src="../assets/demo/border-image/demo_1.html?output"></iframe>

Images used:

<a href="//img-fotki.yandex.ru/get/9165/5091629.99/0_7eb45_d2e10a7a_L.jpg"><img src="//img-fotki.yandex.ru/get/9165/5091629.99/0_7eb45_d2e10a7a_S.jpg" alt=""></a>  <a href="//img-fotki.yandex.ru/get/9165/5091629.99/0_7eb47_d1bead75_XL.png"><img src="//img-fotki.yandex.ru/get/9165/5091629.99/0_7eb47_d1bead75_S.png" alt=""></a>  <a href="//img-fotki.yandex.ru/get/9250/981986.83/0_8f42c_b01bb34_XL.png"><img src="//img-fotki.yandex.ru/get/9250/981986.83/0_8f42c_b01bb34_S.png" alt=""></a>

You can use not only square pictures, but also oval ones:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/border-image/demo_2.html?output"></iframe>

Example pictures:

<a href="//img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_L.png"><img src="//img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_S.png" alt=""></a> <a href="//img-fotki.yandex.ru/get/9113/5091629.9a/0_7eb4b_694caad7_L.png"><img src="//img-fotki.yandex.ru/get/9113/5091629.9a/0_7eb4b_694caad7_S.png" alt=""></a>

However, <code>border-radius</code> does not affect <code>border-image</code>, so round pictures for a border are the only way to make a rounded border.

The main requirement is the symmetry of the images.

The picture frame is completely rubber and can be added to any size object.

Resize the browser to see how the frame adapts along with the element:

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/border-image/demo_3.html?output"></iframe>

Or open <b><a href="../assets/demo/border-image/demo_3.html?output">this example</a></b> in a separate window.

Quite complex images can be used as a frame:

<iframe class="live-snippet" style="height: 570px" src="../assets/demo/border-image/demo_4.html?output"></iframe>

Picture:

<a href="//img-fotki.yandex.ru/get/9165/5091629.99/0_7eb49_5c917238_XL.png"><img src="//img-fotki.yandex.ru/get/9165/5091629.99/0_7eb49_5c917238_S.png" alt=""></a>

The shortest way to set an image for a frame looks like this:


```css
border: 60px solid transparent;
border-image: url("//img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_XL.png") 25% round;
```

Result:

<iframe class="live-snippet" style="height: 570px" src="../assets/demo/border-image/demo_5.html?output"></iframe>

For <code>border</code> you must set the border thickness and style.
Color is optional, but users whose browsers do not support <code>border-image</code> will see the frame in this color.
By default this will be the text color. You can set <code>transparent</code> - transparent.

For <code>border-image</code> it is necessary to specify the image (<code>border-image-source</code>), the size of the corner part (<code>border-image-slice</code>) and the repetition of the image (<code>border-image-repeat</code>).

The given picture is cut according to this scheme:

<img src="//img-fotki.yandex.ru/get/9264/5091629.9a/0_7ec39_cf694bde_orig" alt="">

The corner parts, the size of which is set by the <code>border-image-slice</code> property, are highlighted in yellow, and the filler parts are in green.

Let's look at the individual <code>border-image</code> properties.

<section id="border-image-source" data-name="border-image-source"><h2>Border-image-source</h2>

Possible values: <code>none</code> or <code><image></code>.

Theoretically, you can also set gradients, but they work in Chrome/Safari and do not work in FF. With their help it would be possible to make rubber shadows of irregular shape, <a href="http://jsbin.com/aGECIwe/2/edit">like these, for example (view in Chrome)</a>.
With gradients you can make even more strange options, and the patterns themselves take care of their proportionality.
The examples below, at the time of writing, only work in Chrome and Safari.

* <a href="http://jsbin.com/edOHEwOQ/5">Example 1</a>
* <a href="http://jsbin.com/edOHEwOQ/4">Example 2</a>
* <a href="http://jsbin.com/edOHEwOQ/6">Example 3</a>

<b>Upd:</b> Works in Firefox starting from <a href="https://developer.mozilla.org/en-US/Firefox/Releases/29">version 29</a>.

The size of the picture is equal to the thickness of the frame. Frame color and style are ignored.

If you only specify <code>border-image-source</code>, the image will fill the corners, not knowing what to do next:


```css
border: 80px solid transparent;
border-image: url("//img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_XL.png");
```

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/border-image/demo_6.html?output"></iframe>

</section><section id="border-image-slice" data-name="border-image-slice"><h2>Border-image-slice</h2>

An important property that determines the size of the piece of image that will fill the corners of the frame.
The remaining parts will be used to fill the space between the corners according to the algorithm specified in <code>border-image-repeat</code>.

Possible values:

<code><percentage></code> - calculated relative to the image size. Horizontal relative to width, vertical relative to height.

<code><numbers></code> - pixels (for a raster image) or coordinates (for a vector image). Units of measurement are not indicated.

<code>fill</code> is a keyword that complements the previous values. If specified, the image is not cut off by the inner edge of the frame, but also fills the area inside the frame.
Very useful for rounded frames.

To define values ​​for each side, multiple values ​​can be specified separated by a space.

The sum of the values ​​of the opposite sides must be less than the size of the picture, otherwise there will be nothing to fill the space between the corners.


```css
border: 80px solid transparent;
border-image: url("//img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 100;
```

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/border-image/demo_7.html?output"></iframe>

</section><section id="border-image-repeat" data-name="border-image-repeat"><h2>Border-image-repeat</h2>

The property determines how the gaps between the corners will be filled.

Possible values:

<code>stretch</code> - stretches the filling area of ​​the image. Default value;

<code>repeat</code> - repeats the filling section, while the joints with the corner picture are visible;

<code>round</code> - fills the gap between the corners. A seam may be visible in the middle of the side. The most careful action.

<code>space</code> - acts similar to <code>repeat</code>. I didn't find any difference.

You can set two values ​​at once, the first will be responsible for the behavior of the image in the top and bottom frames, the second - for the left and right.

```css
border-image: url("//img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 100;
border-image-repeat: repeat;
```

On the left is <code>repeat</code>, on the right is <code>round</code>.

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/border-image/demo_8.html?output"></iframe>

If the frame is complex and the sides do not fit well together, <code>stretch</code> will work more correctly:

<iframe class="live-snippet" style="height: 470px" src="../assets/demo/border-image/demo_8_1.html?output"></iframe>

</section><section id="border-image-width" data-name="border-image-width"><h2>Border-image-width</h2>

<code>border-image-width</code>

The property controls the width of the visible part of the frame and scales it.
If this value is greater than <code>border-width</code>, the border image will slide under the content, even if the <code>fill</code> property is not set.

Possible values:

<code><length></code> - values ​​in px or em;

<code><%></code> - percentage values ​​relative to the image size;

<code><numbers></code> - numeric value by which <code>border-width</code> is multiplied

<code>auto</code> is a keyword. If set, the value is equal to the corresponding <code>border-image-slice</code>. If there is no suitable size, the <code>border-width</code> value is used, and the image fills the entire corner of the frame, crawling under the content. It works a little strange.


```css
border: 60px solid transparent;
border-image: url("//img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 80;
border-image-repeat: round;
border-image-width: 160px;
```

On the right is a frame with <code>border-image-width</code>. The example on the left shows how the picture was cropped by the inner edges of the frame. Due to the increased width, the right frame has crawled under the content.

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/border-image/demo_9.html?output"></iframe>

</section><section id="border-image-outset" data-name="border-image-outset"><h2>Border-image-outset</h2>

An interesting property that allows you to move the frame outside the element. Negative values ​​are not supported.

Possible values:

<code><length></code> - values ​​in px or em;

<code><numbers></code> is the numeric value by which <code>border-width</code> is multiplied.

```css
border: 60px solid transparent;
border-image: url("//img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 120;
border-image-repeat: round;
border-image-outset: 60px 10px 50px 120px;
```

On the right is an example with <code>border-image-outset</code>. This property does not affect the size of the element, and the frame can overlap adjacent elements:

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/border-image/demo_10.html?output"></iframe>
</section>

<code>border-image</code> is a rather complex, but very interesting property. I really like the idea of ​​using this instead of the traditional way of making a graphic frame for the rubber elements.
The examples in the post are a bit wild, but I am sure that the property can be used more elegantly, and its capabilities are simply breathtaking :)

For example, <a href="http://pepelsbey.net/">Vadim Makeev</a> suggested using <code>border-image</code> to create a shadow of a complex shape for a block, the dimensions of which may be unknown in advance.

Prepare <a href="//img-fotki.yandex.ru/get/9555/5091629.9a/0_7ec51_1cf902d3_L.png">a suitable image</a> and see how <code>border-image</code> easily copes with the task with just a couple of lines of code:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/border-image/demo_11.html?output"></iframe>

You can change the size of the block and add as much text as you like - the shadow will stretch along with it.

Beautiful simplicity. It will be great when this property can be fully used without regard to older browsers.

<i>Images of frames were googled for "frames". Picture with the Jedi - <a href="//img-fotki.yandex.ru/get/3102/yoksel.31/0_1d0a3_1b360496_XL.jpg">photo-toad</a>.</i>
