import logo from "../../assets/logo.jpg";
import Button from "../ui/Button";
import { menuItems } from "../../constants/menuItems";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md">

            <div className="flex items-center gap-3">
                <img src={logo} className="w-14 h-14" />
                <span className="font-bold text-primary text-xl">Eray Digital</span>
            </div>

            <div className="hidden md:flex gap-8 font-medium text-gray-700">
                {menuItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="hover:text-primary transition"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            <Button text="Get a Quote" />
        </nav>
    );
}

export default Navbar;