import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Contact() {
    const radarRef = useRef(null);

    useEffect(() => {
        const canvas = radarRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationId;
        let angle = 0;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const drawRadar = () => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(centerX, centerY) - 20;

            // Clear canvas
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw circles
            ctx.strokeStyle = "rgba(34, 211, 238, 0.2)";
            ctx.lineWidth = 1;
            for (let i = 1; i <= 3; i++) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, (radius / 3) * i, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Draw crosshairs
            ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(centerX - radius, centerY);
            ctx.lineTo(centerX + radius, centerY);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(centerX, centerY - radius);
            ctx.lineTo(centerX, centerY + radius);
            ctx.stroke();

            // Draw sweep line
            const sweep = angle % (Math.PI * 2);
            const sweepX = centerX + Math.cos(sweep) * radius;
            const sweepY = centerY + Math.sin(sweep) * radius;

            const gradient = ctx.createLinearGradient(centerX, centerY, sweepX, sweepY);
            gradient.addColorStop(0, "rgba(34, 211, 238, 0.5)");
            gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(sweepX, sweepY);
            ctx.stroke();

            // Draw sweep arc
            ctx.fillStyle = "rgba(34, 211, 238, 0.05)";
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, sweep - 0.3, sweep);
            ctx.fill();

            // Center point
            ctx.fillStyle = "rgba(34, 211, 238, 0.8)";
            ctx.beginPath();
            ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
            ctx.fill();

            angle += 0.05;
            animationId = requestAnimationFrame(drawRadar);
        };

        drawRadar();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

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
                        <span className="text-cyan-400">Connect</span> with Me
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Let's collaborate on innovative engineering projects
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Radar Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="border-2 border-cyan-500/30 rounded-lg overflow-hidden bg-slate-900/50 aspect-square"
                    >
                        <canvas
                            ref={radarRef}
                            className="w-full h-full"
                        />
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Get in Touch</h2>
                        </div>

                        {/* Email */}
                        <motion.a
                            href="mailto:contact@example.com"
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 p-4 border-l-4 border-cyan-500 bg-cyan-500/10 rounded transition-colors hover:bg-cyan-500/20"
                        >
                            <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-cyan-400 mb-1">Email</h3>
                                <p className="text-gray-400">contact@example.com</p>
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 p-4 border-l-4 border-green-500 bg-green-500/10 rounded transition-colors hover:bg-green-500/20"
                        >
                            <Github className="text-green-400 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-green-400 mb-1">GitHub</h3>
                                <p className="text-gray-400">github.com/yourusername</p>
                            </div>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 p-4 border-l-4 border-blue-500 bg-blue-500/10 rounded transition-colors hover:bg-blue-500/20"
                        >
                            <Linkedin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-blue-400 mb-1">LinkedIn</h3>
                                <p className="text-gray-400">linkedin.com/in/yourprofile</p>
                            </div>
                        </motion.a>

                        {/* Resume */}
                        <motion.a
                            href="/resume.pdf"
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 p-4 border-l-4 border-amber-500 bg-amber-500/10 rounded transition-colors hover:bg-amber-500/20"
                        >
                            <ExternalLink className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-amber-400 mb-1">Resume</h3>
                                <p className="text-gray-400">Download CV / Resume</p>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border-2 border-cyan-500/30 rounded-lg p-8 md:p-12 bg-slate-900/50"
                >
                    <h2 className="text-3xl font-bold text-cyan-400 mb-8">Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block text-cyan-400 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-cyan-400 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-cyan-400 font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                placeholder="Project collaboration..."
                                className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-cyan-400 font-semibold mb-2">Message</label>
                            <textarea
                                rows={6}
                                placeholder="Tell me about your project or inquiry..."
                                className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                {/* Response Time */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-8 text-gray-400"
                >
                    <p>I typically respond within 24-48 hours</p>
                </motion.div>
            </div>
        </div>
    );
}
