import { useState } from 'react';
import { Code, Database, BarChart3, Cog, MessageSquare, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Python", level: 90, category: "Backend" },
        { name: "JavaScript", level: 85, category: "Frontend" },
        { name: "Django", level: 85, category: "Framework" },
        { name: "Flask", level: 85, category: "Framework" },
        { name: "React", level: 75, category: "Frontend" },
        { name: "SQL", level: 92, category: "Database" },
        { name: "MongoDB", level: 70, category: "Database" },
        { name: "HTML/CSS", level: 90, category: "Frontend" },
        { name: "Java", level: 75, category: "Backend" }
      ]
    },
    analytics: {
      title: "Data Analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: [
        { name: "Power BI", level: 85, category: "Visualization" },
        { name: "Tableau", level: 80, category: "Visualization" },
        { name: "Pandas", level: 88, category: "Library" },
        { name: "NumPy", level: 85, category: "Library" },
        { name: "Excel", level: 90, category: "Tool" },
        { name: "Statistical Analysis", level: 80, category: "Concept" },
        { name: "Data Cleaning", level: 90, category: "Process" },
        { name: "Machine Learning", level: 75, category: "AI/ML" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Cog className="h-5 w-5" />,
      skills: [
        { name: "Git/GitHub", level: 85, category: "Version Control" },
        { name: "Selenium", level: 80, category: "Automation" },
        { name: "Docker", level: 65, category: "DevOps" },
        { name: "Linux", level: 70, category: "OS" },
        { name: "VS Code", level: 95, category: "IDE" },
        { name: "Postman", level: 80, category: "Testing" },
        { name: "AWS", level: 60, category: "Cloud" },
        { name: "REST APIs", level: 85, category: "Integration" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "Problem Solving", level: 95, category: "Core" },
        { name: "Analytical Thinking", level: 90, category: "Core" },
        { name: "Communication", level: 85, category: "Interpersonal" },
        { name: "Team Collaboration", level: 88, category: "Interpersonal" },
        { name: "Project Management", level: 80, category: "Management" },
        { name: "Leadership", level: 75, category: "Management" },
        { name: "Adaptability", level: 90, category: "Personal" },
        { name: "Time Management", level: 85, category: "Personal" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);
  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-gradient-accent";
    if (level >= 80) return "bg-gradient-primary";
    if (level >= 70) return "bg-gradient-secondary";
    return "bg-muted";
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-accent";
    if (level >= 80) return "bg-primary";
    if (level >= 70) return "bg-secondary";
    return "bg-muted-foreground";
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            return (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-gradient-primary shadow-glow" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {categoryData.icon}
                <span className="ml-2">{categoryData.title}</span>
              </Button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSkills.skills.map((skill, index) => (
            <Card 
              key={index}
              className="glass border-card-border hover-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${getSkillColor(skill.level)} text-white`}>
                    {skill.level}%
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{skill.category}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="glass border-card-border hover-glow transition-all duration-300 text-center">
            <CardContent className="p-6">
              <Code className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">8+</div>
              <p className="text-sm text-muted-foreground">Programming Languages</p>
            </CardContent>
          </Card>
          
          <Card className="glass border-card-border hover-glow transition-all duration-300 text-center">
            <CardContent className="p-6">
              <Database className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">5+</div>
              <p className="text-sm text-muted-foreground">Databases & Tools</p>
            </CardContent>
          </Card>
          
          <Card className="glass border-card-border hover-glow transition-all duration-300 text-center">
            <CardContent className="p-6">
              <BarChart3 className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">10+</div>
              <p className="text-sm text-muted-foreground">Analytics Tools</p>
            </CardContent>
          </Card>
          
          <Card className="glass border-card-border hover-glow transition-all duration-300 text-center">
            <CardContent className="p-6">
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">∞</div>
              <p className="text-sm text-muted-foreground">Learning Mindset</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;