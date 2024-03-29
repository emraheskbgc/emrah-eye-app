"use client"
import React, { useState } from "react";
import { IoClose } from 'react-icons/io5';
import { GoDash } from 'react-icons/go';
import Doctor from "./Doctor";

function ApplicationModal({ openApplicationModal,setOpenApplicationModal }) {

  const[openDoctorModal, setOpenDoctorModal] = useState(false)


  const handleOpenDoctorModal = () => {
    setOpenDoctorModal(true)
  }

  const goBack = () => {
    setOpenDoctorModal(false)
    setOpenApplicationModal(true)
  }


  const handleCloseModal = () => {
    setOpenApplicationModal(false)
    setOpenDoctorModal(false)
  }

  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-blackBg bg-opacity-60 w-screen h-screen   justify-center items-center 
      ${openApplicationModal ? "flex" : "hidden"} `}
      >
        <div className="bg-bodybg border-4 border-blueEye h-[80%] rounded-t rounded-b shadow-md md:w-[40%] w-[80%] flex flex-col">
            
          <div className='flex flex-row mr-3 mt-3 justify-end items-center'>
               
          <div onClick={()=> setOpenApplicationModal(false)}>
            <div className='w-5 h-5 rounded-md p-4 cursor-pointer transition-all duration-700 relative  bg-grayHead bg-opacity-20 hover:bg-redTitle  group'>
              <IoClose
                size={30}
                className='text-redTitle transition-all duration-700 rotate-180 flex absolute group-hover:opacity-0 group-hover:rotate-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              />
              <GoDash
                size={30}
                className='text-blueEye rotate-0 transition-all duration-700 opacity-0 group-hover:block group-hover:rotate-180 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              />
            </div>
          </div>
        </div>
                <div className="  md:mt-[30%] mt-[60%] h-full">
                <div className="text-center font-semibold text-redTitle md:text-xl ">
              Are you interested in a position within our group as an
              optometrist  or an optometric tech ?
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-[10%] md:space-x-10 space-y-3 md:space-y-0">
                <div onClick={handleOpenDoctorModal} className=" md:px-5 px-2 py-1 md:py-3 rounded-full bg-blueEye bg-opacity-45 hover:bg-opacity-100 cursor-pointer ">
                    Doctor
                </div>
                <div className=" md:px-5  md:py-3 px-2 py-1 rounded-full bg-blueEye bg-opacity-45 hover:bg-opacity-100 cursor-pointer ">
                    Optometrich Tech
                </div>
            </div>
                
                </div>
                
                
        </div>
      </div>
      <Doctor openDoctorModal={openDoctorModal} setOpenDoctorModal={setOpenDoctorModal} goBack={goBack} handleCloseModal={handleCloseModal}/>
    </>
  );
}

export default ApplicationModal;