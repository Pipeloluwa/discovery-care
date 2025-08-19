"use client"
import { animateBlurIn } from '@/app/animation/animationVariants';
import { motion } from 'motion/react';
import React from 'react'

export const MapComponent = () => {
  const mapAddress = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.537134169436!2d116.02214017554729!3d-31.72853661141075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b569d5ed70af%3A0x3037304cec0b9345!2sEllenbrook%20Rd%2C%20Western%20Australia%2C%20Australia!5e0!3m2!1sen!2sng!4v1755601092275!5m2!1sen!2sng";

  return (
    <motion.div
      variants={animateBlurIn}
      initial={"offscreen"}
      whileInView={"onscreen"}
      className='w-full h-[500px] flex bg-gray-300 overflow-hidden'>

      <iframe
        className='w-full h-full object-cover'
        src={mapAddress} allowFullScreen loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </motion.div>
  )
}




