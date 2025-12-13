import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Petroleum Map",
    description:
      "An interactive visualization application for petroleum infrastructures of OMH",
    image: "/projects/project1.png",
    tags: ["Symfony", "TailwindCSS", "MySQL", "Google Maps API", "UML"],

    screenshots: [
      {
        image: "/projects/petroleum/1.png",
        title: "Homepage interface",
        text:
          "This is the initial interface displayed to the user when the application is launched.",
      },
      {
        image: "/projects/petroleum/2.png",
        title: "Petroleum map interface",
        text:
          "After logging in, a standard user is taken to the interface displaying the petroleum map.",
      },
      {
        image: "/projects/petroleum/3.png",
        title: "Petroleum depot management interface",
        text:
          "This structured interface allows the administrator to manage petroleum depots, including adding, updating, deleting, and monitoring their capacity.",
      },
      {
        image: "/projects/petroleum/4.png",
        title: "Total storage capacity of all fuel tanks in a depot",
        text:
          "This interface provides an overview of the capacity, expressed in cubic meters, of every fuel tank in the depot.",
      },
    ],

    githubUrl: "https://github.com/Mahatsangy667",
  },

  {
    id: 2,
    title: "Spare Parts Management Application",
    description:
      "Automotive spare parts management system for vehicle maintenance.",
    image: "/projects/project2.png",
    tags: ["React JS", "Express JS", "MySQL", "UML"],

    screenshots: [
      {
        image: "/projects/spare/1.png",
        title: "Spare part supply",
        text:
          "This interface is designed for managing spare part supply. Parts with low stock are highlighted in red, while those still available are shown in green. Users can also search for a specific part.",
      },
      {
        image: "/projects/spare/2.png",
        title: "Detailed information of a part",
        text:
          "This section displays the detailed information of a spare part.",
      },
      {
        image: "/projects/spare/3.png",
        title: "Work order management",
        text:
          "This interface displays all work orders in the database and also allows users to add new ones.",
      },
      {
        image: "/projects/spare/4.png",
        title: "Dashboard",
        text:
          "This is the interactive dashboard for monitoring activities.",
      },
    ],

    githubUrl: "https://github.com/Mahatsangy667",
  },

  {
    id: 3,
    title: "Order Management Application",
    description:
      "Complete furniture order and manufacturing system for Fanalamanga SA",
    image: "/projects/project3.png",
    tags: ["React JS", "PHP", "MySQL", "Merise"],

    screenshots: [
      {
        image: "/projects/order/1.png",
        title: "Homepage interface",
        text:
          "This is the home screen where the user arrives when launching the application.",
      },
      {
        image: "/projects/order/2.png",
        title: "Order management interface",
        text:
          "This interface allows users to add, edit, and delete orders, as well as generate manufacturing initiation sheets and manufacturing order forms.",
      },
      {
        image: "/projects/order/3.png",
        title: "Ordered items list",
        text:
          "This shows the items included in an order.",
      },
      {
        image: "/projects/order/4.png",
        title: "Manufacturing order generation",
        text:
          "This form allows users to generate the manufacturing order PDF.",
      },
    ],

    githubUrl: "https://github.com/Mahatsangy667",
  },
];

export const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">

      {/* Background glass blur circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Here are some of my recent projects, carefully crafted with
          performance, design and user experience in mind.
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}

              className="
                group rounded-2xl overflow-hidden
                backdrop-blur-xl bg-primary/20 dark:bg-black/20
                border border-white/20 shadow-xl
                hover:shadow-2xl transition-all duration-500
              "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-fit h-fit object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 backdrop-blur-md border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>

                <div className="pt-2 flex justify-center items-center space-x-6">

                  <button
                    onClick={() => setOpenProject(project)}
                    className="hover:text-primary transition"
                  >
                    <ExternalLink size={22} />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    <Github size={22} />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="text-center mt-16">
          <a
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-3 rounded-full
              bg-primary text-white
              hover:scale-105 transition-transform
              shadow-lg
            "
            target="_blank"
            href="https://github.com/Mahatsangy667"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* ============ MODAL GLASS + ANIMATION APPLE ============ */}
      <AnimatePresence>
        {openProject && (
          <motion.div
            className="fixed inset-0 bg-primary/30 backdrop-blur-xl z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}

              className="
                bg-white/10 backdrop-blur-2xl
                border border-white/20
                max-w-6xl w-full mx-4
                rounded-3xl p-8
                shadow-2xl relative overflow-auto max-h-[90vh]
              "
            >

              {/* MacOS top buttons */}
              <div className="absolute top-4 left-5 flex space-x-2">
                <span
                  onClick={() => setOpenProject(null)}
                  className="w-3.5 h-3.5 bg-red-500 rounded-full cursor-pointer"
                />
                <span className="w-3.5 h-3.5 bg-yellow-400 rounded-full" />
                <span className="w-3.5 h-3.5 bg-green-500 rounded-full" />
              </div>

              <h2 className="text-3xl font-bold mb-2 text-center">
                {openProject.title}
              </h2>

              <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                {openProject.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {openProject.screenshots.map((screen, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}

                    className="
                      bg-white/10 backdrop-blur-lg
                      rounded-2xl p-4
                      border border-white/20
                      shadow-lg hover:scale-105
                      transition-transform duration-500
                    "
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-fit object-cover rounded-xl mb-4"
                    />

                    <h4 className="font-semibold mb-1">
                      {screen.title}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {screen.text}
                    </p>
                  </motion.div>
                ))}

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
