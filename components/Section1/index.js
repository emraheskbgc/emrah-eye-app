import React from "react";
import {data} from "./data"


function Section1() {
 
  return (
    <div >
      <div className="relative">
      <img src="/assets/images/head.png" alt="" className="w-full h-[300px] md:h-full" />

      <div className="absolute right-0 top-0 md:mr-14 md:mt-8 mr-3 mt-5 ">
        <img src="/assets/images/head2.png" alt="" className="w-16 md:w-48"/>
      </div>
      <div className="  flex justify-center items-center absolute bottom-0 mb-[-40px]  w-full">
        <div className="flex justify-around  md:w-[80%] w-full h-28 ">
          {data.map((item,index) => (
            <>
              <div key={index}>
                <div
                  className={` ${item.bgClass} bg-cover bg-center  w-28 h-28  md:w-56 md:h-56 rounded-full flex justify-center items-center `}
                >

                  <img src={item.imagePath} alt="" />
                </div>
                <div className=" flex mt-4 justify-center   ">
                  <p className="font-[500] ">{item.text}</p>
                </div>
                <div className="flex justify-center mt-6">
                    <img src="/assets/images/vector.png" alt="" />
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
