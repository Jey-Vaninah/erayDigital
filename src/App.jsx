import Header from "./components/layout/Header";
import BottomBar from "./components/layout/BottomBar";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServiceSection";
import ApproachSection from "./components/sections/ApproachSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ApproachSection />
        <AboutSection />
        <ServicesSection />
      </main>

      <BottomBar />
    </>
  );
}

export default App;