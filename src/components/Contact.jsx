import React from "react";
import { image } from "../assets/image";

function Contact() {
  return (
    <div>
      <div className="bg-[#030712] text-center p-14">
        <div className="flex items-center justify-center ">
          <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 ">
            Get in touch
          </p>
        </div>
        <p className="text-[#d1d5db] font-semibold pt-4">
          What’s next? Feel free to reach out to me if you are looking for a{" "}
          <br className="md:hidden" /> developer, have a query, or simply want
          to connect.
        </p>
        <h1 className="text-[#f9fafb] font-extrabold pt-7">
          {" "}
          <img className="w-7 inline" src={image.mail} alt="" />{" "}
          asishsahu9462gmail.com{" "}
          <img className="w-6 inline" src={image.copy} alt="" />
        </h1>
        <h1 className="text-[#f9fafb] font-extrabold pt-2">
          <img className="w-7 inline" src={image.call} alt="" /> +91
          8895708555{" "}
          <img className="w-6 inline" src={image.copy} alt="" />
        </h1>
        <p className="text-[#d1d5db] pt-5">
          You may also find me on these platforms!
        </p>
        <div className=" flex mx-auto  mt-4 gap-2 w-20 md:w-24 ">
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
      <div className="bg-[#111827] text-[#d1d5db] p-3">
        <h1 className="font-semibold text-center">
          <img className="w-5 inline" src={image.copyright} alt="" />{" "}
          2024 | Coded{" "}
          <img
            className=" w-5 inline"
            src={image.programming}
            alt=""
          />{" "}
          by Asish Kumar sahu
        </h1>
      </div>
    </div>
  );
}

export default Contact;
