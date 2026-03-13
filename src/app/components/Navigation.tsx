import { Link, useLocation } from "react-router";
import { Telescope, BookOpen, Map, Beaker, Newspaper, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "Home", icon: Telescope },
    { path: "/observatory", label: "The Observatory", icon: BookOpen },
    { path: "/star-maps", label: "Star Maps", icon: Map },
    { path: "/lab", label: "The Lab", icon: Beaker },
    { path: "/astro-news", label: "Astro-News", icon: Newspaper },
  ];
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#4dd0e1]/20">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 to-[#1a1a2e]/60" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4dd0e1] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <Telescope className="w-8 h-8 text-[#4dd0e1] relative z-10" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">The Cosmic Academy</h1>
              <p className="text-xs text-[#8e9aaf]">Master the mysteries of the stars</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative px-4 py-2 rounded-lg transition-all duration-200
                    flex items-center space-x-2 group
                    ${active 
                      ? 'text-[#4dd0e1]' 
                      : 'text-white/70 hover:text-white'
                    }
                  `}
                >
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1]/20 to-[#b388ff]/20 rounded-lg backdrop-blur-sm border border-[#4dd0e1]/30" />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${active ? 'drop-shadow-[0_0_8px_rgba(77,208,225,0.8)]' : ''}`} />
                  <span className="relative z-10 text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/70 hover:text-white p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a2e]/95 backdrop-blur-lg border-b border-[#4dd0e1]/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                      ${active
                        ? 'bg-gradient-to-r from-[#4dd0e1]/20 to-[#b388ff]/20 border border-[#4dd0e1]/30 text-[#4dd0e1]'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}