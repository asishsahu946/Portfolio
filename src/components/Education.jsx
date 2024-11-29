import React from "react";
import { BiRadioCircleMarked } from "react-icons/bi";

function Education() {
  return (
    <div className="bg-[#111827] text-[#f9fafb] pt-14 px-5 pb-10 lg:px-80">
      <div className="flex items-center justify-center">
        <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 ">
          Education
        </p>
      </div>
      <p className="text-center font-semibold pt-6">
        Here is a quick summary of my Education:
      </p>
      <div className="bg-[#1f2937] mt-7 rounded-xl p-5 ">
        <h5 className="font-semibold text-[#e5e7eb]">Jun 2023</h5>

        <h5 className="font-bold pt-4">
          {" "}
          <BiRadioCircleMarked className="inline" /> Bachelor of Technology in
          Computer Science and Engineering
        </h5>
        <h1 className="font-bold pt-2">
          {" "}
          <BiRadioCircleMarked className="inline" /> CGPA: 8.15
        </h1>
      </div>
      <div className="bg-[#1f2937] mt-7 rounded-lg p-5">
        <h5 className="font-semibold text-[#e5e7eb]">Jun 2020</h5>
        <h1 className="font-bold pt-4">
          <BiRadioCircleMarked className="inline" /> Diploma in Computer Science
          and Engineering
        </h1>
      </div>
      <div className="bg-[#1f2937] mt-7 rounded-lg p-5">
        <h5 className="font-semibold text-[#e5e7eb]">Jun 2016</h5>
        <h1 className="font-bold pt-4">
          <BiRadioCircleMarked className="inline" />
          Matriculation
        </h1>
      </div>
    </div>
  );
}

export default Education;
