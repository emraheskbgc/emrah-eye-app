import React from "react";
import datas from "@/public/assets/data/section4.json";

function Section4() {
  return (
    <>
    <div className="flex justify-center text-[60px] font-[500]">
    <h1 className="flex flex-col"><span>Other</span> <span className="text-redTitle ml-10 mt-[-20px]">Featured</span></h1>
    </div>
    <div className="flex justify-evenly space-x-3 ">
    
      {datas.map((data) => (
        <div key={data.id}  >
          <div
            className={` bg-${data.id === 1 ?"otherFea1" : data.id === 2 ? "otherFea2" : data.id === 3 ? "otherFea3" : data.id === 4 ?"otherFea4" :""} bg-cover bg-center md:w-56 md:h-56 w-16 h-16 rounded-full flex justify-center items-center `}
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
