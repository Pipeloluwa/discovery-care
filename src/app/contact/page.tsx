"use client";
import { useDispatch } from "react-redux";
import { ContactComponent } from "../components/shared-components/ContactComponent";
import { MapComponent } from "../components/shared-components/MapComponent";
import { WelcomeScreenComponent } from "../components/shared-components/WelcomeScreenComponent";
import { useEffect } from "react";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";

export default function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavValue({ action: "Contact" }));
  }, []);

  
  return (
    <div className="-mt-[80px] md:space-y-32 space-y-16">
      <WelcomeScreenComponent title="Contact Us"/>
      <ContactComponent />
      <div className="-mt-32">
        <MapComponent />
      </div>
    </div>
  );
}