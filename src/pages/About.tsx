import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQSection } from "@/components/FAQSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import { Globe } from "@/components/Globe";
import TextReveal from "@/components/TextReveal";

const technologies = [
  { name: "OpenAI / Anthropic" },
  { name: "n8n / Make / Zapier" },
  { name: "Twilio / Vapi" },
  { name: "Google Cloud / AWS" },
];

const achievements = [
  { event: "AI Voice Summit", location: "San Francisco", year: "2025" },
  { event: "TechCrunch Disrupt", location: "London", year: "2024" },
  { event: "VivaTech", location: "Paris", year: "2024" },
];

const ChromeWord = ({ children }: { children: string }) => (
  <span className="chrome-word">{children}</span>
);

const About = () => {
  const { t } = useLanguage();

  const services = [
    { name: t("about.service.receptionist"), description: t("about.service.receptionist.desc") },
    { name: t("about.service.booking"), description: t("about.service.booking.desc") },
    { name: t("about.service.leads"), description: t("about.service.leads.desc") },
    { name: t("about.service.crm"), description: t("about.service.crm.desc") },
  ];

  return <Layout variant="light">
    <div className="bg-black min-h-screen">
      {/* White content wrapper */}
      <div className="bg-white">
        {/* Hero Section — with animated orb behind */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white relative overflow-hidden">
          <div className="absolute top-20 md:top-32 left-1/2 md:left-[75%] -translate-x-1/2 w-full max-w-4xl opacity-40 mix-blend-multiply pointer-events-none">
            <Globe />
          </div>
          <div className="container max-w-5xl relative z-10 md:-translate-x-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-black leading-[1.05] tracking-[-0.03em]">
              {t("about.hero.line1")}
              <ChromeWord>{t("about.hero.highlight1")}</ChromeWord>
              <br />
              {t("about.hero.line2")}
              <ChromeWord>{t("about.hero.highlight2")}</ChromeWord>.
            </h1>
            <p className="mt-8 md:mt-12 text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed tracking-[-0.01em]">
              {t("about.hero.sub1")}
              <br />
              {t("about.hero.sub2")}
              <br />
              <ChromeWord>{t("about.hero.highlight3")}</ChromeWord>{t("about.hero.sub3")}
            </p>
          </div>
        </section>

        {/* Infinite Scroll Marquee */}
        <InfiniteMarquee speed={25} />

        {/* Main Content */}
        <section className="pb-24 md:pb-32 bg-white">
          <div className="container">
            <div className="w-full h-px bg-gray-200 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              {/* Left Column - Sticky */}
              <div className="lg:col-span-4 space-y-14 sticky top-32 h-fit">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">{t("about.services")}</h3>
                  <div className="space-y-5">
                    {services.map((item, index) => <div key={index}>
                      <p className="text-sm font-medium text-black uppercase tracking-wide">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">{t("about.techStack")}</h3>
                  <div className="space-y-2">
                    {technologies.map((item, index) => <p key={index} className="text-sm text-gray-600">{item.name}</p>)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">{t("about.events")}</h3>
                  <div className="space-y-2">
                    {achievements.map((item, index) => <p key={index} className="text-sm text-gray-600">
                      {item.event} ({item.location})
                    </p>)}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8">
                <div className="max-w-none py-20"> {/* Removed max-w-2xl to allow full width of column */}
                  {/* Lead statement — bold & huge */}
                  <TextReveal
                    textClassName="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[1.05] tracking-[-0.03em] mb-24"
                    baseOpacity={0.05}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    rotationEnd="bottom center"
                    wordAnimationEnd="bottom center"
                  >
                    {t("about.bio1")}
                  </TextReveal>

                  {/* Body paragraphs with left accent */}
                  {/* Body paragraphs - Standard Size with Reveal */}
                  <TextReveal
                    textClassName="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed mb-12"
                    baseOpacity={0.05}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    rotationEnd="bottom center"
                    wordAnimationEnd="bottom center"
                  >
                    {`${t("about.bio2.pre")} ${t("about.bio2.highlight")} ${t("about.bio2.post")}`}
                  </TextReveal>

                  <TextReveal
                    textClassName="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed mb-12"
                    baseOpacity={0.05}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    rotationEnd="bottom center"
                    wordAnimationEnd="bottom center"
                  >
                    {`${t("about.bio3.pre")} ${t("about.bio3.highlight")} ${t("about.bio3.post")}`}
                  </TextReveal>

                  <TextReveal
                    textClassName="text-2xl md:text-3xl font-semibold text-black leading-relaxed mb-24"
                    baseOpacity={0.05}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    rotationEnd="bottom center"
                    wordAnimationEnd="bottom center"
                  >
                    {`${t("about.bio4.pre")} ${t("about.bio4.highlight")} ${t("about.bio4.post")}`}
                  </TextReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Wave Transition */}
        {/* Organic Wave Transition */}
        {/* Increased height for more dramatic waves */}
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden leading-[0] bg-white">

          {/* Layer 1: Back (Light Gray) - Slowest */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="block w-[200%] h-full animate-wave-slower"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2400 300"
              preserveAspectRatio="none"
            >
              {/* Curve: 0-1200 repeats at 1200-2400. Y values match at 0, 1200, 2400. */}
              <path
                d="M0,150 C400,50 800,250 1200,150 C1600,50 2000,250 2400,150 L2400,300 L0,300 Z"
                fill="#e5e7eb"
              ></path>
            </svg>
          </div>

          {/* Layer 2: Middle (Dark Gray) - Medium Speed */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="block w-[200%] h-full animate-wave-slow"
              style={{ animationDuration: '20s' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2400 300"
              preserveAspectRatio="none"
            >
              {/* Phase shifted curve */}
              <path
                d="M0,180 C300,80 900,280 1200,180 C1500,80 2100,280 2400,180 L2400,300 L0,300 Z"
                fill="#9ca3af"
              ></path>
            </svg>
          </div>

          {/* Layer 3: Front (Solid Black) - Standard Speed */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <svg
              className="block w-[200%] h-full animate-wave-slow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2400 300"
              preserveAspectRatio="none"
            >
              {/* Main curve */}
              <path
                d="M0,220 C400,120 800,320 1200,220 C1600,120 2000,320 2400,220 L2400,300 L0,300 Z"
                fill="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <FAQSection />
    </div>
  </Layout>;
};
export default About;