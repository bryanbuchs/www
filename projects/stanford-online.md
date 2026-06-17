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
    <a href="/images/screenshots/stanford-online.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="3827">
      <img
        src="/images/thumbnails/stanford-online.webp"
        alt="A homepage with a dark hero pairing a '30 Years of Stanford Online' anniversary mark with the headline 'Empowering Learners to Shape Tomorrow, Today' and a course search box, followed by a learner-statistics row, an 'Explore Our Programs' grid of four category cards, featured courses and programs, and an upcoming-events section."
        loading="lazy"/>
    </a>
    <figcaption>
      Home Page
    </figcaption>
  </figure>

  <figure>
    <a href="/images/screenshots/stanford-online-2.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="2350">
      <img
        src="/images/thumbnails/stanford-online-2.webp"
        alt="A faceted search page: a row of filter dropdowns and a search bar above a grid of course cards, each with a thumbnail, title, the offering Stanford school, and enrollment details."
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
        alt="A course page for 'Artificial Intelligence: Principles and Techniques', with the title and core competencies beside an enrollment sidebar, followed by flexible learning options, student testimonials, the teaching team, and related courses."
        loading="lazy"/>
    </a>
    <figcaption>
      Course Details
    </figcaption>
  </figure>

  <figure>
    <a href="/images/screenshots/stanford-online-4.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="5148">
      <img
        src="/images/thumbnails/stanford-online-4.webp"
        alt="A program page for the Advanced Cybersecurity Program, with an enrollment card and overview up top, then key details, the courses included in the program, learning outcomes, the program directors, and related offerings."
        loading="lazy"/>
    </a>
    <figcaption>
      Program Details
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
