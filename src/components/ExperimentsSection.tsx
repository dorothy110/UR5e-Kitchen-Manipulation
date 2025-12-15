import { FlaskConical, Target, BarChart3, CookingPot, Flame, Timer } from "lucide-react";

// TODO: Replace with your actual experiment details
const EXPERIMENTS = [
  {
    name: "Velocity Limit vs Task Time",
    hypothesis: "Lower joint velocity limits increase the total time to complete the pot→hotplate→plate sequence.",
    independentVariables: ["Joint velocity limit (rad/s)"],
    dependentVariables: ["Total task completion time"],
    metrics: ["Time from pot pickup to plate placement (seconds)", "Number of trajectory segments"],
    notes: "TODO: Replace with actual experiment details and methodology.",
    icon: Timer,
  },
  {
    name: "Velocity Limit vs Motion Smoothness",
    hypothesis: "Higher velocity limits reduce motion smoothness, risking pot contents spillage.",
    independentVariables: ["Joint velocity limit (rad/s)"],
    dependentVariables: ["Motion smoothness metric"],
    metrics: ["Average joint velocity change per timestep", "Jerk magnitude during pot transport"],
    notes: "TODO: Replace with actual experiment details and methodology.",
    icon: CookingPot,
  },
  {
    name: "Heating Duration vs Task Efficiency",
    hypothesis: "Optimal heating duration balances cooking requirements with total cycle time.",
    independentVariables: ["Hotplate heating duration (seconds)"],
    dependentVariables: ["Task efficiency", "Total cycle time"],
    metrics: ["Overall task time", "Idle time ratio"],
    notes: "TODO: Replace with actual experiment details if applicable.",
    icon: Flame,
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
                  <p className="text-muted-foreground text-sm">{experiment.hypothesis}</p>
                </div>

                {/* Metrics */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="font-display text-sm font-medium text-foreground">
                      Metrics
                    </span>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {experiment.metrics.map((metric, i) => (
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
                      Dependent Variables
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
