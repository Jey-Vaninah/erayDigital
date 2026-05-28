import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import group1 from "../../assets/group1.png"

const points = [
    "Analyse des besoins",
    "Stratégie digitale",
    "Design moderne",
    "Développement rapide",
];

export default function ApproachSection() {
    return (
        <section id="Approach" className="py-24 px-6 md:px-20 bg-white flex items-center relative overflow-hidden">

            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex flex-col md:flex-row items-center gap-16 w-full">

                <div className="w-full md:w-2/5 flex justify-center relative">
                    <img
                        src={group1}
                        alt="approach"
                        className="w-[320px] md:w-[380px] h-[420px] object-contain rounded-2xl"
                    />
                </div>

                <div className="w-full md:w-3/5 space-y-6">

                    <Badge text="Our Approach" />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Une approche simple et efficace pour votre croissance
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        Nous analysons vos besoins, concevons des solutions adaptées,
                        développons des systèmes performants et vous accompagnons dans
                        la croissance digitale de votre entreprise.
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 mb-10">
                        {points.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-gray-700"
                            >
                                <FaCheck className="text-primary" />
                                {item}
                            </div>
                        ))}
                    </div>

                    <Button
                        text="A propos de Nous"
                        variant="outline"
                        icon={FaArrowRight}
                        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    />
                </div>
            </div>

        </section>
    );
}