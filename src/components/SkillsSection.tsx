import { Code2, Server, Database, Wrench, Brain, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'text-primary',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-secondary',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Edge Functions'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-accent',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Firestore'],
  },
  {
    title: 'UI/UX',
    icon: Palette,
    color: 'text-primary',
    skills: ['Figma', 'Responsive Design', 'Flexbox/Grid', 'Animations', 'Micro-interactions'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: 'text-secondary',
    skills: ['Git/GitHub', 'Vercel', 'Netlify', 'Postman', 'Render'],
  },
  {
    title: 'Problem Solving',
    icon: Brain,
    color: 'text-accent',
    skills: ['DSA', 'Algorithms', 'CodeChef 3★', 'Codeforces', '300+ Problems'],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(250_60%_60%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{'<Skills />'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience with modern web technologies
            and competitive programming.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-card ${category.color}`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Bar */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML/CSS'].map((lang) => (
              <div key={lang} className="text-center group cursor-default">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="font-mono text-lg font-bold gradient-text">
                    {lang.slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
