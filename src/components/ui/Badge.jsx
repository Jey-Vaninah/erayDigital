export default function Badge({ text }) {
    return (
        <div className="flex items-center gap-3 mb-6">

            <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 border-2 border-primary rounded-full -ml-1"></div>
                <div className="w-3 h-3 border-2 border-primary rounded-full -ml-1"></div>
            </div>

            {text && (
                <p className="text-primary font-semibold uppercase tracking-wider">
                    {text}
                </p>
            )}

        </div>
    );
}