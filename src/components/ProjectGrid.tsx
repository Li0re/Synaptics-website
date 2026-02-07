import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  // Determine variant based on position
  // Pattern: Row 1: [large, small], Row 2: [small, large], Row 3: [large, small], etc.
  const getVariant = (index: number): "large" | "small" => {
    const row = Math.floor(index / 2);
    const col = index % 2;
    
    // Odd rows (0, 2, 4...): first is large, second is small
    // Even rows (1, 3, 5...): first is small, second is large
    if (row % 2 === 0) {
      return col === 0 ? "large" : "small";
    } else {
      return col === 0 ? "small" : "large";
    }
  };

  return (
    <section className="pt-8 pb-20 md:pb-32 bg-black">
      <div className="container">
        {/* Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 items-start">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              variant={getVariant(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}