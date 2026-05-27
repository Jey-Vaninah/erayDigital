import { FaSnowflake } from "react-icons/fa";

const items = [
    "Contenu Marketing",
    "Stratégie Digitale",
    "SEO & Branding",
    "Social Media",
    "Performance Ads",
];

function BottomBar() {
    return (
        <div className="overflow-hidden bg-primary-dark border-t">
            <div className="flex w-max animate-marquee py-3">
                {[...items, ...items].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 mx-8 text-white">
                        <FaSnowflake className="text-blue-300" />
                        <span>{t}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BottomBar;