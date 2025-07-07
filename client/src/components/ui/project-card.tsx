import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  homepage?: string;
  gradient?: string;
  icon?: string;
}

export default function ProjectCard({
  name,
  description,
  language,
  stars,
  url,
  homepage,
  gradient = "from-primary to-accent",
  icon = "💻"
}: ProjectCardProps) {
  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      Python: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-600",
      Java: "bg-red-500",
      "C++": "bg-blue-700",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
    };
    return colors[lang] || "bg-gray-500";
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl">{icon}</div>
        </div>
        {language && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
              <div className={`w-2 h-2 rounded-full mr-1 ${getLanguageColor(language)}`}></div>
              {language}
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </CardTitle>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description || "No description available"}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>{stars}</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            {homepage && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
