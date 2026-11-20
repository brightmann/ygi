---
title: Variable fonts
image: '//yoksel.github.io/assets/img/previews/variable-fonts.png'
description: "Variable fonts are a new page in web typography. Browser support is already fairly good, so it's time to explore their capabilities and get ready to use them in real life."

tags: ['fonts']

links:
- href: https://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/
  text: Variable fonts, a new kind of font for flexible design (announcement from Adobe)
- href: https://opensource.googleblog.com/2016/09/introducing-opentype-font-variations.html
  text: Introducing OpenType Font Variations (announcement from Google)
- href: https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369
  text: Introducing OpenType Variable Fonts
- href: https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts/
  text: Introduction to variable fonts on the web
- href: https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604
  text: How to use variable fonts in the real world
- href: https://www.zeichenschatz.net/typografie/how-to-start-with-variable-fonts-on-the-web.html
  text: How to start with variable fonts on the web
- href: https://www.w3.org/TR/css-fonts-4/#font-variation-settings-def
  text: font-variation-settings
- href: https://docs.microsoft.com/ru-ru/typography/opentype/spec/otvaroverview
  text: OpenType Font Variations Overview
- href: https://docs.microsoft.com/ru-ru/typography/opentype/spec/dvaraxisreg#registered-axis-tags
  text: Registered axis tags
- href: https://www.w3.org/TR/css-fonts-3/#propdef-font-feature-settings
  text: font-feature-settings
- href: https://docs.microsoft.com/ru-ru/typography/opentype/spec/featuretags
  text: Feature tags
- href: https://docs.microsoft.com/ru-ru/typography/opentype/spec/featurelist
  text: Features listed alphabetically
- href: https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_ae
  text: Feature descriptions and implementations
- href: https://www.typotheque.com/articles/opentype_features_in_css
  text: OpenType features in CSS
- href: https://fontdrop.info/
  text: fontdrop.info
- href: https://wakamaifondue.com/
  text: wakamaifondue.com
---

Variable (or adjustable) fonts are, without exaggeration, a new page in web typography. Adjustable fonts became possible thanks to the joint efforts of Microsoft, Apple, Adobe and Google. The concept was first presented in September 2016, together with the release of <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/">OpenType 1.8</a>.<!--more--> In fact, work in this direction was already underway in the 90s, but only the wide use of fonts on the web gave this idea a second life and rapid development.

At the time of writing, variable fonts are already fairly well supported by applications (Photoshop, Illustrator) and <a href="https://caniuse.com/#feat=variable-fonts">browsers</a> (Chrome, Edge, Safari; in Firefox still behind a flag and only on MacOS), and besides that, several freely distributed demo versions have been published, so you can already start exploring the capabilities of such fonts and prepare to use them in real life.

Variable fonts are an extension of the OpenType format that lets you store all variants of typefaces in a single file and switch between them using not only fixed steps but intermediate values as well. For example, instead of the usual weight values like <code>100</code>, <code>400</code>, <code>700</code> you could set <code>75</code> or <code>650</code>, and just as flexibly adjust the character width from the most condensed to the widest by setting any value within a predefined range — and all of this without loading additional files:

<p data-height="550" data-theme-id="4974" data-slug-hash="pKwOWz" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Variable fonts variations" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/pKwOWz/">Variable fonts variations</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Font: <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/KairosSans">KairosSans</a>

The new format's capabilities solve two problems at once: first, the limits on the number of available typefaces are lifted — they no longer require separate files, and the number of combinations is limited only by the font's settings and the developer's imagination. Second, to get any number of different typefaces on a page, a single file is enough, which saves traffic and shows pages to the user faster.

The font's settings can be controlled with CSS.

<h2 id="properties-levels">High-level and low-level CSS properties</h2>

The low-level ones are <code>font-variation-settings</code> and <code>font-feature-settings</code>. Their values consist of a comma-separated list of name-value pairs.

Code example:

