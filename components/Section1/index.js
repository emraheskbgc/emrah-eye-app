import React from "react";
import { data } from "./data";

function Section1() {
  return (
    <div className="md:h-[190vh] h-[160vh] ">
      <div className="relative  md:p-0">
      <div className="p-4 md:p-0">
       <img
          src="/assets/images/head.png"
          alt=""
          className="w-full h-[300px] md:h-full md:rounded-none rounded-2xl"
        />

        <div className="absolute  right-0 top-0 md:mr-11 md:mt-6 mr-8 mt-5 ">
          <img src="/assets/images/head2.png" alt="" className="w-20 md:w-56" />
        </div>
      </div>
       
        <div className=" flex flex-col justify-center items-center absolute md:bottom-0 mb-[-40px]  w-full">
          <div className=" md:flex    justify-center  md:justify-around    md:w-[80%]  w-[90%]  h-28 ">
          
           {data.map((item, index) => (
              <>
                <div key={index} className="">
                  <div className="space-x-5  flex flex-col justify-center items-center space-y-5  ">
                    <div
                      className={` ${item.bgClass} hidden  bg-cover bg-center shadow-lg opacity-90 shadow-grayHead w-28 h-28  md:w-56 md:h-56 rounded-full md:flex justify-center items-center `}
                    >
                      <img src={item.imagePath} alt="" />
                    </div>
                    <div className=" hidden md:flex mt-4 justify-center   ">
                      <p className="font-[500] ">{item.text}</p>
                    </div>
                    <div className=" hidden md:flex justify-center mt-6">
                      <img src="/assets/images/vector.png" alt="" />
                    </div>
                    
                      <div className="shadow-xl   rounded-2xl  p-4">
                        <img className="mb-5 rounded-lg" src={item.cardImage} alt="" />
                        <span className="hidden md:block">{item.cardText}</span>
                        <span className="block md:hidden text-center">{item.text}</span>
                      </div>
                    
                  </div>
                  
                </div>
              </>
            ))}
          
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
