import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'

export const WelcomeScreenComponent = () => {
  const welcomeScreenData = {
    "bigTitle": "We give seniors the love they deserve",
    "caption": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    "buttonText": "Our Care Services",
    "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }



  return (
    <MarginContainer>
      <div className='w-full h-svh flex items-center gap-x-16'>

        <div className="w-full flex flex-col justify-center gap-y-5">
          <h1 className="text-6xl font-bold">
            {welcomeScreenData.bigTitle}
          </h1>

          <p className="text-lg max-w-2xl">
            {welcomeScreenData.caption}
          </p>

          <div>
            <button className="big-button bg-green-600 text-white hover:bg-green-700 transition duration-300">
              {welcomeScreenData.buttonText}
            </button>
          </div>

        </div>

        <div className='w-full h-[500px] relative flex'>
          <div className='w-full h-[500px] absolute  top-10 rhombus-clip overflow-hidden bg-gradient-to-r from-gray-200 via-gray-300 to-transparent' />
          <div className='w-full h-[500px] absolute  top-5 rhombus-clip overflow-hidden bg-gradient-to-r from-green-400 via-green-600 to-transparent' />

          <div className='w-full h-[500px] absolute rhombus-clip overflow-hidden'>
            <img src={welcomeScreenData.image} alt="" className='w-full h-full flex object-cover' />
          </div>

        </div>


      </div>
    </MarginContainer>
  )
}
