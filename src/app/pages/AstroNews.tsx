import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, MapPin, ExternalLink, Rocket } from "lucide-react";

export function AstroNews() {
  const newsItems = [
    {
      id: 1,
      type: "Launch",
      title: "SpaceX Falcon Heavy - Europa Clipper Mission",
      description: "NASA's mission to explore Jupiter's icy moon Europa launches successfully",
      date: "March 15, 2026",
      time: "14:30 UTC",
      location: "Kennedy Space Center, FL",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1543599723-86e84893ebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBuYXNhfGVufDF8fHx8MTc3MzM1OTg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      type: "Event",
      title: "Lunar Eclipse - Total",
      description: "A spectacular total lunar eclipse visible from North and South America",
      date: "March 14, 2026",
      time: "02:15 UTC",
      location: "Americas",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1650365449083-b3113ff48337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBkZWVwJTIwc3BhY2UlMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzczMzU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      type: "Discovery",
      title: "New Exoplanet in Habitable Zone Confirmed",
      description: "Astronomers confirm Earth-sized planet orbiting nearby red dwarf star",
      date: "March 12, 2026",
      time: "N/A",
      location: "James Webb Space Telescope",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1771422957555-b6b5f9c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc3MzMyOTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      type: "Launch",
      title: "Ariane 6 - Communications Satellite Deployment",
      description: "ESA's Ariane 6 deploys next-generation communication satellites",
      date: "March 10, 2026",
      time: "22:45 UTC",
      location: "Kourou, French Guiana",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1543599723-86e84893ebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBuYXNhfGVufDF8fHx8MTc3MzM1OTg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      type: "Event",
      title: "Perseid Meteor Shower Peak",
      description: "Annual meteor shower reaches peak activity with up to 100 meteors per hour",
      date: "March 8, 2026",
      time: "All Night",
      location: "Global",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1579685100581-4cf7e8e18507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwc3RhcnMlMjBuaWdodHxlbnwxfHx8fDE3NzMyOTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      type: "Discovery",
      title: "Gravitational Wave Detection from Neutron Star Merger",
      description: "LIGO detects ripples in spacetime from distant cosmic collision",
      date: "March 5, 2026",
      time: "N/A",
      location: "LIGO Observatory",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1670884307411-a2f3cecf907b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZXxlbnwxfHx8fDE3NzMzNTcxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 7,
      type: "Launch",
      title: "Blue Origin New Glenn - Maiden Flight",
      description: "Historic first orbital flight of Blue Origin's heavy-lift rocket",
      date: "March 3, 2026",
      time: "15:00 UTC",
      location: "Cape Canaveral, FL",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1543599723-86e84893ebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBuYXNhfGVufDF8fHx8MTc3MzM1OTg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 8,
      type: "Event",
      title: "Mars at Opposition",
      description: "The Red Planet reaches its closest approach to Earth this year",
      date: "March 1, 2026",
      time: "All Night",
      location: "Global",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1710676145418-51accf3af505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJzJTIwc3VyZmFjZSUyMHBsYW5ldHxlbnwxfHx8fDE3NzMzMzE5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Launch":
        return { bg: "bg-[#4dd0e1]/10", border: "border-[#4dd0e1]/50", text: "text-[#4dd0e1]" };
      case "Event":
        return { bg: "bg-[#b388ff]/10", border: "border-[#b388ff]/50", text: "text-[#b388ff]" };
      case "Discovery":
        return { bg: "bg-[#6bcf7f]/10", border: "border-[#6bcf7f]/50", text: "text-[#6bcf7f]" };
      default:
        return { bg: "bg-white/10", border: "border-white/50", text: "text-white" };
    }
  };

  const upcomingNews = newsItems.filter(item => item.status === "Upcoming");
  const pastNews = newsItems.filter(item => item.status === "Completed");

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Astro-News</h1>
          <p className="text-lg text-[#8e9aaf] max-w-2xl mx-auto">
            Stay updated with the latest rocket launches, celestial events, and astronomical discoveries
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-4">
          <div className="inline-flex p-1 rounded-lg bg-[#1a1a2e]/60 backdrop-blur-sm border border-white/10">
            <button className="px-6 py-2 rounded-md bg-gradient-to-r from-[#4dd0e1]/20 to-[#b388ff]/20 border border-[#4dd0e1]/30 text-white font-medium">
              All Events
            </button>
            <button className="px-6 py-2 rounded-md text-[#8e9aaf] hover:text-white font-medium transition-colors">
              Launches
            </button>
            <button className="px-6 py-2 rounded-md text-[#8e9aaf] hover:text-white font-medium transition-colors">
              Discoveries
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <Rocket className="w-6 h-6 text-[#4dd0e1]" />
            <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>
          </div>
          
          <div className="space-y-4">
            {upcomingNews.map((item) => {
              const typeColors = getTypeColor(item.type);
              return (
                <GlassCard key={item.id} glowColor="blue" className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-72 h-48 md:h-auto overflow-hidden md:rounded-l-xl">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0f]/80 md:to-[#0a0a0f]" />
                    </div>
                    
                    <div className="flex-1 p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors.bg} ${typeColors.border} ${typeColors.text}`}>
                              {item.type}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium border border-[#4dd0e1]/50 bg-[#4dd0e1]/10 text-[#4dd0e1]">
                              {item.status}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-white group-hover:text-[#4dd0e1] transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-[#8e9aaf] leading-relaxed">{item.description}</p>
                        </div>
                        
                        <ExternalLink className="w-5 h-5 text-[#8e9aaf] group-hover:text-[#4dd0e1] transition-colors flex-shrink-0 ml-4" />
                      </div>
                      
                      <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10 text-sm text-[#8e9aaf]">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date} at {item.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Recent News Timeline */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-[#b388ff]" />
            <h2 className="text-2xl font-semibold text-white">Recent News</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastNews.map((item) => {
              const typeColors = getTypeColor(item.type);
              return (
                <GlassCard key={item.id} glowColor="violet" className="group cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors.bg} ${typeColors.border} ${typeColors.text}`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-3">
                    <div className="text-xs text-[#8e9aaf]">{item.date}</div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#b388ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8e9aaf] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 pt-2 text-xs text-[#8e9aaf]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Newsletter Signup */}
        <GlassCard glowColor="blue">
          <div className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Never Miss an Event</h3>
            <p className="text-[#8e9aaf] max-w-md mx-auto">
              Subscribe to our newsletter and get notifications about upcoming launches and celestial events
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#1a1a2e]/60 border border-[#4dd0e1]/30 text-white placeholder-[#8e9aaf] focus:outline-none focus:ring-2 focus:ring-[#4dd0e1]"
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#4dd0e1] to-[#b388ff] text-[#0a0a0f] font-semibold hover:shadow-lg hover:shadow-[#4dd0e1]/50 transition-shadow">
                Subscribe
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
