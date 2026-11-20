---
title: Speed learning or a trip to YAC2013

tags: [fonts]
---

On October 2nd, Yandex held the <a href="http://tech.yandex.ru/events/yac/2013/">Yet another Conference 2013</a>. There was a lot of interesting stuff, but the brightest impression was left by <a href="https://github.com/yandex-cs/yac2013">the page-rendering speed contest</a>.<!--more-->

The task was tricky, with catches. About a day to complete it.
Besides completely obvious things, it had several well-hidden secrets. Some of them made you rack your brain while solving the task, some didn't let go even the next day :&nbsp;)

One of those was font optimization.

We clone the project, open the folder with fonts and see elephants there:

<img src="//img-fotki.yandex.ru/get/9358/5091629.98/0_7b9a4_f69346d4_L.png" alt="Font Elefants" />

This is the PT Sans font, which can be downloaded for free, for example right from the manufacturer's site: <a href="http://www.paratype.ru/public/">paratype.ru/public/</a>. They also offer connecting the font via <a href="http://www.google.com/fonts">google.com/fonts</a> instead of downloading it.

The simplest optimization consists of disabling the unused font. The file includes 4 fonts, and one of them is not used (PT Sans Narrow Bold).

And here's where the most interesting part begins. On <a href="http://www.paratype.ru/public/">paratype.ru</a> it says that:

<blockquote>PT Sans, PT Serif and PT Mono support an extensive list of Eurasian languages based on Latin and Cyrillic scripts. <...>

An important feature of the fonts is support for all official and most titular languages of the peoples and ethnic groups of the Russian Federation, which are listed below. </blockquote>

And below is a list of 54 languages. This way, by simply including the font as is, we get a heap of characters along with it that we'll hardly ever need.

And now is the perfect time to use <a href="http://www.google.com/fonts">google.com/fonts</a>.

Find PT Sans there, choose the regular and bold fonts (the italic is not used in the task), choose Cyrillic, get the code and download the files via the links to estimate the weight.

At the output: two files named with gibberish, weighing 127 and 137kb (versus 224 and 238kb).
Already better, but that's not the limit either.

In the language selection section there's a link <a href="https://developers.google.com/fonts/docs/getting_started#Subsets">Read more on how to use subsets</a>. The page at the link contains valuable advice: to use only the needed set of characters, you can specify it in the URL via the text parameter:

<em>http://fonts.googleapis.com/css?family=Inconsolata<strong>&text=Hello</strong></em>

The subset parameter doesn't need to be set in this case.

<strong>Result:</strong> PT Sans Bold weighs only 7.6kb. It's used only in the heading, and very few characters are needed for it. 7.6 versus 238 kilobytes!

Similarly for the non-bold typeface: we enter all the Cyrillic characters, Latin and digits into the text parameter. In the end we get a file weighing about 15 kilobytes. 15 instead of 224kb!

This simple-as-a-crowbar method gives an excellent win in performance and page weight; a pity I couldn't use it in the contest.

If the font hadn't been on Google, I'd have had to use a font editor, and that's a whole other story.

Thanks to Yandex for the interesting contest; thanks to it we learned a lot of new things in a very short time, not only about fonts. We hope there will be others, no less fascinating and useful, and preferably not at night : )

<strong>Links on the topic:</strong>
<a href="http://habrahabr.ru/post/130172/">habrahabr.ru/post/130172/</a>

<strong>Video on the topic:</strong>
an excellent clip about font optimization on the <a href="http://www.fontsquirrel.com/">font squirrel</a>.
This method didn't suit the contest, because the site refused to accept PT Sans, citing the copyright holders' request. At the same time, the font itself can be freely downloaded from the site, but modifying it is not allowed.

<iframe width="640" height="480" src="//www.youtube.com/embed/G5ZmSVK7CHo" frameborder="0" allowfullscreen></iframe>
