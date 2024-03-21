"use client"
import React, { useState } from 'react'
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";


function Header() {
   
  return (
    <div className='bg-grayHead text-grayIcon flex  justify-center md:justify-end items-center  space-x-3 text-xl md:pr-7 h-[48px]'>


            <div className='flex justify-between items-center w-full px-3  '>
            <div className='flex md:hidden space-x-3'>
              <img src="/assets/images/messageIcon.png" alt="" />
                <img src="/assets/images/phoneIcon.png" alt="" />
            </div>
              <div className='flex justify-end w-full space-x-2 '>
               <img src="/assets/images/facebook.png" alt="" className='hidden md:block'/>
               <img src="/assets/images/facebook.png" alt=""  className='hidden md:block' />
               <img src="/assets/images/facebook.png" alt="" />
              </div>

               
            </div>
            
    </div>
  )
}

export default Header