import flyer1 from '../assets/images/flyer-1.jpg'
import flyer2 from '../assets/images/flyer-2.jpg'
import './FlyerBanner.css'

export default function FlyerBanner() {
  return (
    <section className="flyer-banner">
      <div className="flyer-banner__inner">
        <img src={flyer1} alt="Floral Lawn Care flyer — Lawn Mowing, Weeding, Sodding, Trimming, Fertilization, Cleanup, Shrub Pruning" />
        <img src={flyer2} alt="Floral Lawn Care flyer — New Grass Installation, Sprinkler System, Rock Decoration, Mulch, Retaining Wall, New Fences" />
      </div>
    </section>
  )
}
