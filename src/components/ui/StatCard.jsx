export default function StatCard({ number, label }) {
    return (
        <div>
            <h3 className="text-3xl font-bold text-primary">{number}</h3>
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

