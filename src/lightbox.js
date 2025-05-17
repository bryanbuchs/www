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