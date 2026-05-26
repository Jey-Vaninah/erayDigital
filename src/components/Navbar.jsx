import logo from "../assets/logo.jpg";
import Button from "./Button";

const menuItems = ["Home", "Services", "Projects", "Blog", "About", "Pricing"];

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md">

            <div className="flex items-center gap-3">

                <img
                    src={logo}
                    alt="Logo"
                    className="w-14 h-14 object-contain"
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

            <Button text="Get a Quote" />

        </div>
    );
}