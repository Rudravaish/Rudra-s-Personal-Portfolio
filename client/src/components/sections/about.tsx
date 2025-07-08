import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Gamepad2, Smartphone, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey and passion for technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate software developer with a focus on creating innovative solutions and immersive experiences. My journey in technology has led me to work with cutting-edge tools and frameworks, from web development to game engines.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing dual internships, I'm gaining hands-on experience in both traditional software development and emerging technologies like Unreal Engine development. I believe in continuous learning and applying new technologies to solve real-world problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2">
                <Code className="h-4 w-4" />
                <span>Full Stack Development</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2">
                <Gamepad2 className="h-4 w-4" />
                <span>Game Development</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 px-4 py-2">
                <Smartphone className="h-4 w-4" />
                <span>Mobile Development</span>
              </Badge>
            </div>
          </div>
          
          <Card className="section-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Location: California, United States</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Status: Open to Opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Education: Purdue - Computer Engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Interests: AI, Gaming, Web3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
