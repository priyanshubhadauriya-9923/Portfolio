
import { useState } from 'react';

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "R", level: 85, color: "from-blue-400 to-blue-500" },
        { name: "SQL", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
      ]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Scikit-learn", level: 95, color: "from-green-500 to-green-600" },
        { name: "TensorFlow", level: 90, color: "from-orange-500 to-red-500" },
        { name: "PyTorch", level: 85, color: "from-red-500 to-red-600" },
        { name: "Keras", level: 90, color: "from-red-400 to-pink-500" },
      ]
    },
    {
      title: "Data Tools",
      icon: "📊",
      skills: [
        { name: "Pandas", level: 95, color: "from-purple-500 to-purple-600" },
        { name: "NumPy", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Matplotlib", level: 90, color: "from-green-400 to-blue-500" },
        { name: "Seaborn", level: 85, color: "from-teal-500 to-green-500" },
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Google Cloud", level: 75, color: "from-blue-400 to-green-400" },
        { name: "Apache Spark", level: 80, color: "from-red-500 to-orange-500" },
        { name: "Hadoop", level: 70, color: "from-yellow-400 to-orange-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for solving complex data science challenges and building intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-800/40 to-purple-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className={`text-sm font-semibold transition-all duration-300 ${
                        hoveredSkill === `${categoryIndex}-${skillIndex}` 
                          ? 'text-white scale-110' 
                          : 'text-purple-400'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out transform ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scale-y-110' : ''
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/30 to-purple-900/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Expertise Overview</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Freasher</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">4+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
