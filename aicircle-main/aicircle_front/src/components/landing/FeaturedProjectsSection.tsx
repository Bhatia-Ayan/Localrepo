import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "../../components/ui/button";

const FeaturedProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Code Review",
      author: "Sarah Chen",
      description: "An intelligent code review assistant that uses LLMs to provide contextual feedback and suggestions.",
      tags: ["GenAI", "Python", "LangChain"],
      stars: 234,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    },
    {
      title: "Real-time Object Detection",
      author: "Marcus Johnson",
      description: "Edge-optimized computer vision model for real-time object detection in manufacturing.",
      tags: ["Computer Vision", "PyTorch", "Edge ML"],
      stars: 189,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    },
    {
      title: "MLOps Pipeline Framework",
      author: "Priya Patel",
      description: "End-to-end MLOps pipeline with automated testing, deployment, and monitoring.",
      tags: ["MLOps", "Kubernetes", "MLflow"],
      stars: 312,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
      title: "Conversational AI Agent",
      author: "Alex Kim",
      description: "Multi-modal conversational agent with RAG capabilities for enterprise knowledge bases.",
      tags: ["RAG", "Vector DB", "OpenAI"],
      stars: 456,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="section relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore impressive projects built by our community members and get inspired for your next build.
            </p>
          </div>
          <Button variant="outline" className="w-fit border-border/50 hover:bg-card/50">
            View All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    {project.stars}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-1">by {project.author}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
