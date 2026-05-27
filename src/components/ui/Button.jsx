function Button({ text, variant = "primary", icon: Icon }) {

    const styles = {
        primary:
            "bg-primary text-white hover:bg-primary-dark px-5 py-2 rounded-full shadow-md transition inline-flex items-center gap-2 w-fit",

        link:
            "text-primary underline underline-offset-4 hover:text-primary-dark transition inline-flex items-center gap-2 w-fit",
    };

    return (
        <button className={`font-medium ${styles[variant]}`}>
            {text}
            {Icon && <Icon className="w-4 h-4" />}
        </button>
    );
}

export default Button;