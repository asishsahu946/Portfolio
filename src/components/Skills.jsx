import React from 'react'
import {skills} from '../assets/skills'

function Skills() {
  return (
    <div className='bg-[#030712] text-[#f9fafb] pt-14 pb-12'>
       <div className="flex items-center justify-center ">
          <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 ">
            Skills
          </p>
        </div>
        <div className='text-center py-7 font-semibold md:text-xl'><p>The Skills, tools and technologies i am really good at: </p></div>
        <div className='grid grid-cols-3 md:grid-cols-6 place-items-center gap-2 md:gap-8'>
          {
            skills.map((item, index) => {
              return(
                <div key={index}>
                <img  src={item.image} alt="" />
                <p className='text-center'>
                  {
                    item.type
                  }
                </p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Skills 