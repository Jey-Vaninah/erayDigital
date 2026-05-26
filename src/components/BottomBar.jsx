import { FaSnowflake } from "react-icons/fa";

const items = [
    "Contenu Marketing",
    "Stratégie Digitale",
    "SEO & Branding",
    "Social Media",
    "Performance Ads",
];

export default function BottomBar() {
    return (
        <div className="w-full overflow-hidden bg-primary-dark border-t">

            <div className="flex w-max animate-marquee py-3">

                {/* FIRST LOOP */}
                <div className="flex items-center">
                    {items.map((text, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 mx-8 text-white font-medium"
                        >
                            <FaSnowflake className="text-blue-300" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>

                {/* SECOND LOOP (IMPORTANT FOR SEAMLESS EFFECT) */}
                <div className="flex items-center">
                    {items.map((text, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 mx-8 text-white font-medium"
                        >
                            <FaSnowflake className="text-blue-300" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}