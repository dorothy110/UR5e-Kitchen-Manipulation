import { CookingPot, Flame, Timer, UtensilsCrossed, ArrowRight, GripVertical } from "lucide-react";

const TASK_STEPS = [
  {
    step: 1,
    icon: GripVertical,
    title: "Pick Up Pot",
    description: "Robot approaches counter and grasps pot handle",
    color: "text-primary",
  },
  {
    step: 2,
    icon: Flame,
    title: "Place on Hotplate",
    description: "Transport pot and position on heating element",
    color: "text-orange-500",
  },
  {
    step: 3,
    icon: Timer,
    title: "Wait for Heating",
    description: "Pause during simulated cooking phase",
    color: "text-yellow-500",
  },
  {
    step: 4,
    icon: UtensilsCrossed,
    title: "Serve to Plate",
    description: "Transfer contents from pot to serving plate",
    color: "text-green-500",
  },
];

export default function TaskFlowSection() {
  return (
    <section className="bg-background py-12 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            Task Sequence
          </h3>
          <p className="text-muted-foreground text-sm">
            The complete kitchen manipulation workflow
          </p>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {TASK_STEPS.map((step, index) => (
            <div key={step.step} className="flex items-center">
              <div className="flex flex-col items-center group">
                <div className={`p-4 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105 ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="mt-3 text-center">
                  <span className="block font-display text-xs text-primary mb-1">
                    Step {step.step}
                  </span>
                  <span className="block font-display text-sm font-medium text-foreground">
                    {step.title}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-1 max-w-[140px]">
                    {step.description}
                  </span>
                </div>
              </div>
              {index < TASK_STEPS.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground mx-4 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden space-y-4">
          {TASK_STEPS.map((step, index) => (
            <div key={step.step} className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-card border border-border flex-shrink-0 ${step.color}`}>
                <step.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 pt-1">
                <span className="font-display text-xs text-primary">Step {step.step}</span>
                <h4 className="font-display font-medium text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
