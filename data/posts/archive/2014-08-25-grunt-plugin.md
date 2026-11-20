---
title: Why I wrote a Grunt plugin

tags: [svg, js]

image: //img-fotki.yandex.ru/get/6820/5091629.a1/0_84c51_1bb64b9_orig
description: "Initial data: three dozen colorless SVG images (their colors are set later via CSS) and the task of making a PNG+CSS fallback for old browsers out of them."

links:
- href: https://www.npmjs.org/package/svg_fallback
  text: svg_fallback
- href: https://www.npmjs.org/~yoksel
  text: npmjs.org/~yoksel
- href: http://gruntjs.com/
  text: gruntjs.com
- href: /svg-in-ie8
  text: Pitfalls of pure SVG
---

One fine day we (my colleagues and I) faced the task of processing a large number of SVG icons.
Initial data: three dozen colorless SVG images (their colors are set later via CSS) and the task of making a PNG+CSS fallback for old browsers out of them.<!--more-->

Approximate steps:

1. Color each icon the needed color.
2. For some icons, make variations of another color and size.
3. Assemble into a PNG sprite.
4. Write CSS.

This produces two versions of the images: transparent originals and the ones in the sprite. Both versions must always be in sync with each other, and ideally have shared CSS with shared sizes and fills for SVG.

Obviously, doing the assembly by hand takes a long time, and the process needs to be automated, especially keeping in mind the need to sync changes.

If you skip the second step, the initial version can be assembled from existing Grunt plugins. Though it comes out somewhat strange, the construction works.

The first build looked roughly like this:

1. <a href="https://www.npmjs.org/package/grunt-grunticon">grunt-grunticon</a> — colors and creates PNG versions.
2. <a href="https://www.npmjs.org/package/grunt-spritesmith">grunt-spritesmith</a> — generates the sprite and CSS.

This let me quickly get some intermediate result, but I wasn't satisfied with the CSS produced at the output. For example, it didn't contain fill colors for SVG, and they'd have to be set separately somewhere. Besides, to get icon variations of another color and size in the sprite, the SVG originals would have to be duplicated, and for <b>grunticon</b> to color the SVG files the needed colors, they all have to be renamed in a special way (and renamed back before the sprite generation, yep).

That's how I arrived at the need to make my own Grunt plugin, whose main tasks would be coloring images and creating variations of several colors and sizes. And also generating a library of SVG symbols + sprite + CSS, so as not to get up twice.

My plugin: <b><a href="https://www.npmjs.org/package/svg_fallback">svg_fallback</a></b>.

<i>(Yes, I know it's better to use a hyphen, and the name is also missing the grunt prefix, but this is my first plugin : )</i>

What it does:

1. Takes a folder of SVG images and makes a symbol library out of it.
2. Takes that same folder again, assembles a sprite from the images and generates CSS with fills, sizes and a background image for old browsers.

The folder name is used as a prefix in classes and file names. This is needed so that no conflicts arise between different icon sets if they meet on one page.

When the work finishes, a demo page with the plugin's results opens (you can check both the SVG and the PNG).

The simplest scenario is described above, where the source files aren't modified in the process, but the most interesting part begins if you put a <b>config.json</b> file with the desired changes into the folder with the sources.

For example, you can set the color all icons will get by default:

```javascript
{
  "color": "orangered"
}
```

Right now the plugin can only color transparent icons.

Another task: the source SVGs are not the size you plan to use. The needed sizes can be set like this:

```javascript
{
  "default-sizes": {
    "heart": {
      "width": 182
      },
    "home": {
      "height": 42
    }
  }
}
```

The SVGs themselves on the page can be any size, but for generating PNG+CSS the sources must be brought to the concrete sizes you plan to use later.

And here's how you can make several variations of one file:

```javascript
{
  "icons": {
    "heart": [{
      "width": 50
    }, {
      "color": "green"
    }, {
      "width": 150,
      "color": "steelblue"
    }],
    "home": [{
      "width": 150
    }, {
      "width": 170,
      "color": "teal"
    }, {
      "height": 62,
      "color": "yellowgreen"
    }]
  }
}
```

In this case the output will be, for example, the source file <b>heart.svg</b> and its variations:

<pre><b>heart--w50.svg
heart--green.svg
heart--w150--steelblue.svg</b></pre>

You can set the configuration in parts, or write everything at once:

```javascript
{
  "color": "orangered",
  "default-sizes": {
    // размеры по умолчанию
  },
  "icons": {
    // вариации иконок
  }
}
```

The result of the plugin's work will be three files named after the parent folder. For example, the contents of the <b>myicons/</b> folder will turn into:

- <b>myicons.svg</b> — symbol library
- <b>myicons.png</b> — sprite
- <b>myicons.css</b> — CSS with icon sizes and a fill for SVG.

To use the resulting icons on a page you need to:

1. Include <b>myicons.css</b> on the page.
2. Place the icon library (the contents of the <b>myicons.svg</b> file) at the beginning of the document (after the opening <code>&lt;body></code>).
3. Individual icons are inserted into the page like this:

 ```html
<svg xmlns="http://www.w3.org/2000/svg" class="myicons myicons--heart">
  <use xlink:href="#myicons--heart"></use>
</svg>
```

<b>Upd:</b> if you omit the closing tags in SVG (write <code>&lt;use/></code> instead of <code>&lt;use>...&lt;/use></code>), HTML5 markup stops working in old browsers.
All SVG tags on the page must have a paired closing tag.
Thanks to <a href="https://twitter.com/mista_k">mista_k</a> for the clarification.

Displaying the icon in old browsers is provided by this code:


```css
.ie8 .myicons {
  background-image: url(noconfig.png);
}
```

It assumes the page has an <code>.ie8</code> class by which the needed IE version can be detected.

To better understand how it all works, you can install the package and look into the <b>svg_fallback/test/</b> folder.

While writing this plugin, a decision was made to move the code responsible for modifying files into a separate package: <a href="https://www.npmjs.org/package/svg-modify">svg-modify</a>, which, if desired, can be used as a Grunt plugin: <a href="https://www.npmjs.org/package/grunt-svg-modify">grunt-svg-modify</a>.

Now I have a whole two plugins : ) True, they solve rather specific tasks and are unlikely to find wide application, but if you need to do something similar with SVG icons, they can save you time.

If you want to use them, keep in mind that <a href="https://www.npmjs.org/package/svg-modify">svg-modify</a> will most likely still be refined (I'd like more sensible color handling), and in general I still occasionally find bugs of various sizes in the plugins, so I can't promise their stable work yet (though I'll try).

Also, <a href="https://www.npmjs.org/package/svg_fallback">svg_fallback</a> was written for a specific task, and for your purposes you may want to change the file naming or the CSS output format. The plugin has no such options, but you can fork it and rewrite it to your taste.

It should also be noted that my knowledge of JS leaves much to be desired, and my code may seem strange to you. By the way, I'd be grateful for advice on how to improve it.

<b>Upd:</b> thanks to <a href="https://twitter.com/mista_k">mista_k</a> and <a href="https://twitter.com/alexeyten">alexeyten</a> for help and valuable advice.
