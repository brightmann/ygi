---
title: Tic-tac-toe in CSS

tags: [experiments]

image: //img-fotki.yandex.ru/get/9104/5091629.9a/0_7ec6c_5867b098_orig
description: Quite a strange version of the game, I wanted to understand how else I could simulate the game logic.

links:
- href: /go-and-css-next-attempt
  text: Go game with CSS∶ another try
---

Quite a strange version of the game. <!--more-->
I wanted to understand how else I could simulate game logic.

True, it still couldn’t have happened without a bit of JS: I didn’t find a way to reset the game and assigned it to JS. If you tried to do without it entirely, you could simply reload the page.

The game result is processed using CSS.
The game ends if there is a clear win or if there is a draw and the field is completely filled.

<p data-height="450" data-theme-id="0" data-slug-hash="lnAuh" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/lnAuh'>lnAuh</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Theoretically, it would be possible to take into account the draw before filling the field, this is possible, but the code would be very long, so I abandoned this idea.

I also should have made the appearance of the result panel smoother, but I couldn’t cope with the behavior of the pseudo-elements. Some properties were animated that no one really asked for, for example <code>text-indent</code>. For a more accurate animation, I would have to increase the code by two thirds, or I just didn’t figure out how this could be solved more elegantly.

I think this method can be used for larger fields, although in this case the selectors will be kilometer-long, and it will definitely not be possible to do without preprocessors.
