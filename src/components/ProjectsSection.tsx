import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'CraneSafeAI',
    subtitle: 'AI & IoT Platform',
    description: 'AI-powered crane monitoring and predictive maintenance platform with real-time IoT dashboards, AI comparison tools, and impact analytics for improved safety and cost efficiency.',
    tech: ['React', 'Tailwind CSS', 'Recharts', 'AI/ML', 'IoT'],
    live: 'https://cranesafe.vercel.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    featured: true,
  },
  {
    title: 'SS Cleaners',
    subtitle: 'Full-Stack Services Platform',
    description: 'Modern cleaning services platform with service browsing, booking, real-time chat, and secure Razorpay payments. Features an Admin Dashboard for enquiry tracking and revenue analytics.',
    tech: ['React', 'Supabase', 'Razorpay', 'Edge Functions', 'Realtime'],
    live: 'https://ss-cleaners.vercel.app',
    github: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    featured: true,
  },
  {
    title: 'CitySense',
    subtitle: 'Urban Issue Reporter',
    description: 'Full-stack urban issue reporting platform with Firebase authentication, Cloudinary uploads, geolocation-based reports using Leaflet.js, and an admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'Firebase', 'Leaflet.js'],
    live: 'https://city-sense-flame.vercel.app',
    github: '#',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.projects-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Project cards stagger animation
      gsap.fromTo('.project-card',
        { opacity: 0, y: 80, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Hover effect on cards
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(card.querySelector('.project-image'), {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(card.querySelector('.project-image'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(var(--primary)_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_hsl(var(--primary)_/_0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-4">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-primary font-mono text-sm">{'projects.map()'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've built that showcase my skills in full-stack development, 
            AI integration, and creating impactful user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card glass-card p-6 md:p-8 relative overflow-hidden group ${
                project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              
              {/* Tech circuit pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M10,50 L30,50 L30,30 L50,30 L50,10" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <path d="M90,50 L70,50 L70,70 L50,70 L50,90" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <circle cx="10" cy="50" r="3" fill="currentColor"/>
                  <circle cx="50" cy="10" r="3" fill="currentColor"/>
                  <circle cx="90" cy="50" r="3" fill="currentColor"/>
                  <circle cx="50" cy="90" r="3" fill="currentColor"/>
                </svg>
              </div>

              {/* Image */}
              <div className={`relative overflow-hidden rounded-lg mb-6 md:mb-0 ${
                project.featured ? 'aspect-video' : 'aspect-video max-h-48'
              }`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Scan line overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_hsl(var(--primary)_/_0.03)_50%)] bg-[length:100%_4px] pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-primary font-mono text-xs">{project.subtitle}</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <Button 
                    size="sm" 
                    className="glow-button group/btn"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 hover:border-primary group"
            onClick={() => window.open('https://github.com/pandey-jee', '_blank')}
          >
            <span className="font-mono text-primary">&lt;</span>
            View All Projects
            <span className="font-mono text-primary">/&gt;</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
