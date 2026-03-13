import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "violet" | "white";
}

export function GlassCard({ children, className = "", glowColor = "blue" }: GlassCardProps) {
  const glowColors = {
    blue: "rgba(77, 208, 225, 0.15)",
    violet: "rgba(179, 136, 255, 0.15)",
    white: "rgba(255, 255, 255, 0.1)",
  };
  
  const borderColors = {
    blue: "rgba(77, 208, 225, 0.3)",
    violet: "rgba(179, 136, 255, 0.3)",
    white: "rgba(255, 255, 255, 0.2)",
  };
  
  return (
    <div 
      className={`
        relative backdrop-blur-md rounded-xl overflow-hidden
        transition-all duration-300 hover:scale-[1.02]
        ${className}
      `}
      style={{
        background: `linear-gradient(135deg, ${glowColors[glowColor]}, rgba(26, 26, 46, 0.6))`,
        border: `1px solid ${borderColors[glowColor]}`,
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColors[glowColor]}, transparent 70%)`,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
