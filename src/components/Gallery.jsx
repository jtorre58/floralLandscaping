import { useState } from 'react'
import work1 from '../assets/images/work-1.jpg'
import work2 from '../assets/images/work-2.jpg'
import work3 from '../assets/images/work-3.jpg'
import work4 from '../assets/images/work-4.jpg'
import work5 from '../assets/images/work-5.jpg'
import work6 from '../assets/images/work-6.jpg'
import './Gallery.css'

const images = [
  { src: work1, alt: 'Paver walkway with rock landscaping', label: 'Paver Walkway' },
  { src: work2, alt: 'Residential exterior landscaping', label: 'Residential Project' },
  { src: work3, alt: 'Rock decoration and ground cover', label: 'Rock Design' },
  { src: work4, alt: 'Lawn installation project', label: 'Lawn Installation' },
  { src: work5, alt: 'Custom landscape design', label: 'Custom Design' },
  { src: work6, alt: 'Complete yard transformation', label: 'Yard Transformation' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            Take a look at some of our completed landscaping projects across the Denver metro area.
          </p>
        </div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <button
              className="gallery__item"
              key={i}
              onClick={() => setLightbox(i)}
              aria-label={`View ${img.label}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-label="Image viewer">
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}
            aria-label="Previous image"
          >‹</button>
          <img src={images[lightbox].src} alt={images[lightbox].alt} />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
            aria-label="Next image"
          >›</button>
        </div>
      )}
    </section>
  )
}
