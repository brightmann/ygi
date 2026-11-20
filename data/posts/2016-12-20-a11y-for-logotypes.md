---
title: Logo is unreachable or temporarily unavailable

image: https://img-fotki.yandex.ru/get/196548/5091629.a4/0_91fcc_76efbbf3_orig
description: "What's the best way to mark up logos on a site? As an image or a background? How will the logo look when printed? How do you ensure accessibility for screen readers and give hints to search engines?"

tags: [a11y]

customCSS: ally-for-logo.css

links:
- href: https://www.w3.org/WAI/tutorials/images/
  text: "Web Accessibility Tutorials: Images Concepts"
- href: http://www.freedomscientific.com/Products/Blindness/JAWS
  text: "JAWS"
- href: http://www.nvaccess.org/
  text: "NVDA"
- href: https://developers.google.com/search/docs/guides/intro-structured-data
  text: "Google's structured data guide"
- href: https://webmaster.yandex.ru/tools/microtest/
  text: "Yandex's structured data validator"
- href: https://www.sitepoint.com/tips-accessible-svg/
  text: "Tips for Creating Accessible SVG (By Léonie Watson)"
- href: https://bitsofco.de/styling-broken-images/
  text: "Styling Broken Images"
- href: https://yoksel.github.io/ally-for-logo/
  text: "Test page with logos"
---

I got curious about the question: what's the best way to mark up logos on a site? What's the right way and why? As an image or a background? How will the logo look when printed? How do you ensure accessibility for screen readers and give hints to search engines? <!--more-->

Thanks to all participants of the <a href="https://twitter.com/yoksel/status/809086523891154944">discussion</a> for the useful comments : ) I made several markup variants, ran a bunch of tests and learned a lot of interesting things.

There are different ways to put a logo on a page:

* as a background image (usually on the heading element)
* as a plain image
* as inline SVG

My favorite is the variant with a background image set on the H1. Why this one? Because a logo usually contains the name of the company or site, and it makes sense to make that name the main heading on the page. Often a logo is simply a nicely styled name, so you can write the name as text and then hide it with styling and show an image in its place. Besides making the text accessible to screen readers, this markup variant easily lets you add hover effects (for example, swapping the image).

Seems like an excellent approach, but no. In this case the logo can't be copied or saved, and if the user is viewing the page without images, they'll see an empty space instead of the logo, meaning the site heading becomes unavailable to them.

And that's where the accessibility question arises. What is accessibility? Who should the site's logo be accessible to? Usually accessibility means web content being accessible to people with disabilities, but I suggest looking at the question a bit more broadly and thinking about the logo's accessibility:

* on a poor internet connection, when the page may have no styles or images;
* when printing the page;
* for copying;
* for search engines;
* for CSS manipulations.

We're used to good internet that's practically everywhere, and may think everyone has it that way, until we suddenly need to urgently open some page while in the subway or, for example, on vacation, in a hotel with half-dead wi-fi. If you've been in that situation, missing styles or half-loaded images have surely gone for you from rare mythical creatures to pressing everyday problems. "Who even made this laggy site?!" Anyway, styles may not have arrived, and images may have been disabled by the user to save traffic and speed up page loads. It happens.

With printing it's more or less clear: sometimes people print pages, and the logo shouldn't turn into a pumpkin when they do, especially if it doubles as the site name.

The copying question is relevant for content managers who may need to copy a logo from a company's site. If you can't grab it from the site, you can turn to search engines. Will search robots be able to find your logo on the page?

Accessibility for CSS can be a relevant question for developers. How do you make a logo that is accessible and interactive at the same time?

Below we'll look at every way to make a logo and check how each of them does on accessibility in the broad sense of the word.

<i>For the tests, MacOS used VoiceOver (the built-in screen reader) and the browsers Chrome, Firefox and Safari. On Windows 7 I used <a href="http://www.nvaccess.org/">NVDA</a> and the browsers Chrome, Firefox and IE10.</i>

<h2 id="bg">Logo as a background</h2>

Markup example:

