
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'



function App() {
  

  return (
   <div>
    
     <Navbar></Navbar>
     
    <div className='container mx-auto lg:px-8 py-8 px-3 ' >
    <Hero></Hero>
    <Skills></Skills>
    <Projects></Projects>
    <Education></Education>
    <Contact></Contact>
      </div>
   </div>
  )
}

export default App
