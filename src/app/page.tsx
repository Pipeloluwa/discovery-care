import { AboutComponent } from "./components/home-components/AboutComponent";
import { FaqComponent } from "./components/home-components/FaqComponent";
import { LatestsNews } from "./components/home-components/LatestsNews";
import { OverviewComponent } from "./components/home-components/OverviewComponent";
import { ServicesComponent } from "./components/home-components/ServicesComponent";
import { WelcomeScreenComponent } from "./components/home-components/WelcomeScreenComponent";

export default function Home() {
  return (
    <div className="-mt-[80px] space-y-12">
      <main >
        <WelcomeScreenComponent />
        <OverviewComponent />
      </main>

      <AboutComponent />
      <ServicesComponent />
      <LatestsNews />
      <FaqComponent />
    </div>
  );
}
