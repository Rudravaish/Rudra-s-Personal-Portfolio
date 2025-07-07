import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink, Star, Code } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  homepage: string;
  topics: string[];
}

export default function Projects() {
  const { data: repos, isLoading, error } = useQuery<GitHubRepo[]>({
    queryKey: ["/api/github/repos/Rudravaish"],
    enabled: true,
  });

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Python: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-600",
      Java: "bg-red-500",
      "C++": "bg-blue-700",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
    };
    return colors[language] || "bg-gray-500";
  };

  const getProjectIcon = (name: string) => {
    if (name.toLowerCase().includes("game") || name.toLowerCase().includes("unreal")) {
      return "🎮";
    }
    if (name.toLowerCase().includes("web") || name.toLowerCase().includes("site")) {
      return "🌐";
    }
    if (name.toLowerCase().includes("ai") || name.toLowerCase().includes("ml")) {
      return "🤖";
    }
    if (name.toLowerCase().includes("mobile") || name.toLowerCase().includes("app")) {
      return "📱";
    }
    return "💻";
  };

  if (error) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work and contributions
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Unable to load projects at this time.</p>
            <Button asChild variant="outline">
              <a
                href="https://github.com/Rudravaish"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and contributions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary to-accent relative">
                  <Skeleton className="absolute inset-0" />
                </div>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-6 w-6" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <>
              {repos?.slice(0, 5).map((repo) => (
                <Card key={repo.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-4xl">
                        {getProjectIcon(repo.name)}
                      </div>
                    </div>
                    {repo.language && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                          <div className={`w-2 h-2 rounded-full mr-1 ${getLanguageColor(repo.language)}`}></div>
                          {repo.language}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {repo.name}
                    </CardTitle>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 hover:border-primary hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer">
                <CardContent className="h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">View All Projects</h3>
                  <p className="text-sm text-gray-500 mb-4">Explore my complete portfolio on GitHub</p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com/Rudravaish"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Visit GitHub
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
