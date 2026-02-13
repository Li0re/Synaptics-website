import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Re-fetch project from data/projects to get latest fields
  const project = projects.find((p) => p.id === id);
  const { t, lang } = useLanguage();

  if (!project) {
    return (
      <Layout variant="dark">
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-white mb-4">{t("projectDetail.notFound")}</h1>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              ← {t("projectDetail.back")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Language fallback logic
  const title = (lang === "fr" && project.title_fr) ? project.title_fr : project.title;
  const subtitle = (lang === "fr" && project.subtitle_fr) ? project.subtitle_fr : project.subtitle;
  const role = (lang === "fr" && project.role_fr) ? project.role_fr : project.role;
  const tags = (lang === "fr" && project.tags_fr) ? project.tags_fr : project.tags;
  const fullDescription = (lang === "fr" && project.fullDescription_fr) ? project.fullDescription_fr : project.fullDescription;

  return (
    <Layout variant="dark">
      <div className="bg-black min-h-screen">
        {/* Hero — image left, text right */}
        <section className="container pt-28 lg:pt-36 pb-12 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image — smaller, contained on the left */}
            <div className="order-2 lg:order-1">
              <div
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                {project.galleryImages[0] ? (
                  <img
                    src={project.galleryImages[0]}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/30 text-6xl md:text-8xl font-bold">
                      {title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Text — right side */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.08] tracking-[-0.02em] mb-5">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                {subtitle}
              </p>

              {/* Metadata */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-2">
                      {t("projectDetail.year")}
                    </p>
                    <p className="text-base text-white">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-2">
                      {t("projectDetail.role")}
                    </p>
                    <p className="text-base text-white">{role}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-3">
                    {t("projectDetail.services")}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-widest text-gray-400 border border-gray-700 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="w-full h-px bg-gray-800" />
        </div>

        {/* Full Description */}
        <section className="container py-12 lg:py-16">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
            {fullDescription}
          </p>
        </section>

        {/* Back Link */}
        <section className="container pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
            {t("projectDetail.back")}
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
