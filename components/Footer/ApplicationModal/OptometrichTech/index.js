import React,{useState} from "react";
import { IoClose } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

function OptometrichTech({ openOptometrichTechModal, goBack, handleCloseModal }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-blackBg bg-opacity-0 w-screen h-screen   justify-center items-center 
    ${openOptometrichTechModal ? "flex" : "hidden"} `}
      >
        <div className="bg-bodybg h-[80%] border-4  border-redTitle rounded-t rounded-b shadow-md md:w-[40%] w-[80%] flex flex-col ">
          <div className="flex flex-row m-3 justify-between items-center">
            <div onClick={goBack} className="  rounded-md p-[6px] text-xl  cursor-pointer  duration-700  transition-all bg-grayHead bg-opacity-20 hover:bg-redTitle text-redTitle hover:text-white  ">
              <IoIosArrowBack />
              </div>
            <div onClick={handleCloseModal}>
              <div className="w-5 h-5 rounded-md p-4 cursor-pointer transition-all duration-700 relative  bg-grayHead bg-opacity-20 hover:bg-redTitle  group">
                <IoClose
                  size={30}
                  className="text-redTitle transition-all duration-700 rotate-180 flex absolute group-hover:opacity-0 group-hover:rotate-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <GoDash
                  size={30}
                  className="text-white rotate-0 transition-all duration-700 opacity-0 group-hover:block group-hover:rotate-180 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className=" mt-8 text-center font-[500] text-2xl text-blueEye">
            <h2>Optometrich Tech</h2>
          </div>
          <form class="max-w-md mx-auto space-y-7 p-5 ">
            {/*firstname lastname */}
            <div class="grid  md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blueEye peer"
                  placeholder=" "
                  required
                />
                <label
                htmlFor="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blueEye  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blueEye peer"
                  placeholder=" "
                  required
                />
                <label
                htmlFor="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blueEye  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            {/* email */}
            <div class="relative  z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blueEye peer"
                placeholder=" "
                required
              />
              <label
              htmlFor="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blueEye  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            {/*adres */}
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blueEye peer"
                placeholder=" "
                required
              />
              <label
              htmlFor="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blueEye  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
            {/* tel ve çarlışma tarzı */}

            <div class="grid  md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blueEye peer"
                  placeholder=" "
                  required
                />
                <label
                htmlFor="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blueEye peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>

              <fieldset className="flex space-x-2  items-center  justify-center">
                <div class="flex items-center ">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blueEye bg-gray-100 border-gray-300 rounded focus:ring-blueEye  "
                  />
                  <label
                  htmlFor="checkbox-1"
                    class="ms-2 text-sm font-medium text-gray-500 "
                  >
                    Part time
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blueEye bg-gray-100 border-gray-300 rounded focus:ring-blueEye  "
                  />
                  <label
                  htmlFor="checkbox-1"
                    class="ms-2 text-sm font-medium text-gray-500 "
                  >
                    Full time
                  </label>
                </div>
              </fieldset>
            
            </div>
            <div className="w-full">
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <span className="bg-white hover:bg-blueEye rounded-lg px-4 py-2 border border-gray-300 text-gray-500 hover:text-white">
                  {selectedFile ? selectedFile.name : "Upload CV"}
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            </div>
           
            <button
              type="submit"
              class="text-white mt-3 bg-blueEye bg-opacity-85 hover:bg-blueEye focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OptometrichTech;
