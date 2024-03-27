"use client"
import React, { useState } from 'react'
import { FaFacebookSquare,FaLinkedin,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



function Header({call, message}) {

 
  return (
    <div className='bg-grayHead text-grayIcon flex  justify-center md:justify-end items-center  space-x-3 text-xl md:pr-7 h-[48px]'>


            <div className='flex justify-between items-center w-full px-3  '>
            <div className='flex md:hidden space-x-3'>
              <img src="/assets/images/messageIcon.png" alt="" onClick={message} />
                <img src="/assets/images/phoneIcon.png" alt="" onClick={call} />
            </div>
              <div className='flex justify-end w-full text-lg space-x-2 '>
               <BsTwitterX className='hidden md:block'/>
               <FaInstagram  className='hidden md:block' />
               <FaFacebookSquare/>
              </div>

               
            </div>
            
    </div>
  )
}

export default Header