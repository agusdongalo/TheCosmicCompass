import { Link } from "react-router";
import { Telescope, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#4dd0e1] blur-3xl opacity-30" />
            <Telescope className="w-24 h-24 text-[#4dd0e1] relative z-10" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-semibold text-[#4dd0e1]">Lost in Space</h2>
          <p className="text-[#8e9aaf] leading-relaxed">
            This page seems to have drifted into a black hole. Let's get you back to familiar territory.
          </p>
        </div>
        
        <Link to="/">
          <button className="relative px-8 py-3 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1] to-[#b388ff]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#b388ff] to-[#4dd0e1] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-[#0a0a0f] font-semibold flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
