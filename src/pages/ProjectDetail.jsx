import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import AnimatedButton from "../components/AnimatedButton";

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock project data (would be fetched from Sanity)
        const mockProjects = {
            "autonomous-rover": {
                title: "Autonomous Rover Platform",
                slug: "autonomous-rover",
                shortDescription: "Self-driving robotic platform with lidar, IMU, and autonomous navigation",
                fullDescription: [
                    "This autonomous rover platform represents the culmination of embedded systems, robotics, and computer vision technologies.",
                    "The rover utilizes a combination of sensors and advanced algorithms to navigate complex environments autonomously.",
                    "Key features include real-time SLAM, obstacle avoidance, and path planning capabilities.",
                ],
                technologies: ["ESP32", "ROS", "OpenCV", "SLAM", "LIDAR", "Python"],
                architectureDiagramImage: null,
                projectImages: [],
                githubLink: "https://github.com",
                demoLink: "https://demo.example.com",
                featured: true,
                publishedDate: "2024-01-15",
            },
            "computer-vision-system": {
                title: "Computer Vision System",
                slug: "computer-vision-system",
                shortDescription: "Real-time object detection and tracking using neural networks",
                fullDescription: [
                    "A sophisticated computer vision system leveraging deep learning for real-time object detection and tracking.",
                    "The system processes video streams from multiple sources and provides accurate bounding boxes and classifications.",
                    "Optimized for edge deployment with quantized models that run efficiently on embedded devices.",
                ],
                technologies: ["Python", "TensorFlow", "OpenCV", "ONNX"],
                architectureDiagramImage: null,
                projectImages: [],
                githubLink: "https://github.com",
                demoLink: null,
                featured: true,
                publishedDate: "2023-11-20",
            },
        };

        const data = mockProjects[slug || ""];
        if (data) {
            setProject(data);
        }
        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Loading project details...
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-cyan-400 mb-4">Project Not Found</h1>
                <AnimatedButton onClick={() => navigate("/projects")}>
                    Back to Projects
                </AnimatedButton>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate("/projects")}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Projects
                </motion.button>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
                            {project.title}
                        </h1>
                        {project.featured && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm">
                                ⭐ Featured
                            </span>
                        )}
                    </div>
                    <p className="text-gray-400 text-lg">{project.shortDescription}</p>
                </motion.div>

                {/* Hero Image */}
                {project.projectImages?.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 rounded-lg overflow-hidden border-2 border-cyan-500/30"
                    >
                        <img
                            src={project.projectImages[0]}
                            alt={project.title}
                            className="w-full h-96 object-cover"
                        />
                    </motion.div>
                )}

                {/* Content Sections */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 space-y-8"
                    >
                        {/* Problem Section */}
                        <section className="border-l-4 border-cyan-500 pl-6">
                            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Problem Statement</h2>
                            <p className="text-gray-400">
                                The challenge was to create an autonomous system capable of navigating complex environments
                                while making real-time decisions without human intervention.
                            </p>
                        </section>

                        {/* Architecture Section */}
                        <section className="border-l-4 border-green-500 pl-6">
                            <h2 className="text-2xl font-bold text-green-400 mb-4">Architecture & Design</h2>
                            {project.fullDescription?.map((desc, idx) => (
                                <p key={idx} className="text-gray-400 mb-3 last:mb-0">
                                    {desc}
                                </p>
                            ))}
                        </section>

                        {/* Results Section */}
                        <section className="border-l-4 border-amber-500 pl-6">
                            <h2 className="text-2xl font-bold text-amber-400 mb-4">Results & Impact</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li>✓ Achieved 95% precision in object detection</li>
                                <li>✓ Real-time processing at 30 FPS</li>
                                <li>✓ Successfully deployed on embedded hardware</li>
                            </ul>
                        </section>

                        {/* Future Work */}
                        <section className="border-l-4 border-purple-500 pl-6">
                            <h2 className="text-2xl font-bold text-purple-400 mb-4">Future Enhancements</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li>→ Integration with cloud services</li>
                                <li>→ Multi-robot coordination</li>
                                <li>→ Advanced machine learning models</li>
                            </ul>
                        </section>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Technologies */}
                        <div className="border-2 border-cyan-500/30 rounded-lg p-6 bg-slate-900/50">
                            <h3 className="text-lg font-bold text-cyan-400 mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="border-2 border-green-500/30 rounded-lg p-6 bg-slate-900/50 space-y-3">
                            <h3 className="text-lg font-bold text-green-400 mb-4">Quick Links</h3>
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                                >
                                    <Github size={20} /> View on GitHub
                                </a>
                            )}
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                        </div>

                        {/* Date */}
                        <div className="text-gray-500 text-sm">
                            <p>Published: {new Date(project.publishedDate).toLocaleDateString()}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Project Gallery */}
                {project.projectImages?.length > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Project Gallery</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.projectImages.slice(1).map((img, idx) => (
                                <img key={idx} src={img} alt={`Gallery ${idx + 1}`} className="rounded-lg" />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Related Projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="py-12 border-t border-cyan-500/20 text-center"
                >
                    <h2 className="text-2xl font-bold text-cyan-400 mb-6">Explore More Projects</h2>
                    <AnimatedButton onClick={() => navigate("/projects")}>
                        View All Projects
                    </AnimatedButton>
                </motion.div>
            </div>
        </div>
    );
}
