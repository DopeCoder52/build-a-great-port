import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{'<Projects />'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've built that showcase my skills in full-stack development, 
            AI integration, and creating impactful user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card-hover p-6 md:p-8 ${
                project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-lg mb-6 md:mb-0 ${
                project.featured ? 'aspect-video' : 'aspect-video max-h-48'
              }`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p className="text-primary font-mono text-xs mb-2">{project.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <Button 
                    size="sm" 
                    className="glow-button"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:text-primary"
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
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open('https://github.com/pandey-jee', '_blank')}
          >
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
