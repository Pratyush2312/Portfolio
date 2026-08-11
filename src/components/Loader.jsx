import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
    // const loaderRef = useRef(null);
    // const percentageRef = useRef(null);

    // useEffect(() => {
    //     const counter = {
    //         value:0
    //     }
    //     const t1 = gsap.timeline({
    //         onComplete:onComplete
    //     })

    //     t1.to(counter, {
    //         value: 100,
    //         duration: 2.5,
    //         ease: "power2",
    //         onUpdate: () => {
    //             percentageRef.current.textContent = `${Math.round(counter.value)}%`;
    //         }
    //     });

    //     t1.to(loaderRef.current, {
    //         yPercent: -100,
    //         duration: 1.2,
    //         ease:"power2.out"
    //     })
    // }, [onComplete]);

    return (
        <div
            // ref={loaderRef}
            className=" loader fixed inset-0 z-50 bg-[#0A0A0A] text-[#F2F0EB]"
        >
            <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center">

                    <div
                        // ref={percentageRef}
                        className="loader-percentage font-mono text-5xl"
                    >
                        0%
                    </div>

                    <p className="font-mono text-xs text-[#71706F]">
                        LOADING EXPERIENCE
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Loader;