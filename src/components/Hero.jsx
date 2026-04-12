import heroImg from '../assets/images/work-1.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src={heroImg} alt="Beautiful landscaping work by Floral Lawn Care" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <span className="hero__badge">Denver's Trusted Landscaping Experts</span>
        <h1 className="hero__title">
          Transform Your Outdoor
          <span className="hero__title-accent"> Living Space</span>
        </h1>
        <p className="hero__subtitle">
          Complete lawn care and landscaping services for residential and commercial
          properties across the Denver metro area. From new grass installation to
          custom rock designs — we bring your vision to life.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary btn--lg">
            Get Free Estimate
          </a>
          <a href="#gallery" className="btn btn-outline">
            View Our Work
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">100+</span>
            <span className="hero__stat-label">Projects Completed</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">5★</span>
            <span className="hero__stat-label">Customer Rating</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">Denver</span>
            <span className="hero__stat-label">Metro Area</span>
          </div>
        </div>
      </div>
    </section>
  )
}
