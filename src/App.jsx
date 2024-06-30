
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
  

  return (
    <div className='container mx-auto lg:px-8 py-8 px-3 ' >
    <Navbar></Navbar>
    <Hero></Hero>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
      
      
     
     
      </div>
  )
}

export default App
