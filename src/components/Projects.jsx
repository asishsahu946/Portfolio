import React from "react";
import { FaLink } from "react-icons/fa";
import { image } from "../assets/image";
import data from '../assets/projectData'

function Projects() {
  return (
    <div className="bg-[#030712] pb-6 px-14 md-max:px-2">
      <div className="flex items-center justify-center ">
        <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 mt-16 ">
          Projects
        </p>
      </div>
      <p className="text-[#d1d5db] text-center mt-4 font-semibold">
        Some of the noteworthy projects i have built:
      </p>

      <div>
        {
          data.map((item,index) => {
            return <div className="bg-[#374151] mx-7 md-max:mx-2 my-9 lg:flex justify-center rounded-lg ">
        {/* left section */}
        <img className="mx-auto my-auto  px-3 md-max:px-2 py-14 md-max:py-2 w-[750px] xl-max:w-[599px] md-max:w-full" src={item.image} alt="" />
        {/* Right section */}
        <div className="bg-[#1f2937] text-[#f9fafb] pl-9 md-max:pl-3 p-9 md-max:p-5 rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg ">
          <h1 className="font-bold text-lg">{item.title}</h1>
          <p className="pt-8 md-max:pt-2 md-max:text-sm">
            {item.overview}
          </p>
          <div className="pt-7 flex flex-wrap gap-2">
            {
              item.techUsed.map((skills,index) => <div className="inline-flex justify-center">
              <p className=" bg-[#374151] text-[#f9fafb] font-semibold rounded-xl px-4 py-1 md-max:text-sm ">
                {skills}
              </p>
            </div>)
            }
            
            
          </div>
          <div className="mt-10">
            <a href={item.link} className="border rounded-xl px-4 py-3 font-bold bg-gray-600  md-max:text-sm"><button><FaLink className="inline -mt-1"/> Project Link</button></a>

            </div>
        </div>
      </div>

          })
        }
      </div>

      {/* Project section 1 */}
      

    </div>
  );
}

export default Projects;
