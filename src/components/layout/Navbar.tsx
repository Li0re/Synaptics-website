import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavbarProps {
  variant?: "light" | "dark";
}

// Grid icon (4 squares)
function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
}

// List icon (3 horizontal lines)
function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2" rx="1" />
      <rect x="1" y="7" width="14" height="2" rx="1" />
      <rect x="1" y="12" width="14" height="2" rx="1" />
    </svg>
  );
}

export function Navbar({ variant = "light" }: NavbarProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isDark = variant === "dark";
  const isGridActive = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-5 lg:py-8">
      <div className="flex items-center justify-between">
        {/* Left: Name/Location */}
        <Link 
          to="/" 
          className={cn(
            "text-xs uppercase tracking-[0.12em] font-medium transition-opacity hover:opacity-60",
            isDark ? "text-white" : "text-black"
          )}
        >
          Marco Coppeto
          <span className={cn(
            "block lg:inline lg:ml-2",
            isDark ? "text-gray-500" : "text-gray-400"
          )}>
            Brooklyn, NY
          </span>
        </Link>

        {/* Center: Floating Toggle Menu with Sliding Indicator */}
        <div
          className={cn(
            "fixed right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 top-5 lg:top-8 lg:right-auto flex items-center rounded-full transition-all duration-300 bg-gray-900",
            scrolled 
              ? "shadow-lg" 
              : "shadow-md"
          )}
        >
          {/* Sliding white indicator */}
          <div 
            className={cn(
              "absolute top-0 h-full w-14 bg-white rounded-full transition-all duration-300 ease-out",
              isGridActive ? "left-0" : "left-14"
            )}
          />
          
          {/* Grid button */}
          <Link
            to="/"
            className={cn(
              "relative z-10 flex items-center justify-center w-14 h-10 transition-colors duration-300",
              isGridActive 
                ? "text-black" 
                : "text-gray-400 hover:text-white"
            )}
          >
            <GridIcon />
          </Link>
          
          {/* List button */}
          <Link
            to="/about"
            className={cn(
              "relative z-10 flex items-center justify-center w-14 h-10 transition-colors duration-300",
              !isGridActive
                ? "text-black" 
                : "text-gray-400 hover:text-white"
            )}
          >
            <ListIcon />
          </Link>
        </div>

        {/* Right: Social Links + Contacts (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-xs uppercase tracking-wide font-medium transition-colors inline-flex items-center gap-1",
                isDark 
                  ? "text-gray-400 hover:text-white" 
                  : "text-gray-500 hover:text-black"
              )}
            >
              TW<span className="text-[10px]">↗</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-xs uppercase tracking-wide font-medium transition-colors inline-flex items-center gap-1",
                isDark 
                  ? "text-gray-400 hover:text-white" 
                  : "text-gray-500 hover:text-black"
              )}
            >
              IG<span className="text-[10px]">↗</span>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-xs uppercase tracking-wide font-medium transition-colors inline-flex items-center gap-1",
                isDark 
                  ? "text-gray-400 hover:text-white" 
                  : "text-gray-500 hover:text-black"
              )}
            >
              DRIB<span className="text-[10px]">↗</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-xs uppercase tracking-wide font-medium transition-colors inline-flex items-center gap-1",
                isDark 
                  ? "text-gray-400 hover:text-white" 
                  : "text-gray-500 hover:text-black"
              )}
            >
              LIN<span className="text-[10px]">↗</span>
            </a>
          </div>
          <Link
            to="/contact"
            className={cn(
              "text-xs uppercase tracking-[0.12em] font-medium transition-opacity hover:opacity-60",
              isDark ? "text-white" : "text-black"
            )}
          >
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
}