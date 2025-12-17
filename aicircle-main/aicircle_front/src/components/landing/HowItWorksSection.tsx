import { BookOpen, Code, FolderOpen, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: BookOpen,
      title: "Learn",
      description: "Master AI fundamentals, GenAI, MLOps, and more through structured courses designed by industry experts.",
      color: "primary",
    },
    {
      step: 2,
      icon: Code,
      title: "Build",
      description: "Apply your knowledge by building real-world projects with guidance from experienced mentors.",
      color: "accent",
    },
    {
      step: 3,
      icon: FolderOpen,
      title: "Showcase",
      description: "Create an impressive portfolio that demonstrates your skills to potential employers.",
      color: "secondary",
    },
    {
      step: 4,
      icon: Rocket,
      title: "Get Hired",
      description: "Connect with top companies actively hiring AI talent and land your dream role.",
      color: "primary",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
    accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
    secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30" },
  };

  return (
    <section className="section relative bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Journey to{" "}
            <span className="gradient-text">AI Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear path from beginner to hired AI engineer, with support every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => {
              const colors = colorClasses[item.color];
              return (
                <div
                  key={item.step}
                  className="relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group`}>
                    <item.icon className={`w-8 h-8 ${colors.text}`} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
