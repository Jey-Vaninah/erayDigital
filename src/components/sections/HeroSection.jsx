import Badge from "../ui/Badge";
import Button from "../ui/Button";
import bg from "../../assets/bg.jpg"

import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 py-10 bg-gray-100">

                <div>

                    <Badge text="Elevate Your Brand With Us" />

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        ErayDigital <br />

                        <span className="text-primary">
                            Agence Web &
                        </span>

                        <br />

                        Marketing Digital
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                        Chez ErayDigital, nous transformons vos idées en expériences
                        digitales captivantes et sur mesure pour votre succès.
                    </p>

                    <div className="flex items-center gap-6">

                        <Button
                            text="Get Started"
                            icon={FaArrowRight}
                        />

                        <Button
                            text="Learn More"
                            variant="link"
                            underline
                        />

                    </div>

                </div>

            </div>
            <div className="relative w-full md:w-1/2 min-h-[520px] md:min-h-screen overflow-hidden bg-[#f3f4f6]">

                <div
                    className="absolute inset-0 bg-cover bg-center grayscale"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                />

                <div className="absolute inset-0 bg-black/10" />

                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 500 520"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <mask id="heroMask">

                            <rect width="500" height="520" fill="white" />

                            <path
                                d="M 32 225 Q 32 205 52 205 L 108 205 Q 128 205 128 228 L 128 372 Q 128 395 108 395 L 52 395 Q 32 395 32 372 Z"
                                fill="black"
                            />

                            <g transform="rotate(-12 180 145)">
                                <path
                                    d="M 115 85 C 130 82 230 82 245 85 C 255 87 258 96 256 108 C 253 132 253 152 256 175 C 258 187 255 195 245 197 C 230 200 130 200 115 197 C 105 195 102 187 104 175 C 107 152 107 132 104 108 C 102 96 105 87 115 85 Z"
                                    fill="black"
                                />
                            </g>

                            <path
                                d="M 160 235 C 178 232 320 232 338 235 C 350 238 353 248 351 264 C 348 295 348 320 351 348 C 353 363 349 372 338 375 C 320 378 178 378 160 375 C 148 372 145 363 147 348 C 150 320 150 295 147 264 C 145 248 148 238 160 235 Z"
                                fill="black"
                            />

                            <g transform="rotate(5 210 430)">
                                <path
                                    d="M 135 390 C 148 388 238 388 250 390 C 260 392 262 400 261 412 C 258 435 258 452 261 472 C 262 483 259 490 250 492 C 238 495 148 495 135 492 C 126 490 123 483 124 472 C 127 452 127 435 124 412 C 123 400 126 392 135 390 Z"
                                    fill="black"
                                />
                            </g>

                        </mask>
                    </defs>

                    <rect
                        width="500"
                        height="520"
                        fill="#f3f4f6"
                        mask="url(#heroMask)"
                    />

                    <rect x="150" y="193" width="260" height="14" fill="#f3f4f6" />
                    <rect x="150" y="322" width="260" height="14" fill="#f3f4f6" />
                </svg>

                <div
                    className="
                        absolute z-20
                        bottom-[24%]
                        left-[3%]
                        w-[100px]
                        h-[95px]
                        rounded-full
                        bg-primary
                        border-[4px]
                        border-[#f3f4f6]
                        flex
                        flex-col
                        items-center
                        justify-center
                        shadow-xl
                    "
                >
                    <span className="text-[7px] tracking-[2px] font-bold text-white">
                        HIRE US
                    </span>

                    <FaArrowRight className="text-white text-sm my-1" />

                    <span className="text-[7px] tracking-[2px] font-bold text-white">
                        HIRE US
                    </span>
                </div>

            </div>


        </section>
    );
}

export default HeroSection;