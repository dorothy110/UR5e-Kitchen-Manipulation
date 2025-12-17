import { ArrowDown, Play, CookingPot, Flame } from "lucide-react";

export default function OverviewSection() {
  const scrollToResults = () => {
    const element = document.getElementById("results");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="overview"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      {/* Floating kitchen icons */}
      <div className="absolute top-20 right-10 md:right-20 text-primary/20 animate-bounce" style={{ animationDuration: "3s" }}>
        <CookingPot className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="absolute bottom-32 right-16 md:right-32 text-orange-500/20 animate-pulse">
        <Flame className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-display mb-6 animate-fade-in">
            <CookingPot className="w-4 h-4" />
            {/* TODO: Replace with your course name */}
            Robotics Final Project
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            {/* TODO: Replace with your project title */}
            <span className="text-foreground">UR5e Kitchen</span>
            <br />
            <span className="text-gradient">Robot Chef</span>
          </h1>

          {/* Abstract */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up animation-delay-100">
            {/* TODO: Replace this abstract with the real project summary. */}
            Overview: This project investigates the behavior of inverse kinematics and joint-level control in a small UR5e kitchen manipulation task simulated in Webots. 
            The robot is required to move a pot from a table to a hotplate and then reposition above a plate, forming a simple but complete manipulation pipeline. 
            Using a Newton-based inverse kinematics solver, smooth trajectory generation, and joint velocity constraints, 
            the project evaluates how control parameters influence accuracy, smoothness, and execution time. 
            Two experiments are conducted to study the effects of IK damping and joint velocity limits. 
            The results highlight important trade-offs between numerical stability, efficiency, and motion quality, demonstrating how kinematics and control concepts interact in an end-to-end robotic system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-200">
            <button
              onClick={scrollToResults}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow-effect"
            >
              <Play className="w-4 h-4" />
              View Results & Demo
            </button>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Technical Details
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
