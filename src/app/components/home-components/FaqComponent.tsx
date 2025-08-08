'use client';;
import MarginContainer from '@/app/Containers/MarginContainer'
import { useEffect, useRef, useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent';
import { motion } from 'motion/react';
import { animateBlurIn, animateFadeUp } from '@/app/animation/animationVariants';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide a range of services including home care, community activities, and health monitoring for seniors. We focus on enhancing the quality of life for our clients through personalized care and support.",
    },
    {
        question: "How can I contact you?",
        answer: "You can reach us through our contact page or call us directly at our helpline. We are always here to assist you with any inquiries or support you may need.",
    },
    {
        question: "Do you offer personalized care plans?",
        answer: "Yes, we create personalized care plans tailored to the specific needs of each senior. Our team works closely with families to ensure that the care provided meets the individual requirements of our clients.",
    },
    {
        question: "What are your operating hours?",
        answer: "We operate 24/7 to ensure that our clients receive care whenever they need it. Our team is always available to provide support and assistance at any time of the day or night.",
    },
    {
        question: "How do I get started with your services?",
        answer: "You can get started by filling out our inquiry form or calling us to discuss your needs. We will guide you through the process and help you set up the services that best suit your requirements.",
    },
    {
        question: "Do you have trained staff?",
        answer: "Yes, all our staff are trained professionals with experience in senior care.",
    },
    {
        question: "What areas do you serve?",
        answer: "We serve multiple regions, please check our service area page for more details. We are continuously expanding our reach to help more seniors in need.",
    },

]

export const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqContainerRef = useRef<HTMLDivElement>(null);
    const faqParentContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = faqContainerRef.current;
        if (!container) return;

        const handleHeightChange = (entries: ResizeObserverEntry[]) => {
            for (let entry of entries) {
                const newHeight = entry.target.scrollHeight;
                if (faqParentContainerRef.current) faqParentContainerRef.current.style.height = `${window.innerWidth >= 1024 && newHeight}px`;
            }
        };

        const resizeObserver = new ResizeObserver(handleHeightChange);
        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);


    return (


        <div className='w-full lg:min-h-[480px] flex lg:flex-row flex-col justify-center items-start mb-32 bg-blue-50 shadow'>

            <motion.div
                ref={faqParentContainerRef}
                variants={animateBlurIn}
                initial={"offscreen"}
                whileInView={"onscreen"}
                className={`w-full h-[480px] flex justify-center bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden`}>

                <motion.img
                    src={"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt="About Us"
                    animate={{ scale: [1, 2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full shadow-md object-cover object-top opacity-50"
                />
            </motion.div>

            <div
                ref={faqContainerRef}
                className="w-full h-full relative flex flex-col pl-6 pr-6 ">

                <h4 className='sticky pt-8 pb-6 top-0 text-2xl font-bold text-blue-500 '>
                    {"Frequently Asked Questions"}
                </h4>


                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.2 * index}
                        className={`${index === faqs.length - 1 && "border-b"} ${openIndex === index && "shadow"} w-full flex flex-col border-t border-gray-200`}>

                        <button
                            className={` ${openIndex === index ? "bg-blue-500 text-white" : "bg-transparent"} w-full p-4 transition-colors duration-300 text-left font-semibold focus:outline-none flex justify-between items-center`}
                            onClick={() => handleToggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            {faq.question}
                            <span className={`${openIndex === index ? "text-white" : "text-blue-500"} ml-2`}>
                                <IoArrowForwardOutline className={`${openIndex === index ? "rotate-90" : "rotate-0"} transition-transform duration-900 text-[20px] font-bold`} />
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="mx-3 text-gray-700 mt-2 mb-4 transform-fill duration-300">{faq.answer}</p>
                        )}
                    </motion.div>
                ))}
            </div>

        </div>

    )
}
