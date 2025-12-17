import { FlaskConical, Target, BarChart3, CookingPot, Flame, Timer } from "lucide-react";

// TODO: Replace with your actual experiment detail
const EXPERIMENTS = [
  {
    name: "IK Damping λ ",
    Hypothesis: "Damping improves numerical stability",
    independentVariables: ["IK damping (λ), λ ∈ {0, 0.001, 0.01, 0.05, 0.1}"],
    dependentVariables: ["End-effector error at the plate; Smoothness of the trajectory"],
    KF: ["λ = 0 has extremely high accuracy (~10⁻⁷ m);λ ≥ 0.01 fails to converge within the fixed iteration limit → large errors (~0.65 m);Smoothness barely changes with λ"],
    notes: "Evaluate how damping affects the stability and accuracy of IK. Damping makes the Jacobian inverse more conservative. With limited IK iterations, large damping prevents the solver from reaching the target. In this task, IK damping hurts performance instead of helping.",
    icon: Timer,
  },
  {
    name: "Joint Velocity Limit",
    Hypothesis: "Speed affects time and smoothness.",
    independentVariables: ["TRAJ_MAX_VEL = {0.05, 0.1, 0.2, 0.3, 0.5, 1.0}"],
    dependentVariables: ["Total task time; Average joint step change (smoothness);End-effector accuracy"],
    KF: ["Higher velocity → dramatically shorter task time, Higher velocity → less smooth motion (larger joint changes), Accuracy remains mostly constant (dominated by IK result)"],
    notes: "Study the effect of joint speed constraints on total time, smoothness, and precision. A clear real-world trade-off: speed vs stability.",
    icon: CookingPot,
  },
];

export default function ExperimentsSection() {
  return (
    <section id="experiments" className="bg-card/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Experimental <span className="text-gradient">Design</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {/* TODO: Replace with your experimental design overview. */}
            I designed controlled experiments to systematically evaluate the impact 
            of various parameters on robot manipulation performance.
          </p>
        </div>

        <div className="grid gap-6">
          {EXPERIMENTS.map((experiment, index) => (
            <div key={index} className="card-gradient hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Experiment {index + 1}: {experiment.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{experiment.notes}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                {/* Hypothesis */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="font-display text-sm font-medium text-foreground">
                      Hypothesis
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{experiment.Hypothesis}</p>
                </div>

                {/* Metrics */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="font-display text-sm font-medium text-foreground">
                      Key Finding
                    </span>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {experiment.KF.map((metric, i) => (
                      <li key={i}>• {metric}</li>
                    ))}
                  </ul>
                </div>

                {/* Variables */}
                <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                  <div>
                    <span className="font-display text-xs font-medium text-primary uppercase tracking-wide">
                      Independent Variables
                    </span>
                    <ul className="mt-2 space-y-1">
                      {experiment.independentVariables.map((v, i) => (
                        <li key={i} className="text-secondary-foreground text-sm">
                          • {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-display text-xs font-medium text-primary uppercase tracking-wide">
                      Metrics
                    </span>
                    <ul className="mt-2 space-y-1">
                      {experiment.dependentVariables.map((v, i) => (
                        <li key={i} className="text-secondary-foreground text-sm">
                          • {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
