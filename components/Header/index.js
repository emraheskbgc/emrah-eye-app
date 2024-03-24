"use client"
import React, { useState } from 'react'
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";


function Header() {

  const phoneNumber = "+14807267009"
  const call = () => {
    window.location.href = `tel:${phoneNumber}`;
  }   
  const message  =() => {
    window.location.href =`https://wa.me/${phoneNumber}`;
  }
  return (
    <div className='bg-grayHead text-grayIcon flex  justify-center md:justify-end items-center  space-x-3 text-xl md:pr-7 h-[48px]'>


            <div className='flex justify-between items-center w-full px-3  '>
            <div className='flex md:hidden space-x-3'>
              <img src="/assets/images/messageIcon.png" alt="" onClick={message} />
                <img src="/assets/images/phoneIcon.png" alt="" onClick={call} />
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