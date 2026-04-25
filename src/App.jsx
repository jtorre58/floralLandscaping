import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlyerBanner from './components/FlyerBanner'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FlyerBanner />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
