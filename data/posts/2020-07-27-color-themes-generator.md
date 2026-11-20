---
title: 'Color theme generator'

image: //yoksel.github.io/assets/img/articles/color-themes-generator/preview.png

tags: [tools]

description: The tool expands palettes from CSS/SCSS/Less variables and can be useful for pocket projects without a fixed design. I'll tell a bit about how it came to be and show how it can be used.

links:
- href: https://www.w3.org/TR/css-variables/
  text: CSS Custom Properties for Cascading Variables
- href: https://yoksel.github.io/tema/
  text: Tema
- href: /tsveta
  text: Colors in CSS
- href: https://yoksel.github.io/handy-colors/
  text: Handy colors
  description: named colors with palettes
---

At the end of March I released a tool for generating color themes from CSS/SCSS/Less variables — [Tema](https://yoksel.github.io/tema/). It can be useful for pocket projects without a fixed design, when colors are picked right in&nbsp;the development process. I'll tell a bit about how it came to be and&nbsp;show how it can be used.<!--more-->

The idea for the generator came up when I started making another project of mine — [Grid Cheatsheet](https://yoksel.github.io/grid-cheatsheet/). I already had a very similar reference, [Flex Cheatsheet](https://yoksel.github.io/flex-cheatsheet/), and&nbsp;initially I planned to simply swap the data and&nbsp;easily get a grid cheatsheet, but everything turned out to be harder: grids have a slightly different spec structure that didn't fit the existing reference structure, and besides, I now know JavaScript a bit better, so the reference engine had&nbsp;to be fully rewritten in the end. But let's get back to&nbsp;color themes and&nbsp;see how it all started.

On the day the flex cheatsheet launched, the most popular question was "What about the colors?" At that point the reference page looked like this:

<img
  src="/assets/img/articles/color-themes-generator/flex-first-theme.png"
  alt="Flex cheat sheet at&nbsp;launch"
  loading="lazy"
  width="600"
/>

I had picked a palette to my own taste and&nbsp;I was happy, but quite a lot of people wanted something done about the colors, so I quickly bolted on a more neutral theme:

<img
  src="/assets/img/articles/color-themes-generator/flex-gray-theme.png"
  alt="Flex cheat sheet with a gray theme"
  loading="lazy"
  width="600"
/>

When I started making the grid reference and&nbsp;rewriting the engine, pretty much everything in&nbsp;it was changing, and&nbsp;the markup, of course, too. I wanted to keep the theme switching, but with every new change to&nbsp;the markup it got harder and&nbsp;harder, because the additional theme was made by simply overriding the elements' default styles with styles from the theme file. If some element needed recoloring, its styles were duplicated in&nbsp;the theme file, and&nbsp;the colors were changed to new ones.

For a project you make once and&nbsp;forget, this is not a problem, but during active development, keeping the theme file up&nbsp;to&nbsp;date became problematic. I wanted to keep the colorful theme while somehow avoiding style duplication.

Preprocessor variables don't help solve this task, because they can't be used in&nbsp;one place and&nbsp;then overridden by a class to&nbsp;get a&nbsp;CSS property with a&nbsp;new value in&nbsp;another place:

<p class="codepen" data-height="350" data-theme-id="4974" data-default-tab="css,result" data-user="yoksel" data-slug-hash="VweNYRj" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="VweNYRj">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/VweNYRj">
  VweNYRj</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

For the second square to turn yellow, you'd have to duplicate the entire property where the variable is used.

But there are [custom properties](https://www.w3.org/TR/css-variables/), which work just as needed:

<p class="codepen" data-height="370" data-theme-id="4974" data-default-tab="css,result" data-user="yoksel" data-slug-hash="OJMGVyQ" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom property can be overwritten inside class">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/OJMGVyQ">
  Custom property can be overwritten inside class</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

First we declare the variable `--color` and&nbsp;use it in&nbsp;`background`. If we then give it a&nbsp;different value inside a&nbsp;modifier class (for example, `--color: gold;`), it will also change in&nbsp;the background declaration, but only for the element with that class, and&nbsp;the line with the background declaration doesn't need to be duplicated — we just override the variable and&nbsp;everything magically works.

Custom properties are not supported in&nbsp;IE11, but visitors with IE on the resources I&nbsp;care about are extremely rare (less than 1%), so I&nbsp;figured I&nbsp;can already use CSS variables in&nbsp;my projects.

Making themes with them is, of course, much more convenient. For example, here's a&nbsp;card:

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="LYGvpVQ" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LYGvpVQ">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/LYGvpVQ">
  LYGvpVQ</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

And here's a&nbsp;set of colors for it:

```css
:root {
  --body-bg: whitesmoke
  --card-bg: #FFF;
  --border: #CCC;
  --shadow: rgba(0,0,0,.1);
  --title: teal;
  --text: #333;
  --link: mediumseagreen;
  --link-hover: turquoise;
}
```

If we later need to add the same card but with different colors, we won't have to duplicate all the markup — it's enough to override the needed variables inside a&nbsp;class:

```css
:root {
  /* Цвета по умолчанию */
  --body-bg: whitesmoke
  --card-bg: #FFF;
  --border: #CCC;
  --shadow: rgba(0,0,0,.1);
  --title: teal;
  --text: #333;
  --link: mediumseagreen;
  --link-hover: turquoise;
}

.widget--red {
  /* Цвета для красной карточки */
  --card-bg: mistyrose;
  --border: tomato;
  --shadow: rgba(200,0,0,.2);
  --title: orangered;
  --link: tomato;
  --link-hover: crimson;
}
```

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="bGEJeOp" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom properties example #2">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/bGEJeOp">
  Custom properties example #2</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Also, unlike preprocessor variables, custom properties are visible in&nbsp;the web inspector:

<img
  src="/assets/img/articles/color-themes-generator/custom-props-in-devtools.png"
  alt="Custom properties in&nbsp;the web inspector"
  loading="lazy"
  width="500"
/>

And the browser suggests them:

<img
  src="/assets/img/articles/color-themes-generator/custom-prop-suggestions.png"
  alt="The browser suggests custom properties"
  loading="lazy"
  width="500"
/>

You can simply flip through the variables up&nbsp;and&nbsp;down and&nbsp;immediately see the changes on the page. It's incredibly convenient.

With custom properties, working with themes became easier, but the more colors I&nbsp;moved into variables, the harder it became to pick shades.

The original palette has 5 colors; the reference's styling needs about forty color variables — where do the shades come from? Sure, some colors can be used several times, but it's still not enough.

Also, you often need a&nbsp;shade slightly lighter or slightly darker (for example, a&nbsp;link slightly changes color on hover); doing that in a&nbsp;couple of places is no problem, but what if there are a&nbsp;dozen such variations? With what step does the lightness change? Is the step common to all or different in&nbsp;each case? That means the color-change steps also need to be unified somehow.

Or here's another problem: the reference has no fixed design, so some shades need to be picked during the layout process. How do you comfortably "walk" through the colors? For example, take a&nbsp;shade, then try a&nbsp;slightly darker or lighter version, while being able to easily switch to&nbsp;any of them?

Somewhere around this point the thought occurred to me that it would be nice if a&nbsp;palette with lighter/darker shade variations assembled itself — so the shades you can walk through are right there, without having to pick them by hand.

For color manipulations the HSL format (Hue-Saturation-Lightness) is convenient. The format's main advantages are readability and&nbsp;the ability to change a&nbsp;value by hand. Of course, colors written in&nbsp;any format can be edited by hand, but only in&nbsp;HSL is it an&nbsp;understandable and&nbsp;manageable process (which is why it's my favorite format). A&nbsp;color in&nbsp;HSL is written like this:

```css
hsl(0, 100%, 35%)
```

The first value is the position on the color wheel in&nbsp;degrees (from 0 to 360). The second is saturation, the third is lightness. The second and&nbsp;third values are given in&nbsp;percentages, from 0 to 100%.

If you write a&nbsp;color in&nbsp;HSL and&nbsp;then change the lightness (the third parameter), you can get additional shades from the base color. For example:

<p class="codepen" data-height="450" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="GRoLmbX" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HSL Variations">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/GRoLmbX">
  HSL Variations</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

From three original colors, six more come easily. Such a&nbsp;palette can simply be written by hand.

You can make up&nbsp;to&nbsp;50 lightness-change steps in&nbsp;each direction, but here the naming problem arises: if there are too many steps, it's hard to come up&nbsp;with sensible names for them, so the number of steps is limited by the available variable names. I&nbsp;settled on this naming system:

```css
/* Тёмные оттенки */
--color-darkest: hsl(...);
--color-darker: hsl(...);
--color-dark: hsl(...);
/* Базовый цвет */
--color: hsl(...);
/* Светлые оттенки */
--color-light: hsl(...);
--color-lighter: hsl(...);
--color-lightest: hsl(...);
```

A&nbsp;bit lighter — `light`, even lighter — `lighter`, the lightest — `lightest`. Same for the dark ones. Seven shades per color in&nbsp;total: one base and&nbsp;three steps in&nbsp;each direction.

To automate the palette-generation process, I&nbsp;made [Tema](https://yoksel.github.io/tema/). You paste any variables with colors in&nbsp;any format, including named colors, into the input field, and&nbsp;the tool returns an&nbsp;extended set of color variables:

<img
  src="/assets/img/articles/color-themes-generator/tema-io.png"
  alt="Tema, input and&nbsp;output fields"
  loading="lazy"
  width="700"
/>

You get a&nbsp;convenient ordered palette that you can easily "walk" through by changing the variable name in&nbsp;the code or in&nbsp;the web inspector, trying not only the main colors but also the additional shades without having to edit the color value by hand.

You can configure the lightness-change step, the number of steps and&nbsp;choose the color format in&nbsp;the resulting set:

<img
  src="/assets/img/articles/color-themes-generator/tema-options.png"
  alt="Tema, settings"
  loading="lazy"
  width="700"
/>

The resulting palette is copied into the style files and&nbsp;you can start using it.

Though with this naming system the colors have abstract names and&nbsp;are no longer tied to&nbsp;where they're used. This is solved with additional variables that link one to&nbsp;the other:

```css
:root {
  /* Палитра */
  --color-1-darkest: #f7cd22;
  --color-1-darker: #f9d958;
  --color-1-dark: #fbe58f;
  /* ...  */
  --color-5-light: #988b78;
  --color-5-lighter: #b0a797;
  --color-5-lightest: #c8c2b7;

  /* Привязка цветов к переменным для стилизации интерфейса */
  --body-bg: var(--color-3-lighter);
  --card-bg: var(--color-1-light);
  --border: var(--color-3);
  --shadow: rgba(0,0,0,.1);
  --title: var(--color-4-darker);
  --text: #333;
  --link: var(--color-4-darker);
  --link-hover: var(--color-4);
}
```

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="yLerzJw" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom properties example #3">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/yLerzJw">
  Custom properties example #3</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

With this approach the colors live separately from the variables used directly for styling, and&nbsp;if you change some color to&nbsp;another in&nbsp;the second block, the palette color variables won't be lost and&nbsp;will remain available for further use.

Also, separating color storage from color use lets you easily add new color themes to the site. The palettes are added to the styles, and&nbsp;a&nbsp;data attribute is convenient as the selector that limits their effect (it will be easier to overwrite its value via JS later):

```css
[data-theme="red"] {
  --color-1-darkest: hsl(48, 93%, 61%);
  /* ... */
}

[data-theme="blue"] {
  --color-1-darkest: hsl(48, 93%, 61%);
  /* ... */
}
```

Then the `data-theme` attribute is added to the `<html>` element and&nbsp;its values change on a&nbsp;click of the theme switcher:

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="QWyPqMz" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom properties example #4">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/QWyPqMz">
  Custom properties example #4</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

When the attribute changes, the CSS variables defined for it in&nbsp;the styles overwrite the values of the original variables, and&nbsp;the page gets recolored. No style duplication or manual recoloring of variables — one set of variables simply overrides another. Works like magic.

If one of the shades in&nbsp;some theme turns out not quite suitable, below the theme palette you can override the value of the styling variable:

```css
[data-theme="red"] {
  --color-1-darkest: hsl(48, 93%, 61%);
  /* ... */

  --border: var(--color-3-light);
}
```

For example, in&nbsp;the previous demo the third color (`--color-3`), used for the border in&nbsp;the red theme, turned out a&nbsp;bit darker than I'd like, so inside the theme I&nbsp;set a&nbsp;lighter shade (`--color-3-light`) for `--border`.

It's exactly this approach that let me not only keep and&nbsp;maintain the additional theme, but&nbsp;also add 4&nbsp;new ones. I&nbsp;usually use this one:

<img
  src="/assets/img/articles/color-themes-generator/flex-sunny-theme.png"
  alt="Tema, settings"
  loading="lazy"
  width="700"
/>

But there are calmer variants too : )

The color theme generator solves a&nbsp;fairly narrow task, and&nbsp;it's quite possible you'll never need it, but if you, like me, don't draw a&nbsp;separate design for your pocket projects, the tool can simplify development and&nbsp;expand the styling possibilities.

When creating themes with the generator, keep a&nbsp;couple of nuances in&nbsp;mind:

1. The number of colors in&nbsp;the sets must match. For example, if one of the color themes uses `var(--color-1-lightest)`, the lightest shade of the lightest color, it must be present in&nbsp;all the color sets. But when a&nbsp;palette is generated, the calculated lightness value may go beyond sensible limits, and&nbsp;then those colors won't be in&nbsp;the set: <img
  src="/assets/img/articles/color-themes-generator/tema-broken-colors.png"
  alt="Tema, broken colors"
  loading="lazy"
/> You need to remember this happens and&nbsp;always check that all the colors are in&nbsp;place.

2. For the palettes to be interchangeable, the order of colors in&nbsp;them must match. For example, in&nbsp;all of them going from the lightest color to&nbsp;the darkest. Then adding a&nbsp;new theme is just a&nbsp;matter of putting a&nbsp;new set of variables into the CSS.
