import { BarChart3, Video, FileText, MessageSquare, PlayCircle } from "lucide-react";
import SimpleTextTable from "./SimpleTextTable";
const BASE = import.meta.env.BASE_URL;
// TODO: Replace with paths to your actual chart images in /public/images/
const CHARTS = [
  {
    file: `${BASE}/images/velocity limit vs total time.png`,
    title: "velocity limit vs total time",
    description: "As the joint velocity limit increases, the robot completes the task much faster.Low speed limits (e.g., 0.05 rad/s) cause the motion to take over 100 seconds,while high speed limits reduce the time to around 7 seconds.This shows a clear performance bottleneck caused by velocity constraints. The cubic trajectory scales the total motion time based on the largest joint displacement divided by its velocity limit.Thus, time ∝ 1 / velocity_limit. This produces the clean monotonic decrease in the plot.",
  },
  {
    file:`${BASE}/images/velocity limit vs smooth.png`,
    title: "velocity limit vs smooth",
    description: "Higher velocity limits produce less smooth joint motion.At low speeds, the joint changes per step (~0.001 rad) are very small,while high speeds lead to larger jumps (~0.012 rad), indicating more abrupt motion.Smoothness is computed as the L2 norm of Δq per simulation step.Since cubic scaling maintains shape but compresses time at higher velocities,the per-step Δq increases proportionally, producing a monotonic rise.",
  },
  {
    file: `${BASE}/images/velocity limit vs accuracy.png`,
    title: "velocity limit vs accuracy",
    description: "Surprisingly, the end-effector error slightly decreases at higher velocity limits.This is not due to better IK accuracy, but because faster trajectories accumulate less numerical drift over time. The IK target is fixed; the accuracy is primarily determined by IK convergence, not velocity. However, cubic interpolation and floating-point accumulation introduce small drift.A slower trajectory contains many more integration steps → more accumulated error. A faster trajectory has fewer steps → less drift.",
  },
];

// TODO: Paste your real data here, one line per row, columns separated by commas.
const RAW_TABLE_IK = `
IK Damping,Total Time (s),Mean Step Change,Handle Error (m),Hotplate Error (m),Plate Error (m)
0.000,19.440,0.004388,7.153017e-07,2.420475e-07,0.650867
0.001,19.440,0.004388,7.157051e-07,2.421773e-07,0.650867
0.010,19.440,0.004388,7.565189e-07,2.553343e-07,0.650867
0.050,19.440,0.004388,3.150482e-07,8.014275e-07,0.650867
1.000,18.992,0.004373,1.691130e-03,2.396319e-03,0.650867
`;

const RAW_TABLE_VEL = `
Max Velocity (rad/s),Total Time (s),Mean Step Change,Plate Error (m)
0.05,108.784,0.000784,0.650892
0.10,55.168,0.001545,0.650890
0.20,28.368,0.003006,0.650881
0.30,19.440,0.004388,0.650867
0.50,12.272,0.006953,0.650823
1.00,6.912,0.012357,0.650620
`;





