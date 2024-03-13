import React from "react";
import datas from "@/public/assets/data/section4.json";

function Section4() {
  return (
    <>
    <div className="flex justify-center text-[60px] font-[500]">
    <h1 className="flex flex-col"><span>Other</span> <span className="text-redTitle ml-10 mt-[-20px]">Featured</span></h1>
    </div>
    <div className="flex justify-evenly ">
    
      {datas.map((data) => (
        <div key={data.id} >
          <div
            className={` bg-${data.bgClass} bg-cover bg-center w-56 h-56 rounded-full flex justify-center items-center `}
          >
            <img src={data.imagePath} alt="" />
          </div>
          <div className=" flex mt-4 justify-center ">
            <p className="font-[500]">{data.title}</p>
          </div>
          <div className="flex justify-center mt-6">
            <img src="/assets/images/vector.png" alt="" />
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default Section4;
