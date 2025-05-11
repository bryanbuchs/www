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

import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'
import 'photoswipe/style.css'
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: '.screenshots',
  children: 'a:has(img)',
  showHideAnimationType: 'fade',
  loop: false,
  indexIndicatorSep: ' of ',
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
  pswpModule: PhotoSwipe
})

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  type: 'below',
  captionContent: slide => {
    return slide.data.element
      .querySelector('img')
      .closest('figure')
      .querySelector('figcaption').innerHTML
  }
})

lightbox.init()
