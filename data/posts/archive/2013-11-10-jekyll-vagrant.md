---
title: Jekyll, Vagrant and everything else

tags: [tools]

description: The site changed its engine. It's now Jekyll — a static page generator
---

This weekend the site changed not only its design but also its engine. It's now <a href="http://jekyllrb.com/">Jekyll</a> — a static page generator. <!--more-->

<a href="https://ghost.org/">Ghost</a> was also considered as an option, but it needs nodejs, and I have no way to install that.

A site on Jekyll has several advantages over Wordpress.

First, pages load instantly, because there are no database queries, nor a database itself — unlike Wordpress's big unwieldy engine.

Wordpress is powerful with huge customization possibilities, but it's somewhat heavy for a small blog.

Second, a Jekyll site can be hosted on <a href="http://pages.github.com/">GitHub Pages</a>, and all changes are made simply with commits to a specially named repository. GitHub will generate the static pages, and the site will be available at a third-level domain on <strong>github.io</strong>. For example, mine on GitHub lives at this address: <a href="https://yoksel.github.io/">yoksel.github.io</a>.

To start working with Jekyll, the sources of sites already using it can be useful; you can find them here: <a href="https://github.com/mojombo/jekyll/wiki/Sites">github.com/mojombo/jekyll/wiki/Sites</a>.

Blog migration from several popular engines is available, but the result will still have to be finished off with a file tool.

<a href="http://gruntjs.com/">Grunt</a> and <a href="http://sass-lang.com/">SASS</a> also took an active part in creating the blog.

If anyone's interested, the blood and guts live in the public repository <a href="https://github.com/yoksel/yoksel.github.io">github.com/yoksel/yoksel.github.io</a>.

I like that posts can be written in the same place where I usually write code, and then simply committed to GitHub.

There was also a need to get better acquainted with <a href="http://www.vagrantup.com/">Vagrant</a>. It creates a virtual environment where you can install Apache, the needed languages and databases, and then, editing files locally, see them in the browser as if they were served from a server. There were no problems with the basic capabilities, while the <a href="https://puphpet.com/">puphpet.com</a> site helped a lot with creating the configuration I needed.

I also tried <a href="https://github.com/indieisaconcept/grunt-styleguide">grunt-styleguide</a> — a Grunt task that generates documentation from comments in the code. I haven't fully figured it out, but it looks promising.

The principle is this: comments to the code, marked up with Markdown, are placed in sass files. Documentation pages are created from these files (one file — one page), with navigation via a dropdown menu. A comment can contain, among other things, HTML code examples, which are displayed on the page as elements with the styles applied.

Working examples can be seen here: <a href="http://jacobrask.github.io/styledocco/">jacobrask.github.io/styledocco/</a>.
