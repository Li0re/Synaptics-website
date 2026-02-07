import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "large" | "small";
}

export function ProjectCard({ project, index, variant = "large" }: ProjectCardProps) {
  const isLarge = variant === "large";
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsVisible(true);
        
        // Calculate parallax offset for the image
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = (elementCenter - viewportCenter) / windowHeight;
        
        // Subtle parallax effect (image moves slower than scroll)
        setParallaxOffset(distanceFromCenter * 30);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link 
      to={`/project/${project.id}`}
      ref={cardRef}
      className={`group block cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image Container with Parallax */}
      <div
        className={`relative mb-4 overflow-hidden rounded-2xl ${isLarge ? "aspect-[4/3]" : "aspect-square"}`}
        style={{ backgroundColor: project.color }}
      >
        {/* Parallax image wrapper */}
        <div 
          className="absolute inset-[-20px] transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-4xl md:text-5xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-1">
        {/* Title */}
        <h3 className="text-base md:text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 line-clamp-2">
          {project.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs uppercase tracking-widest text-gray-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}