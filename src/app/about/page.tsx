"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { OurCoreValues } from "../components/about-components/OurCoreValues";
import { OurStoryComponent } from "../components/about-components/OurStoryComponent";
import { StaffComponent } from "../components/about-components/StaffComponent";
import { WelcomeScreenComponent } from "../components/shared-components/WelcomeScreenComponent";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";

export default function AboutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavValue({ action: "About" }));
  }, []);


  return (
    <div className="-mt-[80px] md:space-y-32 space-y-16">
      <WelcomeScreenComponent title="About Us" />
      <OurStoryComponent />
      <OurCoreValues />
      <StaffComponent />
    </div>
  );
}