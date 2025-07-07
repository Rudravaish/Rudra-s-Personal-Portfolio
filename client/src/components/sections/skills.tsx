import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Gamepad2, Database, Wrench, Brain } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
      skillColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-green-600" />,
      bgColor: "bg-green-100",
      skills: ["React", "Node.js", "Express.js", "Flask", "HTML/CSS"],
      skillColor: "bg-green-100 text-green-800"
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="h-6 w-6 text-purple-600" />,
      bgColor: "bg-purple-100",
      skills: ["Unreal Engine", "Blueprints", "3D Graphics", "Game Design"],
      skillColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-6 w-6 text-orange-600" />,
      bgColor: "bg-orange-100",
      skills: ["MongoDB", "PostgreSQL", "AWS", "Firebase"],
      skillColor: "bg-orange-100 text-orange-800"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6 text-red-600" />,
      bgColor: "bg-red-100",
      skills: ["Git", "Docker", "VS Code", "Postman"],
      skillColor: "bg-red-100 text-red-800"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      bgColor: "bg-indigo-100",
      skills: ["TensorFlow", "PyTorch", "OpenAI", "Pandas"],
      skillColor: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with and tools I use to build amazing projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className={category.skillColor}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
