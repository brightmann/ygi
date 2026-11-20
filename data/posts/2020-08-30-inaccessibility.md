---
title: Inaccessibility in pictures

image: //yoksel.github.io/assets/img/articles/inaccessibility/preview.png

tags: [a11y]

description: How screen readers see websites and what they may fail to find there if the page is marked up badly

links:
- href: https://www.nvaccess.org/
  text: NVDA
- href: https://www.freedomscientific.com/products/software/jaws/
  text: JAWS
- href: https://support.microsoft.com/ru-ru/help/22798/windows-10-complete-guide-to-narrator
  text: Complete guide to using Narrator
- href: https://help.apple.com/voiceover/info/guide/10.12/?lang=ru#/
  text: 'Apple Accessibility: a quick guide to VoiceOver'
- href: https://developer.paciellogroup.com/blog/2016/06/using-the-html-lang-attribute/
  text: Using the HTML lang attribute
- href: https://yoksel.github.io/a11y-demo/
  text: A11y demo
- href: https://allyjs.io/tutorials/hiding-elements.html#how-to-hide-elements-visually
  text: How to hide elements visually
- href: https://validator.w3.org/nu/
  text: W3C HTML Validator
- href: https://yoksel.github.io/html-tree/
  text: HTML tree generator
- href: https://weblind.ru/
  text: Weblind
  description: Recommendations on developing websites for people with visual impairments
- href: https://web-standards.ru/articles/tags/a11y/
  text: Articles about accessibility in the Web Standards blog
- href: https://habr.com/ru/company/yandex/blog/515460/
  text: Technology preferences of users with visual impairments in 2020. Research by Yandex
- href: https://medium.com/web-standards/pragmatic-a11y-rules-b16dd2f77685
  text: Useful accessibility rules that will stick in your memory
- href: https://yoksel.github.io/bad-practices/forms-markup/
  text: 'HTML & CSS: how not to do it. Form markup'
---

When we talk about accessibility, I often miss the visual side of it. "Inaccessible to a screen reader" — what does that look like?

When you have the chance to launch a screen reader and see everything with your own eyes, it's quite an eye-opening experience, after which you start choosing tags much more carefully. I would like everyone who deals with markup to try it, but I suspect that although many have heard about accessibility and screen readers, far from everyone has actually tried launching one — because you not only have to find where the screen reader is turned on, but also figure out its unfamiliar and rather unintuitive interface.<!--more-->

I don't launch a screen reader that often, and every time I have to recall the commands and get used to it again. In general, even for a sighted person, trying to figure out a screen reader's settings takes effort, and how a visually impaired user manages them is scary to imagine (and after that the person goes online and lands on websites where nobody expected them).

I think everyone who deals with markup should try reading pages with a screen reader, because it's better to see page inaccessibility once than to hear about it a hundred times. Below we will look at how you can test web pages with screen readers and learn what to pay attention to when testing.

