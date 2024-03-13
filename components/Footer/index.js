import React from "react";
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative bg-footer-bg  bg-cover bg-center h-[613px]  mt-32">
      <div className="absolute right-14 top-0 mt-[-100px]">
        <img src="/assets/images/logo.png" alt="" />
      </div>
      <div className="absolute left-32 top-32 text-grayIcon">
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
