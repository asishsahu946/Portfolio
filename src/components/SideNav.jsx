import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {sideBarOn, sideBarOff} from '../redux/navSlice'
import { image } from '../assets/image'

function SideNav() {
  const toggle = useSelector((state)=> state.navbar.toggle)
  const dispatch = useDispatch()


  return (
    <div>
              {/* side nav bar */}
    <div  className="absolute top-0 w-[80vw] h-full right-0 bg-white  duration-300  ease-in-out" style={{
        opacity: toggle? 1 : 0,
        visibility: toggle? "visible" : "hidden",
        
      }}>
        <div className="flex items-center justify-between my-2 px-5">
        <img className=" w-[42px]" src={image.coding} alt="" />
        <img className="w-[44px]" src={image.closecircle} alt="close circle Logo" />
        </div>
        <ul>
        <NavLink to="/">
          <li className="font-semibold py-1 px-3 text-[#4b5563] hover:hover:translate-y-[-3px] transition-all duration-500">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="font-semibold py-1 px-3 text-[#4b5563] hover:hover:translate-y-[-3px] transition-all duration-500">About</li>
        </NavLink>
        <NavLink to="/projects">
          <li className="font-semibold py-1 px-3 text-[#4b5563] hover:hover:translate-y-[-3px] transition-all duration-500">Projects</li>
        </NavLink>
        <NavLink to="/testimonials">
          <li className="font-semibold py-1 px-3 text-[#4b5563] hover:hover:translate-y-[-3px] transition-all duration-500">Testimonials</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="font-semibold py-1 px-3 text-[#4b5563] hover:hover:translate-y-[-3px] transition-all duration-500">Contact</li>
        </NavLink>
        </ul>
        <button className=" bg-[#111827]  text-white w-[90%] mx-6 p-2 rounded-2xl ">Download CV</button>
    </div>
    </div>
  )
}

export default SideNav