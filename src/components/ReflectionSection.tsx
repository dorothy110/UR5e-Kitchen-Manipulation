import { Lightbulb, Rocket } from "lucide-react";

// TODO: Replace with your actual lessons learned
const LESSONS_LEARNED = [
  {
    title: "IK Convergence and Damping",
    description: "IK damping interacts strongly with iteration limits: adding damping without increasing iterations can prevent the solver from fully converging to the target.",
  },
  {
    title: "Speed vs Smoothness Trade-off",
    description: "Joint velocity limits create a clear trade-off between efficiency and smoothness: higher speeds reduce task time but increase per-step joint motion.",
  },
  {
    title: "End-to-End Robot Control Pipeline",
    description: "Combining forward kinematics, inverse kinematics, trajectory generation, and automatic logging results in a realistic and reusable robotic workflow.",
  },
  {
    title: "Value of Automated Experiments",
    description: "Building a small automated experiment system enables clean, repeatable, and directly comparable performance evaluations.",
  },
];

// TODO: Replace with your actual future work ideas
const FUTURE_WORK = [
  {
    title: "Adaptive IK Parameter Tuning",
    description:
      "Extend the inverse kinematics solver with adaptive damping or iteration control, allowing the system to automatically balance convergence speed and numerical stability based on task conditions.",
  },
  {
    title: "Obstacle-Aware Motion Planning",
    description:
      "Integrate sampling-based planners such as RRT to generate collision-aware joint trajectories, enabling safe manipulation in more crowded and dynamic kitchen environments.",
  },
  {
    title: "Closed-Loop Feedback Control",
    description:
      "Incorporate real-time end-effector feedback to correct execution errors during motion, reducing reliance on open-loop trajectory execution and improving robustness.",
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
