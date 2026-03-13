import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
        <div className="stars-small" />
        <div className="stars-medium" />
        <div className="stars-large" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
      
      <style>{`
        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        
        .stars-small {
          background-image: 
            radial-gradient(1px 1px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 150px 120px, white, transparent),
            radial-gradient(1px 1px at 280px 80px, white, transparent),
            radial-gradient(1px 1px at 380px 200px, white, transparent),
            radial-gradient(1px 1px at 520px 50px, white, transparent),
            radial-gradient(1px 1px at 680px 180px, white, transparent),
            radial-gradient(1px 1px at 820px 90px, white, transparent),
            radial-gradient(1px 1px at 920px 250px, white, transparent);
          background-size: 1000px 300px;
          background-repeat: repeat;
          opacity: 0.5;
          animation: twinkle 3s infinite;
        }
        
        .stars-medium {
          background-image: 
            radial-gradient(2px 2px at 100px 50px, rgba(77, 208, 225, 0.8), transparent),
            radial-gradient(2px 2px at 300px 180px, rgba(179, 136, 255, 0.8), transparent),
            radial-gradient(2px 2px at 500px 120px, rgba(255, 255, 255, 0.9), transparent),
            radial-gradient(2px 2px at 700px 60px, rgba(77, 208, 225, 0.7), transparent),
            radial-gradient(2px 2px at 900px 200px, rgba(179, 136, 255, 0.7), transparent);
          background-size: 1000px 300px;
          background-repeat: repeat;
          opacity: 0.6;
          animation: twinkle 4s infinite reverse;
        }
        
        .stars-large {
          background-image: 
            radial-gradient(3px 3px at 200px 100px, rgba(77, 208, 225, 1), transparent),
            radial-gradient(3px 3px at 600px 50px, rgba(179, 136, 255, 1), transparent),
            radial-gradient(3px 3px at 800px 150px, rgba(255, 255, 255, 1), transparent);
          background-size: 1000px 300px;
          background-repeat: repeat;
          opacity: 0.8;
          animation: twinkle 5s infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
