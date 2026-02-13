import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = 0;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(start + (end - start) * eased));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold tabular-nums">
            {count}{suffix}
        </div>
    );
}

export function StatsSection() {
    const { t } = useLanguage();

    const stats = [
        { value: 98, suffix: "%", label: t("stats.callsAnswered") },
        { value: 0.8, suffix: "s", label: t("stats.responseTime"), isDecimal: true },
        { value: 35, suffix: "%", prefix: "+", label: t("stats.moreBookings") },
        { value: 99.9, suffix: "%", label: t("stats.uptime"), isDecimal: true },
    ];

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.05] to-transparent" />

            <div className="container relative">
                <h2 className="text-center text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-16 md:mb-20">
                    {t("stats.title")}
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-white mb-3 flex items-center justify-center gap-1">
                                {stat.prefix && (
                                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-400">
                                        {stat.prefix}
                                    </span>
                                )}
                                {stat.isDecimal ? (
                                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold tabular-nums bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                        {stat.value}{stat.suffix}
                                    </div>
                                ) : (
                                    <div className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </div>
                                )}
                            </div>
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
