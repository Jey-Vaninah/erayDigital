import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGlobe,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTiktok
} from "react-icons/fa";

export default function TopBar() {
    return (
        <div className="bg-primary-dark text-white text-sm h-12 flex items-center w-full">

            <div className="flex items-center gap-6 px-4 md:px-10 flex-1">

                <a
                    href="tel:+261384696729"
                    className="flex items-center gap-2 hover:text-gray-200 transition"
                >
                    <FaPhoneAlt className="text-sm text-white" />
                    <span>(+261) 38 46 967 29</span>
                </a>

                <a
                    href="#contact"
                    className="flex items-center gap-2 hover:text-gray-200 transition"
                >
                    <FaEnvelope className="text-sm text-white" />
                    <span>eraydigital.direction@gmail.com</span>
                </a>

                <a
                    href="https://www.google.com/maps/search/?api=1&query=Anosisoa+Ambohimanarina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-200 transition"
                >
                    <FaMapMarkerAlt className="text-sm text-white" />
                    <span>Anosisoa Ambohimanarina</span>
                </a>

            </div>

            <div className="flex items-center gap-4 bg-primary h-full border-l-4 border-primary-light rounded-tl-[20px] rounded-bl-[4px] px-4">

                <FaFacebookF className="w-4 h-4 text-white" />
                <FaTwitter className="w-4 h-4 text-white" />
                <FaInstagram className="w-4 h-4 text-white" />
                <FaTiktok className="w-4 h-4 text-white" />
                <FaGlobe className="w-4 h-4 text-white" />

            </div>

        </div>
    );
}