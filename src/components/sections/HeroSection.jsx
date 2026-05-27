import Badge from "../ui/Badge";
import Button from "../ui/Button";
import bg from "../../assets/bg.jpg";
import { FaArrowRight } from "react-icons/fa";
import HireBadge from "../hero/HireBadge";
import HeroMask from "../hero/HeroMask";

function HeroSection() {
    return (
        <section id="home" className="flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 py-10 bg-gray-100">

                <div className="max-w-xl mt-25">

                    <Badge text="Elevate Your Brand With Us" />

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        ErayDigital <br />
                        <span className="text-primary">Agence Web &</span>
                        <br />
                        Marketing Digital
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Chez ErayDigital, nous transformons vos idées en expériences digitales
                        captivantes et sur mesure pour votre succès.
                    </p>

                    <div className="flex items-center gap-6">
                        <Button text="Get Started" icon={FaArrowRight} />
                        <Button text="Learn More" variant="link" underline />
                    </div>

                </div>

            </div>

            <div className="relative w-full md:w-1/2 min-h-[520px] md:min-h-screen overflow-hidden bg-[#f3f4f6]">

                <div
                    className="absolute inset-0 bg-cover bg-center grayscale"
                    style={{ backgroundImage: `url(${bg})` }}
                />

                <div className="absolute inset-0 bg-black/10" />

                <HeroMask />

                <HireBadge />

            </div>

        </section>
    );
}

export default HeroSection;