'use client';
import MarginContainer from '@/app/Containers/MarginContainer'
import React, { useState } from 'react'
import { BiArrowFromLeft } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { TiArrowRightThick } from 'react-icons/ti';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide a range of services including home care, community activities, and health monitoring for seniors.",
    },
    {
        question: "How can I contact you?",
        answer: "You can reach us through our contact page or call us directly at our helpline.",
    },
    {
        question: "Do you offer personalized care plans?",
        answer: "Yes, we create personalized care plans tailored to the specific needs of each senior.",
    },
]

export const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <MarginContainer>
            <div className='w-full min-h-svh flex flex-col items-center gap-y-12'>
                <h1 className="text-4xl font-bold mb-4 text-green-600">
                    {"Frequently Asked Questions"}
                </h1>


                <div className="w-full flex flex-col bg-white shadow-md rounded-lg p-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`${index === faqs.length - 1 && "border-b"} w-full flex flex-col border-t border-gray-200`}>
                            <button
                                className={` ${openIndex === index ? "bg-green-600 text-white": "bg-transparent"} w-full p-4 transition-colors duration-300 text-left font-semibold focus:outline-none flex justify-between items-center`}
                                onClick={() => handleToggle(index)}
                                aria-expanded={openIndex === index}
                            >
                                {faq.question}
                                <span className={`${openIndex === index ? "text-white" : "text-green-600"} ml-2`}>
                                    <IoArrowForwardOutline className={`${openIndex === index ? "rotate-90" : "rotate-0"} transition-transform duration-900 text-[20px] font-bold`}/>
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="ml-4 text-gray-700 mt-2 mb-4 transform-fill duration-300">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </MarginContainer>
    )
}
