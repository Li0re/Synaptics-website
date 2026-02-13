import { useLanguage } from "@/contexts/LanguageContext";

export function AudioDemo() {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="container relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] mb-4">
                        {t("audio.title")}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t("audio.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Before Card */}
                    <div className="rounded-3xl border border-red-500/[0.15] bg-red-500/[0.03] backdrop-blur-sm p-8 group hover:border-red-500/[0.25] transition-all duration-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/[0.1] flex items-center justify-center">
                                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white">{t("audio.before")}</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">{t("audio.beforeDesc")}</p>

                        {/* Fake waveform visualization */}
                        <div className="flex items-center gap-[2px] h-12 opacity-40">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-red-400/60 rounded-full"
                                    style={{
                                        height: `${Math.random() * 60 + 15}%`,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-red-400/60 text-xs">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <span className="line-through">{t("audio.listenDemo")}</span>
                        </div>
                    </div>

                    {/* After Card */}
                    <div className="rounded-3xl border border-emerald-500/[0.15] bg-emerald-500/[0.03] backdrop-blur-sm p-8 group hover:border-emerald-500/[0.25] transition-all duration-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/[0.1] flex items-center justify-center">
                                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white">{t("audio.after")}</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">{t("audio.afterDesc")}</p>

                        {/* Fake waveform visualization */}
                        <div className="flex items-center gap-[2px] h-12">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-emerald-400/60 rounded-full transition-all duration-300"
                                    style={{
                                        height: `${Math.sin(i * 0.3) * 30 + 50}%`,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-emerald-400/80 text-xs">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <span>{t("audio.comingSoon")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
