import React from "react";
import { data } from "./data";

function Section6() {
  return (
    <div className="flex justify-center items-center flex-col mt-28 h-[1141px] bg-grayIcon">
      <div className="flex justify-center text-[60px] font-[500]">
        <h1 className="flex flex-col">
          <span>Patient</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">Stories</span>
        </h1>
      </div>
      <div class="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div class="grid grid-cols-3  max-h-[700px] grid-rows-2 grid-flow-col gap-2">
          {data.map((item, index) => (
            <div key={index} class={`${index === 4 ? " row-span-2" : ""}`}>
            <img
              src={item.path}
              class=" h-full w-full object-cover object-center  "
            />
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Section6;
