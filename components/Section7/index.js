import React from "react";
import { IoIosStar } from "react-icons/io";
import styles from "./styles.module.css"


function Section7() {
  return (
    <div>
      <div className="flex justify-center text-[60px] font-[500]">
        <h1 className="flex flex-col">
          <span>customer</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">reviews</span>
        </h1>
      </div>
      <div className="flex">
      <div className="bg-grayIcon p-5 rounded-2xl w-96 h-56">
        <div className="flex px-5 py-5  items-center ">
          <div className="mr-5">
            <img src="/assets/images/head.png" className="w-12 h-10 rounded-full" alt="" />
          </div>
          <div className=" w-full">
            <div className="text-darkRed font-[500] uppercase text-md">emrah eskibağcı  </div>
            <div className="flex justify-between space-x-4  ">
              <div className="flex space-x-1 text-2xl text-starYellow">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
              </div>
              <div className="text-commentTimeText" >4 hour ago</div>
            </div>
          </div>
         
        </div>
        <div className={`overflow-x-auto max-h-24 text-commentTimeText ${styles.scrollStyle}`}>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="bg-grayIcon ml-4">
      <div>
        <div>avatar</div>
        <div>
          <div>name</div>
          <div>stars</div>
        </div>
        <div>time</div>
      </div>
      <div>comment</div>
    </div>
      </div>
      
    </div>
  );
}

export default Section7;
