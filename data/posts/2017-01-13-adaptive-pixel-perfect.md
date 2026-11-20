---
title: Adaptive Pixel Perfect

image: https://img-fotki.yandex.ru/get/195786/5091629.a5/0_9217a_e94cfdc0_orig
description: "A tool for checking responsive pages against their design mockups"

tags: [tools]

customJs: "pixel-glass/script.js"
customCSS: "pixel-glass-demo.css"
body_data: "data-has-sticky-point"

links:
- href: https://github.com/yoksel/pixel-glass-js
  text: 'Project repository'
- href: https://yoksel.github.io/pixel-glass-js/
  text: 'Demo page with mockups'
---

I'll start from afar. Not long ago I joined <a href="https://htmlacademy.ru">HTML Academy</a> as a mentor. Besides the fact that mentoring helps organize your knowledge, it surprisingly stimulates the development of various useful things, because interesting tasks come up in the process whose solutions can be conveniently automated.<!--more-->

For example, that's how the <a href="https://yoksel.github.io/html-tree/">HTML tree generator</a> came to be: it lets you view a document's structure, spot simple mistakes in BEM classes and check the heading tree. A useful tool not only for a student but also for a mentor; I use it regularly.

My new project also appeared as a solution to a task that constantly comes up during learning: pages with responsive design need to be checked against their mockups.

Below is a bit of text about the search for a solution. If you're too lazy to read, <a href="https://yoksel.github.io/pixel-glass-js/">you can go straight to playing on the demo page</a>.

Students receive a training design of three pages, each of which has mockups for three states: mobile, tablet and desktop — nine mockups in total. While laying out a responsive page, it makes sense to periodically change the window size and check that adding styles for the desktop version didn't break, say, the mobile one. What's the best way to check against the mockup here?

Screenshot tools used in big projects are too heavy for this task; something very simple is needed, something any beginner could use.

The first thing I remembered, of course, was the Pixel Perfect plugin (it exists at least for Chrome and Firefox), but it doesn't fit for a number of reasons. For example, loaded mockups can't change when navigating between pages or when the browser window is resized, and switching them by hand every time gets annoying pretty fast. Especially since there are media queries, which can perfectly well switch mockups for us.

My very first solution looked like this:

```html
<style>
  BODY {
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-image: url( 'img/index-mobile.png' );
  }

  @media (min-width: 768px) {
    BODY {
      background-image: url( 'img/index-tablet.png' );
    }
  }

  @media (min-width: 1024px) {
    BODY {
      background-image: url( 'img/index-desktop.png' );
    }
  }
</style>
```

This code is inserted into the <code>&lt;head></code> of each page. It defines the needed media queries, and the image links are changed to the actual mockups for each specific page.

The mockups change when switching between pages and when the window is resized; this is already usable and quite convenient. The mockups sit right under the markup, so you don't have to keep going to the graphics editor for them, and even such a simple construction can noticeably save time.

But as styles are written, the page gets its own backgrounds and images, and the mockups in the bottom layer become invisible. What to do?

My next solution was a Chrome extension that creates a semi-transparent layer with the mockups on every page. When the window is resized, the mockups change via media queries, as in the previous case. As a bonus, controls for the mockup layer's transparency and the ability to enable the <code>difference</code> blend mode were added, to make differences easier to find.

It turned out great. But it only works in Chrome, the breakpoints for switching mockups and the image paths must be set in the extension's configs, the mockup images must live inside the extension, and there were various other limitations. In short, not universal; every new project would need manual setup, and that's no good at all for beginners.

I wanted to find a really, really simple solution, one that anyone could handle installing and configuring, while at least roughly understanding what they're doing.

Comparing markup with mockups requires two layers: a layer with the markup and a layer with the mockups. On one hand, you could insert the mockup layer into the page's markup by hand; on the other, there's a big risk of forgetting it there when it's no longer needed, so the next variant was to use existing page elements as the layers.

