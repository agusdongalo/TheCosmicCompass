import { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Play, Lock, CheckCircle, BookOpen } from "lucide-react";

export function Lab() {
  const [activeTab, setActiveTab] = useState<"physics" | "astronomy" | "math">("physics");

  const modules = {
    physics: [
      {
        id: 1,
        title: "Einstein's Mass-Energy Equivalence",
        formula: "E = mc²",
        description: "Understand how mass and energy are interchangeable",
        difficulty: "Intermediate",
        duration: "45 min",
        completed: true,
        locked: false,
        image: "https://images.unsplash.com/photo-1771422957555-b6b5f9c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc3MzMyOTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 2,
        title: "Newton's Law of Universal Gravitation",
        formula: "F = G(m₁m₂)/r²",
        description: "Explore the force that keeps planets in orbit",
        difficulty: "Beginner",
        duration: "30 min",
        completed: true,
        locked: false,
        image: "https://images.unsplash.com/photo-1650365449083-b3113ff48337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBkZWVwJTIwc3BhY2UlMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzczMzU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 3,
        title: "Schwarzschild Radius",
        formula: "rₛ = 2GM/c²",
        description: "Calculate the event horizon of a black hole",
        difficulty: "Advanced",
        duration: "60 min",
        completed: false,
        locked: false,
        image: "https://images.unsplash.com/photo-1670884307411-a2f3cecf907b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZXxlbnwxfHx8fDE3NzMzNTcxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 4,
        title: "Doppler Effect in Astronomy",
        formula: "Δλ/λ = v/c",
        description: "Learn how we detect moving celestial objects",
        difficulty: "Intermediate",
        duration: "40 min",
        completed: false,
        locked: true,
        image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    astronomy: [
      {
        id: 5,
        title: "Stellar Parallax",
        formula: "d = 1/p",
        description: "Measure distances to nearby stars",
        difficulty: "Beginner",
        duration: "35 min",
        completed: true,
        locked: false,
        image: "https://images.unsplash.com/photo-1579685100581-4cf7e8e18507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwc3RhcnMlMjBuaWdodHxlbnwxfHx8fDE3NzMyOTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 6,
        title: "Kepler's Third Law",
        formula: "T² = (4π²/GM)a³",
        description: "Understand planetary orbital periods",
        difficulty: "Intermediate",
        duration: "50 min",
        completed: false,
        locked: false,
        image: "https://images.unsplash.com/photo-1771422957555-b6b5f9c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc3MzMyOTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    math: [
      {
        id: 7,
        title: "Astronomical Unit Conversions",
        formula: "1 AU ≈ 1.496 × 10⁸ km",
        description: "Master cosmic distance scales",
        difficulty: "Beginner",
        duration: "25 min",
        completed: true,
        locked: false,
        image: "https://images.unsplash.com/photo-1710676145418-51accf3af505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJzJTIwc3VyZmFjZSUyMHBsYW5ldHxlbnwxfHx8fDE3NzMzMzE5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 8,
        title: "Logarithmic Magnitude Scale",
        formula: "m₁ - m₂ = -2.5 log₁₀(F₁/F₂)",
        description: "Calculate stellar brightness",
        difficulty: "Intermediate",
        duration: "45 min",
        completed: false,
        locked: false,
        image: "https://images.unsplash.com/photo-1635928402419-905f5f675989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3MzMzMjEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-[#6bcf7f] border-[#6bcf7f]/50 bg-[#6bcf7f]/10";
      case "Intermediate":
        return "text-[#4dd0e1] border-[#4dd0e1]/50 bg-[#4dd0e1]/10";
      case "Advanced":
        return "text-[#b388ff] border-[#b388ff]/50 bg-[#b388ff]/10";
      default:
        return "text-white border-white/50 bg-white/10";
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">The Lab</h1>
          <p className="text-lg text-[#8e9aaf] max-w-2xl mx-auto">
            Interactive educational modules breaking down complex physics and astronomy concepts
          </p>
        </div>

        {/* Progress Overview */}
        <GlassCard glowColor="blue">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Your Learning Progress</h3>
              <span className="text-[#4dd0e1] font-semibold">5/8 Modules Completed</span>
            </div>
            
            <div className="w-full bg-[#1a1a2e] rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#4dd0e1] to-[#b388ff] rounded-full transition-all duration-500"
                style={{ width: "62.5%" }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6bcf7f]">3</div>
                <div className="text-xs text-[#8e9aaf]">Beginner</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4dd0e1]">4</div>
                <div className="text-xs text-[#8e9aaf]">Intermediate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#b388ff]">1</div>
                <div className="text-xs text-[#8e9aaf]">Advanced</div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(["physics", "astronomy", "math"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all capitalize
                ${activeTab === tab
                  ? "bg-gradient-to-r from-[#4dd0e1]/20 to-[#b388ff]/20 border-2 border-[#4dd0e1] text-white"
                  : "bg-[#1a1a2e]/40 border border-white/10 text-[#8e9aaf] hover:text-white hover:border-white/30"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules[activeTab].map((module) => (
            <GlassCard 
              key={module.id} 
              glowColor={module.completed ? "violet" : "blue"} 
              className={`group ${module.locked ? "opacity-60" : "cursor-pointer"}`}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={module.image}
                  alt={module.title}
                  className={`w-full h-full object-cover ${!module.locked && "group-hover:scale-110"} transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                
                {/* Status Icons */}
                <div className="absolute top-3 right-3">
                  {module.locked ? (
                    <div className="p-2 rounded-full bg-[#1a1a2e]/80 backdrop-blur-sm border border-white/20">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  ) : module.completed ? (
                    <div className="p-2 rounded-full bg-[#6bcf7f]/20 backdrop-blur-sm border border-[#6bcf7f]/50">
                      <CheckCircle className="w-4 h-4 text-[#6bcf7f]" />
                    </div>
                  ) : null}
                </div>
                
                {/* Formula Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="px-4 py-2 rounded-lg bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#4dd0e1]/30">
                    <code className="text-[#4dd0e1] font-mono text-lg">{module.formula}</code>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#4dd0e1] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-[#8e9aaf]">{module.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    <span className="text-xs text-[#8e9aaf]">{module.duration}</span>
                  </div>
                  
                  {!module.locked && (
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#4dd0e1]/20 to-[#b388ff]/20 border border-[#4dd0e1]/30 text-white text-sm font-medium hover:from-[#4dd0e1]/30 hover:to-[#b388ff]/30 transition-all group">
                      {module.completed ? (
                        <>
                          <BookOpen className="w-4 h-4" />
                          <span>Review</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Start</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
