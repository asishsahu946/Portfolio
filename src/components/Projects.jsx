import React from "react";
import { FaLink } from "react-icons/fa";
import { image } from "../assets/image";

function Projects() {
  return (
    <div className="bg-[#030712] pb-6">
      <div className="flex items-center justify-center ">
        <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 mt-16 ">
          Projects
        </p>
      </div>
      <p className="text-[#d1d5db] text-center mt-4 font-semibold">
        Some of the noteworthy projects i have built:
      </p>


      {/* Project section 1 */}
      <div className="bg-[#374151] mx-7 my-9 lg:flex justify-center rounded-lg ">
        {/* left section */}
        <img className=" mx-auto my-auto lg:mx-[10%] py-14 w-full h-full rounded-2xl " src={image.projectimage} alt="" />
        {/* Right section */}
        <div className="bg-[#1f2937] text-[#f9fafb] pl-9 p-9  rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg ">
          <h1 className="font-bold text-lg">Fiskil</h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            dolorum accusamus facilis quasi libero inventore obcaecati at
            dolorem eos odit!
          </p>
          <div className="pt-7 flex flex-wrap gap-2">
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            
          </div>
          <div className="mt-10">
            <a href="" className="border rounded-xl px-4 py-3 font-bold bg-gray-600 "><button><FaLink className="inline -mt-1"/> Project Link</button></a>

            </div>
        </div>
      </div>
      {/* Project section 2 */}
      <div className="bg-[#374151] mx-7 my-9 lg:flex justify-center lg:flex-row-reverse rounded-xl">
        {/* left section */}
        <img className=" mx-auto my-auto lg:mx-[10%] py-14 w-full h-full rounded-2xl " src={image.projectimage} alt="" />
        {/* Right section */}
        <div className="bg-[#1f2937] text-[#f9fafb] pl-9 p-9 rounded-b-lg lg:rounded-br-none lg:rounded-tl-lg">
          <h1 className="font-bold text-lg">Fiskil</h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            dolorum accusamus facilis quasi libero inventore obcaecati at
            dolorem eos odit!
          </p>
          <div className="pt-7 flex flex-wrap gap-2">
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            
          </div>
          <div className="mt-10">
            <a href="" className="border rounded-xl px-4 py-3 font-bold bg-gray-600 "><button><FaLink className="inline -mt-1"/> Project Link</button></a>

            </div>
        </div>
      </div>
            {/* Project section 3 */}
            <div className="bg-[#374151] mx-7 my-9 lg:flex justify-center rounded-lg ">
        {/* left section */}
        <img className=" mx-auto my-auto lg:mx-[10%] py-14 w-full h-full rounded-2xl  " src={image.projectimage} alt="" />
        {/* Right section */}
        <div className="bg-[#1f2937] text-[#f9fafb] pl-9 p-9  rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg">
          <h1 className="font-bold text-lg">Fiskil</h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            dolorum accusamus facilis quasi libero inventore obcaecati at
            dolorem eos odit!
          </p>
          <div className="pt-7 flex flex-wrap gap-2">
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 ">
                Education
              </p>
            </div>
            
          </div>
          <div className="mt-10">
            <a href="" className="border rounded-xl px-4 py-3 font-bold bg-gray-600 "><button><FaLink className="inline -mt-1"/> Project Link</button></a>

            </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
