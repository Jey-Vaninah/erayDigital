function Button({
    text,
    variant = "primary",
    icon: Icon,
    underline = false,
}) {

    const styles = {
        primary:
            "bg-primary text-white hover:bg-primary-dark px-5 py-2 rounded-full shadow-md transition inline-flex items-center gap-2 w-fit",

        link:
            "text-primary hover:text-primary-dark transition inline-flex items-center gap-2 w-fit",
    };

    return (
        <button
            className={`
                font-medium
                ${styles[variant]}
                ${underline ? "underline underline-offset-4" : ""}
            `}
        >
            {text}

            {Icon && <Icon className="w-4 h-4" />}
        </button>
    );
}

export default Button;