import work4 from '../assets/images/work-4.jpg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about__grid">
          <div className="about__image">
            <img src={work4} alt="Floral Lawn Care team at work" />
            <div className="about__image-badge">
              <span className="about__image-badge-num">Serving</span>
              <span className="about__image-badge-label">Denver Metro</span>
            </div>
          </div>

          <div className="about__content">
            <span className="section-label">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Your Local Denver Landscaping Partner
            </h2>
            <p className="about__text">
              Floral Lawn Care is a locally owned and operated landscaping company
              proudly serving the Denver metro area, including Thornton, Westminster,
              Broomfield, and surrounding communities.
            </p>
            <p className="about__text">
              We specialize in complete lawn care services — from new grass installation
              and sprinkler systems to custom rock decoration, mulch, paver walkways,
              and ongoing maintenance. Our team is dedicated to transforming your outdoor
              space into something you'll love coming home to.
            </p>

            <div className="about__features">
              <div className="about__feature">
                <span className="about__feature-icon">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">✓</span>
                <span>Free Estimates</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">✓</span>
                <span>Locally Owned</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">✓</span>
                <span>Quality Guaranteed</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
