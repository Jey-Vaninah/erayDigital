import Badge from "../ui/Badge";
import Button from "../ui/Button";
import bg from "../../assets/1.png";
import { FaArrowRight } from "react-icons/fa";


export default function HeroSection() {
    return (
        <section id="home" className="flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 flex items-center px-10 md:px-20 py-12 bg-gray-100">

                <div className="max-w-2xl mt-28">
                    <Badge text="Elevate Your Brand With Us" />
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
                        ErayDigital <br />
                        <span className="text-primary">Agence Web &</span>
                        <br />
                        Marketing Digital
                    </h1>
                    <p className="text-gray-600 text-xl leading-relaxed mb-10">
                        Chez ErayDigital, nous transformons vos idées en expériences digitales
                        captivantes et sur mesure pour votre succès.
                    </p>

                    <div className="flex items-center gap-6">
                        <Button text="Get Started" icon={FaArrowRight} />
                        <Button text="Learn More" variant="link" underline />
                    </div>

                </div>

            </div>

            <div className="relative w-full md:w-1/2 min-h-[520px] md:min-h-screen overflow-hidden bg-[#f3f4f6] flex items-center justify-center">
                <img
                    src={bg}
                    alt="visual"
                    className="w-[650px] md:w-[850px] object-contain"
                />
            </div>

        </section>
    );
}
