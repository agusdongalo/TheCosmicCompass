import { Link } from "react-router";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { BookOpen, Map, Beaker, Newspaper, Sparkles, Rocket, Star } from "lucide-react";

export function Home() {
  const features = [
    {
      title: "The Observatory",
      description: "Deep-dive articles on exoplanets, black holes, and gravitational waves",
      icon: BookOpen,
      link: "/observatory",
      glowColor: "blue" as const,
      image: "https://images.unsplash.com/photo-1650365449083-b3113ff48337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBkZWVwJTIwc3BhY2UlMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzczMzU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Star Maps",
      description: "Minimalist, downloadable constellation guides and celestial navigation",
      icon: Map,
      link: "/star-maps",
      glowColor: "violet" as const,
      image: "https://images.unsplash.com/photo-1579685100581-4cf7e8e18507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwc3RhcnMlMjBuaWdodHxlbnwxfHx8fDE3NzMyOTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "The Lab",
      description: "Interactive modules breaking down complex physics concepts",
      icon: Beaker,
      link: "/lab",
      glowColor: "blue" as const,
      image: "https://images.unsplash.com/photo-1771422957555-b6b5f9c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc3MzMyOTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Astro-News",
      description: "A chronological feed of rocket launches and celestial events",
      icon: Newspaper,
      link: "/astro-news",
      glowColor: "violet" as const,
      image: "https://images.unsplash.com/photo-1543599723-86e84893ebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBuYXNhfGVufDF8fHx8MTc3MzM1OTg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Animated icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#4dd0e1] blur-3xl opacity-30 animate-pulse" />
                <Sparkles className="w-20 h-20 text-[#4dd0e1] relative z-10" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                The Cosmic Academy
              </h1>
              <p className="text-xl sm:text-2xl text-[#4dd0e1] font-light tracking-wide">
                Your gateway to mastering the mysteries of the stars
              </p>
            </div>
            
            <p className="max-w-2xl mx-auto text-lg text-[#8e9aaf] leading-relaxed">
              Simplifying the complexities of the universe into digestible, high-quality educational lessons 
              for students, educators, and lifelong learners.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/observatory">
                <button className="relative px-8 py-3 rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1] to-[#b388ff]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b388ff] to-[#4dd0e1] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-[#0a0a0f] font-semibold flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Explore The Observatory</span>
                  </span>
                </button>
              </Link>
              
              <Link to="/lab">
                <button className="relative px-8 py-3 rounded-lg overflow-hidden group backdrop-blur-sm border border-[#4dd0e1]/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1]/10 to-[#b388ff]/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1]/20 to-[#b388ff]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-white font-semibold flex items-center space-x-2">
                    <Beaker className="w-5 h-5" />
                    <span>Visit The Lab</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-6 h-6 text-[#b388ff]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Explore Our Universe</h2>
              <Star className="w-6 h-6 text-[#4dd0e1]" />
            </div>
            <p className="text-[#8e9aaf] max-w-2xl mx-auto">
              Dive into our carefully curated sections, each designed to illuminate different aspects of cosmic knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link}>
                  <GlassCard glowColor={feature.glowColor} className="h-full">
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="p-3 rounded-lg bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#4dd0e1]/30">
                          <Icon className="w-6 h-6 text-[#4dd0e1]" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-[#8e9aaf] leading-relaxed">{feature.description}</p>
                      <div className="pt-2">
                        <span className="text-[#4dd0e1] text-sm font-medium inline-flex items-center space-x-2 group">
                          <span>Learn more</span>
                          <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="white">
            <div className="p-8 sm:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-[#8e9aaf] leading-relaxed">
                At The Cosmic Academy, we believe that understanding the universe should be accessible to everyone. 
                We transform complex astronomical and physical concepts into engaging, digestible content that 
                inspires curiosity and fosters a deeper appreciation for the cosmos.
              </p>
              <div className="flex justify-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4dd0e1]">1000+</div>
                  <div className="text-sm text-[#8e9aaf]">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#b388ff]">500+</div>
                  <div className="text-sm text-[#8e9aaf]">Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">∞</div>
                  <div className="text-sm text-[#8e9aaf]">Possibilities</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}