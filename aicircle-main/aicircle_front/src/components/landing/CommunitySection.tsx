import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "../../components/ui/button";

const CommunitySection = () => {
  const events = [
    {
      title: "GenAI Hackathon 2024",
      type: "Hackathon",
      date: "Dec 15-17, 2024",
      time: "48 hours",
      location: "Virtual",
      attendees: 500,
      gradient: "from-primary to-accent",
    },
    {
      title: "MLOps Best Practices",
      type: "Workshop",
      date: "Dec 20, 2024",
      time: "2:00 PM EST",
      location: "Virtual",
      attendees: 150,
      gradient: "from-secondary to-cyan-400",
    },
    {
      title: "AI Career AMA",
      type: "Q&A Session",
      date: "Dec 22, 2024",
      time: "6:00 PM EST",
      location: "Discord",
      attendees: 200,
      gradient: "from-accent to-pink-400",
    },
  ];

  const communityStats = [
    { value: "50+", label: "Events per month" },
    { value: "10K+", label: "Active members" },
    { value: "100+", label: "Study groups" },
    { value: "24/7", label: "Community support" },
  ];

  return (
    <section className="section relative bg-card/30">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Join Our <span className="gradient-text">Thriving Community</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with fellow AI enthusiasts, attend events, join study groups,
              and accelerate your learning through collaboration.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {communityStats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="btn-gradient">
              Join the Community
            </Button>
          </div>

          {/* Right - Events */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Upcoming Events</h3>
            {events.map((event, index) => (
              <div
                key={event.title}
                className="group glass-card p-5 rounded-xl hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Event Type Badge */}
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${event.gradient} text-white text-xs font-medium whitespace-nowrap`}>
                    {event.type}
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees}+ attending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full border-border/50 hover:bg-card/50">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
