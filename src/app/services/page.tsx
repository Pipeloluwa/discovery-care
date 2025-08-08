"use client";
import { useDispatch } from "react-redux";
import { IntroductionComponent } from "../components/services/IntroductionComponent";
import { ServicesComponent } from "../components/services/ServicesComponent";
import { WelcomeScreenComponent } from "../components/shared-components/WelcomeScreenComponent";
import { useEffect } from "react";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";


export default function ServicesPage() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavValue({ action: "Services" }));
  }, []);

  
    return (
        <div className="-mt-[80px] space-y-16">
            <WelcomeScreenComponent title="Services" />
            <IntroductionComponent />
            <ServicesComponent />
        </div>
    );
}