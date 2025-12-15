import { Lightbulb, Rocket } from "lucide-react";

// TODO: Replace with your actual lessons learned
const LESSONS_LEARNED = [
  {
    title: "Perception Calibration",
    description: "IK damping interacts strongly with iteration limits",
  },
  {
    title: "Velocity Control Trade-offs",
    description: "Balancing speed and precision required iterative experimentation. TODO: Describe your control challenges.",
  },
  {
    title: "Simulation vs Reality Gap",
    description: "Webots physics approximations affect trajectory accuracy. TODO: Describe any simulation-related insights.",
  },
  {
    title: "State Machine Design",
    description: "Robust error handling was essential for reliable task completion. TODO: Describe your software architecture lessons.",
  },
];

// TODO: Replace with your actual future work ideas
const FUTURE_WORK = [
  {
    title: "Multi-Object Manipulation",
    description: "Extend the system to handle multiple objects with priority-based planning. TODO: Describe your extension ideas.",
  },
  {
    title: "Learning-Based Control",
    description: "Incorporate reinforcement learning for adaptive velocity control. TODO: Describe potential ML improvements.",
  },
  {
    title: "Real Hardware Deployment",
    description: "Validate the algorithms on a physical UR5e robot. TODO: Describe hardware validation plans.",
  },
  {
    title: "Improved Perception",
    description: "Implement deep learning-based object detection for robustness. TODO: Describe perception improvements.",
  },
];

export default function ReflectionSection() {
  return (
    <section id="reflection" className="bg-card/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Reflection & <span className="text-gradient">Future Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {/* TODO: Replace with your reflection overview. */}
            Key insights from the development process and opportunities for 
            extending this work in future iterations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Lessons Learned */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Lessons Learned</h3>
            </div>

            <div className="space-y-4">
              {LESSONS_LEARNED.map((lesson, index) => (
                <div key={index} className="card-gradient hover:border-primary/30 transition-colors">
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {lesson.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Work */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Future Work</h3>
            </div>

            <div className="space-y-4">
              {FUTURE_WORK.map((item, index) => (
                <div key={index} className="card-gradient hover:border-primary/30 transition-colors">
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
