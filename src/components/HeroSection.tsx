import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax: title moves slower than scroll (creates depth)
  const titleOffset = scrollY * 0.3;
  const descOffset = scrollY * 0.15;

  return (
    <section className="min-h-[60vh] flex items-end bg-black text-white pt-32 lg:pt-40 pb-8 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Main Headline with Parallax */}
          <div 
            className="lg:col-span-7 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${titleOffset}px)` }}
          >
            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-normal text-white leading-[0.9] tracking-[-0.03em]">
              Shaping
              <br />
              what's next.
            </h1>
          </div>

          {/* Supporting Text with Parallax */}
          <div 
            className="lg:col-span-5 lg:pb-4 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${descOffset}px)` }}
          >
            <p className="text-base md:text-lg text-gray-400 max-w-sm leading-relaxed">
              I lead, design and help build strategic solutions for products, digital experiences and brands that play meaningful roles in people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}