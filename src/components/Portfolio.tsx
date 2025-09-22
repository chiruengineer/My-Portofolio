import { useState } from 'react';
import { ExternalLink, Github, Eye, Filter, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// <<< FIX 1: Import all necessary project images
import realTimeDashboard from '@/assets/Real-time.png';
import hospitalDashboard from '@/assets/Hospital-management.png';
import netflixDashboard from '@/assets/Netflix-Dashboard.png';
import farmDashboard from '@/assets/Farm-management.png';
import olympicsDashboard from '@/assets/Olympics-Dashboard.png';
import instagramDashboard from '@/assets/instagram-dashboard.png';
import supermartDashboard from '@/assets/supermart-dashboard.png';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // <<< FIX 2: Update projects to use imported images and reflect no-dashboard status
  const projects = [
    {
      id: 1,
      title: "Real-Time Face Recognition Attendance System with CCTV",
      description: "Advanced attendance tracking system using computer vision and machine learning",
      category: "web-development",
      technologies: ["Python", "OpenCV", "Machine Learning", "SQLite"],
      github: "https://github.com/chiruengineer/Realtime-FaceRecog-with-attendance-system-including-CCTV-usage",
      demo: null,
      isDashboard: false, // Set to false to hide the second button
      dashboardImage: realTimeDashboard,
      featured: true
    },
    {
      id: 2,
      title: "Hospital Management System with Chatbot",
      description: "Comprehensive healthcare management platform with AI-powered assistant",
      category: "web-development",
      technologies: ["Django", "AngularJS", "SQL", "NLP"],
      github: "https://github.com/chiruengineer/Hospital-Management/tree/main",
      demo: null,
      isDashboard: false, // Set to false to hide the second button
      dashboardImage: hospitalDashboard,
      featured: true
    },
    {
      id: 3,
      title: "Netflix Data Cleaning & Visualization",
      description: "Comprehensive analysis of Netflix content data with interactive visualizations",
      category: "data-analysis",
      technologies: ["Python", "Pandas", "Tableau", "Data Visualization"],
      github: "https://github.com/chiruengineer/netflix-dashboard",
      demo: "https://netflix-dashboard-ten.vercel.app/",
      isDashboard: true,
      dashboardImage: netflixDashboard,
      featured: false
    },
    {
      id: 4,
      title: "Farm Management System",
      description: "Digital solution for modern agriculture with automation features",
      category: "web-development",
      technologies: ["SQL", "Selenium", "Python", "Web Automation"],
      github: "https://github.com/chiruengineer/Farm-Management-System",
      demo: null,
      isDashboard: false, // Set to false to hide the second button
      dashboardImage: farmDashboard,
      featured: false
    },
    {
      id: 5,
      title: "Olympics Data Analysis Dashboard",
      description: "Interactive dashboard analyzing Olympic games data across multiple years",
      category: "data-analysis",
      technologies: ["Python", "Matplotlib", "Seaborn", "Dashboard"],
      github: "https://github.com/chiruengineer/Olympics-Analysis-Dashboard",
      demo: "https://olympics-analysis-dashboard-hvjrpbwpp.vercel.app/",
      isDashboard: true,
      dashboardImage: olympicsDashboard,
      featured: false
    },
    {
      id: 6,
      title: "Instagram Influencer Analysis",
      description: "Data-driven insights into influencer marketing trends and metrics",
      category: "data-analysis",
      technologies: ["Python", "Power BI", "Data Mining", "Analytics"],
      github: "https://github.com/chiruengineer",
      demo: "https://ibb.co/TBRwqWmz",
      isDashboard: true,
      dashboardImage: instagramDashboard,
      featured: false
    },
    {
      id: 7,
      title: "Supermart Grocery Sales Analytics",
      description: "Retail analytics dashboard for grocery store performance optimization",
      category: "data-analysis",
      technologies: ["Power BI", "Excel", "SQL", "Business Intelligence"],
      github: "https://github.com/chiruengineer",
      demo: "https://ibb.co/v6wrSWZL",
      isDashboard: true,
      dashboardImage: supermartDashboard,
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'data-analysis', label: 'Data Analysis' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that solve real-world problems
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.id 
                  ? "bg-gradient-primary shadow-glow" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className={`glass border-card-border hover-glow transition-all duration-300 hover:scale-105 group overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                {project.dashboardImage ? (
                  <img 
                    // <<< FIX 3: Use the correct dynamic image source from the project object
                    src={project.dashboardImage} 
                    alt={`${project.title} Dashboard`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                    <Eye className="h-12 w-12 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                  </>
                )}
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <Badge className="bg-gradient-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {/* This button will now only show if a project has a 'demo' link OR is explicitly a dashboard */}
                  {(project.demo || project.isDashboard) && (
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo!} target="_blank" rel="noopener noreferrer">
                        {project.isDashboard ? (
                          <>
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Dashboard
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </>
                        )}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto hover-glow transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Have a project in mind? I'd love to discuss how we can bring your ideas to life.
            </p>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;