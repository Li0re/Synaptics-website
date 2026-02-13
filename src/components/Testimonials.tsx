import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
    const { t } = useLanguage();

    const testimonials = [
        { quote: t("testimonial.1.quote"), name: t("testimonial.1.name"), role: t("testimonial.1.role"), initials: "SM" },
        { quote: t("testimonial.2.quote"), name: t("testimonial.2.name"), role: t("testimonial.2.role"), initials: "JD" },
        { quote: t("testimonial.3.quote"), name: t("testimonial.3.name"), role: t("testimonial.3.role"), initials: "ML" },
        { quote: t("testimonial.4.quote"), name: t("testimonial.4.name"), role: t("testimonial.4.role"), initials: "CR" },
    ];

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/[0.03] to-transparent" />

            <div className="container relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] text-center mb-16 md:mb-20">
                    {t("testimonials.title")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 hover:border-white/[0.12] transition-all duration-500 group"
                        >
                            {/* Quote icon */}
                            <svg className="w-8 h-8 text-emerald-400/40 mb-6 group-hover:text-emerald-400/60 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                            </svg>

                            {/* Quote */}
                            <p className="text-gray-300 text-base leading-relaxed mb-8">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/[0.08] flex items-center justify-center text-xs font-semibold text-gray-300 tracking-wider">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
