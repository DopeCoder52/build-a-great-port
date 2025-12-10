import { useEffect, useRef } from 'react';
import { Code2, Server, Database, Wrench, Brain, Palette, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-primary to-primary/50',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-secondary to-secondary/50',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Edge Functions'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-accent to-accent/50',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Firestore'],
  },
  {
    title: 'UI/UX',
    icon: Palette,
    color: 'from-primary to-secondary',
    skills: ['Figma', 'Responsive Design', 'Flexbox/Grid', 'Animations', 'Micro-interactions'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: 'from-secondary to-accent',
    skills: ['Git/GitHub', 'Vercel', 'Netlify', 'Postman', 'Render'],
  },
  {
    title: 'Problem Solving',
    icon: Brain,
    color: 'from-accent to-primary',
    skills: ['DSA', 'Algorithms', 'CodeChef 3★', 'Codeforces', '300+ Problems'],
  },
];

const languages = [
  { name: 'JavaScript', abbr: 'JS', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', abbr: 'TS', color: 'from-blue-400 to-blue-600' },
  { name: 'Java', abbr: 'JV', color: 'from-red-400 to-red-600' },
  { name: 'C++', abbr: 'C+', color: 'from-purple-400 to-purple-600' },
  { name: 'SQL', abbr: 'SQ', color: 'from-cyan-400 to-cyan-600' },
  { name: 'HTML/CSS', abbr: 'HC', color: 'from-orange-400 to-pink-600' },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.skills-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.skills-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Skill cards stagger animation
      gsap.fromTo('.skill-card',
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Languages bar animation
      gsap.fromTo('.lang-item',
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.languages-bar',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for icons
      gsap.to('.skill-icon', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative">
      {/* Tech background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(250_60%_60%_/_0.05)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="skills-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-sm mb-4">
            <Cpu className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-mono text-sm">{'skills.forEach()'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience with modern web technologies
            and competitive programming.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="skill-card glass-card p-6 group relative overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${category.color} opacity-20 rotate-45`} />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className={`skill-icon p-2.5 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="skill-tag px-3 py-1.5 text-sm bg-muted/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:scale-105 transition-all cursor-default border border-transparent hover:border-primary/20"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Languages Bar */}
        <div className="languages-bar mt-16 glass-card p-8 relative overflow-hidden">
          {/* Binary background decoration */}
          <div className="absolute inset-0 opacity-5 font-mono text-xs overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {'01'.repeat(100)}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-8 text-center relative z-10">
            <span className="font-mono text-primary">&lt;</span>
            Programming Languages
            <span className="font-mono text-primary">/&gt;</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {languages.map((lang) => (
              <div key={lang.name} className="lang-item text-center group cursor-default">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                  <span className="font-mono text-lg font-bold text-white relative z-10">
                    {lang.abbr}
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
