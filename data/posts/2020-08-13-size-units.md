---
title: Size units in CSS

image: //yoksel.github.io/assets/img/articles/size-units/preview.png

tags: [fonts, units, text]

description: 'Absolute and relative units of measurement in CSS: from pixels to viewport units'

links:
- href: https://www.w3.org/TR/css-values-4/#lengths
  text: 'Distance Units: the <length> type'
- href: https://developer.mozilla.org/en-US/docs/Web/CSS/length
  text: 'CSS <length>'
- href: https://en.wikipedia.org/wiki/Point_(typography)
  text: 'Point (typography)'
- href: https://lists.w3.org/Archives/Public/www-style/1998Dec/0030.html
  text: 'platform-specific font size issues'
  description: Mailing lists, 15 Dec 1998
- href: https://lists.w3.org/Archives/Public/www-style/2010Jan/0058.html
  text: Making pt a non-physical unit
  description: Mailing lists, 6 Jan 2010
- href: https://lists.w3.org/Archives/Public/www-style/2010Jun/0461.html
  text: '[CSS21] Issue 149 - px vs. pt'
  description: Mailing lists, 16 Jun 2010
- href: https://www.w3.org/Style/Examples/007/units.ru.html
  text: 'em, px, pt, cm, in…'
- href: https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/
  text: 'What is the CSS ‘ch’ Unit?'
- href: https://css-tricks.com/the-lengths-of-css/
  text: The Lengths of CSS
- href: https://hacks.mozilla.org/2013/09/css-length-explained/
  text: CSS Length Explained
- href: https://www.webdesignerdepot.com/2010/02/the-myth-of-dpi/
  text: The Myth of DPI
- href: https://webkit.org/blog/57/css-units/
  text: CSS Units
- href: https://snook.ca/archives/html_and_css/font-size-with-rem
  text: Font sizing with rem
- href: https://css-live.ru/articles/novye-i-starye-edinicy-izmereniya-kratkij-obzor.html
  text: 'New and old units of measurement (a brief overview)'
- href: https://www.sitepoint.com/css-viewport-units-quick-start/
  text: 'CSS Viewport Units: A Quick Start'
- href: https://css-tricks.com/snippets/css/fluid-typography/
  text: 'Fluid Typography'
- href: https://css-tricks.com/fun-viewport-units/
  text: 'Fun with Viewport Units'
- href: https://css-tricks.com/simple-little-use-case-vmin/
  text: 'Simple Little Use Case for `vmin`'
---

CSS has many units of measurement. Usually we use size units, but there are also units for angles — for example, `deg` and `turn`, units of time — `s` and `ms`, units of screen density — for example, `dpi` and `dppx`, and others.

Here we'll look only at size units, which we use most often. A detailed description can be found in the W3C specification [Distance Units: the &lt;length> type](https://www.w3.org/TR/css-values-4/#lengths).<!--more-->

What all length units have in common is that for a value of `0` the units can be omitted: `height: 0px` and `height: 0` work the same, so the units can be dropped. This lets you write code a bit faster and read property values more easily.

<h2 id="absolute-units">Absolute units of measurement</h2>

