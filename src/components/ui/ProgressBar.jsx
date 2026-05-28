export default function ProgressBar({ label, percent }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-medium">{label}</span>
                <span>{percent}%</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}