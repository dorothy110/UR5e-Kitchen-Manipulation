import NavbarCustom from "@/components/NavbarCustom";
import OverviewSection from "@/components/OverviewSection";
import TaskFlowSection from "@/components/TaskFlowSection";
import TechnicalApproachSection from "@/components/TechnicalApproachSection";
import ImplementationSection from "@/components/ImplementationSection";
import ExperimentsSection from "@/components/ExperimentsSection";
import ResultsSection from "@/components/ResultsSection";
import ReflectionSection from "@/components/ReflectionSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarCustom />
      <main>
        <OverviewSection />
        <TaskFlowSection />
        <TechnicalApproachSection />
        <ImplementationSection />
        <ExperimentsSection />
        <ResultsSection />
        <ReflectionSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
