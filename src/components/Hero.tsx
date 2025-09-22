import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-chirag-suit.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-accent rounded-full opacity-20 float"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Chirag V</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground">
                Web Developer & Data Analyst
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Passionate Information Science Engineering student specializing in 
                full-stack development, data visualization, and automation solutions. 
                Turning complex data into actionable insights and building seamless digital experiences.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('#portfolio')}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg font-semibold"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="sm" className="hover-glow" asChild>
                  <a href="https://github.com/chiruengineer" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="hover-glow" asChild>
                  <a href="https://linkedin.com/in/chirag-v-a42b00316" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="hover-glow" asChild>
                  <a href="mailto:chiragvidyaraj@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={profileImage}
                  alt="Chirag V - Web Developer & Data Analyst"
                  className="w-full h-full object-cover rounded-full shadow-elevated hover-glow transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent"></div>
                {/* Fresher Badge */}
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Fresher
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;