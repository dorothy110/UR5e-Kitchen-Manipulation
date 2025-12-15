import { Eye, Compass, Route, Cpu, CookingPot, Flame, UtensilsCrossed } from "lucide-react";

const APPROACHES = [
  {
    icon: Eye,
    title: "Perception",
    // TODO: Describe our perception algorithm (e.g., HSV detection, object recognition).
    description:
      "HSV-based color detection identifies the pot, hotplate, and plate in the kitchen scene. The perception pipeline extracts object positions for precise manipulation.",
  },
  {
    icon: Compass,
    title: "Kinematics & Control",
    // TODO: Explain control approach (Jacobian-based, velocity control, inverse kinematics).
    description:
      "Jacobian-based velocity control enables smooth arm movements. Inverse kinematics computes joint configurations for reaching the pot, hotplate, and serving plate.",
  },
  {
    icon: Route,
    title: "Motion Planning",
    // TODO: Describe motion planning approach (RRT, potential fields, etc.).
    description:
      "Task-space planning generates collision-free trajectories between counter, hotplate, and plate positions. Waypoints ensure safe navigation around kitchen obstacles.",
  },
  {
    icon: Cpu,
    title: "State Machine",
    // TODO: Describe the high-level task controller or state machine.
    description:
      "A finite state machine orchestrates the cooking sequence: pick pot → place on hotplate → wait for heating → transfer contents to plate. States transition based on gripper and timer feedback.",
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
            My approach combines computer vision, kinematics, and planning to enable 
            autonomous manipulation in the Webots simulation environment.
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
