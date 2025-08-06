"use client";
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants';
import { interFont } from '@/app/fonts/fontsConfig';
import { rootUrl } from '@/app/variables/sharedVariables';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button } from '@material-tailwind/react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Ref, useRef, useState } from "react";
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp, IoLogoYoutube, IoMail } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { MailResponseComponent } from './MailResponseComponent';
import MarginContainer from '@/app/Containers/MarginContainer';
import { div } from 'motion/react-client';
import { SubHeaderComponent } from './SubHeaderComponent';


export const ContactComponent = () => {

  const contactInfo = {
  address: {
    label: "Address",
    value: "123 Discovery Ave, Lagos, Nigeria",
    color: "text-green-600",
    iconSize: "35px"
  },
  phone: {
    label: "Phone",
    value: "11393829-2213",
    color: "text-yellow-600",
    iconSize: "30px"
  },
  email: {
    label: "Email",
    value: "discoverycare.au@mail.com",
    color: "text-purple-600",
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
            console.log('FAILED...', error);
          },
        ).catch((error) => {
          setMailDialog("Sorry, could not send information, something went wrong");
          console.log(error);
        });

      setFormProcessing(false);
    }

  }


  return (
    <div className="w-full h-full flex">
      <MarginContainer>
        <SubHeaderComponent headerValue='Contact Us' />

        <div className='w-full flex gap-x-16'>

          <form
            ref={form}
            onSubmit={submitMessage}
            className="w-[65%] flex flex-col justify-between gap-y-4">

            <input name='message_type' defaultValue={"Contact"} className='hidden' />


            <motion.div
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className='w-full flex gap-x-6'
            >
              <input
                placeholder="Email" required type="email"
                name="from_email" pattern=".*\S.*"
                className='w-full text-sm px-4 py-3 outline-0 border border-gray-400 shadow'
              />


              <input
                required type="tel"
                placeholder='Phone Number'
                name="from_phone" pattern="\+[0-9]{1,3}[0-9]{10}"
                className='w-full text-sm px-4 py-3 outline-0 border border-gray-400 shadow'
              />
            </motion.div>



            <motion.div
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className='w-full flex gap-x-6'
            >
              <input
                placeholder="Name" required type="text"
                name="from_name" pattern=".*\S.*" title="Input cannot be empty or only contain spaces"
                className='w-full text-sm px-4 py-3 outline-0 border border-gray-400 shadow'
              />
            </motion.div>



            <motion.div
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.6}
            >


              <textarea
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                placeholder="Type Your Message Here" required
                name="message" autoComplete='on' spellCheck="true"
                className='w-full text-sm p-4 outline-0 border border-gray-400 shadow'
              />

            </motion.div>



            <motion.div
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.6}
              className='w-full'
            >
              <button
                type='submit'
                disabled={formProcessing}
                onClick={() => { }}
                className={`z-20 big-button text-white font-bold`}
              >

                <span className={`${interFont.className} capitalize`}>
                  {formProcessing ? "Sending..." : "Send"}
                </span>
              </button>

            </motion.div>


            <MailResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />


          </form>




          <div className='w-[35%] h-full flex flex-col gap-y-6 justify-start'>

            <div className='w-full flex items-center gap-x-4 text-green-600'>
              <IoLocationSharp className='size-[35px]' />

              <div className='flex flex-col'>
                <h5>
                  {contactInfo.address.label}
                </h5>

                <p>
                  {contactInfo.address.value}
                </p>
              </div>
            </div>



            <div className='w-full flex items-center gap-x-4 text-yellow-600'>
              <FaPhoneAlt className='size-[30px]' />

              <div className='flex flex-col'>
                <h5>
                  {contactInfo.phone.label}
                </h5>

                <p>
                  {contactInfo.phone.value}
                </p>
              </div>
            </div>



            <div className='w-full flex items-center gap-x-4 text-purple-600'>
              <IoMail className='size-[30px]' />

              <div className='flex flex-col'>
                <h5>
                  {contactInfo.email.label}
                </h5>

                <p>
                  {contactInfo.email.value}
                </p>
              </div>
            </div>

          </div>

        </div>


      </MarginContainer>
    </div>

  )
}
