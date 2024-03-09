"use client"
import React, { useState } from 'react'
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";


function Header() {
   
  return (
    <div className='bg-grayHead text-grayIcon flex  justify-end items-center  space-x-3 text-xl pr-7 h-[48px]'>
            <div>
                <FaFacebook/>
            </div>
            <div>
                <FaInstagram/>
            </div>
            <div>
                <FaLinkedin/>
            </div>
    </div>
  )
}

export default Header