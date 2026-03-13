import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Download, Eye, Star } from "lucide-react";

export function StarMaps() {
  const starMaps = [
    {
      id: 1,
      title: "Northern Hemisphere Winter Constellations",
      description: "Featuring Orion, Taurus, Gemini, and the winter circle",
      image: "https://images.unsplash.com/photo-1579685100581-4cf7e8e18507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwc3RhcnMlMjBuaWdodHxlbnwxfHx8fDE3NzMyOTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      downloads: 12453,
      format: "PDF • 4K Resolution",
      season: "Winter",
    },
    {
      id: 2,
      title: "Southern Hemisphere Star Chart",
      description: "Complete guide to southern sky including the Southern Cross",
      image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      downloads: 9821,
      format: "PDF • 4K Resolution",
      season: "Year-round",
    },
    {
      id: 3,
      title: "Summer Triangle Guide",
      description: "Vega, Deneb, and Altair with surrounding constellations",
      image: "https://images.unsplash.com/photo-1579685100581-4cf7e8e18507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwc3RhcnMlMjBuaWdodHxlbnwxfHx8fDE3NzMyOTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      downloads: 10234,
      format: "PDF • 4K Resolution",
      season: "Summer",
    },
    {
      id: 4,
      title: "Zodiac Constellations",
      description: "The twelve astrological constellations along the ecliptic",
      image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      downloads: 15678,
      format: "PDF • 4K Resolution",
      season: "Year-round",
    },
    {
      id: 5,
      title: "Deep Sky Objects Map",
      description: "Messier catalog objects visible to amateur astronomers",
      image: "https://images.unsplash.com/photo-1650365449083-b3113ff48337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBkZWVwJTIwc3BhY2UlMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzczMzU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      downloads: 8392,
      format: "PDF • 4K Resolution",
      season: "Year-round",
    },
    {
      id: 6,
      title: "Milky Way Core View",
      description: "Detailed map of our galaxy's central region from Earth",
      image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      downloads: 11567,
      format: "PDF • 4K Resolution",
      season: "Summer",
    },
  ];

  const resources = [
    {
      title: "Beginner's Guide to Stargazing",
      type: "PDF Guide",
      size: "2.4 MB",
    },
    {
      title: "Celestial Navigation Basics",
      type: "Interactive Tutorial",
      size: "5.1 MB",
    },
    {
      title: "Star Chart Reading 101",
      type: "Video Series",
      size: "145 MB",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Star Maps</h1>
          <p className="text-lg text-[#8e9aaf] max-w-2xl mx-auto">
            Minimalist, high-quality constellation guides and celestial navigation resources
          </p>
        </div>

        {/* Stats Bar */}
        <GlassCard glowColor="blue">
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#4dd0e1]">250+</div>
              <div className="text-sm text-[#8e9aaf] mt-1">Available Maps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#b388ff]">68K+</div>
              <div className="text-sm text-[#8e9aaf] mt-1">Total Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4K</div>
              <div className="text-sm text-[#8e9aaf] mt-1">Resolution</div>
            </div>
          </div>
        </GlassCard>

        {/* Star Maps Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center space-x-2">
            <Star className="w-6 h-6 text-[#4dd0e1]" />
            <span>Constellation Guides</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {starMaps.map((map) => (
              <GlassCard key={map.id} glowColor="blue" className="group cursor-pointer">
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <ImageWithFallback
                    src={map.image}
                    alt={map.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent" />
                  
                  {/* Season Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#4dd0e1]/20 backdrop-blur-sm border border-[#4dd0e1]/50 text-[#4dd0e1] text-xs font-medium">
                      {map.season}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#4dd0e1]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="p-3 rounded-full bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#4dd0e1]/50 hover:bg-[#4dd0e1]/20 transition-colors">
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-3 rounded-full bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#4dd0e1]/50 hover:bg-[#4dd0e1]/20 transition-colors">
                        <Download className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#4dd0e1] transition-colors">
                    {map.title}
                  </h3>
                  <p className="text-sm text-[#8e9aaf] leading-relaxed">{map.description}</p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-xs text-[#8e9aaf]">
                      <Download className="w-3 h-3" />
                      <span>{map.downloads.toLocaleString()} downloads</span>
                    </div>
                    <span className="text-xs text-[#4dd0e1]">{map.format}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center space-x-2">
            <Star className="w-6 h-6 text-[#b388ff]" />
            <span>Learning Resources</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <GlassCard key={index} glowColor="violet" className="group cursor-pointer">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-[#b388ff]/10 border border-[#b388ff]/30">
                      <Download className="w-6 h-6 text-[#b388ff]" />
                    </div>
                    <span className="text-xs text-[#8e9aaf]">{resource.size}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#b388ff] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[#8e9aaf]">{resource.type}</p>
                  </div>
                  
                  <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#b388ff]/20 to-[#4dd0e1]/20 border border-[#b388ff]/30 text-white text-sm font-medium hover:from-[#b388ff]/30 hover:to-[#4dd0e1]/30 transition-all">
                    Download Resource
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
