import React from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import { Tooltip } from "flowbite-react";
import {image} from '../assets/image'



function Home() {
  return (
    <>
        <div className="flex items-center justify-around p-12 mobile bg-[#030712] text-[#f9fafb] relative ">
      {/* Left Section */}
      <div>
        <h1 className="font-bold text-5xl  mobile mobile-h1">
          Hi I'm Asish
          <img className="inline" src={image.hiemoji} alt="" />{" "}
        </h1>
        <p className="leading-8 max-w-3xl my-6 ">
          As a         {/* Mern Tooltip */}
<div className="  inline-flex gap-2 m-0 p-0 ">
<Tooltip content={
      <div style={{ textAlign: 'center'}}>
        <img src={image.mongodb} alt="Description" style={{ width: '50px', height: '50px'}} />
      </div>
    }>
      <span className="font-extrabold text-5xl text-[#439437]">M</span>
    </Tooltip>
<Tooltip content={
      <div style={{ textAlign: 'center'}}>
        <img src={image.express} alt="Description" style={{ width: '50px', height: '50px' }} />
      </div>
    }>
      <span className="font-extrabold text-5xl text-[#39333a]">E</span>
    </Tooltip>
<Tooltip content={
      <div style={{ textAlign: 'center' }}>
        <img src={image.react} alt="Description" style={{ width: '50px', height: '50px' }} />
      </div>
    }>
      <span className="font-extrabold text-5xl text-[#61d9fc]">R</span>
    </Tooltip>
<Tooltip content={
      <div style={{ textAlign: 'center' }}>
        <img src={image.node} alt="Description" style={{ width: '50px', height: '50px' }} />
      </div>
    }>
      <span className="font-extrabold text-5xl text-[#8bc84f]">N</span>
    </Tooltip>
</div> stack web developer actively seeking new opportunities, I
          specialize in building dynamic and responsive web applications using
          MongoDB, Express.js, React, and Node.js. With a strong foundation in
          both front-end and back-end development, I’m eager to contribute my
          skills in creating seamless user experiences and scalable,
          high-performance applications. I’m passionate about staying updated on
          the latest technologies and best practices, and I’m looking for a role
          where I can collaborate with innovative teams, take on new challenges,
          and drive impactful results for businesses. Ready to make a meaningful
          contribution to your next project!
        </p>



        <p className="font-semibold text-justify ">
          <img
            className="w-5 inline m-2 "
            src={image.location}
            alt="Location Logo"
          />
          Phulbani, Odisha, India
        </p>
        <p className="font-semibold text-justify   ">
          <img
            className="w-4 inline m-2"
            src={image.greencricle}
            alt=""
          />
          Available for new projects
        </p>
        <div className=" flex mt-7 mx-4 gap-2 md:gap-5 w-20 md:w-36">
          <a href="https://github.com/asishsahu946">
            <img src={image.github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/asishsahu946/">
            <img src={image.linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/asishsahu946/?hl=en">
            <img src={image.instagram} alt="" />
          </a>
        </div>
      </div>
      {/* Right Section */}
      <img
        className="w-[233px] boximage rounded-2xl boximage-mobile"
        src={image.myimage}
        alt=""
      />
    </div>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    </>
  );
}

export default Home;
