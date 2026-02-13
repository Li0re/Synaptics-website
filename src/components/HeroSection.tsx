import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BlurText from "./BlurText";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleOffset = scrollY * 0.3;
  const descOffset = scrollY * 0.15;
  return <section className="min-h-[60vh] flex items-end bg-black text-white pt-32 lg:pt-40 pb-8 overflow-hidden">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
        <div className="lg:col-span-7 transition-transform duration-100 ease-out" style={{
          transform: `translateY(${titleOffset}px)`
        }}>
          <div className="flex flex-col justify-center animate-float">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.9]">
              <BlurText
                text={t("hero.title.line1")}
                delay={50}
                animateBy="letters"
                direction="top"
                className="inline-block"
              />
              <br />
              <BlurText
                text={t("hero.title.line2")}
                delay={50}
                animateBy="letters"
                direction="top"
                className="inline-block"
              />
            </h1>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pb-4 transition-transform duration-100 ease-out" style={{
          transform: `translateY(${descOffset}px)`
        }}>
          <div className="text-lg md:text-xl font-light leading-relaxed max-w-md">
            <span className="animate-shine-text inline-block">
              {t("hero.desc")}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>;
}