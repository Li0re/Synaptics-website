import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
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

    return (
        <Layout variant="dark">
            <div className="bg-black min-h-screen">
                <section className="container pt-32 lg:pt-40 pb-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="mb-16 lg:mb-24">
                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6"
                            >
                                {t("blog.title")}
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-gray-400 max-w-2xl leading-relaxed"
                            >
                                {t("blog.subtitle")}
                            </motion.p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            {/* List Section */}
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <motion.div
                                    className="flex flex-col"
                                    variants={containerVariants}
                                >
                                    {displayedProjects.map((project) => {
                                        const title = (lang === "fr" && project.title_fr) ? project.title_fr : project.title;
                                        const role = (lang === "fr" && project.role_fr) ? project.role_fr : project.role;
                                        const industry = (lang === "fr" && project.tags_fr) ? project.tags_fr[0] : project.tags[0];

                                        return (
                                            <motion.div key={project.id} variants={itemVariants}>
                                                <Link
                                                    to={`/project/${project.id}`}
                                                    className="group relative border-t border-white/10 py-6 transition-colors hover:bg-white/5 block"
                                                    onMouseEnter={() => setHoveredProject(project.id)}
                                                    onMouseLeave={() => setHoveredProject(null)}
                                                >
                                                    <div className="flex items-baseline justify-between gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-1">
                                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                                                    {industry}
                                                                </span>
                                                            </div>
                                                            <h2 className="text-2xl md:text-3xl font-medium text-white group-hover:text-gray-200 transition-colors">
                                                                {title}
                                                            </h2>
                                                            <p className="mt-1 text-gray-400 text-sm max-w-md">
                                                                {role}
                                                            </p>
                                                        </div>

                                                        <div className="hidden md:flex items-center gap-8 shrink-0">
                                                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                                                <ArrowUpRight className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                    <motion.div variants={itemVariants} className="border-t border-white/10" />
                                </motion.div>
                            </div>

                            {/* Preview Image Section - Sticky */}
                            <motion.div
                                variants={itemVariants}
                                className="hidden lg:block w-1/2 order-1 lg:order-2"
                            >
                                <div className="sticky top-32 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                                    <AnimatePresence mode="wait">
                                        {hoveredProject ? (
                                            (() => {
                                                const project = projects.find(p => p.id === hoveredProject);
                                                const title = project ? ((lang === "fr" && project.title_fr) ? project.title_fr : project.title) : "";
                                                return project ? (
                                                    <motion.img
                                                        key={project.id}
                                                        src={project.heroImage}
                                                        alt={title}
                                                        initial={{ opacity: 0, scale: 1.05 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />
                                                ) : null;
                                            })()
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                                <span className="text-sm uppercase tracking-widest">
                                                    Select a project
                                                </span>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
};

export default Blog;
