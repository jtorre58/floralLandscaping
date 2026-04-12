import './Services.css'

const services = [
  {
    icon: '🌱',
    title: 'New Grass Installation',
    desc: 'Fresh sod or seed installation to give your yard a lush, green foundation. We prepare the soil and ensure proper drainage for lasting results.',
  },
  {
    icon: '💧',
    title: 'Sprinkler Systems',
    desc: 'Professional sprinkler system installation, repair, and seasonal maintenance. Keep your lawn hydrated efficiently all year round.',
  },
  {
    icon: '🪨',
    title: 'Rock Decoration',
    desc: 'Custom rock and stone landscaping designs that add texture and beauty. From decorative borders to full xeriscaping solutions.',
  },
  {
    icon: '🌿',
    title: 'Mulch & Ground Cover',
    desc: 'Quality mulch installation to protect your plants, retain moisture, and give your garden beds a clean, polished look.',
  },
  {
    icon: '🧱',
    title: 'Paver Walkways & Patios',
    desc: 'Beautiful paver stone walkways and patios designed and installed to enhance your outdoor living and curb appeal.',
  },
  {
    icon: '✂️',
    title: 'Lawn Maintenance',
    desc: 'Regular mowing, edging, trimming, and seasonal cleanup to keep your property looking its best throughout the year.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Complete Lawn Care Services</h2>
          <p className="section-subtitle">
            From installation to maintenance, we handle every aspect of your
            outdoor space with care and expertise.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
