import 'reasonable-colors/reasonable-colors.css'

import 'open-props/shadows.min.css'
import 'open-props/easings.min.css'
import 'open-props/sizes.min.css'
import 'open-props/aspects.min.css'
import 'open-props/fonts.min.css'
import 'open-props/aspects.min.css'

import './font.css'
import './reset.css'
import './style.css'
import './utility.css'
import './layout.css'

import './header.css'
import './footer.css'
import './screenshots.css'

import './print.css'

const stickyHeaders = document.querySelectorAll('section>h2')
stickyHeaders.forEach(el => {
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1),
    { threshold: [1] }
  )

  observer.observe(el)
})

import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import ObjectPosition from '@vovayatsyuk/photoswipe-object-position'
// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'
import 'photoswipe/style.css'
// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: '.screenshots',
  children: 'a:has(img)',
  // showHideAnimationType: 'fade',
  showAnimationDuration: 400,
  hideAnimationDuration: 250,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  loop: false,
  indexIndicatorSep: ' of ',
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
  pswpModule: PhotoSwipe
})

// new PhotoSwipeDynamicCaption(lightbox, {
//   type: 'below',
//   captionContent: slide => {
//     return slide.data.element
//       .querySelector('img')
//       .closest('figure')
//       .querySelector('figcaption').innerHTML
//   }
// })

new ObjectPosition(lightbox)

lightbox.init()
