import { useState } from "react";
import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: "Web Development",
    icon: Code,
    description:
      "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    title: "UI/UX Design",
    icon: User,
    description:
      "Designing intuitive user interfaces and seamless user experiences.",
  },
  {
    title: "Project Management",
    icon: Briefcase,
    description:
      "Leading projects from conception to completion with methodologies like Merise or UML.",
  },
];

// Variants for Framer Motion
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Application Designer & Developer
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant management web & mobile
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I craft clean, efficient, and scalable solutions for complex digital challenges,
              always staying up-to-date with the latest technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button transform transition-all hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </a>

              <a
                href="/projects/CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 30px rgba(0,0,0,0.15)" }}
                className="
                  bg-white/30 dark:bg-card
                  backdrop-blur-2xl
                  border border-white/20 dark:border-white/10
                  p-6 rounded-xl
                  flex items-start gap-4
                  transition-all
                "
              >
                <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <card.icon className="h-6 w-6 text-primary transform hover:rotate-12 transition-transform duration-300" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">{card.title}</h4>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
