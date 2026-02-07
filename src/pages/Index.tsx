import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ProjectGrid } from "@/components/ProjectGrid";

const Index = () => {
  return (
    <Layout variant="dark">
      <div className="bg-black min-h-screen">
        <HeroSection />
        <ProjectGrid />
      </div>
    </Layout>
  );
};

export default Index;