import React from "react";

function ApplicationModal({ openApplicationModal }) {
  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-blackBg bg-opacity-60 w-screen h-screen   justify-center items-center 
      ${openApplicationModal ? "flex" : "hidden"} `}
      >
        <div className="bg-bodybg h-[80%] rounded-t rounded-b shadow-md md:w-[40%] w-[80%] flex flex-col">
            <div className="w-full text-end pr-5 pt-3 border ">x</div>
                <div className=" border mt-[20%]">
                <div className="text-center font-semibold ">
              Are you interested in a position within our group as an
              optometrist or an optometric tech ?
            </div>
            <div>
                <div>
                    Doctor
                </div>
                <div>
                    Optometrich Tech
                </div>
            </div>
                
                </div>
                
                
        </div>
      </div>
    </>
  );
}

export default ApplicationModal;
