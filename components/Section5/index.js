import React from 'react'
import datas from "@/public/assets/data/section5.json"
import styles from "./styles.module.css"

function Section5() {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex justify-around items-center space-x-2  w-[90%]  p-3">
        {datas.map((data) => (
          <div key={data.id} className="shadow-xl  flex flex-col justify-center p-3 rounded-2xl bg-grayIcon w-20 h-32  md:w-80 md:h-80">
           <div className=' flex justify-center md:max-h-60 items-center'>
                     <img className=" md:max-h-60" src={data.imagePath} alt=""  />

           </div>
            <div className={`text-[8px] md:text-sm overflow-x-auto text-center max-h-10 ${styles.scrollStyle}`}>{data.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5