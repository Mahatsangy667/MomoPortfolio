import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      // Mise à jour de la section active seulement
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        const item = navItems.find(item => item.href === `#${current}`);
        if (item) {
          setActiveSection(item.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 py-5 bg-gradient-to-b from-background/95 to-transparent">
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo avec effet moderne */}
        <a
          className="group relative flex items-center gap-2"
          href="#hero"
          onClick={() => setActiveSection("Home")}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-lg font-bold text-primary">
                Momo
              </span>
            </div>
          </div>
          <span className="hidden sm:inline text-sm font-medium text-foreground/60">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation - Version améliorée */}
        <div className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 shadow-sm">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setActiveSection(item.name)}
              className={cn(
                "relative px-4 py-2 rounded-full transition-all duration-300 group",
                activeSection === item.name
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {activeSection === item.name && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full -z-10" />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {item.name}
                {activeSection === item.name && (
                  <ChevronRight className="w-3 h-3 text-primary animate-pulse" />
                )}
              </span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Version améliorée */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/30 z-50 group"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="relative w-6 h-6">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 text-foreground group-hover:text-primary transition-all duration-300" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Mobile Menu Overlay - Version améliorée */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden",
            "transition-all duration-500 ease-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none delay-300"
          )}
        >
          {/* Backdrop avec gradient */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl",
              "transition-opacity duration-500",
              isMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Items */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "group relative flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      "hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 hover:border hover:border-primary/20",
                      activeSection === item.name
                        ? "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                        : "border border-transparent"
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeSection === item.name
                          ? "bg-gradient-to-r from-primary to-secondary scale-125"
                          : "bg-foreground/20 group-hover:bg-primary/50"
                      )} />
                      <span className={cn(
                        "text-lg font-medium transition-colors duration-300",
                        activeSection === item.name
                          ? "text-primary"
                          : "text-foreground/80 group-hover:text-foreground"
                      )}>
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-all duration-300",
                      activeSection === item.name
                        ? "text-primary opacity-100 translate-x-0"
                        : "text-foreground/40 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    )} />
                  </a>
                ))}
              </div>

              {/* Footer du menu mobile */}
              <div className="mt-12 pt-8 border-t border-border/20 text-center">
                <p className="text-sm text-foreground/50">
                  Crafted with passion ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};