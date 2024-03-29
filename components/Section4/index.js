import React from "react";
import { data } from "./data";
function Section4() {
  return (
    <>
      <div className="flex justify-center text-[60px] font-[500] ">
        <h1 className="flex flex-col font-libre-bodoni">
          <span>Other</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">Treatments</span>
        </h1>
      </div>
      <div className="flex  flex-col md:flex-row justify-evenly md:space-x-3 ">
        {data.map((data) => (
          <div
            key={data.id}
            className=" md:mt-20 mt-10  flex justify-center flex-col items-center"
          >
            <div
              className={`${data.bgClass}  bg-cover bg-center md:w-56 md:h-56 w-16 h-16 rounded-full md:flex hidden justify-center items-center `}
            >
              <img src={data.imagePath} alt="" className="w-10 h-10" />
            </div>
            <div className=" hidden md:flex mt-4 justify-center ">
              <p className="font-[500] text-xs md:text-xl font-lexend">{data.title}</p>
            </div>
            <div className=" hidden md:flex justify-center mt-11 mb-10">
              <img src="/assets/images/vector.png" alt="" className="w-5 " />
            </div>

            <div className="shadow-2xl  scale-95 hover:scale-100 hover:duration-500 duration-500 hover:cursor-pointer flex flex-col justify-center p-3   rounded-2xl bg-grayIcon bg-opacity-90 w-[85%] h-72  md:w-80 md:h-80">
              <div className=" flex justify-center md:max-h-60    items-center">
                <img
                  className=" md:max-h-60 max-h-60  "
                  src={data.cardImg}
                  alt=""
                />
              </div>

              <div
                className={`text-[8px] md:text-sm overflow-x-auto text-center max-h-10 `}
              >
                {data.cardText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Section4;