```html
<h1 class="logo">Название сайта</h1>
```

```css
.logo {
  /* задаём размеры */
  width: 200px;
  height: 50px;
  /* прячем текст */
  text-indent: -1000px;
  overflow: hidden;
  /* задаём фоном картинку с логотипом */
  background: url(logo.png) 50% 50% no-repeat;
}
```

Text can be hidden in different ways: besides <code>text-indent</code>, sometimes <code>font-size: 0</code> is used. Interestingly, in both cases the text stays accessible to screen readers, though with some caveats. The text will be read, but the screen reader won't be able to correctly highlight the element it's currently reading.

Usually VoiceOver highlights the element being read with a noticeable black outline:

<img src="../assets/img/articles/ally-for-logo/logo-outline.png" alt="VoiceOver highlights the element being read">

With these approaches, depending on the browser, there may be no outline at all, or it will point at a different element.

This is easy to fix by adding <code>role="img"</code> to the logo element. Though in that case the screen reader will start reading it as an image without <code>alt</code> — the text inside becomes inaccessible. To solve this problem, the element needs an <code>aria-label</code> containing the site name.

The final markup will look something like this:

```html
<h1
  class="logo"
  role="img"
  aria-label="Название сайта"
>Название сайта</h1>
```

You can also hide text with <code>.visuallyhidden</code> (<a href="https://allyjs.io/tutorials/hiding-elements.html#how-to-hide-elements-visually">you can read about it here</a>). In that case no auxiliary attributes are needed for accessibility, but the text requires an additional wrapper with the <code>.visuallyhidden</code> class:

```html
<h1 class="logo">
  <span class="visuallyhidden">Название сайта</span>
</h1>
```

In this case VoiceOver will also highlight the element with a black outline, but its shape and size will match the hidden text:

<img src="../assets/img/articles/ally-for-logo/logo-outline--vis-hidden.png" alt="VoiceOver highlights the element being read">

VoiceOver behaves more or less the same in all browsers: for it to correctly perceive the element, a <code>role</code> with an <code>aria-label</code> is enough, or using <code>.visuallyhidden</code>.

In NVDA on Windows things aren't so rosy:

* in Chrome the element with <code>.visuallyhidden</code> isn't read at all
* in Firefox the text of the element with <code>.visuallyhidden</code> gets truncated

Interestingly, IE10 read out all the possible text, ignoring even <code>role="img"</code>.

<h3>Accessibility: 3/6</h3>

<ul class="ally-list">
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without styles</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--no">
   <span class="ally-list__text">without images</span>
   <span class="ally-list__text">no</span>
 </li>
 <li class="ally-list__item ally-list__item--bad">
   <span class="ally-list__text">for printing</span>
  <span class="ally-list__text">poor</span>
 </li>
 <li class="ally-list__item ally-list__item--no">
   <span class="ally-list__text">for copying</span>
   <span class="ally-list__text">no</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for screen readers</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
     <span class="ally-list__text">hover effects</span>
     <span class="ally-list__text">yes</span>
 </li>
</ul>

Without images there will be an empty space on the page instead of the logo. You won't be able to save such a logo as an image, unless an advanced user resorts to the web inspector.

By default, backgrounds set in styles are not printed. Printing background images can be enabled in the print settings, but if the user doesn't do it by hand, there will again be an empty space instead of the logo.

The problem can be solved by separating styles for the print and screen versions: for this you can use <code>@media screen</code> (styles only for screens) and <code>@media print</code> (styles for the print version). That way, printing the logo won't be a problem if you take care of it in advance.

Actually, with this approach you don't have to hide the text — it can be part of the logo, as is done on <a href="http://lea.verou.me/">Lea Verou's site</a>:

<img src="../assets/img/articles/ally-for-logo/lea-verou-me.png" alt="Logo on Lea Verou's site">

and on the <a href="http://html5doctor.com/">HTML5 Doctor</a> site:

<img src="../assets/img/articles/ally-for-logo/html5doctor-com.png" alt="Logo on the HTML5 Doctor site">

