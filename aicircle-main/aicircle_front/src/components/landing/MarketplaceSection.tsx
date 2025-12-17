import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Building2, Search, Users } from "lucide-react";
import { Button } from "../../components/ui/button";

const MarketplaceSection = () => {
  const jobs = [
    {
      title: "Senior ML Engineer",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$180K - $250K",
      tags: ["PyTorch", "MLOps", "Python"],
      posted: "2 days ago",
    },
    {
      title: "GenAI Developer",
      company: "InnovateLab",
      location: "Remote",
      type: "Full-time",
      salary: "$150K - $200K",
      tags: ["LangChain", "OpenAI", "RAG"],
      posted: "1 day ago",
    },
    {
      title: "Computer Vision Lead",
      company: "VisionTech",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200K - $280K",
      tags: ["CV", "TensorFlow", "Edge ML"],
      posted: "3 days ago",
    },
  ];

  const marketplaceStats = [
    { icon: Users, value: "5,000+", label: "Vetted Engineers" },
    { icon: Building2, value: "200+", label: "Hiring Companies" },
    { icon: Search, value: "500+", label: "Active Jobs" },
  ];

  return (
    <section className="section relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Talent Marketplace</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with top AI talent or discover your next career opportunity.
            Our marketplace bridges the gap between skilled engineers and innovative companies.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {marketplaceStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Job Listings */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Latest Job Openings</h3>
              <Link to="/marketplace" className="text-primary text-sm hover:underline">
                View all jobs →
              </Link>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={job.title}
                  className="group glass-card p-5 rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary/10 text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Cards */}
          <div className="space-y-6">
            {/* For Employers */}
            <div className="glass-card p-8 rounded-2xl gradient-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">For Employers</h3>
              <p className="text-muted-foreground mb-6">
                Access a curated pool of AI engineers with verified skills and impressive portfolios.
                Post jobs, search talent, and hire faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/auth?mode=signup&role=employer">
                  <Button className="btn-gradient w-full sm:w-auto">Post a Job</Button>
                </Link>
                <Link to="/marketplace">
                  <Button variant="outline" className="w-full sm:w-auto border-border/50 hover:bg-card/50">
                    Browse Talent
                  </Button>
                </Link>
              </div>
            </div>

            {/* For Job Seekers */}
            <div className="glass-card p-8 rounded-2xl gradient-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">For AI Engineers</h3>
              <p className="text-muted-foreground mb-6">
                Showcase your portfolio, get discovered by top companies, and land your dream AI role.
                Your skills deserve the spotlight.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/auth?mode=signup&role=learner">
                  <Button className="btn-gradient w-full sm:w-auto">Create Portfolio</Button>
                </Link>
                <Link to="/marketplace">
                  <Button variant="outline" className="w-full sm:w-auto border-border/50 hover:bg-card/50">
                    Browse Jobs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
