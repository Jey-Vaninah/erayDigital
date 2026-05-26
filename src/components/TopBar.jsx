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
        <div className="bg-primary-dark text-white text-sm h-12 flex items-center justify-between px-4 md:px-10">

            <div className="flex gap-6 items-center">

                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-sm" />
                    <span>(+261) 38 46 967 29</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-sm" />
                    <span>eraydigital.direction@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <span>Anosisoa Ambohimanarina</span>
                </div>

            </div>

            <div className="flex items-center gap-4 bg-primary px-5 h-full border-l-4 border-primary-light">

                <FaFacebookF className="w-4 h-4" />
                <FaTwitter className="w-4 h-4" />
                <FaInstagram className="w-4 h-4" />
                <FaTiktok className="w-4 h-4" />
                <FaGlobe className="w-4 h-4 cursor-pointer" />

            </div>

        </div>
    );
}