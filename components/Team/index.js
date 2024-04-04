
import React from "react";
import {  doctors } from "./data";
import { CiImageOff } from "react-icons/ci";
import Link from "next/link";
import {data} from "@/components/Contact/data"

function Team() {
  const sortedDoctors = doctors.sort((a, b) => a.surname.localeCompare(b.surname));
  return (
    <div className=" ">
      <div className="mt-[150px]  mb-[50px]  text-center text-3xl text-darkRed">
        <span>Our Team</span>
      </div>
      <div className="flex  justify-center items-center">
        <div className="grid border-b pb-10 grid-cols-1 w-[70%] justify-center items-center gap-10 ">
          {sortedDoctors.map((doctor, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row-reverse " : "flex-row "
              } items-center  h-96 bg-grayBg rounded-md`}
            >
              {doctor.imgPath  ? (
                <div className="w-1/2 md:w-1/4  overflow-hidden max-h-96 h-80 px-6  flex justify-center items-center">
                  <img
                    src={doctor.imgPath}
                    alt={doctor.name}
                    className="rounded-md  w-full h-full bg-red-500"
                  />
                </div>
              ) : (
                <div className="w-1/2 md:w-1/3  overflow-hidden flex justify-center items-center  h-60 ">
                  <div className="w-[60%] h-full ">
                    <CiImageOff className="w-full h-full opacity-20  text-grayHead" />
                  </div>
                </div>
              )}

              <div className="w-1/2 md:w-2/3 px-10 font-libre-bodoni  ">
                <h2 className="text-2xl font-semibold">{doctor.name} {doctor.surname} </h2>
                <h2 className="text-lg mb-5 font-semibold text-grayHead">
                  {doctor.location}
                </h2>
                <span className="text-wrap text-lg text-grayHead">
                  {doctor.desc.slice(0, 200)}....
                </span>
                <Link href={`/team/${doctor.id}`}>
                  <div className="mt-6">
                    <button className=" p-2 bg-blueEye bg-opacity-75 hover:bg-opacity-100 cursor-pointer rounded-full text-white">
                      Read More
                    </button>
                  </div>
                </Link>
              </div>
              
            </div>
            
          ))}
        </div>
        <div>
        
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
      <div className=" w-[70%] flex justify-center items-center flex-col">
      <div className=" text-4xl text-darkRed font-[500] my-10">
        <span>Our Arizona Locations</span>
      </div>
      <div className=" grid grid-cols-3 gap-4 w-[90%]">
      
      {data.map((item) => (
        <div key={item.id} className=" p-3">
          <div className="w-full h-96">
            <iframe
              className="w-full h-full"
              src={item.mapPath}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center mt-2 text-2xl font-[500]">
            <span>{item.title}</span>
          </div>
          <Link href={item.linkPath}>
            <div className="text-center mt-2 hover:underline h-16">
              <span className="max-w-screen-sm break-words text-xl ">
                {item.adress}
              </span>
            </div>
          </Link>

          <div className="  h-14 flex items-center justify-center mt-2">
            <button className=" px-4 py-2 rounded-full bg-blueEye bg-opacity-65 hover:bg-opacity-100 text-white">
              Book Now
            </button>
          </div>
          <div className="mt-2 text-center hover:underline cursor-pointer">
            Phone:<span>{item.phone}</span>
          </div>
          {item.fax && (
            <div className="mt-2 text-center hover:underline cursor-pointer">
              Fax:<span>{item.fax}</span>
            </div>
          )}
          <div className=" flex justify-center items-center mt-8">
            <table>
              {item.work_hours.map((day, index) => (
                <tr key={index}>
                  <td className="text-center pr-3">{day.day}:</td>
                  {day.start_time ||
                    (day.end_time && (
                      <td>
                        {day.start_time} - {day.end_time}
                      </td>
                    ))}
                  {day.closed && <td>CLOSED</td>}
                </tr>
              ))}
            </table>
          </div>
        </div>
      ))}
    </div>
      </div>
      </div>
      <div className=' relative mt-20 h-[500px] bg-about1-bg bg-cover bg-center'>
      <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-35" />

      <div className=' flex  justify-center items-center h-full'>
          <div className='w-[50%] flex flex-col  z-30 text-center font-libre-bodoni'>
              <span className='text-white text-lg font-[700] '>We are here to help!</span>
              <span className='text-white text-5xl mt-5'>We’re a no-judgment zone, so feel free to come to us with any questions or concerns.</span>
              <div>
               <button className='mt-10 border p-3 rounded-full bg-blueEye bg-opacity-80 hover:bg-opacity-100 cursor-pointer text-white'>Book an Appointment</button>
              </div>
             
          </div>
      </div>
      
      </div>
    </div>
  );
}

export default Team;
