import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedButton from "../components/AnimatedButton";

export default function Home() {
  const navigate = useNavigate();
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Mock featured projects (would come from Sanity in production)
    setFeaturedProjects([
      {
        id: 1,
        title: "Autonomous Rover Platform",
        description: "Self-driving robotic platform with lidar, IMU, and autonomous navigation",
        technologies: ["ESP32", "ROS", "OpenCV"],
        image: "🤖",
      },
      {
        id: 2,
        title: "Computer Vision System",
        description: "Real-time object detection and tracking using neural networks",
        technologies: ["Python", "TensorFlow", "OpenCV"],
        image: "👁️",
      },
      {
        id: 3,
        title: "IoT Sensor Network",
        description: "Distributed sensor system for environmental monitoring",
        technologies: ["LoRaWAN", "MQTT", "Node-RED"],
        image: "📡",
      },
    ]);
  }, []);

  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Featured</span> Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing innovative robotics and embedded systems projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all bg-slate-900/50 hover:bg-slate-900/80 cursor-pointer"
              onClick={() => navigate("/projects")}
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <AnimatedButton
            onClick={() => navigate("/projects")}
            className="text-lg"
          >
            View All Projects →
          </AnimatedButton>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to explore the <span className="text-green-400">digital lab</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-8"
          >
            Discover skills, projects, technical articles, and insights into embedded systems and robotics engineering.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <AnimatedButton onClick={() => navigate("/lab")} className="text-lg">
              Skills & Lab
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              onClick={() => navigate("/blog")}
              className="text-lg"
            >
              Engineering Blog
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}