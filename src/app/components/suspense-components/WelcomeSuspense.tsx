'use client';


export const WelcomeSuspense = () => {
  return (
    <div className='z-50 fixed left-0 right-0 top-0 bottom-0 flex flex-col gap-y-6 justify-center items-center bg-white'>
      {/* <div className='pulse-loader'/> */}

      <img
        alt='logo-loader'
        src='/images/logos/logo__.png'
        className='w-[100px] animate-spin duration-700'/>

      <p className="text-black text-lg font-bold">
        {"Discovery-Care  Loading ..."}
      </p>
    </div>
  )
}
