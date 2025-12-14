import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        const item = navItems.find(item => item.href === `#${current}`);
        if (item) setActiveSection(item.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 py-5 bg-gradient-to-b from-background/95 to-transparent">
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setActiveSection("Home")}
          className="group flex items-center gap-2"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-lg font-bold text-primary">Momo</span>
          </div>
          <span className="hidden sm:inline text-sm text-foreground/60">
            Portfolio
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 shadow-sm">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setActiveSection(item.name)}
              className={cn(
                "relative px-4 py-2 rounded-full transition-all duration-300",
                activeSection === item.name
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {activeSection === item.name && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full -z-10" />
              )}
              <span className="flex items-center gap-1.5">
                {item.name}
                {activeSection === item.name && (
                  <ChevronRight className="w-3 h-3 text-primary animate-pulse" />
                )}
              </span>
            </a>
          ))}

          {/* Theme toggle desktop */}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2.5 rounded-lg bg-primary/10 border border-border/30 z-50"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-sm space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "flex justify-between items-center px-6 py-4 rounded-2xl border transition-all",
                    activeSection === item.name
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-border/20 text-foreground/80"
                  )}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4" />
                </a>
              ))}

              {/* Theme toggle mobile */}
              <div className="flex justify-center pt-6">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
