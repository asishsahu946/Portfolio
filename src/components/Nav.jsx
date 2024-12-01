import React from "react";
import { NavLink } from "react-router-dom";
import { image } from "../assets/image";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";

function Nav() {

  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const theme = {
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: "left",
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
            height: "h-full",
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
    <div className=" sticky top-0  z-50">
      <div className="flex items-center md:justify-around justify-between py-3 boxshadow  bg-white">
        <img className="px-5 w-[73px]" src={image.coding} alt="" />
        <ul className="hidden md:flex gap-12  ">
          <NavLink to="/">
            <li className="font-semibold ">
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="font-semibold " >
              About
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li className="font-semibold " >
              Projects
            </li>
          </NavLink>
          <NavLink to="/testimonials">
            <li className="font-semibold" >
              Testimonials
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="font-semibold " >
              Contact
            </li>
          </NavLink>
        </ul>
        <div>
          <button className="hidden md:inline bg-[#111827] text-white rounded-xl py-2 px-5 font-semibold">
            Downlaod CV
          </button>
       <img onClick={openDrawer} 
            className="md:hidden px-5 w-[75px]"
            src={image.threeline}
            alt="Three line logo"
          />
        </div>
      </div>
      {/* mobile nav toggle */}
      <React.Fragment>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
        <img className="px-5 w-[73px]" src={image.coding} alt="" />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <ul className="">
          <NavLink to="/" >
            <li className="font-semibold " onClick={closeDrawer}>
              Home
            </li>
          </NavLink>
          <NavLink to="/about" >
            <li className="font-semibold pt-1" onClick={closeDrawer}>
              About
            </li>
          </NavLink>
          <NavLink to="/projects" >
            <li className="font-semibold pt-1" onClick={closeDrawer}>
              Projects
            </li>
          </NavLink>
          <NavLink to="/testimonials" >
            <li className="font-semibold pt-1" onClick={closeDrawer}>
              Testimonials
            </li>
          </NavLink>
          <NavLink to="/contact" >
            <li className="font-semibold pt-1" onClick={closeDrawer}>
              Contact
            </li>
          </NavLink>
        </ul>
          <Button size="sm" className="mt-5">Download CV</Button>
        
      </Drawer>
    </React.Fragment>
    </div>
  );
}

export default Nav;