At the moment, built-in screen readers exist both in MacOS (VoiceOver) and in Windows (Narrator). There are other applications too, for example [NVDA](https://www.nvaccess.org/) and [JAWS](https://www.freedomscientific.com/products/software/jaws/), but for a first acquaintance with a screen reader it's easier to use the one already built into your operating system.

There is official documentation for VoiceOver and Narrator:

* [Complete guide to using Narrator](https://support.microsoft.com/ru-ru/help/22798/windows-10-complete-guide-to-narrator)
* [Apple Accessibility: a quick guide to VoiceOver](https://help.apple.com/voiceover/info/guide/10.12/?lang=ru#/)

Those links contain a lot of text, but we only need a small number of commands.

<h2 id="voiceOver">VoiceOver commands (MacOS)</h2>

**Launching and settings**

To launch VoiceOver press `Cmd + F5`. After that you can switch to the browser window and try reading the page.

If you need additional settings, you can find them in **System Preferences/Accessibility**, and even more settings there in the **VoiceOver Utility** subsection.

All VoiceOver commands are entered together with the **VO** key combination: `Control + Option` or `Caps Lock`.

**Moving sequentially between page elements:**

* <code>VO + &larr;</code> — go to the previous element
* <code>VO + &rarr;</code> — go to the next element

**Starting top-to-bottom reading:**

* <code>VO + A</code> — start reading text from the current position on the page

**Interacting with DOM elements:**

* <code>VO + Shift + &darr;</code> — start interacting with an element ("dive into" it)
* <code>VO + Shift + &uarr;</code> — stop interacting with an element ("dive out")

**"Bird's-eye view":**

* <code>VO + U</code> — open the rotor

The last command is the most interesting one: it shows all the landmarks and headings of the page, all links and inputs. You can jump straight to the section you need, like using the table of contents of a paper book, walk through the links, or move between form elements.

<h2 id="narrator">Narrator commands (Windows)</h2>

**Launching and settings**

To launch Narrator, press <code><span class="win-logo"><span class="visually-hidden">Windows</span></span> + Ctrl + Enter</code> at the same time.

Settings panel: <code><span class="win-logo"><span class="visually-hidden">Windows</span></span> + Ctrl + N</code>

By default the Narrator keys are assigned to `Caps Lock` and `Insert` (hereinafter `NR`).

* <code>NR + F1</code> — screen reader command reference

**Moving sequentially between page elements:**

* <code>NR + &larr;</code> — go to the previous element
* <code>NR + &rarr;</code> — go to the next element
* <code>NR + Page Up</code>/<code>NR + Page Down</code> — switch the element navigation mode: move between words, sentences, links, landmarks or form elements.

**Starting top-to-bottom reading:**

* <code>NR + &darr;</code> — start reading from the current position
* <code>NR + &uarr;</code> or <code>Ctrl</code> — stop reading

**"Bird's-eye view":**

* `NR + S` — hear a page summary (number of links, landmarks and headings)
* pressing `NR + S` twice opens a dialog with this data

* `NR + F5` — view the list of landmarks
* `NR + F6` — view the list of all headings on the page
* `NR + F7` — view the list of all links

These commands are a rough equivalent of the rotor in VoiceOver. Hotkeys exist only for these sections, but from them you can get to others.

With a reader and its commands at hand, you can bravely launch a screen reader and try reading websites.

**Important:** before launching screen readers, make sure the pages you are interested in have the [correct language specified](https://developer.paciellogroup.com/blog/2016/06/using-the-html-lang-attribute/) (for example, `<html lang="ru">`), and that the language in which you plan to read text is installed in the system. For example, if you want to read text in Russian but it is missing from the operating system, the screen reader may start reading Russian text letter by letter, announcing before each one that it is a `cyrillic letter`. You may need to tweak the settings before using the reader.

You can start reading this very page or any other, but for a deeper understanding of the difference between bad and good markup I created a project that has both variants: [A11y demo](https://yoksel.github.io/a11y-demo/).

The [accessible](https://yoksel.github.io/a11y-demo/good.html) and [inaccessible](https://yoksel.github.io/a11y-demo/bad.html) pages look visually identical:

<img
  src="/assets/img/articles/inaccessibility/a11y-demo.png"
  alt="A11y demo: screenshot of the page"
  loading="lazy"
  width="500"
/>

The difference is visible only in the page code, but for screen readers this difference is significant.

The inaccessible version is marked up as if the developer thought "What difference do tags make? I'll add CSS and it will look right". Divs instead of headings, instead of lists, buttons — instead of everything. A sighted user hardly cares what is in the code, but for visually impaired users such a page will be problematic to use.

Below you will see examples of exactly how a screen reader sees (or does not see) different markup variants. While reading a page, VoiceOver mirrors the spoken text in a separate popup, and that is what you will see in the screenshots.

The screenshots will help you understand what a screen reader may fail to find on a page if you are too lazy to mark it up properly, and will suggest what to pay attention to if you decide to launch a screen reader and read pages yourself.

In the examples below, all screenshots will be from VoiceOver. Narrator's interface is different, of course, but they show the page structure in roughly the same way.

<h2 id="where-to-look">Where to look?</h2>

How do we usually orient ourselves on web pages? We scan large elements and headings with our eyes, and pay attention to forms and links. Screen readers can do that too: both VoiceOver and Narrator can show headings, links and interactive elements.

<h3 id="headers">Headings</h3>

To see which headings are available to the reader, run the commands:

* Narrator: `NR + F6`
* VoiceOver: open the rotor `VO + U` and scroll with the arrows to the headings section

If the page has no `H1-H6` tags, the section may be empty or missing altogether.

For the [badly marked up version](https://yoksel.github.io/a11y-demo/bad.html) the heading list will look like this:

<img
  src="/assets/img/articles/inaccessibility/bad-rotor-headers.png"
  alt="Bad version: only H1 is visible in the rotor"
  loading="lazy"
  width="500"
/>

The page has only one real heading (`H1`); all other headings are just divs with corresponding styles.

From such a heading you can only get to the site header. The page has many other sections, but they are not available for quick navigation.

On the [well-marked-up page](https://yoksel.github.io/a11y-demo/good.html) the rotor will show all the headings:

<img
  src="/assets/img/articles/inaccessibility/good-rotor-headers.png"
  alt="Good version: all document headings are visible in the rotor"
  loading="lazy"
  width="500"
/>

You can choose the heading you need and jump straight to the corresponding section — it's like finding the right chapter in a book's table of contents. Without a table of contents you would have to flip through the whole book, and in the case of a website — listen to the whole site from top to bottom.

If the page structure implies a heading but the design doesn't have one, add it to the markup and hide it with `.visually-hidden`:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
```

You can read about this method [here](https://allyjs.io/tutorials/hiding-elements.html#how-to-hide-elements-visually).

Regular visitors won't notice the difference, while screen reader users get the ability to quickly jump to any section of the page.

It's important not only to use `H1-H6`, but also to build a hierarchical document structure with them. This makes it possible to understand even by ear what is nested inside what, and how the page sections relate to each other.

Heading levels are not about design, not about font size — they are about document hierarchy. It doesn't matter what size the fonts are in the design — with CSS you can give any element any font. So if you see small text in the design where the document logic calls for an `H1`, or large text where the level works out to `H4`, choose the heading level based on the hierarchical structure of the document, and set the font size you need with styles.

You can check the heading hierarchy at [validator.w3.org/nu/](https://validator.w3.org/nu/) by ticking the **Outline** checkbox; the report appears at the bottom of the page:

<img
  src="/assets/img/articles/inaccessibility/validator-headers.png"
  alt="Heading tree in the HTML markup validator"
  loading="lazy"
  width="500"
/>

You can also check headings in the [HTML tree generator](https://yoksel.github.io/html-tree/):

<img
  src="/assets/img/articles/inaccessibility/html-tree-headers.png"
  alt="Heading tree in the BEM markup validator"
  loading="lazy"
  width="500"
/>

Proper use of heading levels, among other things, makes it easier to pick the right `H1-H6` tag: when you have a clear picture of the document structure, you immediately know which tag belongs where. It's very convenient.

<h3 id="landmarks">Landmarks</h3>

From a screen reader's point of view, landmarks are the `main`, `aside`, `nav` and `article` elements — the main content of the page, supplementary content, navigation and articles. Narrator also counts `header` and `footer` as landmarks.

To see which landmarks the screen reader found, run the commands:

* Narrator: `NR + F5`
* VoiceOver: open the rotor with `VO + U` and scroll with the arrows to the landmarks section

Suppose the developer didn't know about these tags or decided it didn't matter which ones to use. You'd get something like this:

<img
  src="/assets/img/articles/inaccessibility/bad-rotor-landmarks.png"
  alt="Bad version: no landmarks in the rotor"
  loading="lazy"
  width="500"
/>

The screen reader found no meaningful elements on the page. The problem is the same as with headings: if the rotor doesn't show a landmark, the user can't quickly jump to the section they need, and may not even learn of its existence.

And here's what landmarks look like when tags are used as intended:

<img
  src="/assets/img/articles/inaccessibility/good-rotor-landmarks.png"
  alt="Good version: the rotor shows the main section, a complementary one and navigation"
  loading="lazy"
  width="500"
/>

Not everything is translated, but at least you can roughly understand what's on the page and jump to the element you need.

The navigation descriptions are made with `aria-label`. This lets you tell navigation elements apart when there are several of them on the page with different content.

The `main` element lets a screen reader user jump straight to the main content of the page, skipping the header and the top menu. You don't need to do anything special for this except use the right tag.

<h3 id="forms">Forms</h3>

Forms are used on web pages for all kinds of purposes. Screen readers can read form elements, and if everything is done properly, a user can fill out a form without even seeing it.

They can buy a ticket, file paperwork, or place an order in an online store — provided the developer wasn't lazy and did everything right. And if they were lazy, what then?

To see which form elements the screen reader found, run the commands:

* Narrator: `NR + F5`, then choose Form fields in the bottom menu
* VoiceOver: open the rotor with `VO + U` and scroll with the arrows to the form controls section

Let's open the rotor on the [bad example](https://yoksel.github.io/a11y-demo/bad.html) page:

<img
  src="/assets/img/articles/inaccessibility/bad-rotor-lost-inputs.png"
  alt="Bad version: some inputs are missing from the rotor"
  loading="lazy"
  width="500"
/>

The screen reader found a few radio buttons and a checkbox with no descriptions. What all these inputs do is completely unclear.

Sometimes on the [bad example](https://yoksel.github.io/a11y-demo/bad.html) page the screen reader may show the nearest text as labels, but this behavior is unstable. On top of that, the screen reader may substitute the wrong text. If you open the rotor several times while moving around the page, you can catch different variants of input labels.

And here's what the form actually looks like:

<img
  src="/assets/img/articles/inaccessibility/bad-form.png"
  alt="Screenshot of the form"
  loading="lazy"
  width="600"
/>

Half of the inputs and the "Order" button are missing from the rotor, and the remaining ones have no labels.

In the [bad example](https://yoksel.github.io/a11y-demo/bad.html) you can see several common mistakes:

* inputs hidden with `display: none` (in the **Variety** group)
* inputs have no labels (in the **Weight per package** group)
* labels have no text (in the color picker)
* `div` instead of `button` on the form submit button

<h4>display: none</h4>

First, hiding inputs with `display: none` removes them from the page completely — both visually and for screen readers. A screen reader user has no way to reach them. In the rotor screenshot above you can see that only the radio buttons for choosing weight and color are shown, and the variety checkboxes are simply absent. When reading the page top to bottom, the screen reader will dutifully read the checkbox labels, but the checkboxes themselves are completely absent for it.

Second, using `display: none` creates problems for keyboard navigation, because it makes it impossible to reach those inputs by tabbing. From the browser's point of view they aren't on the page at all, so tab navigation will simply ignore that group of inputs. Sighted users can still choose the checkboxes by clicking the labels, but you can't do it with `Tab`; you'd have to click manually.

To hide inputs while keeping them available to screen readers and keyboard navigation, use the `.visually-hidden` class. That way they stay available to all users.

<h4>Labels for inputs</h4>

Missing labels are also a serious problem. The inputs are available to the screen reader, you can move to them, but what they do is completely unclear:

<img
  src="/assets/img/articles/inaccessibility/bad-no-label.png"
  alt="Bad version: the input has no label"
  loading="lazy"
  width="500"
/>

The user can try to orient themselves by the surrounding text, but it's easy to get confused about what follows what and to pick the wrong input for the text. To avoid confusion, it makes sense to always tie labels with a text description to all inputs.

Labels also make the form more convenient for sighted users: when labels exist, you can click the label text instead of aiming at the input. You can compare this behavior in the [bad example](https://yoksel.github.io/a11y-demo/bad.html): to choose a variety, clicking the text is enough, but to choose the weight you have to aim at the radio button, which is very inconvenient.

You can tie a label to an input with the `for` attribute:

```html
<label
  for="input-1">
  Красные яблоки
</label>

<input
  type="checkbox"
  id="input-1"
  value="product-1"
```

Or like this, nesting the input inside the label:

```html
<label>
  Красные яблоки

  <input
    type="checkbox"
    id="input-1"
    value="product-1"
  >
</label>
```

<p class="codepen" data-height="280" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="QWaPzJe" style="height: 280px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="QWaPzJe">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/QWaPzJe">
  QWaPzJe</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Both ways work the same, so it doesn't matter which one you choose. The main thing is not to forget to add labels for all inputs on the page.

<h4>Labels without text</h4>

Even if labels exist and are tied to inputs, the absence of text in them makes them completely useless for screen reader users. As we saw in the screenshot above, such inputs will be shown in the rotor without descriptions, and if you move directly to the input, the screen reader will show this:

<img
  src="/assets/img/articles/inaccessibility/bad-no-label-text.png"
  alt="Bad version: the input has no label"
  loading="lazy"
  width="500"
/>

And since there is no text nearby at all, a screen reader user has no chance of understanding what they are being offered to choose here.

If regular users don't need visible text in the labels, it can be added only for screen readers: wrap the label's text content in a `span` with the `.visually-hidden` class.

<h4>Div instead of Button</h4>

The last problem is a div instead of a button. Visually there's no difference, and behaviorally either — clicking "Order" submits the form, but for a screen reader the difference is significant: a `div` is not an interactive element, so it won't be in the rotor:

<img
  src="/assets/img/articles/inaccessibility/bad-rotor-lost-inputs.png"
  alt="Bad version: some inputs are missing from the rotor"
  loading="lazy"
  width="500"
/>

When simply reading the page top to bottom, the button will be announced as plain text:

<img
  src="/assets/img/articles/inaccessibility/bad-form-submit.png"
  alt="Bad version: the button is announced as plain text"
  loading="lazy"
  width="500"
/>

And you can't tab to it. Even if a screen reader user manages to fill out the form, they simply won't be able to submit it.

You can add attributes to a div so the browser starts treating it as a button, but reproducing the full behavior of a regular button would be hard, and why bother when you can just take a `button`?

<img
  src="/assets/img/articles/inaccessibility/good-form-submit.png"
  alt="Good version: the button is announced as a button"
  loading="lazy"
  width="500"
/>

The screen reader recognizes the button as an interactive element and announces that, shows it in the rotor, you can tab to it, and pressing `Enter` or `Space` submits the form.

If you need a button somewhere on the page — just use `button`. If clicking an element navigates to another page — use a link. Even if the design shows the link as a button, take a link and style it as a button with CSS. If you need an interactive element — in any case it's not a `span` and not a `div`; use more appropriate tags.

So, to make inputs accessible you need to use tags as intended, not hide them with `display: none`, and not forget text descriptions.

For comparison, let's look at the rotor contents on the [good example](https://yoksel.github.io/a11y-demo/good.html) page:

<img
  src="/assets/img/articles/inaccessibility/good-rotor-inputs.png"
  alt="Good version: all inputs are displayed in the rotor"
  loading="lazy"
  width="500"
/>

The rotor shows all inputs with descriptions and all states, there is a text field and a form submit button. Already pretty good, but something is missing: it's unclear what exactly is being offered to add to the order and what the color choice relates to.

For marking up forms there are a couple more tags that aren't shown in the rotor, but they matter for proper orientation within the form:

<h4>Fieldset and Legend</h4>

When there are few inputs, in principle you can understand the available choices even from the list of inputs in the rotor. But forms can be very different and very complex, and then grouping inputs is useful; in large forms it's absolutely necessary.

For grouping inputs there is the `fieldset` tag, and for naming the group — `legend`. Using them looks something like this:

```html
<fieldset>
  <legend>Сорта яблок</legend>

  <label>
    <input
      type="radio"
      name="type"
      value="gala"
    >
      Гала
  </label>

  <label>
    <input
      type="radio"
      name="type"
      value="golden"
    >
      Голден
  </label>
</fieldset>
```

<p class="codepen" data-height="280" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="xxVdvaw" style="height: 280px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Fieldset example">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/xxVdvaw">
  Fieldset example</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`fieldset` and `legend` can have styling problems in different browsers, but that's no reason at all to abandon them; all the problems are [solvable](https://yoksel.github.io/bad-practices/forms-markup/), while the absence of `fieldset` and `legend` in a form can create difficulties for screen reader users.

What happens if you don't use them at all? You can check this on the [bad example](https://yoksel.github.io/a11y-demo/bad.html) page. The fields won't be explicitly grouped, and the group name will be read as plain text:

<img
  src="/assets/img/articles/inaccessibility/bad-form-group-name.png"
  alt="Bad version: it's unclear what the text relates to"
  loading="lazy"
  width="500"
/>

If there is no text at all before a set of inputs, a screen reader user gets absolutely no information about what they need to do with these inputs and why. If you scroll through all the inputs, the screen reader will move straight to the next form element without indicating in any way that this was a group.

A screen reader can't draw such conclusions simply from the fact that we placed several inputs and a text next to each other. To help it understand the form structure correctly, you need to use the appropriate tags.

What a screen reader sees in a form with `fieldset` and `legend` can be checked on the [good example](https://yoksel.github.io/a11y-demo/good.html) page. The screen reader finds the group and announces its name:

<img
  src="/assets/img/articles/inaccessibility/good-form-group.png"
  alt="Good version: the screen reader sees the input group"
  loading="lazy"
  width="500"
/>

It announces that we are currently inside a group:

<img
  src="/assets/img/articles/inaccessibility/good-form-group-position.png"
  alt="Good version: the screen reader says we are inside a group"
  loading="lazy"
  width="500"
/>

And when we leave the group, the screen reader explicitly reports which group we are leaving:

<img
  src="/assets/img/articles/inaccessibility/good-form-group-end.png"
  alt="Good version: the screen reader sees the input group"
  loading="lazy"
  width="500"
/>

Using `fieldset` and `legend` not only helps gauge the size of a form and understand how many fields need to be filled to complete your task, but also evens out users' capabilities. Sighted users will see the group title and the borders around groups of fields and inputs; screen reader users will hear information about the group and the inputs inside it.

If a form on a site is marked up correctly, a screen reader user can buy a ticket, send a letter, or place an order without having the slightest idea what the form looks like on the page.

Narrator doesn't announce groups explicitly (or I didn't find where to turn that on), but without `fieldset` it miscounts the inputs in a group: for example, it counts the color choice and the package weight as one group. When `fieldset` is present, Narrator announces the group name set in `legend` when you select inputs.

`fieldset` can only group inputs, but pages often have other grouped content — pictures in a gallery, links in navigation, steps in tutorials. For these purposes you can use lists. How do screen readers treat them?

<h3>Lists</h3>

Lists are marked up with `ol`, `ul` or `dl`. The point of a list is to unite similar elements.

The example pages have many lists; in recipes, for instance, these are the ingredients and the process:

<img
  src="/assets/img/articles/inaccessibility/compot.png"
  alt="Screenshot of a compote recipe"
  loading="lazy"
  width="350"
/>

Let's try reading the top list on the [bad example](https://yoksel.github.io/a11y-demo/bad.html) page, where it's marked up with divs instead of `ol` and `li`:

<img
  src="/assets/img/articles/inaccessibility/bad-list-item.png"
  alt="Bad version: without proper tags the screen reader doesn't understand it's a list"
  loading="lazy"
  width="500"
/>

The screen reader will simply read the text top to bottom without linking the elements to each other.

Compare with the [good example](https://yoksel.github.io/a11y-demo/good.html). The screen reader immediately announces the list and reports how many items it has:

<img
  src="/assets/img/articles/inaccessibility/good-list.png"
  alt="Good version: the screen reader detected a list"
  loading="lazy"
  width="500"
/>

For each list item it reads all the text content, that is, not only the ingredient but also its amount, and also shows where in the list we are:

<img
  src="/assets/img/articles/inaccessibility/good-list-item.png"
  alt="Good version: the entire list item content is announced"
  loading="lazy"
  width="500"
/>

And it announces leaving the list:

<img
  src="/assets/img/articles/inaccessibility/good-list-end.png"
  alt="Good version: leaving the list"
  loading="lazy"
  width="500"
/>

For a numbered list whose numbering is not hidden, it may show the position number or announce the bullet:

<img
  src="/assets/img/articles/inaccessibility/good-list-numeric-item.png"
  alt="Good version: for a numbered list the position number is announced"
  loading="lazy"
  width="500"
/>

This behavior may differ between browsers.

When we see a list of something on a page, we can tell whether it's long or short, and see where in the list the element we need is. In the case of a recipe, this helps estimate its complexity and understand how many steps are left before the finish, if we did start cooking the compote.

If we use the right tags for marking up lists, screen reader users can get the same information simply by listening to the recipe. But if lists are marked up with divs, for screen reader users they turn into a sheet of disconnected text. To make lists accessible, use the right tags.

Screen readers can also announce links and pictures.

<h3 id="links">Links</h3>

How to see which links the screen reader found:

* Narrator: `NR + F7`
* VoiceOver: open the rotor with `VO + U` and scroll with the arrows to the links section

The rotor shows all the links on the page that it managed to find:

<img
  src="/assets/img/articles/inaccessibility/bad-rotor-links.png"
  alt="Bad version: some links are missing from the rotor's link list"
  loading="lazy"
  width="500"
/>

With such a list you can, for example, read all the article links on a news site and jump straight to the one you need.

But this is a screenshot from the [bad example](https://yoksel.github.io/a11y-demo/bad.html) page, and if you match it against the page content, you can notice that some links are missing. For example, the last links from the bottom navigation are absent:

<img
  src="/assets/img/articles/inaccessibility/footer-nav.png"
  alt="Screenshot of the bottom navigation"
  loading="lazy"
  width="500"
/>

If you try to read the missing links directly, the screen reader will show something like this:

<img
  src="/assets/img/articles/inaccessibility/bad-footer-links-top.png"
  alt="Bad version: instead of the 'Back to top' link text, part of the address is shown"
  loading="lazy"
  width="500"
/>

This is the "Back to top" link.

<img
  src="/assets/img/articles/inaccessibility/bad-footer-links-demo.png"
  alt="Bad version: instead of the repository link text, part of the address is shown"
  loading="lazy"
  width="500"
/>

And this is the link to the repository.

If a link has no text, it won't be in the rotor. And even after moving to the link itself, a screen reader user can only get information from the link's address, which in the case of a "Back to top" link, as we can see, doesn't work — it will show the current page instead of `#top`.

Narrator shows all links in the rotor, but links without text appear as full addresses.

To solve the problem it's enough to add text to the links. In the [good example](https://yoksel.github.io/a11y-demo/good.html) this is done for the "Back to top" link with a span with the `.visually-hidden` class, and for the repository link — with an `aria-label` attribute.

Both ways work, and the links are displayed in the rotor:

<img
  src="/assets/img/articles/inaccessibility/good-rotor-links.png"
  alt="Good version: all links are visible in the rotor"
  loading="lazy"
  width="500"
/>

I like the `.visually-hidden` way a bit more, because such a link will be visible if styles fail to load; the `aria-label` content won't be displayed in that case.

Once again: if clicking an element performs an action on the current page or submits a form — use `button`. If clicking an element takes you to another page — it's a link. Of course, you can hang events on a div and pretend it's a link or a button, but for screen reader users such elements will most likely turn out to be inaccessible; use the right tags.

<h3 id="images">Images</h3>

How to see which images are available to the screen reader:

* Narrator: `NR + F5`, choose "All" in the dropdown; this list contains everything the screen reader found, including images. There is no separate section for them
* VoiceOver: open the rotor with `VO + U` and scroll with the arrows to the images section

As image descriptions the screen reader uses the contents of the `alt` attribute. Images that have a description will be displayed in the rotor:

<img
  src="/assets/img/articles/inaccessibility/good-rotor-image.png"
  alt="Good version: an image with an alt is visible in the rotor"
  loading="lazy"
  width="500"
/>

And will be announced during sequential reading of the page:

<img
  src="/assets/img/articles/inaccessibility/good-image.png"
  alt="Good version: the screen reader reads the image and its description"
  loading="lazy"
  width="500"
/>

These screenshots were made in the [good example](https://yoksel.github.io/a11y-demo/good.html). In the [bad one](https://yoksel.github.io/a11y-demo/bad.html), as usual, everything is broken: the image has no `alt` attribute.

Firefox will simply say it's an image without any descriptions or additions, while Chrome will not only report that the image has no description, but will also offer to open the context menu to get one:

<img
  src="/assets/img/articles/inaccessibility/bad-image.png"
  alt="Bad version: the screen reader offers to open the context menu"
  loading="lazy"
  width="500"
/>

And there it will offer to get a description from Google; this option exists only when VoiceOver is running. The received description will appear in the same popup:

<img
  src="/assets/img/articles/inaccessibility/bad-image-desc-from-google.png"
  alt="Bad version: the image description obtained from Google"
  loading="lazy"
  width="500"
/>

The description is in English, but that's still better than nothing.

Narrator also offers to get an image description, only from Microsoft, by pressing `NR + Ctrl + D`. The same way you can get the title of a linked page. As in VoiceOver, the received text is not translated into the document's language.

A missing `alt` is an error (and the [validator](https://validator.w3.org/nu/#textarea) will show it), because `alt` is a required attribute; every image on the page must have one.

If an image serves purely decorative purposes, it's best to insert it via CSS, but if that's not possible — give it an empty `alt`. This will mean the image contains no useful information and is inserted purely for decoration. Screen readers completely ignore such images and don't show them either in the rotor or during sequential page reading.

For all other images, try to add a meaningful `alt`. It's best for it to be an actual description of the image rather than chunks of the surrounding text; then the `alt` will truly be useful.

<h2 id="conclusion">Conclusions</h2>

Sometimes we're too lazy to mark up semantically and use the right tags, because what difference does it make — add styles and everything will look right. But for screen reader users, bad markup can become a serious problem. Semantic markup will let such users hear the page correctly and use the site for their tasks.

Accessibility is a big and complex topic. Besides semantic markup it also includes using contrasting color schemes, simplifying texts for better perception, proper markup of popups and menus, and much more. But even without diving deep into this topic, you can do quite a lot simply by using tags as intended.

So if you've ever had the thought "why do we need so many different tags?" — this is partly why: they help screen readers announce the page correctly. And besides, using tags as intended makes markup much more convenient. For example, here's what the end of the page looks like in code in the [bad example](https://yoksel.github.io/a11y-demo/bad.html) and in the [good one](https://yoksel.github.io/a11y-demo/good.html):

<img
  src="/assets/img/articles/inaccessibility/bad-tags.png"
  alt="Bad version: identical closing tags at the end of the page"
  loading="lazy"
  width="275"
/>
<img
  src="/assets/img/articles/inaccessibility/good-tags.png"
  alt="Good version: varied closing tags at the end of the page"
  loading="lazy"
  width="275"
/>

In the good example you can immediately see which tag closed where; in the bad one you can only tell that a div opened somewhere above has closed. If a closing div gets lost somewhere, or an extra opening one appears — the page falls apart, and if all tags look the same, such a mistake is easy to make simply through carelessness.

[validator.w3.org/nu/](https://validator.w3.org/nu/) will help find lost tags, and using varied tags reduces the risk of such a problem.

By the way, the simplest way to see the structure of a page (and indirectly assess its accessibility) is to look at it without styles. For example, here's what the recipes section looks like in the different versions:

<img
  src="/assets/img/articles/inaccessibility/bad-no-styles.png"
  alt="The bad version without styles looks like a sheet of text"
  loading="lazy"
  width="320"
/>
<img
  src="/assets/img/articles/inaccessibility/good-no-styles.png"
  alt="The good version without styles keeps its structure"
  loading="lazy"
  width="320"
/>

The [bad version](https://yoksel.github.io/a11y-demo/bad.html) without styles looks like a stream of consciousness, while the [good one](https://yoksel.github.io/a11y-demo/good.html) can still be read without problems.

I hope this article helps you treat tags more carefully and better understand why it matters.

You can see more markup recommendations with code examples at [Weblind](https://weblind.ru/). You can read about accessibility [in the Web Standards blog](https://web-standards.ru/articles/tags/a11y/).

**Upd. from 9/9/2020:** how do you screenshot screen reader popups? It's a nontrivial task, because pressing hotkeys moves the reader's focus to a new action. The popup content with the current text changes, and the rotor closes instantly. I used Monosnap to record video of working with the screen reader, saved it as a GIF at 1-3 frames per second (so the final file had as few identical frames as possible), and then cut the needed popup out of that GIF in Photoshop. To keep the page content from showing through under the popup, you can hide the content with `opacity: 0` or make a big white area at the bottom of the page and place it under the popup by scrolling the page.
