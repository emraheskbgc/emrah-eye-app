import React from "react";
import data from "@/public/assets/data/section1.json";


function Section1() {
 
  return (
    <div className="border">
      <div className="relative">
      <img src="/assets/images/head.png" alt="" className="w-full h-[754px]" />

      <div className="absolute right-0 top-0 mr-20 mt-10">
        <img src="/assets/images/head2.png" alt="" />
      </div>
      <div className="  flex justify-center items-center absolute bottom-0 mb-[-40px]  w-full">
        <div className="flex justify-around w-[80%] h-28 ">
          {data.map((item,index) => (
            <>
              <div key={index}>
                <div
                  className={` bg-${item.bgClass} bg-cover bg-center w-56 h-56 rounded-full flex justify-center items-center `}
                >
                  <img src={item.imagePath} alt="" />
                </div>
                <div className=" flex mt-4 justify-center ">
                  <p className="font-[500]">{item.text}</p>
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
