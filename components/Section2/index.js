import React from "react";
import datas from "@/public/assets/data/section2.json";

function Section2() {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex justify-around items-center space-x-5  w-[90%]  mt-72 p-3">
        {datas.map((data) => (
          <div key={data.id} className="shadow-xl rounded-2xl  p-3">
            <img className="mb-5" src={data.imgPath} alt="" />
            <span>{data.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
