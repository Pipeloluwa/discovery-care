"use client";;
import { useEffect, useRef, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "motion/react";
import {
  animateBlurIn,
  animateFadeUp,
} from "@/app/animation/animationVariants";

const faqs = [
  {
    question: "What services do we offer?",
    answer:
      "At Discovery Care Group, we offer a comprehensive range of services designed to support individuals with diverse needs. Our services include:",
    adittional: [
      "Our mission is to enhance the quality of life for our clients through personalized care and support, fostering independence, wellbeing, and overall life satisfaction. We strive to deliver tailored solutions that meet the unique needs of each individual, promoting a life of dignity, purpose, and fulfillment.",
    ],
    bullets: [
      [
        "Daily living assistance (In home support)",
        "Transportation",
        "Community access and participation activities",
        "Specialist Disability Accommodation (SDA) and Supported Independent Living (SIL) solutions",
        "Support coordination and specialised support coordination",
        "⁠Respite support",
        "Psychological and Therapeutic support", ,
      ],
    ],
  },
  {
    question: "Do you have trained staff?",
    answer: "We develop personalized care plans that cater to the unique needs of each participant. Through close collaboration with our clients, their families, and relevant stakeholders, our team ensures that the care and support provided is tailored to meet the individual's specific requirements, promoting optimal outcomes and well-being.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve multiple regions and cities across Western Australia, with a commitment to expanding our reach to support even more participants in need. For specific details on our service areas or to learn more about how we can assist you, please contact our support team.",
  },
  {
    question: "How much does the service cost?",
    answer:
      "Our service costs are determined according to the NDIS rate structure and vary based on the specific services provided. We ensure transparency and agreement on pricing beforehand, so you know exactly what to expect. We'll work with you to determine the costs and ensure they align with your NDIS plan.",
  },
  {
    question: "Do I need to be a part of NDIS to use your service?",
    answer:
      "Our services are not limited to NDIS participants. You don't need to be part of the NDIS to receive our support. We're here to help, regardless of your funding source.",
  },
  {
    question: "Are we hitting our performance targets?",
    answer:
      "Yes, all our staff are trained professionals with experience in senior care.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "As a new provider, we're achieving our performance goals while prioritizing client satisfaction. We regularly engage with our participants and their families through quarterly check-ins, ensuring our services meet their expectations and making adjustments as needed",
  },
];

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
        if (faqParentContainerRef.current) {
          faqParentContainerRef.current.style.height = `${window.innerWidth >= 1024 && newHeight}px`;
          faqScrollY = newHeight;
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleHeightChange);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);


  const scrollToFaqComponent = () => {
    faqParentContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  return (
    <div className="w-full lg:min-h-[480px] flex lg:flex-row flex-col justify-center items-start mb-32 bg-blue-50 shadow">
      <div
        onClick={() => scrollToFaqComponent()}
        className="z-40 size-[50px] fixed right-[20px] bottom-[20px] flex justify-center items-center font-bold text-sm rounded-full tracking-widest text-white bg-black/50 shadow-sm shadow-gray-500 animate-bounce transition-all duration-1000 border cursor-pointer">

        <p>
          {"FAQ?"}
        </p>

      </div>

      <motion.div
        ref={faqParentContainerRef}
        variants={animateBlurIn}
        initial={"offscreen"}
        whileInView={"onscreen"}
        className={`w-full h-[480px] flex justify-center bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden`}
      >
        <motion.img
          src={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="About Us"
          animate={{ scale: [1, 2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full shadow-md object-cover object-top opacity-50"
        />
      </motion.div>

      <div
        ref={faqContainerRef}
        className="w-full h-full relative flex flex-col pl-6 pr-6 "
      >
        <h4 className="sticky pt-8 pb-6 top-0 text-2xl font-bold text-blue-500 ">
          {"Frequently Asked Questions"}
        </h4>

        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0.2 * index}
            className={`${index === faqs.length - 1 && "border-b"} ${openIndex === index && "shadow"
              } w-full flex flex-col border-t border-gray-200`}
          >
            <button
              className={` ${openIndex === index
                ? "bg-blue-500 text-white"
                : "bg-transparent"
                } w-full p-4 transition-colors duration-300 text-left font-semibold focus:outline-none flex justify-between items-center`}
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span
                className={`${openIndex === index ? "text-white" : "text-blue-500"
                  } ml-2`}
              >
                <IoArrowForwardOutline
                  className={`${openIndex === index ? "rotate-90" : "rotate-0"
                    } transition-transform duration-900 text-[20px] font-bold`}
                />
              </span>
            </button>
            {openIndex === index && (
              <>
                <p className="mx-3 text-gray-700 mt-2 mb-4 transform-fill duration-300">
                  {faq.answer}
                </p>

                {
                  faq.bullets && faq.bullets[0]?.map((bullet, index) => (
                    <ul
                      key={index}
                      className="list-disc list-inside mx-6 text-gray-700 mb-4 transform-fill duration-300"
                    >
                      <li>
                        {bullet}
                      </li>
                    </ul>
                  ))
                }

                {faq.adittional &&
                  faq.adittional.map((additonalText, index) => (
                    <p
                      key={index}
                      className="mx-3 text-gray-700 mb-4 transform-fill duration-300"
                    >
                      {additonalText}
                    </p>
                  ))}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
