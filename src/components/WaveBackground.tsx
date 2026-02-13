import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const WaveBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax effect for the waves
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
            style={{ minHeight: "100vh" }}
        >
            {/* 
        Vertical Wave / Zigzag Path 
        We use a large SVG that scales with the container height.
      */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 mix-blend-plus-lighter">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 2000"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
                            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Wave 1 - Purple Glow */}
                    <motion.path
                        d="M 300 0 
               Q 600 250 300 500 
               Q 0 750 300 1000 
               Q 600 1250 300 1500 
               Q 0 1750 300 2000"
                        fill="none"
                        stroke="url(#grad1)"
                        strokeWidth="150"
                        style={{ y: y1 }}
                        className="blur-3xl"
                    />

                    {/* Wave 2 - White Mist */}
                    <motion.path
                        d="M 700 0
               Q 400 250 700 500
               Q 1000 750 700 1000
               Q 400 1250 700 1500
               Q 1000 1750 700 2000"
                        fill="none"
                        stroke="url(#grad2)"
                        strokeWidth="150"
                        style={{ y: y2 }}
                        className="blur-2xl"
                    />
                </svg>
            </div>
        </div>
    );
};
