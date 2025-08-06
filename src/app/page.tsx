import { AboutComponent } from "./components/home-components/AboutComponent";
import { FaqComponent } from "./components/home-components/FaqComponent";
import { GalleryComponent } from "./components/home-components/GalleryComponent";
import { NewsComponents } from "./components/home-components/NewsComponents";
import { OverviewComponent } from "./components/home-components/OverviewComponent";
import { ServicesComponent } from "./components/home-components/ServicesComponent";
import { SuccessStories } from "./components/home-components/SuccessStories";
import { WelcomeScreenComponent } from "./components/home-components/WelcomeScreenComponent";
import { ContactComponent } from "./components/shared-components/ContactComponent";
import { FooterComponent } from "./components/shared-components/FooterComponent";
import { MapComponent } from "./components/shared-components/MapComponent";

export default function Home() {
  return (
    <div className="-mt-[80px] space-y-32">
      <main >
        <WelcomeScreenComponent />
        <OverviewComponent />
      </main>

      <AboutComponent />
      <ServicesComponent />
      <GalleryComponent />
      <NewsComponents />
      <FaqComponent />
            <SuccessStories />
      <ContactComponent />
      <MapComponent />
    </div>
  );
}
