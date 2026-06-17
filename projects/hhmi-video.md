---
layout: base.njk
title: HHMI BioInteractive Video Builder Tool
description: TODO
---

## HHMI BioInteractive Video Builder Tool

https://interactive-video-tool.biointeractive.org{target='_blank' .project-link}

I helped develop the frontend for BioInteractive's Interactive Video Builder, an educational tool that transforms science videos into engaging learning experiences. The platform allows educators to enhance HHMI's video library with pause points, questions, and text annotations at specific timestamps. I implemented the H5P module in Drupal to provide an intuitive interface where teachers can easily add multiple-choice questions, true/false prompts, or free-text responses that appear at precise moments throughout the videos.

<div class="screenshots">

  <figure>
    <a href="/images/screenshots/hhmi-video.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="2871">
      <img
        src="/images/thumbnails/hhmi-video.webp"
      alt="A 'Create your own interactive video' page with a grid of BioInteractive video cards - each showing a thumbnail, title, description, and a 'Create Interactive Video' button - alongside a sidebar of topic and content filters."
        loading="lazy"/>
    </a>
    <figcaption>
      Browsing the video library
    </figcaption>
  </figure>

  <figure>
    <a href="/images/screenshots/hhmi-video-4.webp" data-cropped="true" data-pswp-width="1400" data-pswp-height="1049">
      <img
        src="/images/thumbnails/hhmi-video-4.webp"
      alt="The student view of an interactive video, shown in the site's Spanish interface, with a multiple-choice question overlaid on a paused video; the question gives feedback on the chosen answer and tracks the score, with a description of the film alongside."
        loading="lazy"/>
    </a>
    <figcaption>
      Student view, in Spanish
    </figcaption>
  </figure>

</div>

For the student experience, I built a custom Vue application that interfaces with the H5P Player to capture responses and generate downloadable PDF summaries. This transforms passive video watching into an interactive assessment tool for educators. The entire system is WCAG AA compliant, fully responsive, and features robust keyboard navigation. The site features full multilingual support with Spanish translations, ensuring the tool is accessible to a wider audience of educators and students worldwide.

### Tech

<ul class="tags">
  <li>Drupal</li>
  <li>Twig</li>
  <li>LESS</li>
  <li>PostCSS</li>
  <li>JavaScript</li>
  <li>H5P</li>
  <li>Webpack</li>
</ul>
