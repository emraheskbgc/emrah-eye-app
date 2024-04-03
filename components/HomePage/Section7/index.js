"use client"
import React, { useRef, useState } from "react";
import { IoIosStar } from "react-icons/io";
import styles from "./styles.module.css";
import datas from "@/public/assets/data/section7.json";
import "./bullet.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from "swiper/modules"




function Section7() {
  const scrollRef = useRef(null);



 

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center text-[30px] md:text-[60px] font-[500] mt-20">
        <h1 className="flex flex-col font-libre-bodoni">
          <span>Patient</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">Reviews</span>
        </h1>
      </div>
     
      <div ref={scrollRef} className={`flex   mt-10  ml-5 md:ml-20 overflow-x-auto ${styles.scrollYOff} ${styles.divPagi}`}>
      <Swiper 
      style={{
        
        '--swiper--bullet-active': '#fff',
      }}
     
        breakpoints={{
          340:{
            slidesPerView:1,
            spaceBetween:15
          },
          700:{
            slidesPerView:3,
            spaceBetween:15
          }
        }}
        freeMode={true}
        pagination={{
          clickable:true,
          el: '.pagination',
          type:"bullets",
          
          

        }}
       
        modules={[FreeMode, Pagination]}
      
       
      >
      {datas.map((data) => (
        <SwiperSlide key={data.id}  >
        <div  className="bg-grayIcon p-5  md:w-[450px] w-[350px] h-full items-center  rounded-2xl">
          <div className="flex w-full relative   items-center">
            <div className="mr-5">
              <img src={data.profileImage} className="w-12 h-10 rounded-full" alt="" />
            </div>
            <div className="w-full  ">
              <div className="text-darkRed font-[500] uppercase text-md"><span className="font-lexend">{data.name}</span> </div>
              <div className="flex space-x-8 ">
                <div className="flex space-x-1 text-2xl text-starYellow">
                {[...Array(Number(data.numberOfStars))].map((_, i) => (
                  <IoIosStar key={i} />
                ))}
                </div>
                <div className="text-commentTimeText text-sm">4 hour ago</div>
              </div>
            </div>
            <div className="abosulte top-0 right-0 mr-[-15px]" >
                  <img src="/assets/images/googleIcon.png" alt="google icon" className="w-12" />
            </div>
          </div>
          <div className={`overflow-x-auto max-h-24 text-sm mt-4 text-commetTxt ${styles.scrollStyle}`}>
            <p>
              {data.comment}
            </p>
          </div>
        </div>
        </SwiperSlide>
        
      ))}
      </Swiper>
        
      </div>
      
      
      <div className={`${styles.paginationButton} pagination mt-5 ml-20  space-x-1` } />
      
      
      

      
    </div>
  );
}

export default Section7;
