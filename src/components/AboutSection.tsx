
import { Brain, Database, TrendingUp, Code } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Expertise in developing ML models and algorithms"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Processing and analyzing large-scale datasets"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Building models for forecasting and insights"
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Creating intelligent systems and applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate AI & Data Science specialist with a deep love for transforming complex data 
            into actionable insights. My journey in the world of artificial intelligence and data science 
            has equipped me with the skills to tackle challenging problems and deliver innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              With expertise in machine learning, deep learning, and statistical analysis, I specialize in 
              building end-to-end data science solutions. From data preprocessing to model deployment, 
              I ensure every project delivers maximum value.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My experience spans across various domains including natural language processing, computer vision, 
              predictive modeling, and business intelligence. I'm always eager to explore new technologies 
              and methodologies that push the boundaries of what's possible with data.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <item.icon className="text-purple-400 mb-4" size={32} />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
