import React from 'react'
import {data} from "./data"
import Link from 'next/link'

function Contact() {
  return (
    <div className='mt-[100px] flex flex-col justify-center items-center'>

      <div className=' text-4xl text-darkRed font-[500] mb-32'>
        <span>Contact Us</span>
      </div>
      <div className=' grid grid-cols-3 gap-4 w-[90%]'>
        
        {data.map((item) => (
          <div key={item.id} className=' p-3'>
         <div className='w-full h-96'>
         <iframe className='w-full h-full' src={item.mapPath}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='text-center mt-2 text-2xl font-[500]'>
              <span>{item.title}</span>
            </div>
            <Link href={item.linkPath}>
            <div className='text-center mt-2 hover:underline h-16'>
              <span className='max-w-screen-sm break-words text-xl '>{item.adress}</span>
            </div>
            </Link>
            
            <div className='  h-14 flex items-center justify-center mt-2'>
              <button className=' px-4 py-2 rounded-full bg-blueEye bg-opacity-65 hover:bg-opacity-100 text-white'>Book Now</button>
            </div>
            <div className='mt-2 text-center hover:underline cursor-pointer'>
              Phone:<span>{item.phone}</span>
            </div>
            {item.fax && <div className='mt-2 text-center hover:underline cursor-pointer'>
            Fax:<span>{item.fax}</span>
          </div>}
          <div className=' flex justify-center items-center mt-8'>
          <table>
          {item.work_hours.map((day, index) => (
            <tr key={index}>
              <td className='text-center pr-3'>{day.day}:</td> 
              <td>{day.start_time} - {day.end_time}</td>
            </tr>
          ))}
        </table>
          </div>
        </div>
        ))}
        
           
      </div>

    </div>
  )
}

export default Contact