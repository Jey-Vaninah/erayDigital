import Navbar from "./Navbar";
import TopBar from "./TopBar";


export default function Header() {
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <TopBar />
            <Navbar />
        </div>
    );
}