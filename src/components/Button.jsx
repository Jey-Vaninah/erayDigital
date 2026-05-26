import { FaArrowRight } from "react-icons/fa";

function Button({ text, variant = "primary", icon: Icon }) {

    const styles = {
        primary:
            "bg-primary text-white hover:bg-primary-dark px-5 py-2 rounded-full shadow-md transition flex items-center gap-2",

        link:
            "text-primary underline underline-offset-4 hover:text-primary-dark transition",
    };

    return (
        <button className={`font-medium ${styles[variant]}`}>
            {text}
            {Icon && (
                <Icon className="w-4 h-4" />
            )}

        </button>
    );
}

export default Button;