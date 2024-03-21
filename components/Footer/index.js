import React from "react";
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative bg-footer-bg  bg-cover bg-center h-[613px]  mt-32">

    <div className="absolute bg-grayHead bg-opacity-5 rounded-full p-10 w-80 h-80 flex justify-center items-center md:right-14 top-0 right-4 mt-[-40px] md:mt-[-80px]">
    <div className="absolute bg-grayHead bg-opacity-10 rounded-full p-10 w-72 h-72 flex justify-center items-center ">
     <div className="absolute bg-grayIcon rounded-full p-10 w-64 h-64 flex justify-center items-center ">
    {/* Logo-03 sadece mobilde görüntülenecek */}
    <img src="/assets/images/logo/logo-05.png" alt="" className="hidden md:block" />



    {/* Logo-04 sadece masaüstü ve tabletlerde görüntülenecek */}
   
    <img src="/assets/images/logo/logo-03.png" alt="" className="block md:hidden" />
    
    
  </div>
    </div> 
   
    </div>
   
    
   
      <div className="absolute md:left-32 md:top-32 top-20 left-10 text-sm md:text-base text-grayIcon">
        <div className="flex space-x-8">
          <div>
            <h1>REACH OUT</h1>
          </div>
          <div className="mt-3">
            <p>emraheskibagci@gmail.com</p>
            <p>
              Phone: <span className="underline">(480) 726-7009</span>
            </p>
            <p>
              Fax: <span className="underline">(480) 726-7009</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-8 mt-12">
          <div>
            <h1>ABOUT US </h1>
          </div>
          <div lassName="mt-3">
            <p>Şirketimiz</p>
            <p>Out Doctors</p>
            <p>Career</p>
          </div>
        </div>
        <div className="flex space-x-3 mt-28">
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
      </div>
    </div>
  );
}

export default Footer;
