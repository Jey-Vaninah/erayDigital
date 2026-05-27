function Badge({ text }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className="flex">
                <span className="w-3 h-3 bg-primary rounded-full" />
                <span className="w-3 h-3 border-2 border-primary rounded-full -ml-1" />
                <span className="w-3 h-3 border-2 border-primary rounded-full -ml-1" />
            </div>

            {text && (
                <p className="text-primary font-semibold uppercase tracking-wider">
                    {text}
                </p>
            )}
        </div>
    );
}

export default Badge;