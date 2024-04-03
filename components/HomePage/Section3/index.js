import React from "react";
import data from "@/public/assets/data/section3.json";
import { HiArrowLongRight } from "react-icons/hi2";

function Section3() {
  1
  return (
    <div className=" flex flex-col justify-center p-5 md:mt-[100px] mt-[120px]  mb-16 ">
      <span className="border font-libre-bodoni text-[60px] hidden  font-[500] flex-col md:flex justify-center items-center">
        Welcome <br />{" "}
        <span className="text-redTitle text-3xl ">To DNA Eye Group</span>
      </span>
      <div className="flex md:hidden justify-center items-center space-x-5">
        <div className="border-b-2 w-20 border-redTitle"></div>
        <span className="font-libre-bodoni text-[25px]  text-center font-[500] flex-col flex justify-center items-center text-redTitle">
          Welcome <br />{" "}
          <span className="text-blackBg text-sm">
          To DNA Eye Group
          </span>
        </span>
        <div className="border-b-2 w-20 border-redTitle"></div>
      </div>
      <div className=" flex justify-center mt-6 md:mt-0  w-full md:p-4 ">
        <div className=" rounded-xl shadow-2xl bg-grayBg md:bg-grayIcon md:w-[90%]  p-6 ">
          {data.map((data, index) => (
            <div key={index}>
              <h1 className="font-semibold font-lexend text-center text-lg mb-10">
                {data.title}
              </h1>
              <p className="text-center font-lexend ">{data.description}</p>
              <div className="flex space-x-4  justify-end items-end text-redTitle opacity-65 duration-300 hover:opacity-100 cursor-pointer">
                <div className="flex relative items-center justify-center ">
                  <div className="font-[500] '"><span className="font-libre-bodoni">Read more</span></div>
                  <div className="text-[40px]    ">
                    <HiArrowLongRight className="text-2xl w-16 h-10 stroke-0 transition-all duration-300 transform hover:translate-x-2 " />
                  </div>
                  <div className="w-8 h-8 absolute right-0 mr-1 rounded-full border border-redTitle"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
