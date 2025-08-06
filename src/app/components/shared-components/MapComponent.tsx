import React from 'react'

export const MapComponent = () => {
  const mapAddress= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62859639.18089381!2d78.36738849999999!3d-15.927506799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae41a06d3b9f%3A0x6f1893431a2a118c!2sO%20Bar%20and%20Dining!5e0!3m2!1sen!2sng!4v1754403180776!5m2!1sen!2sng";
  
  return (
    <div className='w-full h-[500px] flex bg-gray-300 overflow-hidden'>
        <iframe 
          className='w-full h-full object-cover'
          src={mapAddress}  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}




