import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const points = [
    "Analyse des besoins",
    "Stratégie digitale",
    "Design moderne",
    "Développement rapide",
];

function ApproachSection() {
    return (
        <section className="py-24 px-6 md:px-20 bg-gray-50 flex items-center relative overflow-hidden">

            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-16 w-full">

                <div className="w-full md:w-2/5 flex justify-center relative">

                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="approach"
                        className="w-[320px] md:w-[380px] h-[420px] object-cover rounded-2xl shadow-xl"
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

                    <div className="grid grid-cols-2 gap-4">

                        {points.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <FaCheck className="text-primary" />
                                <span className="text-gray-700 text-sm">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>

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
                        text="About Us"
                        variant="outline"
                        icon={FaArrowRight}
                    />

                </div>

            </div>

        </section>
    );
}

export default ApproachSection;