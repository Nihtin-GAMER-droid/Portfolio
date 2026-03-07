import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function SkillModule({ skill }) {
    const IconComponent = Icons[skill.icon] || Icons.Zap;

    const proficiencyColorsget = {
        expert: "border-yellow-400 shadow-yellow-400/50",
        advanced: "border-green-400 shadow-green-400/50",
        intermediate: "border-cyan-400 shadow-cyan-400/50",
        learning: "border-amber-400 shadow-amber-400/50",
    };

    return (
        <motion.div
            whileHover={{ scale: 1.1, rotateZ: 2 }}
            className={`border-2 ${proficiencyColorsget[skill.proficiency] || 'border-cyan-400'} rounded-lg p-4 backdrop-blur-sm bg-slate-900/50 shadow-lg cursor-pointer transition-all`}
        >
            <div className="flex flex-col items-center gap-3">
                <IconComponent
                    className={`w-8 h-8 ${skill.proficiency === 'expert' ? 'text-yellow-400' :
                            skill.proficiency === 'advanced' ? 'text-green-400' :
                                skill.proficiency === 'intermediate' ? 'text-cyan-400' :
                                    'text-amber-400'
                        }`}
                />
                <h3 className="text-center font-semibold text-gray-200">{skill.skillName}</h3>
                <div className="text-xs text-gray-400 capitalize">{skill.proficiency}</div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle, var(--color), transparent)` }}></div>
            </div>
        </motion.div>
    );
}
