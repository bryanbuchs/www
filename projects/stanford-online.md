---
layout: base.njk
title: Stanford Online
description: TODO
---

## Stanford Online

https://online.stanford.edu{target='_blank' .project-link}

I had the opportunity to build the frontend for Stanford Online, the university's hub for continuing and professional education. This platform connects learners worldwide with Stanford's part-time degrees, professional certificates, and free content developed by their faculty. My work spanned the entire frontend development process from architecture to implementation. What made this project especially rewarding was developing a component library in Storybook that gave content editors incredible flexibility to build and customize pages without needing a developer.

<div class="screenshots">

  <figure>
    <a href="/images/screenshots/stanford-online.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="4262">
      <img
        src="/images/thumbnails/stanford-online.webp"
        alt="screenshot of Stanford Online website"
        loading="lazy"/>
    </a>
    <figcaption>
      Home Page
    </figcaption>
  </figure>

  <figure>
    <a href="/images/screenshots/stanford-online-2.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="2229">
      <img
        src="/images/thumbnails/stanford-online-2.webp"
        alt="screenshot of Course/Program search page"
        loading="lazy"/>
    </a>
    <figcaption>
      Course/Program Search
    </figcaption>
  </figure>

</div>

The most challenging aspect was integrating with Stanford's massive course database. I collaborated with our team to implement the "Explore" search engine, translating our designer's vision into functional code that helps users filter through hundreds of offerings across different programs and departments. I also crafted the course and program detail pages that showcase everything from curriculum details to faculty bios. These components needed to handle complex data relationships while maintaining consistent styling across the site. Working within Drupal's architecture, I created custom content types, fields, views, and modules that married Stanford's beautiful design system with robust functionality that serves learners at every stage of their educational journey.

<div class="screenshots">

  <figure>
    <a href="/images/screenshots/stanford-online-3.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="3831">
      <img
        src="/images/thumbnails/stanford-online-3.webp"
        alt="screenshot of Program detail page"
        loading="lazy"/>
    </a>
    <figcaption>
      Program Details
    </figcaption>
  </figure>

  <figure>
    <a href="/images/screenshots/stanford-online-4.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="5148">
      <img
        src="/images/thumbnails/stanford-online-4.webp"
        alt="screenshot of Course detail page"
        loading="lazy"/>
    </a>
    <figcaption>
      Course Details
    </figcaption>
  </figure>

</div>

### Tech

<ul class="tags">
  <li>Drupal</li>
  <li>SOLR</li>
  <li>Twig</li>
  <li>LESS</li>
  <li>PostCSS</li>
  <li>JavaScript</li>
  <li>Webpack</li>
  <li>Storybook</li>
</ul>
