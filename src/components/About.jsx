import React from "react";
import { BiRadioCircleMarked } from "react-icons/bi";
import { image } from "../assets/image";


function About() {
  return (
    <div  className="bg-[#111827] text-[#f9fafb] pt-14 px-9 pb-14 ">
    <div className="flex items-center justify-center">
          <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 ">
            About me
          </p>
        </div>
    <div className="md:flex md:gap-[157px] md:justify-center md:items-center md:px-16 ">
      <div>
        <img
          className=" w-[232px]  md:min-w-[250px] boximage-mobile rounded-lg mx-auto md:mx-2 my-10"
          src={image.Aboutimg}
          alt=""
        />
      </div>
      <div className="mt-12 leading-7 font-normal ">
        <h1 className="text-start font-semibold text-4xl mt-14">
          {" "}
          Curious about me? Here you have it:
        </h1>
        <p className="mt-4">
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (MERN). I am enthusiastic about bringing the
          technical and visual aspects of digital products to life. User
          experience, pixel perfect design, and writing clear, readable, highly
          performant code matters to me.
        </p>

        <p className="mt-4">
          I began my journey as a web developer in 2023, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, after
          starting my web development journey, I'm building cutting-edge web
          applications using modern technologies such as React.js, Node.js,
          Express.js, MongoDB, Tailwind.css and much more.
        </p>

        <p className="mt-4">
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>

        <p className="mt-4">
          When I'm not in full-on developer mode, you can find me hovering
          around on twitter or on indie hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where I share tech-related bites and build in public, or you can
          follow me on GitHub.
        </p>
        <p className="mt-4">Finally, some quick bits about me.</p>

        <ul className="mt-4">
          <li>
            {" "}
            <BiRadioCircleMarked className="inline mr-2" />
            B.tech in Computer Engineering
          </li>
         
          <li>
            <BiRadioCircleMarked className="inline mr-2" />
            Avid learner
          </li>
        </ul>

        <p className="mt-4">
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😉
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
