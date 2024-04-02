import React from "react";
import { data } from "./data";
import Link from "next/link";

function Contact() {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      <div className=" text-4xl text-darkRed font-[500] mb-32">
        <span>Contact Us</span>
      </div>
      <div className=" grid grid-cols-3 gap-4 w-[90%]">
        {data.map((item) => (
          <div key={item.id} className=" p-3">
            <div className="w-full h-96">
              <iframe
                className="w-full h-full"
                src={item.mapPath}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-2 text-2xl font-[500]">
              <span>{item.title}</span>
            </div>
            <Link href={item.linkPath}>
              <div className="text-center mt-2 hover:underline h-16">
                <span className="max-w-screen-sm break-words text-xl ">
                  {item.adress}
                </span>
              </div>
            </Link>

            <div className="  h-14 flex items-center justify-center mt-2">
              <button className=" px-4 py-2 rounded-full bg-blueEye bg-opacity-65 hover:bg-opacity-100 text-white">
                Book Now
              </button>
            </div>
            <div className="mt-2 text-center hover:underline cursor-pointer">
              Phone:<span>{item.phone}</span>
            </div>
            {item.fax && (
              <div className="mt-2 text-center hover:underline cursor-pointer">
                Fax:<span>{item.fax}</span>
              </div>
            )}
            <div className=" flex justify-center items-center mt-8">
              <table>
                {item.work_hours.map((day, index) => (
                  <tr key={index}>
                    <td className="text-center pr-3">{day.day}:</td>
                    {day.start_time ||
                      (day.end_time && (
                        <td>
                          {day.start_time} - {day.end_time}
                        </td>
                      ))}
                    {day.closed && <td>CLOSED</td>}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        ))}
      </div>
      <div class="relative flex justify-center items-center space-x-16 bg-cover bg-center h-[302px] mt-20  bg-[url('/assets/images/contactImage.jpeg')] border w-full ">
        <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-30" />
        <div className="z-30  text-white ">
          <h1 className="text-4xl mb-3 font-[500]">Before your appointment</h1>
          <h4 className="font-[400]">
            Please download and fill out an intake form.
          </h4>
        </div>
        <div className=" z-30 p-4 rounded-full text-white bg-blueEye bg-opacity-70 hover:bg-opacity-100 cursor-pointer">
          <button>Download Intake Form</button>
        </div>
      </div>

      <div className="h-screen bg-grayBg w-full flex justify-center items-center  ">
        <div className="grid grid-cols-2 gap-4 justify-center items-center  h-screen w-[70%]">
          <div >
            <div className="text-grayHead mb-5">
              <span>Contact us</span>
            </div>
            <div className="text-black text-4xl">
              <span>
                Feel free to give us a call or send us an email with your
                questions or comments.
              </span>
            </div>
            <div className="text-grayHead text-xl mt-5">
              <span>
                Have a question? Leave us a message and we’ll get back to you
                soon. Please don’t submit sensitive medical information, we’ll
                get that when we talk to you.
              </span>
            </div>
          </div>

          {/* FORM */}
          <div >
            <form class="max-w-md mx-auto">
              {/* Name */}
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>

              {/* Email */}

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              {/* Phone Number */}

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              {/* Message textarea */}
              <div class="relative z-0 w-full mb-5 group">
                <label
                  for="message"
                  class="block  mb-2 text-sm text-gray-500 "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              {/* CheckBox */}
              <div class="flex items-center mb-4">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  for="checkbox-2"
                  class="ms-2 text-sm font-medium text-gray-500 "
                >
                I allow this website to store my submission so they can respond to my inquiry.
                </label>
              </div>
              {/* Button */}

              <button
                type="submit"
                class="text-white bg-blueEye bg-opacity-70 hover:bg-opacity-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
