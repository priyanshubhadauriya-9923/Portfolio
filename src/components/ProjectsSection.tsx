
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Interview Mocker",
      description: "Built a comprehensive dashboard for sales forecasting using machine learning algorithms, resulting in 25% improved accuracy in predictions.",
      tech: ["Nextjs", "Firebase", "APIs", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/cell-007/sensAI",
      demo: "https://sens-ai-tau-nine.vercel.app"
    },
    {
      title: "Online Learning Platform",
      description: "Built an Online Learning Platform enabling users to create AI-powered courses with YouTube videos and enroll in various courses.",
      tech: ["Nextjs", "React", "PostgreSQL", "APIs"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "https://github.com/priyanshubhadauriya-9923/Online-Learning-Platform",
      demo: "https://schoolars.vercel.app"
    },
    {
      title: "Mental Health Predictor",
      description: "A Python-based Mental Health Predictor that uses machine learning to analyze data and predict potential mental health issues.",
      tech: ["Numpy", "Sklearn", "Pandas", "Streamlit","Seaborn"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      github: "https://github.com/priyanshubhadauriya-9923/mental-health-predictor",
      demo: "#"
    },
    {
      title: "Recommendation Engine",
      description: "Implemented a collaborative filtering recommendation system for e-commerce platform, increasing user engagement by 40%.",
      tech: ["Apache Spark", "MLlib", "Kafka", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "https://github.com/priyanshubhadauriya-9923",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my data science and AI projects that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    <a href={project.github} target="_blank">Code</a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <a href={project.demo} target="_blank">Demo</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
