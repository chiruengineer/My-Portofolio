import { Code, BarChart3, Zap, Database, Palette, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks",
      features: [
        "Responsive web design",
        "REST API development",
        "Database integration",
        "Performance optimization"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights",
      features: [
        "Data cleaning & preprocessing",
        "Statistical analysis",
        "Interactive dashboards",
        "Predictive modeling"
      ],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation Solutions",
      description: "Streamline processes with intelligent automation",
      features: [
        "Web scraping & testing",
        "Process automation",
        "Workflow optimization",
        "Custom scripts & tools"
      ],
      gradient: "bg-gradient-accent"
    }
  ];

  const technologies = [
    { name: "Python", icon: <Database className="h-5 w-5" /> },
    { name: "Django", icon: <Code className="h-5 w-5" /> },
    { name: "React", icon: <Palette className="h-5 w-5" /> },
    { name: "Power BI", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
    { name: "Cloud", icon: <Cloud className="h-5 w-5" /> }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass border-card-border hover-glow transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text-secondary">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="glass px-6 py-3 rounded-full hover-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span className="text-primary">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;