```css
font-variation-settings: "wght" 1, "wdth" 200, "ital" 1, "opsz" 100;
font-feature-settings: "liga" on, "zero" on;
```

The high-level ones are, for example, <code>font-optical-sizing</code>, <code>font-variant-ligatures</code> and <code>font-variant-numeric</code>.

Code example:

```css
font-optical-sizing: 100; /* = font-variation-settings: "opsz" 100; */
font-variant-ligatures: common-ligatures; /* = font-feature-settings: "liga" on; */
font-variant-numeric: slashed-zero; /* = font-feature-settings: "zero" on; */
```

High-level properties are more convenient, but browser support leaves much to be desired, while the low-level ones are already quite usable.

For each low-level property there are sets of predefined settings, but when creating a font it's possible to add your own, which lets the author add any number of custom variations and features to the font.

The available font settings can be thought of as an API: you can only control the ones the font developer predefined. If some settings aren't provided, you can't control them. Consequently, to use a font to its fullest, you need to know exactly what capabilities it has. For discovering a font's properties these services are convenient:

* <a href="https://fontdrop.info/">fontdrop.info</a> — shows all of a font's capabilities and lets you play with them live. Doesn't support WOFF2.
* <a href="https://wakamaifondue.com/">wakamaifondue.com</a> — shows capabilities, live examples and suggests CSS. Since it tries to show examples for every font setting, the page can get noticeably sluggish on fonts with a heap of characters and settings. Supports WOFF2.

For experiments you can use fonts published in the open:

* <a href="https://github.com/adobe-fonts/adobe-variable-font-prototype/releases">Adobe Variable Font Prototype</a>
* <a href="https://github.com/google/fonts/tree/master/ofl/amstelvaralpha">AmstelvarAlpha</a>
* <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/AvenirNext">AvenirNext</a>
* <a href="https://github.com/TypeNetwork/Decovar">Decovar</a>
* <a href="http://home.dootype.com/dt-jakob-variable-concept">dT Jakob Variable Concept</a>
* <a href="https://www.monotype.com/fonts/variable-fonts/">FF Meta Variable</a>
* <a href="http://koe.berlin/variablefont/">Gingham</a>
* <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/KairosSans">KairosSans</a>
* <a href="https://www.fontfabric.com/slovic/">Slovic</a>
* <a href="https://github.com/twardoch/varfonts-ofl/tree/master/VotoSerifGX-OFL">VotoSerif</a>

<h2 id="variation-settings">font-variation-settings</h2>

<a href="https://www.w3.org/TR/css-fonts-4/#font-variation-settings-def">Specification</a>

The property lets you control font variations, defining how a glyph is rendered (slant, line thickness, character width). The exception is <code>ital</code>, where glyphs can be substituted.

In the property value, variation names and their values are listed comma-separated. Variation names are in quotes; custom variation names are written in caps.

Font authors define the range of available values themselves. If you set an unsupported value, it will be rounded to the nearest suitable one.

Default value: <code>normal</code> (the font looks as usual, settings are not applied).

Predefined variations:

<code>ital</code> — italic.

Code example:


```css
font-variation-settings: "ital" 1;
```

Demo:

<p data-height="350" data-theme-id="4974" data-slug-hash="aKLXWW" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="aKLXWW" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/aKLXWW/">aKLXWW</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Font: <a href="https://www.monotype.com/fonts/variable-fonts/">FF Meta Variable</a>

Since glyphs look different in italic, a smooth transition from one to the other is difficult, so here you can only turn the property on or off by setting <code>1</code> or <code>0</code>.

In this demo you can also see how unsupported values get rounded. You can set, for example, <code>"ital" 0.5</code>, and it will be rounded up to one, while all smaller values are rounded down to zero.

<code>slnt</code> — slant.

Code example:


```css
font-variation-settings: "slnt" 1;
```

Demo:

