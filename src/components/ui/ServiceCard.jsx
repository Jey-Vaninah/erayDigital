import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

export default function ServiceCard({ image, icon: Icon, title, description }) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

            <div className="relative p-4 pb-0">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover rounded-2xl"
                />

                <div className="absolute -bottom-8 right-16 w-20 h-20 rounded-full bg-primary-dark shadow-lg flex items-center justify-center">

                    <Icon className="text-white text-3xl" />

                </div>

            </div>

            <div className="pt-16 p-8">

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                    {description}
                </p>

                <Button
                    text="Learn More"
                    variant="link"
                    icon={FaArrowRight}
                />

            </div>

        </div>
    );
}