import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import LightRays from "@/components/LightRays";
import BlurText from "@/components/BlurText";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const Pricing = () => {
    const { t } = useLanguage();

    const features = [
        t("pricing.enterprise.f1"),
        t("pricing.enterprise.f2"),
        t("pricing.enterprise.f3"),
        t("pricing.enterprise.f4"),
        t("pricing.enterprise.f5"),
        t("pricing.enterprise.f6"),
    ];

    return (
        <Layout variant="dark">
            <section className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
                <LightRays
                    raysColor="#34d399"
                    raysSpeed={0.2}
                    raysOrigin="top-center"
                    clickable={false}
                />
                <div className="container py-12 md:py-16 relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="mb-6">
                            <BlurText
                                text={t("pricing.title")}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[0.9]"
                                delay={50}
                                animateBy="words"
                                direction="bottom"
                            />
                        </div>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-gray-400 max-w-lg mx-auto">
                                {t("pricing.subtitle")}
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Single centered custom card */}
                    <div className="flex justify-center">
                        <ScrollReveal delay={0.4} className="w-full max-w-md">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative rounded-3xl border border-emerald-500/[0.25] bg-emerald-500/[0.04] backdrop-blur-sm p-6 md:p-8 w-full shadow-2xl shadow-emerald-500/[0.05]"
                            >

                                {/* Plan name */}
                                <h3 className="text-sm uppercase tracking-[0.15em] text-gray-400 font-medium mb-6">
                                    {t("pricing.enterprise")}
                                </h3>

                                {/* Price */}
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl font-bold text-white">{t("pricing.enterprise.price")}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-8">{t("pricing.enterprise.desc")}</p>

                                {/* Separator */}
                                <div className="h-px bg-white/[0.08] mb-8" />

                                {/* Features */}
                                <ul className="space-y-3 mb-10">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckIcon />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    to="/contact"
                                    className="block w-full text-center py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:from-blue-400 hover:to-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                                >
                                    {t("pricing.cta.contact")}
                                </Link>

                                {/* Sub-text */}
                                <p className="text-center text-gray-500 text-xs mt-4 tracking-wide">
                                    {t("pricing.custom.note")}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Pricing;
