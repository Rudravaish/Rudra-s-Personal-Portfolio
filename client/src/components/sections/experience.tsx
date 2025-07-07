import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Gamepad2, Linkedin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Narb Technology",
      period: "2024 - Present",
      status: "Current",
      description: "Working on innovative software solutions and contributing to cutting-edge projects in a dynamic tech environment.",
      skills: ["Python", "JavaScript", "React", "Node.js"],
      icon: <Code className="h-6 w-6 text-white" />,
      bgColor: "bg-primary",
      companyUrl: "https://www.linkedin.com/company/narbtechnology/posts/?feedView=all",
      gradientFrom: "from-blue-50",
      gradientTo: "to-indigo-50",
      skillColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Unreal Engine Developer Intern",
      company: "Escape",
      period: "2024 - Present",
      status: "Current",
      description: "Developing immersive experiences and interactive applications using Unreal Engine, focusing on cutting-edge gaming and visualization technologies.",
      skills: ["Unreal Engine", "C++", "Blueprints", "3D Graphics"],
      icon: <Gamepad2 className="h-6 w-6 text-white" />,
      bgColor: "bg-accent",
      companyUrl: "https://www.linkedin.com/company/escapeappai/posts/?feedView=all",
      gradientFrom: "from-cyan-50",
      gradientTo: "to-blue-50",
      skillColor: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and current roles
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:flex md:items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                  <Card className={`bg-gradient-to-br ${exp.gradientFrom} ${exp.gradientTo} shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 ${exp.bgColor} rounded-lg flex items-center justify-center`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <p className={`${exp.bgColor === 'bg-primary' ? 'text-primary' : 'text-accent'} font-medium`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          {exp.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className={exp.skillColor}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" asChild size="sm">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          View Company
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.bgColor} rounded-full border-4 border-white shadow-lg hidden md:block`}></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
