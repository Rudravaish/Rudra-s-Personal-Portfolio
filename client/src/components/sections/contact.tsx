import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Github, Linkedin, FileText, Loader2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    // Create email with pre-filled content
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:rudra.vaishnav17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Rudravaish",
      icon: <Github className="h-6 w-6" />,
      username: "@Rudravaish"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rudra-vaishnav/",
      icon: <Linkedin className="h-6 w-6" />,
      username: "rudra-vaishnav"
    },
    {
      name: "Resume",
      url: "https://drive.google.com/drive/u/3/home",
      icon: <FileText className="h-6 w-6" />,
      username: "Download PDF"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Whether you're looking to collaborate on a project, discuss opportunities, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <div key={link.name} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{link.name}</h4>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {link.username}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="section-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Message</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Email Me Directly</h4>
                  <p className="text-blue-800 mb-2">For the fastest response, email me at:</p>
                  <a 
                    href="mailto:rudra.vaishnav17@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    rudra.vaishnav17@gmail.com
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={contactMutation.isPending}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={contactMutation.isPending}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    disabled={contactMutation.isPending}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                >
                  Send Email
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Your message will be sent and I'll get back to you as soon as possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
