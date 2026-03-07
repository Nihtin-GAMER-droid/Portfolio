import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Search } from "lucide-react";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTech, setSelectedTech] = useState(null);
    const [allTechs, setAllTechs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock projects data (would be fetched from Sanity in production)
        const mockProjects = [
            {
                id: 1,
                slug: { current: "autonomous-rover" },
                title: "Autonomous Rover Platform",
                shortDescription: "Self-driving robotic platform with lidar, IMU, and autonomous navigation",
                technologies: ["ESP32", "ROS", "OpenCV", "SLAM"],
                featured: true,
                projectImages: [],
            },
            {
                id: 2,
                slug: { current: "computer-vision-system" },
                title: "Computer Vision System",
                shortDescription: "Real-time object detection and tracking using neural networks",
                technologies: ["Python", "TensorFlow", "OpenCV"],
                featured: true,
                projectImages: [],
            },
            {
                id: 3,
                slug: { current: "iot-sensor-network" },
                title: "IoT Sensor Network",
                shortDescription: "Distributed sensor system for environmental monitoring",
                technologies: ["LoRaWAN", "MQTT", "Node-RED"],
                featured: false,
                projectImages: [],
            },
            {
                id: 4,
                slug: { current: "drone-navigation" },
                title: "Drone Navigation System",
                shortDescription: "Autonomous flight control with GPS and computer vision",
                technologies: ["C++", "Arduino", "GPS"],
                featured: false,
                projectImages: [],
            },
            {
                id: 5,
                slug: { current: "gesture-recognition" },
                title: "Gesture Recognition Interface",
                shortDescription: "Hand gesture recognition for human-robot interaction",
                technologies: ["Python", "MediaPipe", "TensorFlow Lite"],
                featured: true,
                projectImages: [],
            },
        ];

        setProjects(mockProjects);

        // Extract all unique technologies
        const techs = new Set();
        mockProjects.forEach(p => p.technologies.forEach(t => techs.add(t)));
        setAllTechs(Array.from(techs).sort());

        setLoading(false);
    }, []);

    useEffect(() => {
        let filtered = projects;

        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedTech) {
            filtered = filtered.filter(p =>
                p.technologies.includes(selectedTech)
            );
        }

        setFilteredProjects(filtered);
    }, [searchTerm, selectedTech, projects]);

    return (
        <div className="min-h-screen pt-32 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-cyan-400">Project</span> Portfolio
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Showcasing innovative robotics and embedded systems projects
                    </p>
                </motion.div>

                {/* Search and Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 space-y-6"
                >
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-3 text-cyan-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border-2 border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                    </div>

                    {/* Technology Filter */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedTech(null)}
                            className={`px-4 py-2 rounded-lg transition-colors ${selectedTech === null
                                    ? "bg-cyan-500 text-black"
                                    : "bg-slate-900/50 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400"
                                }`}
                        >
                            All
                        </button>
                        {allTechs.map(tech => (
                            <button
                                key={tech}
                                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                                className={`px-4 py-2 rounded-lg transition-colors ${selectedTech === tech
                                        ? "bg-green-500 text-black"
                                        : "bg-slate-900/50 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400"
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                {loading ? (
                    <div className="text-center text-gray-400">Loading projects...</div>
                ) : filteredProjects.length > 0 ? (
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                layout
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-400 py-16"
                    >
                        <p className="text-lg">No projects found matching your criteria</p>
                    </motion.div>
                )}

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 grid md:grid-cols-3 gap-8 py-12 border-t border-cyan-500/20"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">{projects.length}</div>
                        <div className="text-gray-400">Total Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-400 mb-2">{projects.filter(p => p.featured).length}</div>
                        <div className="text-gray-400">Featured</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-amber-400 mb-2">{new Set(projects.flatMap(p => p.technologies)).size}</div>
                        <div className="text-gray-400">Technologies</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}