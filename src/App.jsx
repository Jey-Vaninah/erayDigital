import BottomBar from "./components/BottomBar";
import Button from "./components/Button";
import Header from "./components/Header";
import { FaArrowRight } from "react-icons/fa";


function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row">

        {/* LEFT */}
        <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 py-10 bg-gray-100">

          <div>

            {/* BADGE */}
            <div className="flex items-center gap-3 mb-6">

              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 border-2 border-primary rounded-full -ml-1"></div>
                <div className="w-3 h-3 border-2 border-primary rounded-full -ml-1"></div>
              </div>

              <p className="text-primary font-semibold uppercase tracking-wider">
                Elevate Your Brand With Us
              </p>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              ErayDigital <br />
              <span className="text-primary">
                Agence Web &
              </span>
              <br />
              Marketing Digital
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Chez ErayDigital, nous transformons vos idées en expériences
              digitales captivantes et sur mesure pour votre succès.
            </p>

            <div className="flex items-center gap-6">

              <Button text="Get Started" icon={FaArrowRight} />

              <Button
                text="Learn More"
                variant="link"
              />

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-primary min-h-[500px] md:min-h-screen">

          <h1 className="text-5xl font-bold text-white">
            Right Content
          </h1>

        </div>

      </section>
      <BottomBar />

    </>
  );
}

export default App;