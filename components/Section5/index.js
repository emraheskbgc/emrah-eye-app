import React from 'react'
import datas from "@/public/assets/data/section5.json"

function Section5() {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex justify-around items-center space-x-5  w-[90%]  p-3">
        {datas.map((data) => (
          <div key={data.id} className="shadow-xl rounded-2xl bg-grayIcon  p-3">
            <img className="mb-5 " src={data.imagePath} alt=""  />
            <span>{data.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5