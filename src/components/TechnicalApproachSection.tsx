import { Eye, Compass, Route, Cpu, CookingPot, Flame, UtensilsCrossed } from "lucide-react";

const APPROACHES = [
  {
    icon: Compass,
    title: "Coordinate Frames & Kinematics",
    description:
      "Key task positions are first identified in the Webots world frame and then converted into the UR5e base frame. Forward kinematics is used to compute the end-effector position, ensuring consistency between the simulator and the inverse kinematics solver.",
  },
  {
    icon: Cpu,
    title: "Inverse Kinematics with Damping",
    description:
      "A Jacobian-based Newton inverse kinematics solver computes joint configurations for each task target. Optional damping is added to study its effect on numerical stability and convergence under a fixed iteration budget.",
  },
  {
    icon: Route,
    title: "Trajectory Generation & Velocity Control",
    description:
      "Joint-space trajectories are generated using cubic time scaling between waypoints. A configurable joint velocity limit controls execution speed, enabling systematic evaluation of efficiency versus motion smoothness.",
  },
  {
    icon: UtensilsCrossed,
    title: "Experiment Automation & Logging",
    description:
      "The controller automatically logs end-effector accuracy, joint smoothness, and total task time at predefined measurement points. This enables clean, repeatable experiments across different control parameters.",
  },
];


export default function TechnicalApproachSection() {
  return (
    <section id="approach" className="bg-card/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Technical <span className="text-gradient">Approach</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {/* TODO: Replace with a brief overview of your technical methodology. */}
  The controller integrates kinematics, inverse kinematics, and trajectory control
  into a single automated system that supports controlled experimental evaluation.

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {APPROACHES.map((approach, index) => (
            <div
              key={index}
              className="card-gradient hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <approach.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
