"use client";;
import MarginContainer from "@/app/Containers/MarginContainer";
import { ISelectedService } from "@/app/interfaces/components/home/IServicesComponent";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { SubHeaderComponent } from "../shared-components/SubHeaderComponent";
import { animateFadeUp, animateFromLeft, animateRotateFromLeft } from "@/app/animation/animationVariants";
import { FaPeopleCarry, FaHouseUser, FaHandHoldingHeart } from "react-icons/fa";
import { GiEngagementRing } from "react-icons/gi";
import { RiPsychotherapyFill } from "react-icons/ri";
import Link from "next/link";
import { MdEmojiTransportation } from "react-icons/md";
import { IoConstructSharp } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

export const ServicesComponent = () => {
  const servicesData = {
    title: "Services",
    buttonText: "Explore Services",
    services: [
      {
        id: 1,
        title: "Living",
        fullTitle: "Daily living assistance (In home support)",
        icon: <FaPeopleCarry className="lg:size-[40px] size-[30px]" />,
        image: "/images/pictures/HomeServices/Assistance.webp",
        description:
          [
            [
              "Our Home Support Services are designed for individuals with diverse needs, regardless of NDIS enrollment. We tailor our services to each client's unique requirements, prioritizing open communication and personalized care."
            ],

            [
              "Our daily living assistance includes:",
              [
                "Personal hygiene support",
                "Continence care",
                "Medication administration",
                "Meal preparation",
                "General home activities",
              ],
            ],

            [
              "We strive to deliver compassionate and flexible support, empowering our clients to live independently and comfortably in their own homes."
            ],
          ],
      },

      {
        id: 2,
        title: "Transportation",
        fullTitle: " Transportation Services ",
        icon: <MdEmojiTransportation className="lg:size-[40px] size-[30px]" />,
        image: "/images/pictures/HomeServices/Transport.webp",
        description:
          [
            ["Our accessible transportation service provides safe and comfortable transport for individuals with mobility needs, including those using wheelchairs. We ensure that our vehicles cater to diverse requirements, promoting independence and accessibility to various destinations."]
          ],
      },

      {
        id: 3,
        title: "Participation",
        fullTitle: "Community Assess and Participation",
        icon: <GiEngagementRing className="lg:size-[40px] size-[30px]" />,
        image: "/images/pictures/HomeServices/Participation.webp",
        description:
          [
            ["At Discovery Care Group, we believe in fostering independence and community connection. Our team will support you in participating in activities that match your goals and interests, helping you build confidence and achieve your aspirations."]
          ],
      },

      {
        id: 4,
        title: "Capacity",
        fullTitle: "Capacity Building",
        icon: <IoConstructSharp className="lg:size-[40px] size-[30px]" />,
        image: "/images/pictures/HomeServices/Capacity.webp",
        description: [
          [
            "At Discovery Care Group, we empower participants to build their independence through life skills training and support. Our capacity building programs include:"
          ],

          [
            "At Discovery Care Group, we empower participants to build their independence through life skills training and support. Our capacity building programs include:",
            [
              "Life skills training (cooking, budgeting, public transport, and more)",
              "Employment preparation and readiness programs",
              "Confidence-building support for independent living.webp",
            ],
          ],

          [
            "We equip participants with the skills and confidence they need to thrive in their daily lives and achieve their goals.",
          ],

        ],
      },


      {
        id: 5,
        title: "Accommodation",
        fullTitle: "Specialist Disability Accommodation (SDA) and Supported Independent Living (SIL) solutions",
        icon: <FaHouseUser className="lg:size-[40px] size-[30px]" />,
        image: "/images/pictures/HomeServices/Accommodation.webp",
        description: [
          ["We understand that finding safe, comfortable, and personalized housing can be a significant challenge for people with disabilities. That's why we're dedicated to providing tailored SDA and SIL solutions that empower individuals to live independently and thrive."],

          [
            "Our personalized support services include:",
            [
              "⁠Respite Care Services",
              "Daily living assistance (personal care, meal preparation, household tasks)",
              "Independent living skills development",
              "Emotional well-being support",
              "Social connection and community engagement",
            ],
          ],


          [
            "Our respite support offers temporary care and accommodation in a safe, supportive environment, providing families and carers with a much-needed break. We recognize the value of respite care and are committed to delivering exceptional support and care for participants, allowing their loved ones to recharge and prioritize their own well-being.",
          ],

          [
            "Our goal is to help individuals with disabilities lead fulfilling, independent lives, surrounded by support and care that meets their unique needs and circumstances."
          ]
        ]

      },

      {
        id: 6,
        title: "Coordination",
        fullTitle: "Support coordination and specialised support coordination ",
        icon: <FaHandsHoldingChild className="lg:size-[40px] size-[30px]" />,
        image: "/images/pictures/HomeServices/Coordination.webp",
        description:
          [
            [
              "We empower NDIS participants to achieve their plan goals by connecting them with trusted providers and services. Our support coordination services focus on:",
              [
                "Building confidence and skills to manage and coordinate support",
                "Community participation tailored to individual interests and goals",
                "NDIS plan management and navigation",
                "Linking participants with suitable services and providers",
                "Regular progress tracking and goal review",
              ],
            ],

            [
              "We also provide access to allied health professionals, including:",
              [
                "Occupational Therapists (OTs)",
                "Physiotherapists (Physios)",
                "Speech Pathologists",
                "Counsellors",
                "And other Allied Healths",
              ],
            ],

            [
              "Our therapy plans are designed to improve independence, mobility, and daily functioning, helping participants achieve their goals and live fulfilling lives.",
            ],
          ],
      },

      {
        id: 7,
        title: "Therapy",
        fullTitle: "Psychological and Therapeutic support",
        icon: <RiPsychotherapyFill className="lg:size-[40px] size-[30px]"/>,
        image: "/images/pictures/HomeServices/Support.webp",
        description: [
          ["We understand that emotional and mental wellbeing is essential to living a fulfilling life. Our Psychological and Therapeutic Support services help participants develop coping strategies, build resilience, and achieve their goals. Through compassionate, evidence-based care, we connect participants with qualified professionals who provide therapy, counselling, and behavioural support tailored to individual needs. Our goal is to strengthen confidence, independence, and overall wellbeing."]
        ]
      },

            {
        id: 8,
        title: "In-Home",
        fullTitle: "In-Home / Drop-In Care",
        icon: <IoIosHome className="lg:size-[40px] size-[30px]"/>,
        image: "/images/pictures/HomeServices/Care.webp",
        description:
          [
            [
              "Our Home Support Services are designed for anyone needing daily living support, whether or not they are enrolled in an NDIS program. We take a personalised approach, ensuring consistent communication to meet each client’s individual needs."
            ],

            [
              "Support Provided Includes:",
              [
                "Personal hygiene assistance",
                "Continence support",
                "Medication administration",
                "Meal preparation",
                "General household tasks and cleaning",
              ],
            ]
          ],
      },

    ],
  };


  const [selectedService, setSelectedService] = useState<ISelectedService>(
    servicesData.services[0]
  );


    const contentContainerRef = useRef<HTMLDivElement>(null);
    const imgParentContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
      const container = contentContainerRef.current;
      if (!container) return;
  
      const handleHeightChange = (entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
          const newHeight = entry.target.scrollHeight;
          if (imgParentContainerRef.current)
            imgParentContainerRef.current.style.height = `${
              window.innerWidth >= 1024 && newHeight
            }px`;
        }
      };
  
      const resizeObserver = new ResizeObserver(handleHeightChange);
      resizeObserver.observe(container);
  
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

  return (
    <div className="bg-blue-50 py-16">
      <MarginContainer>
        <div className="w-full min-h-svh flex flex-col items-center justify-center gap-y-8">
          <SubHeaderComponent headerValue={servicesData.title} />

          <div className="w-full lg:min-h-[480px] min-h-[450px] h-full flex flex-col justify-between items-center gap-x-16 gap-y-2">
            <div className="lg:w-full w-screen px-4 flex justify-between items-center xl:gap-x-4 gap-x-2 overflow-hidden overflow-x-auto shadow">
              {servicesData.services.map((service, index) => (
                <motion.div
                  key={`service-${index}`}
                  variants={animateRotateFromLeft}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  custom={0}
                  onClick={() =>
                    setSelectedService(servicesData.services[index])
                  }
                  className={`${selectedService.id === service.id
                      ? "animated-background2"
                      : ""
                    } 2xl:size-[180px] xl:size-[160px] size-[140px] lg:mt-5 mt-3 mb-2 p-[6px] flex justify-center items-center rounded-[20px] cursor-pointer`}
                >
                  <div
                    className={`${selectedService.id === service.id
                        ? "bg-blue-400/80 text-white shadow shadow-gray-800 h-full"
                        : "bg-white h-[90%] text-gray-600"
                      } 2xl:w-[180px] xl:w-[160px] w-[140px] flex flex-col justify-center items-center text-sm text-center tracking-wider rounded-2xl shadow lg:p-2 p-1 transition-all duration-1000`}
                  >
                    {service.icon}

                    <h3 className="font-bold">{service.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full lg:min-h-[300px] h-full flex lg:flex-row flex-col lg:gap-x-12 gap-y-6 transition-all duration-1000">
              <motion.div
                ref={imgParentContainerRef}
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.8}
                className="w-full lg:h-full md:h-[400px] h-[300px] flex justify-center overflow-hidden shadow-lg shadow-gray-400 bg-gradient-to-b from-blue-500 to-blue-900"
              >
                <img
                  src={selectedService.image}
                  alt="Our Services"
                  loading="eager"
                  className="w-full h-full flex object-cover opacity-70"
                />
              </motion.div>

              <div 
                ref={contentContainerRef}
                className="md:w-fulll w-[90%] mx-auto h-full flex flex-col items-start gap-y-4">

                <motion.h6
                  variants={animateFadeUp}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  custom={0.2}
                  className="lg:text-xl text-xl font-bold text-blue-500"
                >
                  {selectedService.fullTitle}
                </motion.h6>

                <motion.div
                  variants={animateFadeUp}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  custom={0.3}
                  className="flex-1"
                >

                  {
                    selectedService.description.map((descItem:any, descIndex:number) => 
                      <>
                        <div key={`desc-${descIndex}`} className="lg:text-lg text-sm mt-2 mb-6">
                           <p>
                            {descItem[0]}
                           </p>

                           <ul className="list-disc list-inside ml-4">
                            {descItem[1] && descItem[1].map((bullet: string, bulletIndex: number) => (
                              <li key={`bullet-${descIndex} - ${bulletIndex}`}>
                                {bullet}
                              </li>
                            ))}

                           </ul>

                        </div>
                      </>
                    )
                  }
                  <Link
                    href="/services"
                    className="small-button text-white font-bold"
                  >
                    {"See all our services"}
                  </Link>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </MarginContainer>
    </div>
  );
};
