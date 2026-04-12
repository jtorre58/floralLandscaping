import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">🌿</span>
              <div>
                <span className="footer__logo-name">Floral</span>
                <span className="footer__logo-sub">Lawn Care</span>
              </div>
            </div>
            <p className="footer__desc">
              Complete lawn care and landscaping services for the Denver metro area.
              Transforming outdoor spaces one yard at a time.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">New Grass Installation</a></li>
              <li><a href="#services">Sprinkler Systems</a></li>
              <li><a href="#services">Rock Decoration</a></li>
              <li><a href="#services">Mulch & Ground Cover</a></li>
              <li><a href="#services">Paver Walkways</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>10201 Riverdale Rd Lot 216</li>
              <li>Thornton, CO 80229</li>
              <li style={{ marginTop: '0.5rem' }}>Mon – Sat: 7AM – 6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Floral Lawn Care. All rights reserved.</p>
          <p>Proudly serving Denver, CO and surrounding areas.</p>
        </div>
      </div>
    </footer>
  )
}