// TODO: Replace with your actual Google Drive video links
const VIDEOS = [
  {
    title: "Full Demo Run",
    driveUrl: "https://drive.google.com/file/d/1c04fcywyijKMAqOxIm_e-Q60JHLv5hBW/view?usp=sharing",
    description: " if you cannot access, please visit https://drive.google.com/file/d/1c04fcywyijKMAqOxIm_e-Q60JHLv5hBW/view?usp=sharing",
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Results & <span className="text-gradient">Discussion</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {/* TODO: Replace with your results overview. */}
            Experimental findings, performance analysis, and demonstration videos 
            showcasing my robotic manipulation system.
          </p>
        </div>

        {/* Charts Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg">Performance Charts</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CHARTS.map((chart, index) => (
              <div key={index} className="card-gradient">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={chart.file}
                    alt={chart.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-muted-foreground text-sm p-4">
                          <svg class="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Chart coming soon
                        </div>
                      `;
                    }}
                  />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{chart.title}</h4>
                <p className="text-muted-foreground text-sm">{chart.description}</p>
              </div>
            ))}
          </div>
        </div>

  {/* Data Table Section */}
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <FileText className="w-5 h-5" />
      </div>
      <h3 className="font-display font-semibold text-lg">Experimental Data</h3>
    </div>

    {/* Experiment 1: IK Damping */}
    <div className="card-gradient mb-8">
      <h4 className="font-semibold mb-2">Experiment 1. Effect of IK Damping</h4>
      <SimpleTextTable raw={RAW_TABLE_IK} />
      <p className="text-muted-foreground text-sm mt-3">
        This table reports task performance under different inverse kinematics damping values.
      </p>
    </div>

    {/* Experiment 2: Velocity Limit */}
    <div className="card-gradient">
      <h4 className="font-semibold mb-2">Experiment 2. Effect of Trajectory Velocity Limit</h4>
      <SimpleTextTable raw={RAW_TABLE_VEL} />
      <p className="text-muted-foreground text-sm mt-3">
        Increasing velocity limits significantly reduce execution time at the cost of reduced motion smoothness.
      </p>
    </div>
  </div>


{/* Videos Section */}
<div className="mt-16">
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 rounded-lg bg-primary/10 text-primary">
      <PlayCircle className="w-5 h-5" />
    </div>
    <h3 className="font-display font-semibold text-lg">Demo Video</h3>
  </div>

  {VIDEOS.map((video, idx) => (
    <div key={idx} className="card-gradient p-6">
      <h4 className="font-semibold mb-3">{video.title}</h4>

      <p className="text-sm text-muted-foreground mb-4">
        {video.description}
      </p>

      {/* Open in new tab */}
      <a
        href={video.driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md
                   bg-primary text-primary-foreground font-medium
                   hover:bg-primary/90 transition"
      >
        <PlayCircle className="w-4 h-4" />
        Watch Video (Google Drive)
      </a>
    </div>
  ))}

  {/* Optional note */}
  <p className="text-xs text-muted-foreground mt-3">
    The video opens in a new tab to ensure reliable playback without login issues.
  </p>
</div>

        {/* Discussion Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg">Discussion</h3>
          </div>

          <div className="card-gradient">
            <div className="prose prose-invert max-w-none">
              {/* TODO: Replace with actual discussion and insights. */}
<p className="text-muted-foreground leading-relaxed mb-4">
  These results highlight how low-level control parameters interact in an end-to-end
  robotic manipulation system. In Experiment 1, inverse kinematics damping was shown
  to strongly affect solver convergence under a fixed iteration budget. While damping
  is commonly used to improve numerical stability, larger damping values prevented the
  solver from reaching the desired target within the allowed iterations, resulting in
  large steady-state position errors.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  Experiment 2 revealed a clear trade-off between execution efficiency and motion
  smoothness. Increasing the joint velocity limit significantly reduced total task
  time, but also led to larger per-step joint changes and less smooth motion. This
  behavior matches theoretical expectations and demonstrates how actuator constraints
  directly influence motion quality.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  An interesting observation is that end-effector accuracy at the plate slightly
  improved at higher velocities. This effect is not due to improved tracking or
  inverse kinematics performance, but rather reduced numerical accumulation caused by
  shorter trajectories and fewer interpolation steps. This highlights the importance
  of carefully interpreting accuracy metrics in simulation-based experiments.
</p>

<p className="text-muted-foreground leading-relaxed">
  <strong className="text-foreground">Limitations:</strong> All experiments were conducted
  in simulation using open-loop control. While this setup is sufficient for controlled
  evaluation of kinematic and control parameters, real-world deployment would require
  closed-loop feedback, perception, and hardware validation to account for sensing
  noise and unmodeled dynamics.
</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
