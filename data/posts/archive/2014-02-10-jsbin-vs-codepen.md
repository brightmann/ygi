---
title: JsBin or Codepen?

tags: [tools]

image: //img-fotki.yandex.ru/get/4912/5091629.9b/0_7efbd_8f85404d_XL.png
description: For a long time I used jsbin.com for my demos. It seems I used it too actively. At some point, while editing code, Jsbin would stop opening at all. Then I'd open another browser, but after a while it would stop opening there too. Gradually all available browsers and incognito modes got involved.
---

For a long time I used <a href="http://jsbin.com">jsbin.com</a> for my demos. It seems I used it too actively. At some point, while editing code, Jsbin would stop opening at all.<!--more--> Then I'd open another browser, but after a while it would stop opening there too. Gradually all available browsers and incognito modes got involved.

Working with code was becoming very inconvenient, and sometimes simply impossible, and that made me look toward other online code sandboxes. Of them, <a href="https://codepen.io/">Codepen</a> appealed to me the most so far. It has its pluses and minuses, and in the end it turned out that I now have to use both editors, each for its own purposes.

Let me try to compare them.

<h2>Jsbin</h2>

<b>Pluses:</b>

- instantly applies changes made in the code;
- also instantly applies them in any browser where that snippet is open (very convenient for testing in different browsers, on different virtual machines and mobile devices);
- shows errors in JS;
- can comment/uncomment code with Ctrl + /;
- has Less.

<b>Minuses:</b>

- saves snippets as a single feed, where they're grouped by parent snippet, and within that group — by creation time. There's no manual grouping;
- if you open a snippet and start editing it, it gets saved under a new number. This leads to uncontrolled growth of their count: I already have more than 1000, and how to search for the right one among them is unclear. Also, if you embed a snippet on a page somewhere — after editing you'll have to update the snippet number in the frame's code;
- <s>no preprocessors</s> no Sass;
- breaks Cyrillic: in snippets you can suddenly find mojibake instead of Russian text.

Jsbin works as a personal sandbox; there's no interaction with other users, and no need to worry that someone will see the <s>mess</s> working process in your sandbox : ) The absence of interaction with other users of the service helps you not get distracted from the code; that can be considered a plus.

<h2>Codepen</h2>

<b>Pluses:</b>

- has CSS preprocessors (a very significant advantage);
- has grouping of snippets into collections, has tags and snippet search;
- has grouping by other criteria, for example by popularity, and you can also view snippets you liked or forked;
- you can open a snippet, edit it and save it — its address stays the same, and you don't need to update the frame codes with that snippet. You can open a snippet on another computer (under your account), edit and save it — it will be the same snippet, and you won't need to look for it in the history;
- you can add a title and description to a snippet.

<b>Minuses:</b>

- adding to a collection is non-obvious. On the snippet's page it's unclear which collection it's in and whether it's been added to any collection at all. When adding a snippet to a collection, that isn't visible either. It's done quite clumsily; hopefully they'll fix it;
- code changes are applied with a slight delay and only in the editing window;
- live preview in other browsers is a PRO account privilege ($9/month or $75/year);
- it periodically stops updating the preview (which may not be obvious at first), and then you have to save the snippet and reload the page;
- doesn't show errors in JS;
- code commenting with Ctrl + / works only for the selected block. You can't quickly comment out a line. To uncomment a block, you need to select it again, and it's not certain it will be uncommented — it might get wrapped in comments again, which is very inconvenient;
- doesn't remember the page layout.

Both editors can expand Emmet combinations and CSS property shortcuts.

Codepen works like a social network: you can look at other users' work, like it, fork it, leave comments.
For me, the first comments on my work and likes were a complete surprise : ))
You can look at other users' work, get inspired and find new ideas. The works for the resource's main page are chosen by hand, so there's a lot of interesting stuff there. You can also view the newest and the most popular snippets.

Your own snippets are presented <a href="https://codepen.io/yoksel/">as a convenient showcase</a> with live previews. They can be browsed by tags or by collections.

In the end, my preferences split as follows: for quick experiments and debugging code in different environments — Jsbin; for thorough experiments, for demos and for saving findings in a convenient and accessible form — Codepen.