<p data-height="350" data-theme-id="4974" data-slug-hash="OExqpy" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Slant" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/OExqpy/">Font Variation: Slant</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Font: <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/KairosSans">KairosSans</a>

In theory, <code>slnt</code> is a slant, not an italic, meaning the glyphs don't change, but in some fonts it's <code>ital</code> that shows this behavior. For the demo, <b>KairosSans</b> was chosen, in which <code>ital</code> behaves like <code>slnt</code>.

Unlike <code>ital</code>, slant can change smoothly.

<code>opsz</code> — optical size.

Code example:


```css
font-variation-settings: "optz" 10;
```

Demo:

<p data-height="350" data-theme-id="4974" data-slug-hash="bKoJbr" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Optical size" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/bKoJbr/">Font Variation: Optical size</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Font: <a href="https://github.com/google/fonts/tree/master/ofl/amstelvaralpha">AmstelvarAlpha</a>

This parameter controls the thickness of thin lines; their rendering can be critically important for readability at small font sizes:

<p data-height="400" data-theme-id="4974" data-slug-hash="oyGOWb" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Optical size for small font-size" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/oyGOWb/">Font Variation: Optical size for small font-size</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Here you can clearly see that for body text it's better to set a smaller <code>opsz</code> value, while for headings a larger one works, because at large font sizes thin lines will be visible anyway.

<code>wdth</code> — width

Code example:


```css
font-variation-settings: "wdth" 150;
```

Demo:

<p data-height="350" data-theme-id="4974" data-slug-hash="gKGJjE" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Width" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/gKGJjE/">Font Variation: Width</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Font: <a href="http://koe.berlin/variablefont/">Gingham</a>

Unlike a plain transform, when the width changes the vertical lines keep their thickness, the line ratios stay the same, and the font doesn't look distorted:

<p data-height="450" data-theme-id="4974" data-slug-hash="qKPGgo" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation Width vs Transform Scale" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/qKPGgo/">Font Variation Width vs Transform Scale</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Control over glyph width is available in many fonts.

<code>wght</code> — weight

Code example:


```css
font-variation-settings: "wght" 900;
```

Demo:

<p data-height="378" data-theme-id="4974" data-slug-hash="KeXjZv" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Weight" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KeXjZv/">Font Variation: Weight</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Font: <a href="https://www.monotype.com/fonts/variable-fonts/">FF Meta Variable</a>

Another setting found in many fonts. It not only lets you get by with a single file for any weight variants, but also control its value flexibly.

The full list of predefined variations can be found in the <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/dvaraxisreg#registered-axis-tags">OpenType specification</a>, along with a detailed description of each.

As already mentioned above, when developing a font authors don't have to limit themselves to only the variations from the specification; they can add their own, which makes a lot of interesting things possible.

For example, the <a href="https://github.com/TypeNetwork/Decovar">Decovar</a> font has a whole 15 settings, of which only one is standard — line weight control — so a single font yields a huge number of variants:

<p data-height="379" data-theme-id="4974" data-slug-hash="WyZVQd" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Decovar is beautiful ❤️" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/WyZVQd/">Decovar is beautiful ❤️</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


```css
font-variation-settings: "BLDA" 913.8, "BLDB" 162.8, "SKLB" 1000;
```

Note that custom tag names are written in caps.

And <a href="https://www.fontfabric.com/slovic/">Slovic</a> has just one setting, but it lets you smoothly switch between the preset styles:

<p data-height="350" data-theme-id="4974" data-slug-hash="KeXjbZ" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Custom Variation: Style" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KeXjbZ/">Font Custom Variation: Style</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Variation values can be <a href="https://codepen.io/yoksel/full/jKaaPq/">animated</a>.

<h2 id="feature-settings">font-feature-settings</h2>

<a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-feature-settings">Specification</a>

This setting lets you turn some of a font's capabilities on or off, for example ligatures or old-style numerals:

<p data-height="500" data-theme-id="4974" data-slug-hash="wXPBqp" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Feature Settings" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/wXPBqp/">Font Feature Settings</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The features from the demo:

