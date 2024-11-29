import React from 'react'
import { image } from '../assets/image'

function Testimonials() {
  return (
    <div className=' bg-[#111827] py-10'>
      <div className="flex items-center justify-center">
        <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 ">
          Testimonials
        </p>
      </div>
        <p className='text-[#d1d5db] text-center py-7 font-semibold' >Nice things people have said about me:</p>
        <div className='mx-10  md:flex gap-12'>
          {/* testimonials cards 1 */}
          <div className='bg-[#1f2937] rounded-lg px-11  mt-5'>
            <div className='flex justify-center pt-9'>
            <img className='w-16 h-16 rounded-full ' src={image.testimage} alt="testimonials img" />
            </div>
            <p className='text-[#d1d5db] text-center font-semibold pt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae suscipit dolorem, repellat odit aliquid assumenda!</p>
            <h1 className='text-[#f9fafb] text-center font-extrabold pt-9'>John Doe</h1>
            <h5 className='text-[#d1d5db] text-center pt-2 pb-10'>Founder-xyz.com</h5>
          </div>
          {/* testimonials cards 1 */}
          <div className='bg-[#1f2937] rounded-lg px-11 mt-5'>
            <div className='flex justify-center pt-9'>
            <img className='w-16 h-16 rounded-full ' src={image.testimage} alt="testimonials img" />
            </div>
            <p className='text-[#d1d5db] text-center font-semibold pt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae suscipit dolorem, repellat odit aliquid assumenda!</p>
            <h1 className='text-[#f9fafb] text-center font-extrabold pt-9'>John Doe</h1>
            <h5 className='text-[#d1d5db] text-center pt-2 pb-10'>Founder-xyz.com</h5>
          </div>
          {/* testimonials cards 1 */}
          <div className='bg-[#1f2937] rounded-lg px-11 mt-5'>
            <div className='flex justify-center pt-9'>
            <img className='w-16 h-16 rounded-full ' src={image.testimage} alt="testimonials img" />
            </div>
            <p className='text-[#d1d5db] text-center font-semibold pt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae suscipit dolorem, repellat odit aliquid assumenda!</p>
            <h1 className='text-[#f9fafb] text-center font-extrabold pt-9'>John Doe</h1>
            <h5 className='text-[#d1d5db] text-center pt-2 pb-10'>Founder-xyz.com</h5>
          </div>
        </div>
    </div>
  )
}

export default Testimonials