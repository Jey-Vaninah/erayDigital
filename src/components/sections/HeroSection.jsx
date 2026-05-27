import Badge from "../ui/Badge";
import Button from "../ui/Button";

import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row">

            {/* LEFT */}
            <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 py-10 bg-gray-100">

                <div>

                    <Badge text="Elevate Your Brand With Us" />

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        ErayDigital <br />

                        <span className="text-primary">
                            Agence Web &
                        </span>

                        <br />

                        Marketing Digital
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                        Chez ErayDigital, nous transformons vos idées en expériences
                        digitales captivantes et sur mesure pour votre succès.
                    </p>

                    <div className="flex items-center gap-6">

                        <Button
                            text="Get Started"
                            icon={FaArrowRight}
                        />

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
    );
}

export default HeroSection;