import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Clock, User, ArrowRight } from "lucide-react";

export function Observatory() {
  const articles = [
    {
      id: 1,
      title: "The Hunt for Habitable Exoplanets",
      excerpt: "Exploring the methods astronomers use to detect potentially life-supporting worlds beyond our solar system.",
      image: "https://images.unsplash.com/photo-1771422957555-b6b5f9c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc3MzMyOTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Dr. Sarah Chen",
      readTime: "12 min read",
      date: "March 10, 2026",
      category: "Exoplanets",
      featured: true,
    },
    {
      id: 2,
      title: "Gravitational Waves: Ripples in Spacetime",
      excerpt: "Understanding how LIGO detects cosmic collisions and what these discoveries tell us about the universe.",
      image: "https://images.unsplash.com/photo-1670884307411-a2f3cecf907b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZXxlbnwxfHx8fDE3NzMzNTcxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Prof. Marcus Rodriguez",
      readTime: "15 min read",
      date: "March 8, 2026",
      category: "Astrophysics",
      featured: true,
    },
    {
      id: 3,
      title: "Inside a Supermassive Black Hole",
      excerpt: "What happens at the event horizon? We explore the physics of these cosmic giants.",
      image: "https://images.unsplash.com/photo-1650365449083-b3113ff48337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBkZWVwJTIwc3BhY2UlMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzczMzU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Dr. Amara Okafor",
      readTime: "10 min read",
      date: "March 5, 2026",
      category: "Black Holes",
      featured: false,
    },
    {
      id: 4,
      title: "The Life Cycle of Stars",
      excerpt: "From stellar nurseries to supernovae, follow the journey of stars through their cosmic lifetime.",
      image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Dr. Elena Volkov",
      readTime: "8 min read",
      date: "March 3, 2026",
      category: "Stellar Evolution",
      featured: false,
    },
    {
      id: 5,
      title: "Dark Matter: The Invisible Universe",
      excerpt: "Investigating the mysterious substance that makes up 85% of the universe's matter.",
      image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Dr. James Park",
      readTime: "14 min read",
      date: "March 1, 2026",
      category: "Cosmology",
      featured: false,
    },
    {
      id: 6,
      title: "Neutron Stars: Dense Cosmic Lighthouses",
      excerpt: "How these ultra-dense remnants create powerful magnetic fields and emit precise radio pulses.",
      image: "https://images.unsplash.com/photo-1650365449083-b3113ff48337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBkZWVwJTIwc3BhY2UlMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzczMzU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Prof. David Kim",
      readTime: "11 min read",
      date: "February 28, 2026",
      category: "Stellar Objects",
      featured: false,
    },
  ];

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">The Observatory</h1>
          <p className="text-lg text-[#8e9aaf] max-w-2xl mx-auto">
            Deep-dive articles exploring the frontiers of space, from distant exoplanets to the fabric of spacetime itself
          </p>
        </div>

        {/* Featured Articles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center space-x-2">
            <span className="w-1 h-6 bg-gradient-to-b from-[#4dd0e1] to-[#b388ff] rounded-full" />
            <span>Featured Deep Dives</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <GlassCard key={article.id} glowColor="blue" className="overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#4dd0e1]/20 backdrop-blur-sm border border-[#4dd0e1]/50 text-[#4dd0e1] text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#4dd0e1] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#8e9aaf] leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-4 text-sm text-[#8e9aaf]">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#4dd0e1] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Recent Articles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center space-x-2">
            <span className="w-1 h-6 bg-gradient-to-b from-[#b388ff] to-[#4dd0e1] rounded-full" />
            <span>Recent Publications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <GlassCard key={article.id} glowColor="violet" className="group cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-full bg-[#b388ff]/20 backdrop-blur-sm border border-[#b388ff]/50 text-[#b388ff] text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <div className="text-xs text-[#8e9aaf]">{article.date}</div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#b388ff] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#8e9aaf] leading-relaxed line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-3 text-xs text-[#8e9aaf]">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author.split(' ')[1]}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
