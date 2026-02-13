import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FAQSection() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: t("faq.q1"), a: t("faq.a1") },
        { q: t("faq.q2"), a: t("faq.a2") },
        { q: t("faq.q3"), a: t("faq.a3") },
        { q: t("faq.q4"), a: t("faq.a4") },
        { q: t("faq.q5"), a: t("faq.a5") },
        { q: t("faq.q6"), a: t("faq.a6") },
    ];

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="container relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] text-center mb-16 md:mb-20">
                    {t("faq.title")}
                </h2>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`rounded-2xl border transition-all duration-500 ${isOpen
                                        ? "border-white/[0.12] bg-white/[0.04]"
                                        : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10]"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-6 md:p-7 text-left cursor-pointer"
                                >
                                    <span className="text-white font-medium text-base md:text-lg pr-8 leading-snug">
                                        {faq.q}
                                    </span>
                                    <span className={`text-gray-400 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                    style={{
                                        maxHeight: isOpen ? "300px" : "0px",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <p className="px-6 md:px-7 pb-6 md:pb-7 text-gray-400 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