* <code>liga</code> — ligatures (when two characters are displayed as one for readability)
* <code>smcp</code> — lowercase displayed as small capitals
* <code>frac</code> — fraction display
* <code>onum</code> — old-style numerals
* <code>zero</code> — slashed zero

If a feature needs to be turned on, its name alone is enough, for example:


```css
font-feature-settings: "smcp", "onum";
```

Although a form like <code>"smcp" on</code> helps better understand what's happening in the code.

If you need to turn it off, be sure to add <code>off</code>:


```css
font-feature-settings: "smcp" off, "onum" off;
```

Some features are on by default, for example various kinds of ligatures: <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_ae#a-nameclig-idcligatag-clig" title="Contextual Ligatures">clig</a>, <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_ko#a-nameliga-idligaatag-liga" title="Standard Ligatures">liga</a> and <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_pt#tag-rlig" title="Required Ligatures">rlig</a>. You can read more in the <a href="https://www.w3.org/TR/css-fonts-3/#default-features">specification</a>.

Only a small number of capabilities are shown here; the full list with detailed descriptions is in the <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/featurelist">OpenType specification</a>.

Many examples with code can be found here: <a href="https://www.typotheque.com/articles/opentype_features_in_css">OpenType features in CSS</a>.

As mentioned above, <code>font-feature-settings</code> is a low-level setting. The specification recommends using high-level variants whenever possible, for example:

* <code>font-variant-ligatures</code> for controlling ligatures (<a href="https://www.w3.org/TR/css-fonts-3/#font-variant-ligatures-prop">specification</a>)
* <code>font-variant-caps</code> for converting lowercase to capitals (<a href="https://www.w3.org/TR/css-fonts-3/#font-variant-caps-prop">specification</a>)
* <code>font-variant-numeric</code> for controlling numeral display (<a href="https://www.w3.org/TR/css-fonts-3/#font-variant-numeric-prop">specification</a>)

More options can be found in the specification's <a href="https://www.w3.org/TR/css-fonts-3/#font-rend-props">Font Feature Properties</a> section.

<code>font-feature-settings</code> can be used to get a more or less radical variant of a font:

<p data-height="350" data-theme-id="4974" data-slug-hash="oyoEzw" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Slovic with variations & features" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/oyoEzw/">Slovic with variations & features</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The author of the <a href="http://home.dootype.com/dt-jakob-variable-concept">dT Jakob Variable Concept</a> font used the features in an even more interesting way: he made not only a variable font but a layered one too, and the style for each layer is switched on with ligatures:

<p data-height="350" data-theme-id="4974" data-slug-hash="dKZdRV" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="dKZdRV" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/dKZdRV/">dKZdRV</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

I'm not sure this is a proper use of ligatures, but the variant is certainly interesting.

<h2 id="usage">Using them in real life</h2>

At the moment not all browsers support controlling variable fonts, so besides the adjustable font you'll have to include the regular ones on the page. It's <a href="https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604">suggested</a> to do it the following way:


```css
@font-face {
  font-family: 'MyFontVariable';
  src: url('source-sans-variable.woff2') format('woff2');
  font-weight: 1 999;
}

@font-face {
  font-family: 'MyFont';
  src: url('source-sans-regular.woff2') format('woff2'),
         url('source-sans-regular.woff') format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'MyFont';
  src: url('source-sans-black.woff2') format('woff2'),
         url('source-sans-black.woff') format('woff');
  font-weight: 900;
}
```

Then <code>@supports</code> detects browser support for the settings and applies the right font:


```css
html {
  font-family: 'MyFont', sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'MyFontVariable', sans-serif;
}
}
```

Adjustable fonts are a rich topic, and you can dig into it endlessly. From my perspective, the questions covered in this article are just the tip of the iceberg.

I only recently started diving into the topic, so I may have made mistakes and inaccuracies. Please let me know about them if you find any.
