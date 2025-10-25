"use client";
import { useDispatch } from "react-redux";
import { AboutComponent } from "./components/home-components/AboutComponent";
import { FaqComponent } from "./components/home-components/FaqComponent";
import { GalleryComponent } from "./components/home-components/GalleryComponent";
import { NewsComponents } from "./components/home-components/NewsComponents";
import { OverviewComponent } from "./components/home-components/OverviewComponent";
import { ServicesComponent } from "./components/home-components/ServicesComponent";
import { SuccessStories } from "./components/home-components/SuccessStories";
import { ContactComponent } from "./components/shared-components/ContactComponent";
import { MapComponent } from "./components/shared-components/MapComponent";
import { useEffect } from "react";
import { setNavValue } from "./state_management/reducers/client-reducers/navValue";
import {WelcomeScreenComponent} from "./components/home-components/WelcomeScreenComponent";
import { WhyChooseUsComponent } from "./components/home-components/WhyChooseUsComponent";

export default function Home() {
    const dispatch= useDispatch();
    dispatch(setNavValue({ action: "Home" }));
    useEffect(() => {
        dispatch(setNavValue({ action: "Home" }));
    }, []);


  return (
    <div className="-mt-[80px] md:space-y-32 space-y-16">
      <main >
        <WelcomeScreenComponent />
        <OverviewComponent />
      </main>

      <WhyChooseUsComponent />
      <ServicesComponent />
      <GalleryComponent />
      {/* <SuccessStories /> */}
      <NewsComponents />
      <FaqComponent />
      <ContactComponent />
      <MapComponent />
    </div>
  );
}