If the mockups are set as the background for <code>&lt;body></code>, changing <code>&lt;body></code>'s opacity will make the mockups semi-transparent too, so it's better to use the <code>&lt;html></code> element as the mockup layer:

```html
<style>
  HTML {
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-image: url( 'img/index-mobile.png' );
  }

  @media (min-width: 768px) {
    HTML {
      background-image: url( 'img/index-tablet.png' );
    }
  }

  @media (min-width: 1024px) {
    HTML {
      background-image: url( 'img/index-desktop.png' );
    }
  }
</style>
```

As in the previous case, the mockups will lie under the markup, but now if <code>&lt;body></code> has a background, they won't be visible. Let's make the markup layer semi-transparent by adding <code>opacity</code> to <code>&lt;body></code>:

```html
<style>
  /* Используем &lt;html> как слой с макетами */
  HTML {
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-image: url( 'img/index-mobile.png' );
  }

  @media (min-width: 768px) {
    HTML {
      background-image: url( 'img/index-tablet.png' );
    }
  }

  @media (min-width: 1024px) {
    HTML {
      background-image: url( 'img/index-desktop.png' );
    }
  }

  /* Делаем слой с разметкой полупрозрачным */
  BODY {
    opacity: .5;
  }
</style>
```

This is also somewhat usable, but this solution lacked convenient transparency controls for me, so I wrote a small script that adds a panel like this to the page:

<div class="sticky-container">
  <div class="sticky-point"></div>
</div>

It lets you control <code>&lt;body></code>'s transparency (in this case the mockups are replaced by a simple striped background); it can be dragged around the page and turned off when not needed.

I decided not to make a browser extension, so as not to limit the number of browsers where this can be used.

The installation ends up looking like this:

<ol class="list list--has-codes">
<li>Install the package into your project folder via npm:

```html
npm i pixel-glass --save-dev
```
</li>

<li>Put the mockup images into your project in the <code>img</code> folder (or another images folder inside the project).</li>

<li>Insert this code into the page's <code>&lt;head></code>:

```html
<!-- Pixel Glass -->
<style>
  HTML {
    background-repeat: no-repeat;
    background-position:  50% 0;
    /* По умолчанию мобильный макет */
    background-image: url( "img/index-mobile.png" );
  }
  /* Планшет */
  @media ( min-width: 760px ) {
    HTML {
      /* Планшетный макет */
      background-image: url( "img/index-tablet.png" );
    }
  }
  /* Десктоп */
  @media ( min-width: 960px ) {
    HTML {
      /* Десктопный макет */
      background-image: url( "img/index-desktop.png" );
    }
  }

  BODY {
    opacity: .5;
  }
</style>

<link rel="stylesheet" href="../node_modules/pixel-glass/styles.css">
<script src="../node_modules/pixel-glass/script.js"></script>
<!-- // Pixel Glass -->
```

  Edit it for your project: adjust the media queries, change the image addresses to working ones.
</li>

<li>Refresh the page and use it.</li>
</ol>

In my opinion, it turned out to be a pretty convenient tool, but surely something can be improved. If you have any ideas on that, write about them in the comments. I'd also be interested to know how you solve such tasks and what tools you use for it.

<b>UPD:</b> the library moved to npm; thanks to all participants of the <a href="https://twitter.com/webstandards_ru/status/819884209674317824">discussion</a>.

<h2>FAQ</h2>

<ul>
<li>
  <b>Why is there such a sausage of code in the <code>&lt;head></code>? Why not move the media queries and image paths into the script's config/settings?</b>

  <p>The base part — switching mockups when the window is resized — can easily be done with media queries; no JavaScript is needed for that. Any layout developer can write such code themselves, by hand. <b>Pixel Glass</b> simply makes controlling transparency a bit more convenient.</p>

  <p>In this case CSS plays the role of the config, and any level of user can easily handle setting it up. This matters because the tool is intended first of all for people who are just starting to do layout.</p>
</li>
<li>
  <b>I don't like how you did everything at all; I would have done it differently!</b>

  <p>Do it : ) It would be great if new convenient tools appeared.</p>
</li>
</ul>
