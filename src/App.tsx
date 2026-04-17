import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">{'<Eduardo />'}</div>
          <p className="footer-text">
            Crafted with React · TypeScript · Three.js · GSAP
          </p>
          <p className="footer-copy">© 2025 Eduardo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
