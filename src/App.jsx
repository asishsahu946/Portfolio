import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import About from "./components/About"
import Home from "./components/Home"
import Testimonials from "./components/Testimonials"
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {

  return (
    
<>
  <Nav/>
  <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
</>
  )
}

export default App
