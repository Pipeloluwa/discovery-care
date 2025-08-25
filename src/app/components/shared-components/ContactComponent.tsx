"use client";;
import { animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants';
import { interFont } from '@/app/fonts/fontsConfig';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';

import { Ref, useRef, useState } from "react";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import { MailResponseComponent } from './MailResponseComponent';
import MarginContainer from '@/app/Containers/MarginContainer';
import { MdLocalPhone } from 'react-icons/md';


export const ContactComponent = () => {

  const contactInfo = {
    address: {
      label: "Address",
      value: "PO Box 2053, ELLENBROOK WA 6069, Australia",
      color: "bg-green-500",
      icon: <IoLocationSharp className='size-[35px]' />,
      iconSize: "35px"
    },
    phone: {
      label: "Phone",
      value: "0400 741 849",
      color: "bg-yellow-500",
      icon: <FaPhoneAlt className='size-[30px]' />,
      iconSize: "30px"
    },
    email: {
      label: "Email",
      value: "admin@discoverycareservices.com.au",
      color: "bg-purple-500",
      icon: <IoMail className='size-[30px]' />,
      iconSize: "30px"
    },

  };



  const form: Ref<HTMLFormElement> = useRef(null);
  const [formProcessing, setFormProcessing] = useState<boolean>(false);
  const [messageValue, setMessageValue] = useState<string>("");

  const [mailDialog, setMailDialog] = useState("");

  const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;


  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (messageValue.trim().length === 0) {
      setMailDialog("Please type in your message");
      return;
    }


    if (form.current && EMAIL_SERVICE_ID !== undefined && EMAIL_TEMPLATE_ID !== undefined && EMAIL_PUBLIC_KEY !== undefined) {
      setFormProcessing(true);
      await emailjs
        .sendForm(EMAIL_SERVICE_ID!, EMAIL_TEMPLATE_ID!, form.current, {
          publicKey: EMAIL_PUBLIC_KEY,
        })
        .then(
          () => {
            setMailDialog("Successful");
          },
          (error) => {
            setMailDialog("Sorry, could not send information, something went wrong");
            console.log(error);
          },
        ).catch((error) => {
          setMailDialog("Sorry, could not send information, something went wrong");
          console.log(error);
        });

      setFormProcessing(false);
    }

  }


  return (
    <div className="w-full lg:min-h-svh flex lg:pb-0 pb-32 bg-gradient-to-b from-white via-blue-200  to-blue-500">
      <MarginContainer>

        <div className='w-full lg:h-auto h-full flex lg:flex-row flex-col gap-16'>

          <div className='lg:w-[55%] w-full h-full flex flex-col lg:justify-start justify-center gap-y-4'>
            <motion.h4
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.2}
              className='flex gap-x-3 text-2xl font-bold text-blue-500 '>

              <MdLocalPhone /> {"Contact Us"}
            </motion.h4>

            <motion.h4 className='font-bold'
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.2}
            >

              {"Have questions? don't hesitate to contact us"}
            </motion.h4>

            <motion.p
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.2}
            >

              {"We are passionate about transforming lives. Founded with a vision to make learning accessible to all, we believe in the power of knowledge to unlock opportunities and shape the future."}
            </motion.p>



            <div className="w-full flex flex-col items-center justify-between gap-y-4">

              <motion.div
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.2}

                className={`${contactInfo.address.color} w-full flex flex-col justify-center items-center text-white rounded-lg p-4`}>

                <div className='flex justify-center items-center'>

                  {contactInfo.address.icon}

                  <h3 className='text-2xl font-bold text-center p-4'>
                    {contactInfo.address.label}
                  </h3>
                </div>


                <p className='text-sm text-center'>
                  {`${contactInfo.address.value.substring(0, 120)}`} {contactInfo.address.value.length > 120 && "..."}
                </p>

              </motion.div>


              <motion.div 
                variants={animateFromRight}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.4}

                className={`${contactInfo.phone.color} w-full flex flex-col justify-center items-center text-white rounded-lg p-4`}>
                
                <div className='flex justify-center items-center'>
                  {contactInfo.phone.icon}

                  <h3 className='text-2xl font-bold text-center p-4'>
                    {contactInfo.phone.label}
                  </h3>
                </div>


                <p className='text-sm text-center'>
                  {`${contactInfo.phone.value.substring(0, 120)}`} {contactInfo.phone.value.length > 120 && "..."}
                </p>

              </motion.div>


              <motion.div
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.6}
                className={`${contactInfo.email.color} w-full flex flex-col justify-center items-center text-white rounded-lg p-4`}>

                <div className='flex justify-center items-center'>
                  {contactInfo.email.icon}

                  <h3 className='text-2xl font-bold text-center p-4'>
                    {contactInfo.email.label}
                  </h3>
                </div>


                <p className='text-sm text-center'>
                  {`${contactInfo.email.value.substring(0, 120)}`} {contactInfo.email.value.length > 120 && "..."}
                </p>

              </motion.div>


            </div>

          </div>





          <motion.div
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0.2}
            className='lg:w-[45%] w-full lg:h-auto h-full flex p-6 bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-500'>

            <form
              ref={form}
              onSubmit={submitMessage}
              className="w-full flex flex-col justify-between gap-y-4 p-6 bg-blue-100 rounded-lg overflow-hidden">

              <h5 className='text-2xl font-bold text-blue-500'>
                {"Get in touch"}
              </h5>
              <input name='title' defaultValue={"Discovery Care Group Contact"} className='hidden' />
              <input name='time' defaultValue={`${(new Date).toUTCString()} UTC`} className='hidden' />

              <motion.div
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.2}
                className='w-full flex gap-x-6'
              >
                <input
                  placeholder="Name" required type="text"
                  name="name" pattern=".*\S.*" title="Input cannot be empty or only contain spaces"
                  className='w-full text-sm px-4 py-4 outline-0 border-gray-400 shadow bg-white rounded-lg'
                />
              </motion.div>


              <motion.div
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.3}
                className='w-full flex gap-x-6'
              >
                <input
                  placeholder="Email" required type="email"
                  name="email" pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                  title="Input cannot be empty or only contain spaces"
                  className='w-full text-sm px-4 py-4 outline-0 border-gray-400 shadow bg-white rounded-lg'
                />
              </motion.div>


              <motion.div
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.4}
                className='w-full flex gap-x-6'
              >
                <input
                  required type="tel"
                  placeholder='Phone Number'
                  name="phone" pattern=".{6,}"
                  title='Phone number should be at least 6 characters long'
                  className='w-full text-sm px-4 py-4 outline-0 border-gray-400 shadow bg-white rounded-lg'
                />
              </motion.div>


              <motion.div
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.5}
              >


                <textarea
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  placeholder="Type Your Message Here" required
                  name="message" autoComplete='on' spellCheck="true"
                  className='w-full text-sm px-4 py-6 outline-0 border-gray-400 shadow bg-white rounded-lg'
                />

              </motion.div>



              <motion.div
                // variants={animateFadeUp}
                // initial={"offscreen"}
                // whileInView={"onscreen"}
                // custom={0.6}
                className='w-full'
              >
                <button
                  type='submit'
                  disabled={formProcessing}
                  onClick={() => { }}
                  className={`z-20 big-button text-white font-bold flex justify-center items-center`}
                >

                  <span className={`${interFont.className} capitalize`}>
                    {formProcessing ? "Sending..." : "Send"}
                  </span>
                </button>

              </motion.div>


            </form>

          </motion.div>


        </div>


      </MarginContainer>


        <MailResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />

    </div>

  )
}
