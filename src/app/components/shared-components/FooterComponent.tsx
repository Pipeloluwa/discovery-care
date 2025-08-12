"use client";
import { animateFadeUp } from '@/app/animation/animationVariants';
import { privacyPolicy, termsAndCondition } from '@/app/variables/client/Footer';
import { rootUrl } from '@/app/variables/sharedVariables';
import { Dialog, DialogBody } from '@material-tailwind/react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { useState } from "react";
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import LogoComponent from './LogoComponent';


export const FooterComponent = () => {

    const [mailDialog, setMailDialog] = useState("");



    return (
        <footer className='w-full relative text-white bg-gradient-to-r from-blue-700 to-[#e08c2b]'>

            {
                <Dialog
                    open={mailDialog !== ""}
                    size='lg'
                    handler={() => { setMailDialog("") }}
                    className='bg-white lg:w-[700px] w-[90%] lg:h-[500px] h-[450px] mx-auto self-center outline-0 shadow-xl shadow-gray-300 py-[10px]'
                    onResize={() => { }} onResizeCapture={() => { }} placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                >

                    <DialogBody className='w-full h-full flex text-black text-sm  overflow-hidden overflow-y-auto' onResize={() => { }} onResizeCapture={() => { }} placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                        <div className='flex flex-col'>

                            <p style={{ whiteSpace: "pre-wrap" }} className={`text-justify`}>
                                {mailDialog}
                            </p>

                        </div>
                    </DialogBody>

                </Dialog>
            }



            <div className="w-full px-[5%] pt-[50px] pb-[50px] flex flex-col gap-y-6 justify-between">


                <div className='w-full flex lg:flex-row flex-col justify-between items-center lg:gap-x-12'>
                    <ul className='w-full flex justify-center items-center gap-x-6'>
                        <motion.li
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                        >
                            <button onClick={() => setMailDialog(privacyPolicy)}>
                                {"Privacy Policy"}
                            </button>
                        </motion.li>
                        <hr />
                        <motion.li
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                        >

                            <button onClick={() => setMailDialog(termsAndCondition)}>
                                {"Terms & Conditions"}
                            </button>
                        </motion.li>
                    </ul>



                    {/* <motion.h5
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.2}
                        className='flex gap-x-2 lg:mt-0 mt-2'>

                        {"NDIS: "} <span className='italic'>{"29402742923"}</span>
                    </motion.h5> */}



                    <div className='w-full flex gap-x-6 justify-center lg:mt-0 mt-6'>

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
                            <Link href={""} target="_blank" rel="noopener noreferrer">
                                <RiInstagramFill className='size-[25px]' />
                            </Link>
                        </motion.div>


                        <motion.div
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                        >
                            <Link href={""} target="_blank" rel="noopener noreferrer">
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
                            <Link href={""} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='size-[25px]' />
                            </Link>
                        </motion.div>


                    </div>


                </div>




                <motion.div
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.5}

                    className='w-full border border-white my-2'
                />

                <motion.h6
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.6}

                    className='w-full h-full flex flex-col justify-center items-center gap-y-2 text-center'>

                    {"©2025 "}
                    <div className='h-full -mt-4 flex justify-center items-center gap-x-2'>
                        <li className='flex justify-center items-center rounded-full overflow-hidden size-[50px] bg-white px-[2px] pb-[6px]'>
                            <LogoComponent />
                        </li>
                        {"Discovery-Care Group. All rights reserved."}
                    </div>
                </motion.h6>

            </div>

        </footer>
    )
}
