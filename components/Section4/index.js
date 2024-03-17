import React from "react";
import {data} from "./data"
function Section4() {
  return (
    <>
    <div className="flex justify-center text-[60px] font-[500]">
    <h1 className="flex flex-col"><span>Other</span> <span className="text-redTitle ml-10 mt-[-20px]">Featured</span></h1>
    </div>
    <div className="flex justify-evenly space-x-3 ">
    
      {data.map((data) => (
        <div key={data.id}  >
          <div
            className={`${data.bgClass} bg-cover bg-center md:w-56 md:h-56 w-16 h-16 rounded-full flex justify-center items-center `}
          >
            <img src={data.imagePath} alt="" className="w-10 h-10" />
          </div>
          <div className=" flex mt-4 justify-center ">
            <p className="font-[500] text-xs md:text-xl">{data.title}</p>
          </div>
          <div className="flex justify-center mt-6">
            <img src="/assets/images/vector.png" alt="" className="w-5 "/>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default Section4;
