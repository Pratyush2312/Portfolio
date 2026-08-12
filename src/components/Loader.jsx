import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
   
    return (
        <div
            className=" loader fixed inset-0 z-50 bg-[#0A0A0A] text-[#F2F0EB]"
        >
            <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center">

                    <div
                        className="loader-percentage font-mono text-5xl"
                    >
                        0%
                    </div>

                    <p className="font-mono text-xs text-[#71706F]">
                        LOADING PORTFOLIO
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Loader;