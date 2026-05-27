import Header from "./components/layout/Header";
import BottomBar from "./components/layout/BottomBar";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServiceSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>

      <BottomBar />
    </>
  );
}

export default App;