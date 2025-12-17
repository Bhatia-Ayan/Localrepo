import { GraduationCap, Users, Briefcase, Calendar } from "lucide-react";

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: GraduationCap,
      title: "For Learners",
      description: "Structured courses, hands-on projects, and personalized mentorship to accelerate your AI career.",
      gradient: "from-primary to-purple-500",
      features: ["Industry-ready curriculum", "Real-world projects", "1-on-1 mentorship"],
    },
    {
      icon: Users,
      title: "For Mentors",
      description: "Share your expertise, guide aspiring engineers, and build your reputation in the AI community.",
      gradient: "from-secondary to-cyan-400",
      features: ["Flexible scheduling", "Earn while teaching", "Grow your network"],
    },
    {
      icon: Briefcase,
      title: "For Employers",
      description: "Access a pool of vetted AI talent, post jobs, and hire skilled engineers faster than ever.",
      gradient: "from-accent to-pink-400",
      features: ["Pre-vetted candidates", "Portfolio reviews", "Direct hiring"],
    },
    {
      icon: Calendar,
      title: "For Community",
      description: "Join hackathons, workshops, study groups, and networking events with fellow AI enthusiasts.",
      gradient: "from-orange-500 to-yellow-400",
      features: ["Weekly events", "Hackathons", "Peer networking"],
    },
  ];

  return (
    <section className="section relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed in AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're learning, teaching, or hiring — AI Circle has the tools and community to help you thrive.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group relative glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <prop.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">{prop.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{prop.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {prop.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${prop.gradient}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
