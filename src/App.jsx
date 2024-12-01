import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import About from "./components/About"
import Home from "./components/Home"
import Testimonials from "./components/Testimonials"
import Contact from './components/Contact'
import Projects from './components/Projects'
import { ThemeProvider } from "@material-tailwind/react";


function App() {

  const theme = {
    // Drawer
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: "right",
        overlayProps: undefined,
        className: "",
        dismiss: undefined,
        onClose: undefined,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-full",
            height: "h-screen",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-60",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };

  return (
    
 <ThemeProvider value={theme}>
  <Nav/>
  <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
 </ThemeProvider>
  )
}

export default App
