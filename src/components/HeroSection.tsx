import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Specialist',
  'React Enthusiast',
  'Problem Solver',
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(173_80%_50%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(250_60%_60%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
            {'<Hello World />'}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            I'm <span className="gradient-text">Abhishek Kumar</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Pandey</span>
          </h1>

          {/* Dynamic Role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <span className="text-xl md:text-3xl font-semibold text-muted-foreground">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            I build fast, scalable web applications with modern technologies. 
            Passionate about crafting seamless user experiences and solving complex problems.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <a 
              href="https://github.com/pandey-jee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card-hover rounded-full hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-kumar-pandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card-hover rounded-full hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:pandeyji252002@gmail.com"
              className="p-3 glass-card-hover rounded-full hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="glow-button w-full sm:w-auto px-8"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto px-8 border-primary/50 hover:bg-primary/10"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