<i>One could argue whether these examples are logos or a logo plus page heading, but in my opinion, in these cases the image + text pairs are perceived as a single whole, so I'd consider them logos.</i>

<h3>Accessibility: 5/6</h3>

<ul class="ally-list">
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without styles</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without images</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for printing</span>
  <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--no">
   <span class="ally-list__text">for copying</span>
   <span class="ally-list__text">no</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for screen readers</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
     <span class="ally-list__text">hover effects</span>
     <span class="ally-list__text">yes</span>
 </li>
</ul>

The logo still can't be copied, but the rest is fine: with images disabled and when printing, the user will at least see the text.

Though there's one nuance: if the text is white, when the page is printed with default settings it may end up white on white, so in that case you also need to take care of print styles in advance.

<h2 id="img">Logo as an image</h2>

Markup example:

```html
<img src="logo.png" alt="Название сайта">
```

<h3>Accessibility: 5/6</h3>

<ul class="ally-list">
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without styles</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without images</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for printing</span>
  <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for copying</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for screen readers</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--no">
     <span class="ally-list__text">hover effects</span>
     <span class="ally-list__text">no</span>
 </li>
</ul>

In this variant, when images fail to load, the content of the <code>alt</code> attribute is displayed. It may not look very pretty, but the text can still be read.

The advantage of this approach is that it won't break without styles or when printing, and the logo can easily be saved from the page — all without any effort on your part.

The drawback is that the content is inaccessible to CSS if you need to swap the image on hover or add CSS animations.

For example, if it's an SVG image, with inline SVG you could change fill colors or hide parts of the logo. If you insert it via <code>img</code>, the image's internal content can't be changed on hover, though styling the <code>img</code> itself with CSS filters or transforms will still be available.

In all browsers, readers correctly read an image with <code>alt</code>. NVDA in IE10 read not only the <code>alt</code> but also the image URLs.

<h2 id="inline-svg">Inline SVG</h2>

Markup example:

```html
<svg width="100" height="50" viewBox="0 0 100 50"
  xmlns="http://www.w3.org/2000/svg">
  <path d="..."/>
</svg>
```

<h3>Accessibility: 4/6</h3>

<ul class="ally-list">
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without styles</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">without images</span>
   <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
   <span class="ally-list__text">for printing</span>
  <span class="ally-list__text">yes</span>
 </li>
 <li class="ally-list__item ally-list__item--no">
   <span class="ally-list__text">for copying</span>
   <span class="ally-list__text">no</span>
 </li>
 <li class="ally-list__item ally-list__item--bad">
   <span class="ally-list__text">for screen readers</span>
   <span class="ally-list__text">poor</span>
 </li>
 <li class="ally-list__item ally-list__item--yes">
     <span class="ally-list__text">hover effects</span>
     <span class="ally-list__text">yes</span>
 </li>
</ul>

The code of such a logo will most likely be quite sprawling and not very convenient to work with, but compared to the previous approaches it has several advantages: the logo won't break when styles fail, disabled images won't affect it in any way, and it won't be lost when printing.

Though if the logo's styling is set in CSS, without styles it may become plain black, but it will still be readable.

Also, a vector logo must have width and height set in the attributes, even if you later plan to override them with styles. The thing is, an SVG image that has a <code>viewBox</code> but no sizes will try to take up <a href="https://codepen.io/yoksel/full/GNPLoB/">all available space</a>. To keep the page from turning into a parade of giant icons without styles, it's enough to specify width and height on every SVG on the page; later you can easily set the sizes you need in CSS (CSS has priority in this case).

With screen reader accessibility it's not that simple. SVG has special elements for describing content: <code>title</code> and <code>desc</code>, but they aren't read by all readers in all browsers. For example, Firefox and Safari read them, but Chrome doesn't. I'm considering the case of sequentially reading the page top to bottom; behavior on hovering an element may differ. You can also insert text into SVG, but it will only be read in Chrome. If you put a title, a description and text in an SVG at the same time, such an element can be read in most browsers.

