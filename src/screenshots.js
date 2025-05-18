import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import ObjectPosition from '@vovayatsyuk/photoswipe-object-position'
import 'photoswipe/style.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: 'main',
  children: 'a[data-pswp-width]',
  indexIndicatorSep: ' of ',
  showAnimationDuration: 400,
  hideAnimationDuration: 250,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  initialZoomLevel: 1,
  secondaryZoomLevel: 1,
  padding: { top: 60, bottom: 10, left: 10, right: 10 },
  pswpModule: PhotoSwipe
})

new ObjectPosition(lightbox)

lightbox.init()