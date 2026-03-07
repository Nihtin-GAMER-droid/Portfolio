import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillModule from "../components/SkillModule";

const SKILL_CATEGORIES = [
    { name: "microcontrollers", label: "Microcontrollers", icon: "🎛️" },
    { name: "robotics", label: "Robotics", icon: "🤖" },
    { name: "embedded-systems", label: "Embedded Systems", icon: "⚙️" },
    { name: "computer-vision", label: "Computer Vision", icon: "👁️" },
    { name: "rf-communication", label: "RF Communication", icon: "📡" },
    { name: "sensor-systems", label: "Sensor Systems", icon: "📊" },
    { name: "tools-languages", label: "Tools & Languages", icon: "💻" },
    { name: "frameworks", label: "Frameworks", icon: "🔧" },
];

export default function Lab() {
    const [skills, setSkills] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("microcontrollers");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock skills data (would be fetched from Sanity)
        const mockSkills = {
            microcontrollers: [
                { id: 1, skillName: "ESP32", category: "microcontrollers", icon: "Cpu", proficiency: "expert" },
                { id: 2, skillName: "STM32 Series", category: "microcontrollers", icon: "Cpu", proficiency: "advanced" },
                { id: 3, skillName: "Arduino", category: "microcontrollers", icon: "Zap", proficiency: "expert" },
                { id: 4, skillName: "PIC Microcontrollers", category: "microcontrollers", icon: "Cpu", proficiency: "intermediate" },
            ],
            robotics: [
                { id: 5, skillName: "ROS (Robot Operating System)", category: "robotics", icon: "Zap", proficiency: "advanced" },
                { id: 6, skillName: "Motion Planning", category: "robotics", icon: "Move", proficiency: "advanced" },
                { id: 7, skillName: "SLAM Algorithms", category: "robotics", icon: "Map", proficiency: "advanced" },
                { id: 8, skillName: "Kinematics & Dynamics", category: "robotics", icon: "Zap", proficiency: "intermediate" },
            ],
            "embedded-systems": [
                { id: 9, skillName: "Real-Time Operating Systems", category: "embedded-systems", icon: "Clock", proficiency: "advanced" },
                { id: 10, skillName: "Device Drivers", category: "embedded-systems", icon: "Cpu", proficiency: "advanced" },
                { id: 11, skillName: "Firmware Development", category: "embedded-systems", icon: "Code", proficiency: "expert" },
                { id: 12, skillName: "Hardware Debugging", category: "embedded-systems", icon: "Tool", proficiency: "expert" },
            ],
            "computer-vision": [
                { id: 13, skillName: "OpenCV", category: "computer-vision", icon: "Eye", proficiency: "advanced" },
                { id: 14, skillName: "TensorFlow/PyTorch", category: "computer-vision", icon: "Brain", proficiency: "advanced" },
                { id: 15, skillName: "Object Detection", category: "computer-vision", icon: "Target", proficiency: "advanced" },
                { id: 16, skillName: "Image Processing", category: "computer-vision", icon: "Image", proficiency: "expert" },
            ],
            "rf-communication": [
                { id: 17, skillName: "LoRaWAN", category: "rf-communication", icon: "Radio", proficiency: "advanced" },
                { id: 18, skillName: "WiFi/Bluetooth", category: "rf-communication", icon: "Wifi", proficiency: "expert" },
                { id: 19, skillName: "NRF24L01", category: "rf-communication", icon: "Radio", proficiency: "advanced" },
                { id: 20, skillName: "GSM/4G Modules", category: "rf-communication", icon: "Radio", proficiency: "intermediate" },
            ],
            "sensor-systems": [
                { id: 21, skillName: "IMU/Accelerometers", category: "sensor-systems", icon: "Zap", proficiency: "expert" },
                { id: 22, skillName: "GPS/GNSS", category: "sensor-systems", icon: "MapPin", proficiency: "advanced" },
                { id: 23, skillName: "Temperature & Humidity", category: "sensor-systems", icon: "Thermometer", proficiency: "advanced" },
                { id: 24, skillName: "LIDAR & Ultrasonic", category: "sensor-systems", icon: "Radio", proficiency: "advanced" },
            ],
            "tools-languages": [
                { id: 25, skillName: "C/C++", category: "tools-languages", icon: "Code", proficiency: "expert" },
                { id: 26, skillName: "Python", category: "tools-languages", icon: "Code", proficiency: "expert" },
                { id: 27, skillName: "Assembly", category: "tools-languages", icon: "Code", proficiency: "advanced" },
                { id: 28, skillName: "JavaScript/TypeScript", category: "tools-languages", icon: "Code", proficiency: "advanced" },
            ],
            frameworks: [
                { id: 29, skillName: "FreeRTOS", category: "frameworks", icon: "Zap", proficiency: "advanced" },
                { id: 30, skillName: "HAL Libraries", category: "frameworks", icon: "Zap", proficiency: "expert" },
                { id: 31, skillName: "Qt Framework", category: "frameworks", icon: "Zap", proficiency: "intermediate" },
                { id: 32, skillName: "React", category: "frameworks", icon: "Zap", proficiency: "advanced" },
            ],
        };

        setSkills(mockSkills);
        setLoading(false);
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
                        <span className="text-cyan-400">Digital</span> Lab
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Engineering workbench showcasing skills and expertise
                    </p>
                </motion.div>

                {/* Category Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap gap-3 justify-center">
                        {SKILL_CATEGORIES.map((cat) => (
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
                                {cat.icon} {cat.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Grid */}
                {loading ? (
                    <div className="text-center text-gray-400">Loading skills...</div>
                ) : (
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {skills[selectedCategory]?.map((skill, idx) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <SkillModule skill={skill} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 grid md:grid-cols-4 gap-6 py-12 border-t border-cyan-500/20"
                >
                    <div className="text-center group cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-green-400 transition-colors"
                        >
                            {Object.values(skills).flat().length}
                        </motion.div>
                        <div className="text-gray-400">Total Skills</div>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-4xl font-bold text-green-400 mb-2 group-hover:text-cyan-400 transition-colors"
                        >
                            {SKILL_CATEGORIES.length}
                        </motion.div>
                        <div className="text-gray-400">Categories</div>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-4xl font-bold text-amber-400 mb-2 group-hover:text-cyan-400 transition-colors"
                        >
                            15+
                        </motion.div>
                        <div className="text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-green-400 transition-colors"
                        >
                            20+
                        </motion.div>
                        <div className="text-gray-400">Projects Completed</div>
                    </div>
                </motion.div>

                {/* Proficiency Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 p-8 border-2 border-cyan-500/30 rounded-lg bg-slate-900/50"
                >
                    <h3 className="text-lg font-bold text-cyan-400 mb-6">Proficiency Levels</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { level: "Expert", color: "border-yellow-400", dot: "bg-yellow-400" },
                            { level: "Advanced", color: "border-green-400", dot: "bg-green-400" },
                            { level: "Intermediate", color: "border-cyan-400", dot: "bg-cyan-400" },
                            { level: "Learning", color: "border-amber-400", dot: "bg-amber-400" },
                        ].map((item) => (
                            <div key={item.level} className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${item.dot}`}></div>
                                <span className="text-gray-300">{item.level}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
