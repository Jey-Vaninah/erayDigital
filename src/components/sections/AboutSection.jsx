import Badge from "../ui/Badge";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";
import StatCard from "../ui/StatCard";
import { FaArrowRight } from "react-icons/fa";
import { stats } from "../../data/stats";

function AboutSection() {
    return (
        <section id="about" className="w-full bg-white py-16 px-6 md:px-20">

            <div className="mb-12 flex flex-col items-center text-center">

                <Badge text="A propos de nous" />

                <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
                    Empowering Your Success <br />
                    with Eray Digital
                </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">

                <div className="space-y-6">

                    <div className="flex gap-6 items-stretch h-[320px]">

                        <div className="w-3/5 h-full">

                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt="Team"
                                className="rounded-2xl w-full h-full object-cover shadow-md"
                            />

                        </div>

                        <div className="w-2/5 flex flex-col justify-between h-full">

                            <div className="flex justify-center">
                                <div className="w-28 h-14 bg-white rounded-b-full border-2 border-primary" />
                            </div>

                            <div className="flex justify-center">
                                <div className="w-28 h-20 bg-white rounded-t-full border-2 border-primary" />
                            </div>

                            <div className="flex justify-center">

                                <div className="w-32 h-32 rounded-full overflow-hidden border-1 border-primary shadow-md">

                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                        alt="Business"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        alt="Office"
                        className="rounded-2xl w-full h-64 object-cover shadow-md"
                    />

                </div>

                <div className="flex flex-col justify-start">

                    <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed text-justify">

                        ErayDigital, c’est l’alliance du développement web,
                        du logiciel sur mesure, du design moderne
                        et du branding stratégique au service de votre croissance.

                        Nous accompagnons les entreprises,
                        startups et entrepreneurs dans la création
                        de solutions digitales performantes,
                        évolutives et adaptées à leurs objectifs.

                        Notre approche repose sur l’écoute, l’analyse et l’innovation.
                        Nous transformons vos idées en produits digitaux concrets, intuitifs et efficaces,
                        tout en assurant un accompagnement continu à chaque étape :
                        de la conception à la mise en ligne, puis à l’optimisation.

                    </p>

                    <div className="space-y-10 mt-6 mb-24">

                        <ProgressBar
                            label="Marketing & Business Growth"
                            percent={85}
                        />

                        <ProgressBar
                            label="Creativity & Innovation"
                            percent={80}
                        />

                        <ProgressBar
                            label="Business & Financial Management"
                            percent={95}
                        />

                    </div>

                    <Button
                        text="Parler à un expert "
                        icon={FaArrowRight}
                    />

                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 text-center mt-16 gap-6">

                {stats.map((stat) => (
                    <StatCard
                        key={stat.label}
                        number={stat.number}
                        label={stat.label}
                    />
                ))}

            </div>

        </section>
    );
}

export default AboutSection;