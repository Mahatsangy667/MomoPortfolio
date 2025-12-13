import { ArrowDown } from "lucide-react";
import Momo from "../assets/img/Momo.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* PHOTO */}
          <div className="flex justify-center opacity-0 animate-fade-in">
            <img
              src={Momo}
              alt="Mahatsanginohary RAJOELISON"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-[3px] border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-origin-border p-[3px] animate-float shadow-2xl"
            />
          </div>

          {/* TEXTE */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Mahatsanginohary
            </span>
            <span className="ml-2 relative group">
              <span className="text-gradient opacity-0 animate-fade-in-delay-2 inline-block">
                RAJOELISON
                {/* Animation de surlignement */}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-highlight-expand rounded-full"></span>

                {/* Animation de particules */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow-delay"></span>

                {/* Particules supplémentaires */}
                <span className="absolute top-1/2 -right-2 w-1 h-1 bg-purple-500 rounded-full animate-ping-slow-delay-2"></span>
                <span className="absolute -top-2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping-slow-delay-3"></span>
              </span>

              {/* Effet de hover optionnel */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2 blur-xl"></span>
            </span>
          </h1>

          {/* Version alternative avec gradient animé - décommentez pour l'utiliser */}
          {/* 
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Mahatsanginohary
            </span>
            <span className="ml-2 relative">
              <span className="animate-gradient-text opacity-0 animate-fade-in-delay-2 inline-block">
                RAJOELISON
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-highlight-expand rounded-full"></span>
              </span>
            </span>
          </h1>
          */}

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Second-year Master's student in Computer Science with a strong passion for software development and emerging technologies. Experienced in building applications, writing clean code, and working with databases. Eager to take on new challenges and bring innovative ideas to impactful projects.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="relative group cosmic-button"
            >
              <span className="relative z-10 px-8 py-4 text-lg font-semibold tracking-wider">
                View My Work
              </span>

              {/* Effet de fond cosmique */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Particules cosmiques */}
                <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
                <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full top-3/4 right-1/4 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute w-1 h-1 bg-purple-400 rounded-full bottom-1/4 left-3/4 animate-pulse" style={{ animationDelay: '0.6s' }}></div>

                {/* Animation de gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Bordure animée */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};