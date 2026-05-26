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
import logo from "../assets/logo.jpg";

const menuItems = ["Home", "Services", "Projects", "Blog", "About", "Pricing"];

function Navbar() {
    return (
        <div className="w-full">

            <div className="bg-primary-dark text-white text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2">

                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">

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

                <div className="flex gap-4 bg-primary py-3 px-8 border-l-4 border-primary-light -skew-x-6 items-center">

                    <a href="https://www.facebook.com/search/top?q=eray%20digital" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="w-4 h-4 text-white hover:text-primary-light transition" />
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="w-4 h-4 text-white hover:text-primary-light transition" />
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-4 h-4 text-white hover:text-primary-light transition" />
                    </a>

                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="w-4 h-4 text-white hover:text-primary-light transition" />
                    </a>

                    <FaGlobe className="w-4 h-4 text-white hover:text-primary-light transition cursor-pointer" />

                </div>


            </div>

            <div className="flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md">

                {/* LOGO */}
                <div className="flex items-center gap-3">

                    <img
                        src={logo}
                        alt="Logo"
                        className="w-20 h-20 object-cover"
                    />

                    <div className="text-primary font-bold text-xl">
                        Eray Digital
                    </div>

                </div>

                <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-primary transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* BUTTON */}
                <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition">
                    Get a Quote
                </button>

            </div>
        </div>
    );
}

export default Navbar;