Léonie Watson also <a href="https://www.sitepoint.com/tips-accessible-svg/">recommends</a> adding the <code>aria-labelledby</code> attribute, pointing it at the <code>id</code>s of the title and description. You'll get something like this:

```html
<svg width="100" height="50" viewBox="0 0 100 50"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="title desc">
  <title id="title">Title</title>
  <desc id="desc">Description</desc>
  <text y="-10">Text</text>
  <path d="..."/>
</svg>
```

This way you can make SVG as accessible as possible for screen readers, but keep in mind that different screen readers may behave differently, as may element accessibility in different browsers and on different operating systems. Everything must be tested before the code is used on real sites.

<h2 id="choice">What should you choose?</h2>

<ul>
    <li>
        <b>logo as an image</b> — the most reliable approach, but it may be unsuitable if you need interactivity;
    </li>
    <li>
        <b>logo as a background</b> lets you add effects like swapping the image on hover. When using an SVG image, the code won't clutter the markup, accessibility can be provided with auxiliary attributes, and the background printing problem is solved with print styles;
    </li>
    <li>
        <b>inline SVG</b> gives wider possibilities for interaction via CSS or JS, but the code will clutter the markup, and screen reader accessibility needs separate care.
    </li>
</ul>

Generally, if the logo doubles as the site name, it may make sense for reliability to shift those duties onto some heading with <code>.visuallyhidden</code> and leave the logo for visual display only. To declare the logo an image for screen readers (if it isn't one, of course), you can add <code>role="img"</code> + <code>aria-label</code> to it; after that, screen readers stop reading the element's content as content and start perceiving it as an image.

<h2 id="accessibility-for-search">Accessibility for search engines</h2>

Initially I considered this type of accessibility along with the others, but then came to the conclusion that it doesn't depend on the logo's markup at all.

How I checked: in Google and Yandex I made queries like "&lt;COMPANY NAME> logo", expecting to see logos from the company's site at the top of image search results. Yandex for some reason rarely found the right thing, while Google always showed the wanted logos as the first results, as long as it could find them.

So: on Yandex, Youtube and Facebook the logo is made as a background, yet all these companies' logos are easily found by Google. All three companies have pages with logos, and all of them have the logo specified in structured data.

GitHub's logo is inline SVG, but a PNG version is specified in structured data, and there's also a page with logos. Google finds GitHub's logos without problems.

From my observations, Google initially shows the image from structured data, but if there's a page with logos, it will prefer to show images from there. If the logo is an image but the site has structured data containing a link to a logo, Google will pick the image from the structured data. For example, that's how it's done on <a href="http://www.zeldman.com/">Jeffrey Zeldman's site</a>, and Google shows the image from the structured data, while the image with the site name is nowhere to be found in search.

From this I conclude that Google doesn't care at all what your logo's markup looks like, because it doesn't use it in any way. So if you want to help search robots, specify a link to the logo in structured data. If you want to help people who will be looking for the company's logo, make a page with logos. The logo's markup on the page doesn't solve these tasks.

In conclusion (of this horrendously long article) I should say that I'm by no means an accessibility expert and may have made mistakes and inaccuracies. Please let me know about them if you come across any. I'd also be glad to hear additions and good links on the topic.

<h2 id="screenreaders">Comments on working with screen readers</h2>

<ul>
    <li>VoiceOver is convenient: it highlights the element being read and shows the text it's currently reading, which is very handy for testing;</li>
    <li>NVDA is freely distributed, installs quickly and is ready to work right away. It doesn't highlight the element being read, but it can show the read text in a separate window;</li>
    <li>Jaws is paid, but there's a trial version that must be restarted every 40 minutes along with rebooting the computer. It took me a very long time to download and install, requiring several computer reboots in the process. It doesn't highlight the current element and doesn't show the text being read. Maybe it can do all that, but I didn't find it in the settings and couldn't make proper use of it.</li>
</ul>

Thanks to <a href="https://twitter.com/ki_zu">Roma Komarov</a> for help with the text.
