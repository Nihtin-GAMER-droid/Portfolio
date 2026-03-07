import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { sanityClient, queries } from "../lib/sanity";

const CATEGORIES = [
    { name: "all", label: "All Posts" },
    { name: "embedded", label: "Embedded Systems" },
    { name: "robotics", label: "Robotics" },
    { name: "vision", label: "Computer Vision" },
    { name: "hardware", label: "Hardware Design" },
];

export default function Blog() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        sanityClient.fetch(queries.allBlogPosts).then((data) => {
            const posts = (data).map((item) => ({
                id: item._id,
                title: item.title,
                slug: item.slug?.current,
                excerpt: item.excerpt,
                category: item.category,
                heroImage: item.heroImage,
                publishedDate: item.publishedDate,
                author: item.author,
                readTime: item.readTime,
            }));

            setPosts(posts);
            setLoading(false);
        })
        // Mock blog posts (would be fetched from Sanity)
        // const mockPosts = [
        //     {
        //         id: 1,
        //         title: "Building Real-Time SLAM Systems on Embedded Hardware",
        //         slug: "building-slam-systems",
        //         excerpt: "Exploring techniques to implement SLAM on resource-constrained microcontrollers using C++ and custom algorithms.",
        //         category: "embedded",
        //         heroImage: null,
        //         publishedDate: "2024-03-01",
        //         author: "Nithin",
        //         readTime: 8,
        //     },
        //     {
        //         id: 2,
        //         title: "Deep Learning on the Edge: TensorFlow Lite for Robotics",
        //         slug: "tensorflow-lite-robotics",
        //         excerpt: "A comprehensive guide to deploying neural networks on embedded systems with minimal computational overhead.",
        //         category: "vision",
        //         heroImage: null,
        //         publishedDate: "2024-02-25",
        //         author: "Nithin",
        //         readTime: 12,
        //     },
        //     {
        //         id: 3,
        //         title: "Designing Custom PCBs: From Schematic to Manufacturing",
        //         slug: "pcb-design-guide",
        //         excerpt: "Step-by-step guide on designing PCBs for robotics applications using Altium Designer.",
        //         category: "hardware",
        //         heroImage: null,
        //         publishedDate: "2024-02-18",
        //         author: "Nithin",
        //         readTime: 15,
        //     },
        //     {
        //         id: 4,
        //         title: "ROS Communication Patterns in Distributed Systems",
        //         slug: "ros-communication",
        //         excerpt: "Understanding publisher-subscriber and service-client patterns for multi-robot systems.",
        //         category: "robotics",
        //         heroImage: null,
        //         publishedDate: "2024-02-10",
        //         author: "Nithin",
        //         readTime: 10,
        //     },
        //     {
        //         id: 5,
        //         title: "Optimizing OpenCV for Real-time Edge Processing",
        //         slug: "opencv-optimization",
        //         excerpt: "Techniques for reducing latency and memory usage while maintaining accuracy in vision processing.",
        //         category: "vision",
        //         heroImage: null,
        //         publishedDate: "2024-01-30",
        //         author: "Nithin",
        //         readTime: 11,
        //     },
        //     {
        //         id: 6,
        //         title: "Interfacing LIDAR Sensors with Microcontrollers",
        //         slug: "lidar-interface",
        //         excerpt: "Complete tutorial on connecting and processing LIDAR data using ESP32 and STM32 platforms.",
        //         category: "embedded",
        //         heroImage: null,
        //         publishedDate: "2024-01-20",
        //         author: "Nithin",
        //         readTime: 9,
        //     },
        // ];

    }, []);

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter((post) => post.category === selectedCategory));
        }
    }, [selectedCategory, posts]);

    return (
        <div className="min-h-screen pt-32 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-cyan-400">Engineering</span> Blog
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Technical insights, tutorials, and research notes on embedded systems and robotics
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-3 justify-center mb-12"
                >
                    {CATEGORIES.map((cat) => (
                        <motion.button
                            key={cat.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={`px-4 py-2 rounded-lg transition-all ${selectedCategory === cat.name
                                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50"
                                : "bg-slate-900/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-400"
                                }`}
                        >
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Posts Grid */}
                {loading ? (
                    <div className="text-center text-gray-400">Loading posts...</div>
                ) : filteredPosts.length > 0 ? (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {filteredPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group border-2 border-cyan-500/30 rounded-lg p-6 md:p-8 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-900/80 transition-all cursor-pointer"
                                onClick={() => navigate(`/blog/${post.slug}`)}
                            >
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                                    <div className="flex-1">
                                        {/* Category Badge */}
                                        <div className="inline-block mb-3">
                                            <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full capitalize">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-3 group-hover:text-green-400 transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </div>
                                            <div>{post.readTime} min read</div>
                                        </div>

                                        {/* Excerpt */}
                                        <p className="text-gray-400 text-lg">{post.excerpt}</p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex-shrink-0 flex items-center justify-center"
                                    >
                                        <ArrowRight className="text-cyan-400 group-hover:text-green-400 transition-colors" size={24} />
                                    </motion.div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-400 py-16"
                    >
                        <p className="text-lg">No posts found in this category</p>
                    </motion.div>
                )}

                {/* Newsletter Signup */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 p-8 md:p-12 border-2 border-cyan-500/30 rounded-lg bg-gradient-to-r from-cyan-500/10 to-green-500/10 text-center"
                >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3">Stay Updated</h3>
                    <p className="text-gray-400 mb-6">
                        Get notified when new articles are published
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="px-4 py-3 bg-slate-900/50 border-2 border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors flex-1 max-w-sm"
                        />
                        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
