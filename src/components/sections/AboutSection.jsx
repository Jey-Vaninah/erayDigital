import Badge from "../ui/Badge";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";
import StatCard from "../ui/StatCard";

import { FaArrowRight } from "react-icons/fa";

import { stats } from "../../data/stats";

function AboutSection() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-20">

            {/* TITLE */}
            <div className="mb-12 flex flex-col items-center text-center">

                <Badge text="A propos de nous" />

                <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
                    Empowering Your Success <br />
                    with Eray Digital
                </h2>

            </div>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* LEFT IMAGES */}
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
                                <div className="w-28 h-14 bg-primary rounded-b-full"></div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-28 h-14 bg-primary rounded-t-full"></div>
                            </div>

                            <div className="flex justify-center">

                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-md">

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

                {/* RIGHT CONTENT */}
                <div className="flex flex-col justify-start">

                    <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">

                        ErayDigital, c’est l’alliance du développement web,
                        du logiciel sur mesure, du design moderne
                        et du branding stratégique au service de votre croissance.

                        Nous accompagnons les entreprises,
                        startups et entrepreneurs dans la création
                        de solutions digitales performantes,
                        évolutives et adaptées à leurs objectifs.

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
                        text="A propos de nous"
                        icon={FaArrowRight}
                    />

                </div>

            </div>

            {/* STATS */}
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