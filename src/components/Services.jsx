import './Services.css'

const services = [
  {
    icon: '🌱',
    title: 'New Grass Installation & Sodding',
    desc: 'Fresh sod or seed installation to give your yard a lush, green foundation. We prepare the soil and ensure proper drainage for lasting results.',
  },
  {
    icon: '✂️',
    title: 'Lawn Mowing & Maintenance',
    desc: 'Regular mowing, trimming, edging, and seasonal cleanup to keep your property looking its best throughout the year.',
  },
  {
    icon: '💧',
    title: 'Sprinkler Systems & Blow Out',
    desc: 'Professional sprinkler system installation, repair, and seasonal blow out service. Keep your lawn hydrated efficiently all year round.',
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
    title: 'Retaining Walls',
    desc: 'Durable and attractive retaining walls to manage slopes, prevent erosion, and add structure to your landscape.',
  },
  {
    icon: '🌳',
    title: 'Shrub Pruning & Weeding',
    desc: 'Expert shrub pruning, weeding, and plant care to keep your garden beds healthy, tidy, and thriving.',
  },
  {
    icon: '🏡',
    title: 'New Fences',
    desc: 'Quality fence installation to add privacy, security, and curb appeal to your property. Various styles and materials available.',
  },
  {
    icon: '🍂',
    title: 'Fertilization & Cleanup',
    desc: 'Seasonal fertilization to promote healthy growth, plus full yard cleanup services to keep your property spotless.',
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
