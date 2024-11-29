import { PiCaretCircleDoubleDownLight } from 'react-icons/pi'
import './App.css'
import About from './Components/About me/About'
import Experience from './Components/Experince'
import Header from './Components/Header/Header'
import Hero from './Components/hero/Hero'
import Portfolio from './Components/Portfolio/Index'
import Skills from './Components/Skills/Skills'
import Testimoni from './Components/Testimoni'
import Contact from './Components/Contact/Index'


function App() {


  return (
    <>
      <Header /> 
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimoni />
      <Contact />
    </>
  )
}

export default App
