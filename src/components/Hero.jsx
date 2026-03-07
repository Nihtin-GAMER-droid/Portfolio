import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  const navigate = useNavigate();
  const [siteSettings, setSiteSettings] = useState(null);
  const [signalPulses, setSignalPulses] = useState([]);

  useEffect(() => {
    // Generate animated signal pulses
    const pulses = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
    }));
    setSignalPulses(pulses);

    // Load site settings from Sanity (fallback to defaults)
    setSiteSettings({
      heroTitle: "Electronics Engineer | Robotics | Embedded Systems",
      heroSubtitle: "Building Intelligent Machines",
      heroCTA1: "View Projects",
      heroCTA2: "Explore Lab",
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated signal pulses */}
      {signalPulses.map((pulse) => (
        <motion.div
          key={pulse.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            top: ["0%", "100%"],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3,
            delay: pulse.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${20 + pulse.id * 12}%`,
          }}
        />
      ))}

      <motion.div
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-cyan-400">Electronics</span>{" "}
          <span className="text-green-400">Engineer</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          {siteSettings?.heroSubtitle || "Building Intelligent Machines"}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12"
        >
          Robotics • Embedded Systems • Computer Vision • IoT
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <AnimatedButton
            variant="primary"
            onClick={() => navigate("/projects")}
            className="text-lg"
          >
            {siteSettings?.heroCTA1 || "View Projects"}
          </AnimatedButton>
          <AnimatedButton
            variant="outline"
            onClick={() => navigate("/lab")}
            className="text-lg"
          >
            {siteSettings?.heroCTA2 || "Explore Lab"}
          </AnimatedButton>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-gray-400"
        >
          <span className="px-3 py-1 border border-cyan-500/50 rounded-full">Embedded C/C++</span>
          <span className="px-3 py-1 border border-green-500/50 rounded-full">Python</span>
          <span className="px-3 py-1 border border-cyan-500/50 rounded-full">ROS</span>
          <span className="px-3 py-1 border border-green-500/50 rounded-full">ESP32/STM32</span>
          <span className="px-3 py-1 border border-cyan-500/50 rounded-full">OpenCV</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}