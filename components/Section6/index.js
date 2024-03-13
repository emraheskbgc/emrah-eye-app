import React from "react";

function Section6() {
  return (
    <div className="flex justify-center items-center flex-col  mt-28 h-[1141px]">
      <div className="flex justify-center text-[60px] font-[500]">
        <h1 className="flex flex-col">
          <span>Patient</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">Stories</span>
        </h1>
      </div>
      <div class="p-5 flex justify-center items-center max-w-screen-xl   ">
        <div class="columns-3 gap-3 w-full  ">
          <div>
          <img className="mt-2" src="/assets/images/story1.png" />
          <img className="mt-2"  src="/assets/images/story2.png" />
          </div>
          <div>
          <img className="mt-2"  src="/assets/images/story3.png" />
          <img className="mt-2"  src="/assets/images/story4.png" />
          </div>
          <div>
          <img className="mt-2"  src="/assets/images/story5.png" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Section6;
