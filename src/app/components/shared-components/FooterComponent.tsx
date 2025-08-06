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
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { MailResponseComponent } from './MailResponseComponent';


export const FooterComponent = () => {


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
        <footer className='w-full relative text-white bg-gradient-to-r from-blue-700 to-[#e08c2b]'>

            <div className="w-full px-[5%] pt-[100px] pb-[50px] flex flex-col justify-between">

                <div className='w-full flex gap-x-6 justify-center '>
                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0}
                    >
                        <Link href={""} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='size-[25px]' />
                        </Link>
                    </motion.div>


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.1}
                    >
                        <Link href={"https://www.instagram.com/acegeld_ng/profilecard/?igsh=MTZuNDJ0eGp1c21kaQ=="} target="_blank" rel="noopener noreferrer">
                            <RiInstagramFill className='size-[25px]' />
                        </Link>
                    </motion.div>


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.2}
                    >
                        <Link href={"https://x.com/acegeld_ng?s=21"} target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className='size-[25px]' />
                        </Link>
                    </motion.div>


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.3}
                    >
                        <Link href={""} target="_blank" rel="noopener noreferrer">
                            <IoLogoYoutube className='size-[25px]' />
                        </Link>
                    </motion.div>


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.4}
                    >
                        <Link href={"https://www.linkedin.com/company/acegeld/"} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='size-[25px]' />
                        </Link>
                    </motion.div>


                </div>




                <motion.div
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.6}

                    className='w-full border border-white my-2'
                />

                <motion.h6
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.8}

                    className='w-full text-center'>

                    {"©2025 Discovery-Care. All rights reserved."}
                </motion.h6>

            </div>

        </footer>
    )
}
