"use client"
import React,{useEffect} from "react";
import { data } from "./data";
import Aos from "aos";
import 'aos/dist/aos.css'


function Section1() {

  useEffect(()=> {
    Aos.init()
  },[])
  
  return (
    <div className="md:h-[190vh] h-[160vh] border ">
      <div className="relative  md:p-0">
      <div className="p-4  flex justify-center items-center mt-5 md:mt-0 md:p-0 md:overflow-hidden">
       <img
          src="/assets/images/head.png"
          alt=""
          className="md:w-full w-[80%]  scale-125  md:rounded-none rounded-2xl"
        />

        <div className="absolute  right-0 top-0 md:mr-11 md:mt-2 mr-8 mt-2 ">
          <img src="/assets/images/head2.png" alt="" className="w-12 md:w-48" />
        </div>
      </div>
       
        <div className=" flex flex-col justify-center items-center absolute md:bottom-0 mb-[-40px]  w-full">
          <div  className=" md:flex    justify-center  md:justify-around    md:w-[80%]  w-[90%]  h-28 ">
          
           {data.map((data, index) => (
              <>
                <div  key={index} data-aos="zoom-in-up">
                  <div  className="md:space-x-5  flex flex-col justify-center items-center space-y-5  ">
                    <div 
                      className={` ${data.bgClass} hidden  bg-cover bg-center shadow-lg opacity-90 shadow-grayHead w-28 h-28  md:w-56 md:h-56 rounded-full md:flex justify-center items-center datas-center `}
                    >
                      <img src={data.imagePath} alt="" className="w-24 h-24" />
                    </div>
                    <div className=" hidden md:flex mt-4 justify-center   ">
                      <p className="font-[500] ">{data.text}</p>
                    </div>
                    <div className=" hidden md:flex justify-center mt-6">
                      <img src="/assets/images/vector.png" alt="" />
                    </div>
                    
                      <div  data-aos ="fade-up" className="shadow-2xl  scale-95 hover:scale-100 hover:duration-500 duration-500 hover:cursor-pointer  rounded-2xl  p-4">
                        <img className="mb-5 rounded-lg" src={data.cardImage} alt="" />
                        <span className="hidden md:block">{data.cardText}</span>
                        <span className="block md:hidden text-center">{data.text}</span>
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
