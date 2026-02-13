import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadge } from "@/components/TrustBadge";
import { HomeCaseStudies } from "@/components/HomeCaseStudies";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";

import { AudioDemo } from "@/components/AudioDemo";
import { Testimonials } from "@/components/Testimonials";
import { IntegrationsGrid } from "@/components/IntegrationsGrid";
import { ROICalculator } from "@/components/ROICalculator";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import { WaveBackground } from "@/components/WaveBackground";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout variant="dark">
      <div className="bg-black min-h-screen relative overflow-hidden">
        <WaveBackground />

        <div className="relative z-10">
          <HeroSection />
          <TrustBadge />
          <HomeCaseStudies />

          {/* Sections moved from Blog */}
          <div className="space-y-4">
            <ScrollReveal><HowItWorks /></ScrollReveal>
            <ScrollReveal><StatsSection /></ScrollReveal>

            <ScrollReveal><AudioDemo /></ScrollReveal>
            <ScrollReveal><Testimonials /></ScrollReveal>
            <ScrollReveal><IntegrationsGrid /></ScrollReveal>
            <ScrollReveal><ROICalculator /></ScrollReveal>
          </div>

          {/* CTA from Blog */}
          <section className="container pb-20 lg:pb-32 mt-20">
            <ScrollReveal>
              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-br from-blue-500/[0.05] to-purple-500/[0.05] p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("blog.cta.title")}
                </h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  {t("blog.cta.desc")}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
                >
                  {t("blog.cta.button")}
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>
          </section>

          <FloatingCTA />
        </div>
      </div>
    </Layout>
  );
};

export default Index;