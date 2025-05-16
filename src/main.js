import 'reasonable-colors/reasonable-colors.css'

import '@fontsource/covered-by-your-grace'
import '@fontsource-variable/alegreya'

import 'open-props/shadows.min.css'
import 'open-props/easings.min.css'
import 'open-props/sizes.min.css'
import 'open-props/aspects.min.css'
import 'open-props/fonts.min.css'
import 'open-props/aspects.min.css'

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
import ObjectPosition from '@vovayatsyuk/photoswipe-object-position'
import 'photoswipe/style.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: 'figure a[data-pswp-width]',
  showAnimationDuration: 400,
  hideAnimationDuration: 250,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  initialZoomLevel: 'fill',
  secondaryZoomLevel: 1.5,
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
  pswpModule: PhotoSwipe
})

new ObjectPosition(lightbox)

lightbox.init()