[Specification](https://www.w3.org/TR/css-values-4/#absolute-lengths)

<table>
<tr>
  <td><code>cm</code></td>
  <td>centimeter</td>
  <td>1cm = 96px/2.54 ≈ 37.795px</td>
</tr>
<tr>
  <td><code>mm</code></td>
  <td>millimeter</td>
  <td>1mm = 1/10 of 1cm</td>
</tr>
<tr>
  <td><code>q<code/></td>
  <td>quarter of a millimeter</td>
  <td>1q = 1/40 of 1cm = 0.25mm ≈ 0.945px</td>
</tr>
<tr>
  <td><code>in</code></td>
  <td>inch</td>
  <td>1in = 2.54cm = 96px</td>
</tr>
<tr>
  <td><code>pc</code></td>
  <td>pica</td>
  <td>1pc = 1/6 of 1in</td>
</tr>
<tr>
  <td><code>pt</code></td>
  <td>point</td>
  <td>1pt = 1/72 of 1in</td>
</tr>
<tr>
  <td><code>px</code></td>
  <td>pixel</td>
  <td>1px = 1/96 of 1in, 0.75 of pt</td>
</tr>
</table>

Absolute units are relative to each other (the ratios in the last column), but all of them are tied to concrete quantities.

For printing devices, centimeters, millimeters and inches must equal their usual values, but for screens that won't be the case:

<p class="codepen" data-height="400" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="VwaLPRL" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Some absolute CSS units">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/VwaLPRL">
  Some absolute CSS units</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

I tried different ways of getting a stripe 10 centimeters long. All the stripes are equal to each other, but none of them equals 10 centimeters if you put a ruler to the screen. I checked on two monitors: on one they are shorter, on the other — longer.

On web pages, physical units of measurement like `cm`, `mm` and `in` won't work as expected, because the main screen unit of measurement is the pixel.

What is a pixel and what size is it? How do `px` pixels differ from `pt` points? Why do they have such strange sizes of 1/96 of an inch and 1/72 of an inch respectively? How were these values chosen, and why are there two of these units? Trying to figure out the tiny dot on the screen raises many questions and requires diving into history. I tried to find out how it all went, and here's what I learned.

<img
  src="/assets/img/articles/size-units/mac.jpg"
  alt="One of the first Macintoshes"
  loading="lazy"
  width="250"
  class="float float--right"
/>

When the first desktop publishing programs appeared, there was a need to somehow relate the size of elements on the screen to what would be printed on paper. It turned out back then that one inch on the screen corresponded to 72 dots. This ratio is fixed in `pt`; `pt` is 1/72 of an inch. Originally it was a typographic unit of measurement, and its values [changed over time](https://en.wikipedia.org/wiki/Point_(typography)), but with the advent of computer programs for printing, the value of `pt` had to be standardized.

As technology advanced, it became possible to make screens with higher resolution, and Microsoft proposed displaying 96 dots per inch, which was fixed in `px`; that is, a pixel is 1/96 of an inch. This made it possible to increase the clarity of small text, because more dots could now be used to display a character.

The size of `px` is 0.75 of `pt`. In essence, `pt` is a larger pixel.

Later, retina displays with increased pixel density appeared, and then the CSS pixels we use stopped corresponding to physical screen pixels; now it's a virtual unit whose size is determined by the output device. For us this doesn't matter much except when working with images, when an extra set of pictures must be prepared for retina. All sizes given in pixels will be correctly displayed on the screen regardless of how many physical pixels it takes.

At this point, the ratio of physical units to screen dots has lost its original meaning, but remains fixed in the specification to preserve backward compatibility and simplify converting one unit into another.

At the same time, it's important to remember that since CSS pixels no longer correspond to physical screen dots, centimeters and inches won't match their real-world sizes when displayed on screen either; the specification says so too:

> If the anchor unit is the pixel unit, the physical units might not match their physical measurements. Alternatively if the anchor unit is a physical unit, the pixel unit might not map to a whole number of device pixels.

That is, if you use inches for laying out web pages, one inch will always equal 96 pixels, but never the real physical unit:

<p class="codepen" data-height="300" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="OJNVxrK" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="OJNVxrK">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/OJNVxrK">
  OJNVxrK</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

So the main thing about absolute units is the context of use:

* for **print** output, screen pixels must be converted to physical units, so it's better to use them when preparing documents for printing;
* for **screen** output, inches and centimeters must be converted to pixels, so for web development it's better to just use pixels from the start.

While digging into the history of units, I found out that Gecko's internal code once had [support for kilometers](https://github.com/w3c/csswg-drafts/issues/315#issuecomment-233099861); it was [removed](https://bugzilla.mozilla.org/show_bug.cgi?id=482146) in 2009:

<img
  src="/assets/img/articles/size-units/km.png"
  alt="Bugzilla: remove internal code for unsupported non-CSS units (feet, miles, meters, kilometers, didots, ciceros)"
  loading="lazy"
  width="600"
/>

Among physical units, `q` may also be of interest: it's a relatively new unit, and it's not supported by [all browsers](https://caniuse.com/#feat=mdn-css_types_length_q). `q` is `0.25mm`. Like other physical units, it makes more sense for print, but you can also try using it to reduce code size: `q` is about `0.945px`, so in some cases you can use it instead of pixels — that's one character (`q`) instead of two (`px`).

I spotted an example of such use in [this demo](https://lab.iamvdo.me/the-creation-of-adam/). Open carefully — your browser may hang. Trying to view the styles in the web inspector hangs it almost guaranteed, so it's better to view the page source. Screenshot:

<a href="https://lab.iamvdo.me/the-creation-of-adam/"><img
  src="/assets/img/articles/size-units/adam.jpeg"
  alt="The Creation of Adam (#singlediv) | @iamvdo"
  loading="lazy"
  width="700"
/></a>

Pure madness, of course. The painting is reproduced with `box-shadow`, and I think the topic of drawing with CSS can be closed after this.

The demo's styles weigh 4.5Mb, and if it used pixels instead of `q`, the styles would weigh 300Kb more.

<h2 id="relative-units">Relative units of measurement</h2>

[Specification](https://www.w3.org/TR/css-values-4/#relative-lengths)

Relative units of measurement are computed based on some other quantities: font size or screen size, and can change dynamically along with them.

<h3>Font-bound units of measurement</h3>

<table>
<tr>
  <td><code>em</code></td>
  <td>the element's font size</td>
</tr>
<tr>
  <td><code>ex</code></td>
  <td>the height of lowercase <code>x</code></td>
</tr>
<tr>
  <td><code>ch</code></td>
  <td>the width of <code>0</code> (ZERO, U+0030)</td>
</tr>
<tr>
  <td><code>rem</code></td>
  <td>the root element's font size</td>
</tr>
</table>

<h4>em</h4>

For `font-size` it's the inherited font size; for other properties — the current font size, already computed for `font-size`.

To see this live, let's take this code:

```css
BODY {
  /* Base font size */
  font-size: 42px;
}

DIV {
  /* Inherit the parent's font and shrink it twofold */
  font-size: .5em;
}

/* How thick will the border be in each case? */
.box-1 {
  border-width: .5em;
}
.box-2 {
  border-width: 1em;
}
```

Here's the result:

<p class="codepen" data-height="380" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="wvGKpEy" style="height: 380px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Em for font-size vs em for other props">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/wvGKpEy">
  Em for font-size vs em for other props</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The pink stripe is a gradient `1em` high, for comparison.

Both blocks have the same font size, halved relative to the parent element (`font-size: .5em;`). So how do you set a border thickness equal to the font size?

`border-width: .5em` makes the border half as thick as needed. This happens because only `font-size` uses the parent's font size, while `border` gets the computed value from `font-size`.

So if somewhere other than `font-size` you need to use the current font size, you don't need to copy the size value; just specify `1em`. The right block has the correct border thickness.

One more demo, to understand how `em` relates to font characters. The colored stripes are `1em` high, so you can see that `1em` roughly corresponds to the height of characters including capitals and ascenders:

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="vYGNJrg" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vYGNJrg">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/vYGNJrg">
  vYGNJrg</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The size of `em` is not fixed anywhere and is computed at the moment of use based on the parent's font size. For example, if you set the font size like this:

```css
DIV {
  font-size: .75em;
}
```

and then nest several divs inside each other, each subsequent div's font size will be smaller than the previous one:

<p class="codepen" data-height="460" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="ExKVbBO" style="height: 460px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nested em">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/ExKVbBO">
  Nested em</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

That's because `1em` is the current inherited font size, and `.75em` is the inherited font reduced by a quarter. For each new nested div, the parent's reduced font is inherited first, and then it's also reduced in the given way.

You need to remember this if you want to set sizes of reusable components in `em`: when elements are nested inside each other, the computed value of `em` may turn out to be not what you'd like to get.

<h4>ex</h4>

`ex` is the height of the lowercase letter `x`. If the font has no suitable metric and no such character, the browser will try to compute `ex` on its own. If that's impossible for some reason, `ex` is considered equal to `.5em`.

In the demo, the colored stripes are `1ex` high, and for the chosen fonts `1ex` equals the height of the small `x`:

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="poyjVgL" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Gradients stripes with 1ex height">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/poyjVgL">
  Gradients stripes with 1ex height</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let's see how the font affects `ex`, and how `ex` relates to `em`.

In this demo, the squares in the left group are sized in `1em`, in the right — in `2ex`, so you can check whether `ex` equals half of `em`. Also, each square is given its own font:

<p class="codepen" data-height="380" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="wvGKNJY" style="height: 380px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wvGKNJY">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/wvGKNJY">
  wvGKNJY</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Unlike `em`, the size of `ex` changes along with the font, and in all cases `2ex` does not equal `1em`, so you can't rely on the `.5` ratio.

`ex` inherits the parent's font size just like `em` does:

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="WNwQmXw" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nested ex">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/WNwQmXw">
  Nested ex</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h4>ch</h4>

`ch` is the width of the character `0`. For monospace fonts it's the exact width of any character; for others — the approximate width of one narrow character. If for some reason the width can't be computed, the fallback value is `.5em`.

Eric Meyer [warns](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/) against trying to use `ch` to set a container's width in characters, because it doesn't work as expected. In the demo below, the width of each text block is set like this:

```css
DIV {
  width: 10ch;
}
```

The block width will be correct only for monospace fonts (see `Courier`); in some fonts it will also work for digits (`Arial`, `Comic Sans`); in all other cases you can't count on `1ch` equaling a character's width:

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="RwaWdzw" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Unit ch">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/RwaWdzw">
  Unit ch</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let's compare `1em`, `2ex` and `2ch`:

<p class="codepen" data-height="420" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="vYGNMGO" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="1em vs 2ex vs 2ch">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/vYGNMGO">
  1em vs 2ex vs 2ch</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

It's clear that:

* `1ch` is bigger than `1ex` (the width of `0` is bigger than the height of `x`);
* `1ch` does not equal half of `em`;
* the value of `ch` can change along with the font.

<h4>rem</h4>

`rem` is `root em`, the font size of the root element; for a web page that's the `html` element. The default font size is `16px`. This value is not fixed in the specification, but is used by all browsers. You can read about the history of the matter in the [W3C mailing list](https://lists.w3.org/Archives/Public/www-style/1998Dec/0030.html).

If the user sets a different value in the browser settings, it will override the root element's font size. That is, if you need to make an interface that scales with the font size chosen by the user, `rem` is a convenient unit to use.

It's important to understand that the size of `rem` can only be overridden for the `html` element. For example, let's take these styles:

```css
BODY {
  font-size: 24px;
}

DIV {
  font-size: 1rem;
}
```

If `rem` could be overridden anywhere, the text would have grown, but that didn't happen:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="KKzVKvg" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="KKzVKvg">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/KKzVKvg">
  KKzVKvg</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The colored stripe is `24px` high, for comparison.

If you override the font size for the `html` element, it works:

```css
HTML {
  font-size: 24px;
}

DIV {
  font-size: 1rem;
}
```

<p class="codepen" data-height="280" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="Yzqwzeg" style="height: 280px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Yzqwzeg">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/Yzqwzeg">
  Yzqwzeg</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Unlike `em`, `rem` always contains only the root element's font size, so nesting doesn't affect anything:

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="wvGMBMg" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nested rem">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/wvGMBMg">
  Nested rem</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This lets you make components whose sizes are tied to the base font size but don't depend on elements being nested inside each other.

<h3>Screen-size-bound units of measurement</h3>

<table>
<tr>
  <td><code>vw</code></td>
  <td>1% of the viewport width</td>
</tr>
<tr>
  <td><code>vh</code></td>
  <td>1% of the viewport height</td>
</tr>
<tr>
  <td><code>vmin</code></td>
  <td>1% of the <i>smaller</i> of <code>vw</code> and <code>vh</code></td>
</tr>
<tr>
  <td><code>vmax</code></td>
  <td>1% of the <i>larger</i> of <code>vw</code> and <code>vh</code></td>
</tr>
</table>

These units are meant for creating elements whose size should depend on the window (viewport) size.

`100vh` is the viewport height — very convenient for elements that must stretch across the whole page. Here's an example of a simple gallery where each image will fully occupy one screen regardless of the browser window size:

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="KKzVwmQ" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Simple gallery with vh">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/KKzVwmQ">
  Simple gallery with vh</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The image sizes are set like this:

```css
IMG {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
```

The viewport width is `100vw`. This value lets you stretch any element to the screen's width at any level of nesting.

If you set an element's width to `100%`, you get the width of the parent, which most likely occupies only part of the screen, while `100vw` lets you stretch it precisely to the browser window's width, ignoring the sizes of parent elements.

Though there's a problem here: `100vw` is the width of the entire window including the scrollbar, while the window width available to content doesn't include the scrollbar, which is why trying to give elements the viewport width produces a horizontal scroll:

<p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="ZEWQQBR" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ZEWQQBR">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/ZEWQQBR">
  ZEWQQBR</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If you can't change the markup to avoid using `100vw`, you can set `overflow-x: hidden` on the nearest parent stretched to the page width:

<p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="XWdXXow" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="XWdXXow">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/XWdXXow">
  XWdXXow</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The scrollbar problem will only show up in desktop browsers, because on mobile the scrollbar sits on top of the page and doesn't take up space.

If you build on MacOS and the scrollbars disappear on their own, choose the "Show always" option in **System Perefences/General**; this lets you lay out pages with scrollbars in mind from the start:

<img
  src="/assets/img/articles/size-units/always-scroll.png"
  alt="Enabling scrollbar display on MacOS"
  loading="lazy"
  width="550"
/>

Using `vw` and `vh` you can make fully fluid elements that adapt to the window size on their own, like this:

```css
.text {
  padding: 5vh 5vw;
  background: paleturquoise;
  background-image: repeating-linear-gradient(-45deg,
    rgba(255,255,255, .25), rgba(255,255,255, .25) 2vw,
    transparent 0, transparent 4vw
  );
  font-size: 12vw;
}
```

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="WNwrrVK" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexible block with viewport units">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/WNwrrVK">
  Flexible block with viewport units</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

It's best to open this [demo](https://codepen.io/yoksel/full/WNwrrVK) in a separate tab and stretch the browser window.

With `vmin` you can make an element that always fits entirely on the screen while keeping its proportions:

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="ZEWQKpd" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Always visible element with vmin">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/ZEWQKpd">
  Always visible element with vmin</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This [demo](https://codepen.io/yoksel/full/ZEWQKpd) is also better viewed in a separate tab; try stretching the window vertically and horizontally.

Unlike font-bound units, viewport units don't react to page zoom. Open [this demo](https://codepen.io/yoksel/full/mdPVYpq) and change the zoom using `Ctrl+`/`Ctrl-`. The text sized in `rem` will grow and shrink; the text sized in `vw` will stay unchanged.

The viewport-units example behaves completely logically, because zooming doesn't change the window size. You need to remember this peculiarity if you want to use viewport units for text size — the user won't be able to make such text bigger.

The proposed solution is to mix viewport units into relative units bound to the font size, for example like this:

```css
html {
  font-size: calc(1em + 0.5vw);
  line-height: calc(1.1em + 0.5vw);
}
```

You can test it live [here](https://codepen.io/mirisuzanne/pen/39ad1e5d872446c97a09565a6d16d81e); the example is taken from [this article](https://css-tricks.com/fun-viewport-units/). More about controlling font size with viewport units can be found [here](https://css-tricks.com/snippets/css/fluid-typography/).

Thanks to [@bekharsky](https://twitter.com/bekharsky/status/1294181157572169728) for the addition about zooming behavior.

Viewport-bound units can have support problems in IE including 11, so be sure to test your code in a real browser.

The specification describes a few more units, for example:

* `cap` — the height of a capital letter
* `lh` — the line height
* `rlh` — the root element's line height

But at the moment they aren't supported anywhere, so they're not covered in this article.

Thanks to [Ilya Streltsyn](https://twitter.com/SelenIT2) for the useful links.
