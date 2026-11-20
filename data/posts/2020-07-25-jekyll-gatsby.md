---
title: Jekyll → Gatsby

image: //yoksel.github.io/assets/img/articles/jekyll-gatsby/preview.png
tags: [tools]

description: The site recently changed its engine. The last time that happened was in 2013, when the site moved from Wordpress to Jekyll; this time it's from Jekyll to Gatsby. My questions about Gatsby sparked quite a lively discussion on Twitter, so I decided to write separately about the engine change and my experience with Gatsby.

links:
- href: https://www.gatsbyjs.org/
  text: Gatsby
- href: https://jekyllrb.com/
  text: Jekyll
- href: https://graphql.org/
  text: GraphQL
- href: https://reactjs.org/
  text: React
- href: https://www.11ty.dev/
  text: Eleventy
- href: https://www.staticgen.com/
  text: StaticGen
- href: https://iainbean.com/posts/2020/your-blog-doesnt-need-a-javascript-framework/
  text: Your blog doesn’t need a JavaScript framework
---

The site recently changed its engine. The last time that happened was in [2013](/jekyll-vagrant) — back then the site moved from Wordpress to [Jekyll](https://jekyllrb.com/); this time it's from Jekyll to [Gatsby](https://www.gatsbyjs.org/).

My questions about Gatsby sparked quite a lively discussion on Twitter ([1](https://twitter.com/yoksel/status/1285960534261739526), [2](https://twitter.com/pepelsbey/status/1286232509915725824)), so I decided to write separately about the engine change and my experience with Gatsby.<!--more-->

At first Jekyll was quite convenient, but over time it got cramped. First, page and style builds are sloooow; second, it's on Ruby, and if some packages went stale and the site turned into a pumpkin, I had to urgently remember/google the commands for updating Ruby packages. When the site build runs infrequently and it's on an unfamiliar ecosystem, an update can take considerable time, which isn't quite what you'd like to be doing when you originally just came in to fix a couple of paragraphs.

This happens with old projects: sometimes you need to update a heap of packages before it will run at all. Aging external dependencies [can complicate your life](https://twitter.com/andrey_sitnik/status/1286029327742582784) regardless of the ecosystem they belong to. They may turn out incompatible with a fresh version of Node, with an updated operating system, or a package simply stops being maintained and you can no longer install it — and a project from two or three years ago can't be launched anymore (that happened too). Will you spend time trying to revive it, rewrite it completely, or bury it forever? External packages that do things for you ease development, but make the final result fragile.

So the idea of having as few dependencies as possible is a good and right one, but when choosing a new engine I honestly didn't think too much about this question. A personal site, in my view, is not only a blog but also a sandbox where you can play with something new, choosing an engine not so much by practical characteristics as by the technologies you're interested in, so this time Gatsby was chosen as the engine: I was interested in [GraphQL](https://graphql.org/) and [React](https://reactjs.org/), which it uses.

I managed to build the site I wanted, and the development process itself was comfortable enough, but Gatsby is most likely not the best choice for generating a simple static site, and if you're planning to do something like this, try considering other options. You can use [Eleventy](https://www.11ty.dev/), which [Vadim Makeev recommends](https://twitter.com/pepelsbey/status/1286272737523249152), or pick another engine on the [StaticGen](https://www.staticgen.com/) site.

Among Gatsby's pluses — I liked using GraphQL to query data from posts. In the visual interface you can click together what you need, then run the query and check what it returned:

<img
  src="/assets/img/articles/jekyll-gatsby/graphql.png"
  alt="Graphql interface"
  loading="lazy"
/>

Gatsby has quite a lot of minuses.

The first thing I ran into — you can't embed demos from <a href="https://codepen.io/">Codepen</a> in a post. The ordinary embed code simply doesn't work; as I understand it, this is a general problem of React projects. The articles use more than two hundred Codepen demos, so this became a serious problem. To solve it I had to write <a href="https://github.com/yoksel/yoksel.github.io/blob/new-engine/plugins/gatsby-codepen-markup-converter/index.js">a small plugin</a> that, in every article, changes the ordinary embed code to code with an `iframe` during page generation.

The next problem: in local development, frames that live in the static folder are not displayed, and there are quite a lot of such demos on the site too. To make this work, you need to run a [separate server](https://github.com/gatsbyjs/gatsby/issues/17761#issuecomment-533816520) in the `public/` folder.

In principle, at that point I could have stopped and thought about whether I really needed Gatsby specifically or should go look for another static generator. An engine shouldn't decide for me what and how I'll embed in my posts. <s>The hedgehogs cried and pricked themselves,</s> but I decided to see it through and finish the site on the chosen engine.

Next I faced the question of extra weight: the default build makes a static version for all pages, but the site behaves like a single-page application: transitions between pages happen by replacing content without reloading pages. To make this as fast as possible, the app preloads in the background the content of pages the user could theoretically navigate to. If you simply open the main page, the page's main content and the content of the links that landed in the first screen will load.

<img
  src="/assets/img/articles/jekyll-gatsby/main-page-spa.png"
  alt="Main page as an SPA"
  loading="lazy"
/>

The markup weighs about 60kB, plus some minimal JS weighing up to 10kB; of the images, only small icons — but in the end the page weighs half a megabyte; everything else was added by Gatsby.

Scroll down, the app discovers new links and preloads them too. Now the page weighs 1.7 megabytes, and another 3 megabytes have been downloaded over the network:

<img
  src="/assets/img/articles/jekyll-gatsby/main-page-spa-after-scroll.png"
  alt="Main page after scrolling to the bottom"
  loading="lazy"
/>

And I just scrolled the page down.

The goal of these preloads is to show the next page as fast as possible, but if it's known for sure that there's nothing heavy on the pages, maybe there's no need to specially speed up the transition between them?

I used the [gatsby-plugin-no-javascript](https://www.gatsbyjs.org/packages/gatsby-plugin-no-javascript/) plugin, which removes from the markup all the scripts the engine adds there, and this significantly reduced the number of requests and the weight of loaded resources:

<img
  src="/assets/img/articles/jekyll-gatsby/main-page-no-spa.png"
  alt="Main page without SPA"
  loading="lazy"
/>

Preloading neighboring pages is, in my opinion, a good idea for an online store or a news site, where a visitor landing on one page will very likely wander around the neighboring ones, but for a small, rarely updated site it's not really needed.

Visitors often come to my site from search with some specific question, and there's no need to preload neighboring pages in the background here, because they may never be needed. Besides, article pages themselves weigh little, and speeding up their loading by preloading content in advance is, in my opinion, simply pointless.

Articles with images, demos and counters will of course weigh more than the main page, which has only text, but in any case their weight won't be increased by the weight of scripts that load just in case and will most often simply not be needed, because the user found what they needed and closed the page.

If I hadn't managed to reduce the page weight to acceptable levels, I might have had to rewrite the site once more after all.

About [gatsby-plugin-no-javascript](https://www.gatsbyjs.org/packages/gatsby-plugin-no-javascript/) you also need to remember the following: it removes the excess well, but along with the excess, all events and hooks from React components are removed too. When using the plugin, all interactivity must be moved into external scripts, so you'll have to choose: either React or a light site — both at once won't work.

A couple of small problems remained. First: for managing the contents of the `head` tag it's suggested to use <a href="https://www.gatsbyjs.org/tutorial/seo-and-social-sharing-cards-tutorial/">react-helmet</a>, and it leaves a lot of excess in the code: every tag in the head will have a `data-react-helmet="true"` attribute. As I understand it, when used with React it's needed so the meta tags don't duplicate, but in the site's static version the attribute is completely useless.

<a href="https://twitter.com/mista_k/status/1286182532258697218">A tip from Vladimir Kuznetsov</a> helped solve this task. In the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) there's an `onPostBuild` method that lets you modify HTML files after the build. With it I removed `data-react-helmet="true"` and some other tails Gatsby added to the code.

The second problem is a heap of extra files that still make it into the build even though they're no longer used anywhere: for them I added a script to `package.json` that runs on deploy and deletes the unnecessary ones.

**Upd from 31.07.2020**: deleting files can cause problems when the project is later launched locally, so another solution was found. A `.gitignore` file is placed in `static/` and all the paths that need to be ignored are added to it. After that, the [parameter](https://www.npmjs.com/package/gh-pages#optionsdotfiles) `--dotfiles true` must be added to the `gh-pages` plugin command so that `.gitignore` isn't ignored when the content is pushed to the branch.

That's how, with the help of a file tool <s>and you-know-what language</s>, I managed to bring the site to the desired state and acceptable weight. Gatsby can be used to generate simple static sites, but you'll have to make some effort for the resulting site to actually be light and simple; the default build doesn't do that.

Tinkering with Gatsby was fun, but next time I want to rewrite the site, I'll most likely choose something else.
