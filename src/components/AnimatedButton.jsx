import { motion } from "framer-motion";

export default function AnimatedButton({
    children,
    onClick,
    variant = "primary",
    className = ""
}) {
    const variants = {
        primary: "bg-cyan-500 hover:bg-cyan-400 text-black",
        secondary: "bg-green-500 hover:bg-green-400 text-black",
        outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded font-semibold transition-all ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}
