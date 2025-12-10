import { GraduationCap, Award, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: '3rd place at Hack With Impact 2025, Top 10 at Hack With Tricity 2024',
  },
  {
    icon: Award,
    title: 'Competitive Coder',
    description: 'CodeChef 3★ (Rating: 1657), Codeforces Pupil, 300+ problems solved',
  },
  {
    icon: Users,
    title: 'Event Coordinator',
    description: 'Organized 5 university events with 200+ participants',
  },
  {
    icon: GraduationCap,
    title: 'Certifications',
    description: 'META Frontend & JavaScript, NASA Space Apps Organizer',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{'<About />'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get To <span className="gradient-text">Know Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Hello there! 👋</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-foreground font-medium">Software Engineer</span> and 
                  final-year <span className="text-foreground font-medium">B.E. Computer Science</span> student 
                  at Chandigarh University (CGPA: 7.4).
                </p>
                <p>
                  I specialize in <span className="text-primary">MERN stack development</span>, building 
                  scalable applications with React, Node.js, and MongoDB. My passion lies in creating 
                  seamless user experiences and solving complex problems through code.
                </p>
                <p>
                  Currently working on <span className="text-primary">AI-powered platforms</span> and 
                  <span className="text-primary"> IoT integrations</span>, pushing the boundaries of 
                  what's possible with modern web technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me participating in hackathons, solving algorithmic 
                  challenges, or exploring new technologies.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Education</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">B.E. Computer Science</p>
                    <p className="text-sm text-muted-foreground">Chandigarh University</p>
                  </div>
                  <span className="text-sm text-primary">2022 - 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card-hover p-6 flex gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 h-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
