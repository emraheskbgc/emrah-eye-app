import React from 'react'
import data from "@/public/assets/data/section3.json"
import { HiArrowLongRight } from "react-icons/hi2";



function Section3() {
  return (
    <div className=' flex flex-col justify-center p-5 mt-[100px]   mb-40 '>
      <span className='text-[60px] font-[500] flex-col flex justify-center items-center'>
        Welcome <br/> <span className='text-redTitle text-3xl'>To Zmyslinski Eye</span>
      </span>
      <div className=' flex justify-center  w-full p-4' >
        <div className=' rounded-xl shadow-2xl w-[90%] p-6 '>
          {
            data.map((data,index) => (
              <div key={index} >
              <h1 className='font-semibold text-center text-xl mb-10' >{data.title}</h1>
              <p className='text-center text-lg' >{data.description}</p>
              <div className='flex space-x-4  justify-end items-end text-redTitle'>
             
             <div className='flex relative items-center justify-center'>
             <div className='font-[500] '>
             Read more
             </div>
                <div className='text-[40px]   '><HiArrowLongRight className='text-2xl w-16 h-10 stroke-0'/></div>
                <div className='w-8 h-8 absolute right-0 mr-1 rounded-full border border-redTitle'>
                </div>
             </div>
              </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Section3