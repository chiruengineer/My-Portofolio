import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Rooman Technologies",
      location: "Remote",
      period: "Jul 2024 - Present",
      type: "Current Position",
      description: [
        "Developing full-stack projects including To-Do App, Blog System, and E-commerce platform",
        "Working with modern frameworks like Django, Flask, and MERN stack",
        "Implementing cloud integration and deployment strategies",
        "Collaborating with senior developers on scalable web solutions"
      ],
      technologies: ["Django", "Flask", "MERN Stack", "Cloud Integration", "Full-Stack Development"],
      gradient: "bg-gradient-primary",
      current: true
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Unified Mentor",
      location: "Remote",
      period: "Sep 2024 - Oct 2024",
      type: "Internship",
      description: [
        "Performed comprehensive data cleaning and preprocessing on large datasets",
        "Developed interactive dashboards using Power BI for business insights",
        "Applied advanced SQL queries and Python libraries (Pandas, NumPy) for data analysis",
        "Delivered actionable insights that improved decision-making processes"
      ],
      technologies: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Data Visualization"],
      gradient: "bg-gradient-secondary",
      current: false
    },
    {
      id: 3,
      title: "NLP Intern",
      company: "DRDO (Defence Research and Development Organisation)",
      location: "Bengaluru, India",
      period: "Nov 2023 - Dec 2023",
      type: "Research Internship",
      description: [
        "Applied advanced Natural Language Processing techniques using Python",
        "Integrated NLP modules with radar systems for enhanced data processing",
        "Worked on text analysis and pattern recognition algorithms",
        "Contributed to defense technology research and development projects"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Text Analysis", "Research"],
      gradient: "bg-gradient-accent",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey through innovation and growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${exp.gradient} rounded-full border-4 border-background z-10 ${exp.current ? 'animate-pulse-glow' : ''}`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="glass border-card-border hover-glow transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            <Badge 
                              className={`${exp.current ? 'bg-gradient-primary' : 'bg-muted'} text-xs`}
                            >
                              {exp.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold gradient-text-secondary mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium text-foreground">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center glass p-6 rounded-xl hover-glow transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <p className="text-muted-foreground">Internships Completed</p>
          </div>
          <div className="text-center glass p-6 rounded-xl hover-glow transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <p className="text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="text-center glass p-6 rounded-xl hover-glow transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">2+</div>
            <p className="text-muted-foreground">Years of Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;