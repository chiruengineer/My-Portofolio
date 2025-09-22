import { GraduationCap, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "8.0 CGPA in Information Science Engineering at Vemana Institute Of Technology"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Focused Expertise",
      description: "Specialized in full-stack development, data analysis, and process automation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation Driven",
      description: "Passionate about transforming complex problems into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and powered by code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 gradient-text-secondary">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a passionate Information Science Engineering student at Vemana Institute Of Technology 
                  (2021-2025), I've maintained an 8.0 CGPA while diving deep into the world of technology 
                  and innovation.
                </p>
                <p>
                  My expertise spans across full-stack web development, data analysis, and automation 
                  solutions. I believe in the power of technology to solve real-world problems and 
                  create meaningful impact.
                </p>
                <p>
                  From building responsive web applications to extracting insights from complex datasets, 
                  I thrive on challenges that push the boundaries of what's possible with code.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass p-6 rounded-xl hover-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <div>
                  <h4 className="text-lg font-semibold">Education</h4>
                  <p className="text-muted-foreground">B.E. Information Science Engineering</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Vemana Institute Of Technology</p>
                <p>2021 - 2025 | CGPA: 8.0</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass border-card-border hover-glow transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg text-primary-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto hover-glow transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              My Philosophy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Technology is not just about writing code; it's about creating solutions that make a difference. 
              Every line of code is an opportunity to build something better, solve a problem, or inspire innovation. 
              I believe in continuous learning, collaborative growth, and the transformative power of well-crafted digital experiences."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;