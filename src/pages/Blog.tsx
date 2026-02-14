import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
    const { t, lang } = useLanguage();
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    // List of projects
    const displayedProjects = projects;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const [cursorY, setCursorY] = useState(0);
    const previewRef = useRef<HTMLDivElement>(null);
    const springY = useSpring(0, { stiffness: 100, damping: 20, mass: 0.5 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const y = e.clientY;
        setCursorY(y);
    };

    useEffect(() => {
        if (hoveredProject && previewRef.current) {
            const previewHeight = previewRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            const padding = 100; // Safe zone padding

            // Calculate target center
            let targetY = cursorY - (previewHeight / 2);

            // Clamp
            const minAllowedY = padding;
            const maxAllowedY = viewportHeight - previewHeight - padding;
            targetY = Math.max(minAllowedY, Math.min(targetY, maxAllowedY));

            springY.set(targetY);
        }
    }, [cursorY, hoveredProject, springY]);

    return (
        <Layout variant="dark">
            <div className="bg-black min-h-screen">
                <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col gap-16"
                    >
                        <div>
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl md:text-6xl font-medium text-white mb-6 uppercase tracking-tight"
                            >
                                {lang === "fr" ? "Études de cas" : "Case Studies"}
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-gray-400 max-w-2xl font-light"
                            >
                                {lang === "fr"
                                    ? "Découvrez comment nous transformons les entreprises avec nos agents IA."
                                    : "Discover how we transform businesses with our AI agents."
                                }
                            </motion.p>
                        </div>

                        <div
                            className="flex flex-col lg:flex-row gap-12 lg:gap-20"
                            onMouseMove={handleMouseMove} // Track mouse globally in the container
                        >
                            {/* List Section - Wider Text Column */}
                            <div className="w-full lg:w-[55%] order-2 lg:order-1">
                                <motion.div
                                    className="flex flex-col"
                                    variants={containerVariants}
                                >
                                    {displayedProjects.map((project) => {
                                        const title = (lang === "fr" && project.title_fr) ? project.title_fr : project.title;
                                        const role = (lang === "fr" && project.role_fr) ? project.role_fr : project.role;
                                        const industry = (lang === "fr" && project.tags_fr) ? project.tags_fr[0] : project.tags[0];
                                        const description = (lang === "fr" && project.fullDescription_fr) ? project.fullDescription_fr : project.fullDescription;

                                        return (
                                            <motion.div key={project.id} variants={itemVariants}>
                                                <Link
                                                    to={`/project/${project.id}`}
                                                    className="group relative border-t border-white/10 py-8 transition-colors hover:bg-white/5 block"
                                                    onMouseEnter={() => setHoveredProject(project.id)}
                                                    onMouseLeave={() => setHoveredProject(null)}
                                                >
                                                    <div className="flex flex-col gap-4">
                                                        <div className="flex items-center gap-3 mb-1">
                                                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                                                {industry}
                                                            </span>
                                                        </div>

                                                        <h2 className="text-2xl md:text-3xl font-medium text-white group-hover:text-gray-200 transition-colors">
                                                            {title}
                                                        </h2>

                                                        <p className="text-sm font-medium text-white/60 mb-2">
                                                            {role}
                                                        </p>

                                                        <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                                            {description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                    <motion.div variants={itemVariants} className="border-t border-white/10" />
                                </motion.div>
                            </div>

                            {/* Preview Section - Smart Sticky */}
                            <motion.div
                                variants={itemVariants}
                                className="hidden lg:block w-[45%] order-1 lg:order-2 relative"
                            >
                                {/* Container is purely for spacing/layout, content is absolute positioned within relative parent?
                                    No, we need the parent to be the reference for "absolute".
                                    Wait, the parent `motion.div` has `relative`.
                                    The `sticky` container inside should probably be removed if we are using absolute positioning relative to the Viewport or Page?

                                    Actually, `sticky top-0 h-screen` creates a "viewport frame" that stays put.
                                    Inside that frame, we can move things around using absolute positioning.
                                    This is the correct pattern.
                                */}
                                <div className="sticky top-0 h-screen pointer-events-none">
                                    <AnimatePresence mode="wait">
                                        {hoveredProject ? (
                                            (() => {
                                                const project = projects.find(p => p.id === hoveredProject);
                                                const title = project ? ((lang === "fr" && project.title_fr) ? project.title_fr : project.title) : "";
                                                const description = project ? ((lang === "fr" && project.fullDescription_fr) ? project.fullDescription_fr : project.fullDescription) : "";

                                                return project ? (
                                                    <motion.div
                                                        key={project.id}
                                                        ref={previewRef}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{
                                                            opacity: 1,
                                                            // y is controlled by springY via style logic below,
                                                            // but for framer motion animate prop, we can just leave it or use the spring value?
                                                            // Actually, if we pass style={{ y: springY }}, we shouldn't pass y in animate.
                                                        }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        style={{ y: springY }}
                                                        className="absolute left-6 right-0 flex flex-col gap-6"
                                                    >
                                                        {/* Image */}
                                                        <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 max-h-[45vh] shadow-2xl">
                                                            <img
                                                                src={project.heroImage}
                                                                alt={title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>

                                                        {/* Text Content */}
                                                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                                                            <h3 className="text-2xl font-medium text-white mb-2">
                                                                {title}
                                                            </h3>
                                                            <p className="text-gray-400 leading-relaxed text-sm lg:text-base line-clamp-5">
                                                                {description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                ) : null;
                                            })()
                                        ) : (
                                            <div className="absolute top-1/2 -translate-y-1/2 w-full px-6">
                                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center text-gray-600">
                                                    <span className="text-sm uppercase tracking-widest">
                                                        Select a project
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
