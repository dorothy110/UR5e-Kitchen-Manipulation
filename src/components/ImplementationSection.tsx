import { Box, Settings, Image as ImageIcon, CheckCircle, CookingPot, Flame, UtensilsCrossed } from "lucide-react";

// TODO: Replace with your actual system components
const SYSTEM_COMPONENTS = [
  { icon: "🤖", text: "UR5e 6-DOF Robotic Arm" },
  { icon: "📷", text: "RGB Camera Sensor" },
  { icon: "🐍", text: "Python Controller Scripts" },
  { icon: "⚙️", text: "Webots Physics Engine" },
  { icon: "🍳", text: "Pot Object with Gripper Handle" },
  { icon: "🔥", text: "Hotplate with Heat Simulation" },
  { icon: "🍽️", text: "Serving Plate Target" },
  { icon: "🧱", text: "Kitchen Counter Surface" },
];

// TODO: Update with your actual setup requirements
const SETUP_STEPS = [
  "Webots R2025a or later",
  "Python 3.11 with NumPy",
  "Clone repository and open world file",
  "Run simulation with default controller",
];

// TODO: Replace with paths to your actual screenshots in /public/images/
const SCREENSHOTS = [
  
{
    src: "${import.meta.env.BASE_URL}images/webots-scene.png",
    alt: "Webots kitchen simulation",
    caption: "Kitchen Environment Overview",
  },
  {
    src: "${import.meta.env.BASE_URL}public/images/robot-arm.png",
    alt: "UR5e robot arm",
    caption: "UR5e robot arm picking up pot",
  },
  {
    src: "${import.meta.env.BASE_URL}public/images/plate.png",
    alt: "plate",
    caption: "plate for serving",
  },
  {
    src: "${import.meta.env.BASE_URL}public/images/cookware.png",
    alt: "pot",
    caption: "pot for cooking",
  },
  {
    src: "${import.meta.env.BASE_URL}public/images/hot plate.png",
    alt: "hot plate",
    caption: "hot plate for heating",
  },  
  {
    src: "${import.meta.env.BASE_URL}public/images/obstacle.png",
    alt: "obstacle",
    caption: "obstacle for createting challenge",
  },  
];

export default function ImplementationSection() {
  return (
    <section id="implementation" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Implementation <span className="text-gradient">Details</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {/* TODO: Replace with your implementation overview. */}
            System architecture, environment setup, and key engineering decisions 
            that shaped robotic manipulation pipeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* System Overview Card */}
          <div className="card-gradient">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">System Overview</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              {/* TODO: Add a brief description of your system architecture. */}
              This system integrates perception, planning, and control modules within 
              the Webots simulation framework.
            </p>
            <ul className="space-y-2">
              {SYSTEM_COMPONENTS.map((component, index) => (
                <li key={index} className="flex items-center gap-2 text-secondary-foreground">
                  <span className="flex-shrink-0">{component.icon}</span>
                  <span>{component.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Setup & Reproducibility Card */}
          <div className="card-gradient">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Setup & Reproducibility</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              {/* TODO: Add setup instructions overview. */}
              Follow these steps to reproduce my experimental setup and run the simulation.
            </p>
            <ol className="space-y-2">
              {SETUP_STEPS.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-display flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <ImageIcon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg">Implementation Gallery</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCREENSHOTS.map((screenshot, index) => (
              <div key={index} className="card-gradient p-4">
                <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Show placeholder if image not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-muted-foreground text-sm">
                          <svg class="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Screenshot coming soon
                        </div>
                      `;
                    }}
                  />
                </div>
                <p className="text-sm text-secondary-foreground font-medium text-center">
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
