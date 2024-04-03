import React from 'react'
import {doctors} from "./data"
import { CiImageOff } from "react-icons/ci";
import Link from 'next/link';

function Team() {
  return (
    <div>
            <div className='mt-[150px] mb-[50px]  text-center text-3xl text-darkRed'>
                <span>Our Team</span>
            </div>
            <div className='flex justify-center items-center'>
            <div className="grid grid-cols-1 w-[70%] justify-center items-center gap-10 ">
            {doctors.map((doctor, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse ' : 'flex-row '} items-center  h-96 bg-grayBg rounded-md`}>
               {
                doctor.imgPath ? <div className="w-1/2 md:w-1/3  overflow-hidden flex justify-center ">
                <img src={doctor.imgPath} alt={doctor.name} className='rounded-md bg-red-500'  />
              </div> : <div className="w-1/2 md:w-1/3  overflow-hidden flex justify-center items-center  h-60 ">
                <div className='w-[60%] h-full '>
                <CiImageOff className='w-full h-full opacity-20  text-grayHead'/>
                </div>
            </div>
               }
                
                <div className="w-1/2 md:w-2/3 px-10 font-libre-bodoni  ">
                  <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                  <h2 className="text-lg mb-5 font-semibold text-grayHead">{doctor.location}</h2>
                  <span className="text-wrap text-lg text-grayHead">{doctor.desc.slice(0,200)}....</span>
                 <Link href={`/team/${doctor.id}`}>
                 <div className='mt-6'>
                 <button className=' p-2 bg-blueEye bg-opacity-75 hover:bg-opacity-100 cursor-pointer rounded-full text-white'>Read More</button>
             </div>
                 </Link>
                </div>
                
              </div>
            ))}
          </div>
            </div>
            

    </div>
  )
}

export default Team