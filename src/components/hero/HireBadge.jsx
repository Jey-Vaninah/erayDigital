import { FaArrowRight } from "react-icons/fa";

function HireBadge() {
    return (
        <div className="absolute z-20 bottom-[22%] left-[3%] w-[130px] h-[130px]">

            {/* ROTATING CIRCLE */}
            <div className="w-full h-full rounded-full border-[4px] border-[#f3f4f6] bg-primary flex items-center justify-center animate-spin-slow">

                <div className="flex flex-col items-center justify-center text-white">
                    <span className="text-[9px] tracking-[2px] font-bold">
                        HIRE US
                    </span>

                    <FaArrowRight className="text-white text-lg my-2" />

                    <span className="text-[9px] tracking-[2px] font-bold">
                        HIRE US
                    </span>
                </div>

            </div>

        </div>
    );
}

export default HireBadge;