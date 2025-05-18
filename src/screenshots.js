import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import ObjectPosition from '@vovayatsyuk/photoswipe-object-position'
import 'photoswipe/style.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: 'a[data-pswp-width]',
  // children: 'a[data-pswp-width]',
  // indexIndicatorSep: ' of ',
  showAnimationDuration: 400,
  hideAnimationDuration: 250,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  initialZoomLevel: zoomLevelObject => {
    // zoom to fit the width of the image in the viewport
    return zoomLevelObject.panAreaSize.x / zoomLevelObject.elementSize.x
  },
  secondaryZoomLevel: 'fill',
  padding: { top: 60, bottom: 0, left: 0, right: 0 },
  pswpModule: PhotoSwipe
})

new ObjectPosition(lightbox)

lightbox.init()
