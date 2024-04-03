import React from 'react'
import {data} from "./data"

function About() {
  
  return (
    <div >
        <div className=' relative flex justify-center items-center h-96 bg-center bg-cover   bg-about-bg  '>
        <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-30" />
              <div className='flex flex-col justify-center items-center text-white z-30'>
                 <span className='font-[500]  mb-5'>Your eyes deserve the best</span>
                 <span className='text-5xl font-libre-bodoni'>We will be there every step of the way</span>
              </div>
        </div>
        <div className='flex justify-center items-center mt-20'>
        <div className='grid  grid-cols-2  w-[70%] px-10'>
          <div className=' font-libre-bodoni'>
            <h4 className='text-grayHead text-lg font-[400]'>{data.title1}</h4>
            <h2 className='text-4xl mt-2'>{data.title2}</h2>
            {

              data.desc.map((item,index) => (
                <p key={index} className='mt-3 text-grayHead text-xl font-[400] '>{item.desc1}</p>
              ))

            }
          </div>
          <div className=' px-10 h-[500px]'>
            <img src="/assets/images/about1.jpg" alt="" className="h-full" />
          </div>
        </div>
        </div>
        <div className=' relative mt-20 h-[500px] bg-about1-bg bg-cover bg-center'>
        <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-35" />

        <div className=' flex  justify-center items-center h-full'>
            <div className='w-[50%] flex flex-col  z-30 text-center font-libre-bodoni'>
                <span className='text-white text-lg font-[700] '>{data.title3}</span>
                <span className='text-white text-5xl mt-5'>{data.title4}</span>
                <div>
                 <button className='mt-10 border p-3 rounded-full bg-blueEye bg-opacity-80 hover:bg-opacity-100 cursor-pointer text-white'>Book an Appointment</button>
                </div>
               
            </div>
        </div>
        
        </div>
        
    
    </div>
  )
}

export default About