import {
    FaFacebookF,
    FaInstagram,
    FaGlobe,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTiktok,
    FaLinkedinIn
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
                <a
                    href="https://www.facebook.com/profile.php?id=100069619770031"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF className="w-4 h-4 text-white hover:scale-110 transition" />
                </a>
                <a
                    href="https://www.linkedin.com/company/eray-digital"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="w-4 h-4 text-white hover:scale-110 transition" />
                </a>
                <a
                    href="https://www.instagram.com/eray_digital?igsh=MWI0YzlxYmxiZXp5dQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="w-4 h-4 text-white hover:scale-110 transition" />
                </a>
                <a
                    href="https://www.tiktok.com/@eray.digital?_r=1&_t=ZS-96jP1RoBkXq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTiktok className="w-4 h-4 text-white hover:scale-110 transition" />
                </a>
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGlobe className="w-4 h-4 text-white hover:scale-110 transition" />
                </a>
            </div>

        </div>
    );
}

