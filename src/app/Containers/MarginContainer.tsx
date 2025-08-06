"use client";
import React from 'react'


const MarginContainer = ({children}: {children:React.ReactNode;})=> {

  return (
    <div className="2xl:w-[1200px] lg:w-[85%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-6">
        {children}
    </div>
  )
}

export default MarginContainer;