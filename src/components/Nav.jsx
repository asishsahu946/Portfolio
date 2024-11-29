import { NavLink } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {sideBarOn, sideBarOff} from '../redux/navSlice'
import { image } from "../assets/image";

function Nav() {
  const toggle = useSelector((state)=> state.navbar.toggle)
  const dispatch = useDispatch()

  return (
    <div className=" sticky top-0 ">
      <div className="flex items-center md:justify-around justify-between py-3 boxshadow  bg-white">
        <img className="px-5 w-[73px]" src={image.coding} alt="" />
        <ul className="hidden md:flex gap-12  ">
          <NavLink to="/">
            <li className="font-semibold ">
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="font-semibold ">
              About
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li className="font-semibold ">
              Projects
            </li>
          </NavLink>
          <NavLink to="/testimonials">
            <li className="font-semibold">
              Testimonials
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="font-semibold ">
              Contact
            </li>
          </NavLink>
        </ul>
        <div>
          <button className="hidden md:inline bg-[#111827] text-white rounded-xl py-2 px-5 font-semibold">
            Downlaod CV
          </button>
          <img
            className="md:hidden px-5 w-[75px]"
            src={image.threeline}
            alt="Three line logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
