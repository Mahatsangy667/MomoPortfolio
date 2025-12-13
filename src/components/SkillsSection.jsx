import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

// ICONS
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSymfony,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

// SKILLS
const skills = [
  { name: "HTML/CSS", icon: FaHtml5, level: 95, category: "languages" },
  { name: "JavaScript", icon: FaJs, level: 70, category: "languages" },
  { name: "PHP", icon: FaPhp, level: 60, category: "languages" },
  { name: "Python", icon: FaPython, level: 50, category: "languages" },
  { name: "Java", icon: FaJava, level: 40, category: "languages" },
  { name: "C#", icon: FaCss3Alt, level: 30, category: "languages" },

  { name: "Node.js", icon: SiNodedotjs, level: 80, category: "technologies" },
  { name: "Express", icon: SiExpress, level: 75, category: "technologies" },
  { name: "React", icon: SiReact, level: 90, category: "technologies" },
  { name: "Next.js", icon: SiNextdotjs, level: 80, category: "technologies" },
  { name: "Symfony", icon: SiSymfony, level: 85, category: "technologies" },
  { name: "Laravel", icon: SiLaravel, level: 50, category: "technologies" },

  { name: "PostgreSQL", icon: SiPostgresql, level: 65, category: "databases" },
  { name: "MySQL", icon: SiMysql, level: 99, category: "databases" },
  { name: "MongoDB", icon: SiMongodb, level: 50, category: "databases" },

  { name: "Git/GitHub", icon: SiGit, level: 80, category: "tools" },
  { name: "Figma", icon: SiFigma, level: 50, category: "tools" },
  { name: "VS Code", icon: VscCode, level: 95, category: "tools" },

  { name: "Merise", icon: VscCode, level: 90, category: "methodologies" },
  { name: "UML", icon: VscCode, level: 80, category: "methodologies" },
  { name: "Agile", icon: VscCode, level: 50, category: "methodologies" },
];

const categories = [
  "languages",
  "technologies",
  "databases",
  "tools",
  "methodologies",
  "all",
];

// ANIMATIONS
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  // Observer pour lancer les animations au scroll (répétition possible)
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: false, // <-- IMPORTANT pour relancer à chaque scroll
  });

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 pb-50 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{
                scale: 1.035,
                boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
              }}
              className="
                bg-white/60 dark:bg-card
                backdrop-blur-2xl
                border border-white/20 dark:border-white/10
                p-6 rounded-xl shadow-md
                transition-all
              "
            >
              {/* ICON + NAME */}
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="text-2xl text-primary" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full bg-secondary/40 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full origin-left"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.level}%` : "0%" }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
