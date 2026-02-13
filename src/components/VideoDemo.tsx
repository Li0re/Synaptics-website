import { useLanguage } from "@/contexts/LanguageContext";

export function VideoDemo() {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="container relative">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] mb-4">
                        {t("videoDemo.title")}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        {t("videoDemo.subtitle")}
                    </p>
                </div>

                {/* Video container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden group">
                        {/* 16:9 aspect ratio container */}
                        <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
                            {/* Decorative background animation */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
                                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
                            </div>

                            {/* Fake waveform animation */}
                            <div className="absolute inset-x-12 bottom-8 flex items-end justify-center gap-[3px] h-16 opacity-30">
                                {Array.from({ length: 60 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full"
                                        style={{
                                            height: `${20 + Math.sin(i * 0.4) * 30 + Math.random() * 20}%`,
                                            animationDelay: `${i * 0.05}s`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Play button */}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300 cursor-pointer">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-400 font-medium">
                                    {t("videoDemo.watchDemo")}
                                </span>
                            </div>

                            {/* Phone call simulation overlay */}
                            <div className="absolute top-6 left-6 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs text-emerald-400 font-mono tracking-wide">
                                    {t("videoDemo.liveCall")}
                                </span>
                            </div>

                            <div className="absolute top-6 right-6 text-xs text-gray-500 font-mono">
                                02:34
                            </div>
                        </div>
                    </div>

                    {/* Features below video */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                                <p className="text-sm font-medium text-white mb-1">{t(`videoDemo.feature${i}.title`)}</p>
                                <p className="text-xs text-gray-500">{t(`videoDemo.feature${i}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
