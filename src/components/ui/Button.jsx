export default function Button({
    text,
    variant = "primary",
    icon: Icon,
    underline = false,
    className = "",
    ...props
}) {
    const base =
        "inline-flex items-center gap-2 font-medium transition duration-300 w-fit";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary-dark rounded-full px-5 py-2 shadow-md",

        outline:
            "border border-primary text-primary hover:bg-primary-dark hover:text-white rounded-full px-5 py-2",

        ghost: "text-primary hover:bg-primary/10 rounded-full px-5 py-2",

        link: "text-primary hover:text-primary-dark",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${underline ? "underline underline-offset-4" : ""
                } ${className}`}
            {...props}
        >
            {text}
            {Icon && <Icon className="w-4 h-4" />}
        </button>
    );
}