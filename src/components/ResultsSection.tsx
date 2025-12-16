import { BarChart3, Video, FileText, MessageSquare } from "lucide-react";
import SimpleTextTable from "./SimpleTextTable";
const BASE = import.meta.env.BASE_URL;
// TODO: Replace with paths to your actual chart images in /public/images/
const CHARTS = [
  {
    file: `${BASE}/images/velocity limit vs total time.png`,
    title: "Experiment 2 Result: velocity limit vs total time",
    description: "TODO: Describe trend and interpretation. Higher velocity limits result in faster task completion times.",
  },
  {
    file:`${BASE}/images/velocity limit vs smooth.png`,
    title: "Experiment 2 Result: velocity limit vs smooth",
    description: "TODO: Describe relation between velocity and smoothness. Smoothness decreases as velocity increases.",
  },
  {
    file: `${BASE}/images/velocity limit vs accuracy.png`,
    title: "Experiment 2 Result: velocity limit vs accuracy",
    description: "TODO: Describe relation between velocity and smoothness. Smoothness decreases as velocity increases.",
  },
];

// TODO: Paste your real data here, one line per row, columns separated by commas.
const RAW_TABLE = `
Velocity Limit (rad/s),Task Time (s),Smoothness Score
0.05,110,0.001
0.10,70,0.003
0.20,30,0.006
0.30,15,0.010
0.40,8,0.012
`;

// TODO: Replace with your actual Google Drive video links
const VIDEOS = [
  {
    title: "Full Demo Run",
    driveUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview",
    description: "TODO: Describe what the video shows. Complete manipulation task demonstration.",
  },
  {
    title: "Low Velocity Experiment",
    driveUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview",
    description: "TODO: Describe this condition. Robot operating at 0.05 rad/s velocity limit.",
  },
  {
    title: "High Velocity Experiment",
    driveUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview",
    description: "TODO: Describe this condition. Robot operating at 0.40 rad/s velocity limit.",
  },
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

          <div className="card-gradient">
            <SimpleTextTable raw={RAW_TABLE} />
            <p className="text-muted-foreground text-sm mt-4">
              {/* TODO: Add table caption or interpretation. */}
              Table 1: Summary of experimental results across different velocity limit conditions.
            </p>
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg">Demo Videos</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video, index) => (
              <div key={index} className="card-gradient">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  {video.driveUrl.includes("YOUR_VIDEO_ID") ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground text-sm">
                      <Video className="w-10 h-10 mb-2 opacity-50" />
                      <span>Video coming soon</span>
                      <span className="text-xs mt-1">Add Google Drive link</span>
                    </div>
                  ) : (
                    <iframe
                      src={video.driveUrl}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    />
                  )}
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{video.title}</h4>
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </div>
            ))}
          </div>
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
                These experimental results demonstrate a clear trade-off between task execution 
                speed and motion smoothness. As velocity limits increase, the robot completes 
                manipulation tasks more quickly, but the motion quality degrades as indicated 
                by higher jerk values and less consistent trajectories.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The optimal velocity limit appears to be around 0.20 rad/s, balancing 
                reasonable task completion times with acceptable motion smoothness. This 
                finding has implications for real-world applications where both efficiency 
                and safety are important considerations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Limitations:</strong> My experiments were 
                conducted in simulation, which may not fully capture real-world dynamics. 
                Future work should validate these findings on physical hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
