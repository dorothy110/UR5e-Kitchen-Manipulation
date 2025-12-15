import { Github, Mail, Linkedin } from "lucide-react";

// TODO: Replace with real names and roles
const TEAM = [
  {
    name: "Baolu Yu",
    image: "/images/team-member-1.png",
    github: "https://github.com/dorothy110",
    email: "byu69@wisc.edu",
  },

];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            About the <span className="text-gradient">Project</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {/* TODO: Replace with your course/project context. */}
            This project was developed as part of the CS639 Robotics Introduction course at 
            University of Wisconsin Madison.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="card-gradient text-center max-w-xs hover:border-primary/30 transition-colors group"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted overflow-hidden ring-2 ring-border group-hover:ring-primary/50 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center text-2xl font-display text-primary">
                        ${member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Info */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>

              {/* Links */}
              <div className="flex justify-center gap-3">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            {/* TODO: Update with your course and institution details. */}
            © 2025 CS639 Robotics Course Final Project • University of Wisconsin Madison.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
               Simulation powered by Webots.
          </p>
        </div>
      </div>
    </section>
  );
}
