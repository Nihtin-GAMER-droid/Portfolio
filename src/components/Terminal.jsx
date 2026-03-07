import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "system", text: "SYSTEM ONLINE" },
    { type: "system", text: "Engineer Portfolio Loaded" },
    { type: "system", text: "Status: Building the Future" },
    { type: "info", text: "Type 'help' for available commands" },
  ]);
  const [konamiKeys, setKonamiKeys] = useState([]);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // Konami code detector
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      // Terminal toggle
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setOpen(!open);
        return;
      }

      // Konami code detection
      const newKeys = [...konamiKeys, key].slice(-KONAMI_CODE.length);
      setKonamiKeys(newKeys);

      if (newKeys.length === KONAMI_CODE.length &&
        newKeys.every((k, i) => k === KONAMI_CODE[i])) {
        setDebugMode(true);
        setOutput(prev => [...prev,
        { type: "success", text: "DEBUG MODE ACTIVATED" },
        { type: "success", text: "Neon Lab Interface Enabled" }
        ]);
        setKonamiKeys([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiKeys, open]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Focus input when terminal opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  console.log("SYSTEM ONLINE\nEngineer Portfolio Loaded\nStatus: Building the Future");

  const commands = {
    help: () => [
      { type: "info", text: "Available Commands:" },
      { type: "info", text: "  whoami - Display engineer info" },
      { type: "info", text: "  projects - List all projects" },
      { type: "info", text: "  skills - Display skill categories" },
      { type: "info", text: "  contact - Show contact information" },
      { type: "info", text: "  clear - Clear terminal" },
      { type: "info", text: "  easter - Trigger easter egg" },
    ],
    whoami: () => [
      { type: "info", text: "Nithin - Electronics Engineer" },
      { type: "info", text: "Specializing in Robotics & Embedded Systems" },
      { type: "info", text: "Building intelligent machines and digital ecosystems" },
    ],
    projects: () => [
      { type: "info", text: "Featured Projects:" },
      { type: "info", text: "  1. Autonomous Rover Platform" },
      { type: "info", text: "  2. Computer Vision System" },
      { type: "info", text: "  3. IoT Sensor Network" },
      { type: "info", text: "  4. Robotics Control System" },
    ],
    skills: () => [
      { type: "info", text: "Skill Categories:" },
      { type: "info", text: "  - Microcontrollers (ESP32, STM32, Arduino)" },
      { type: "info", text: "  - Robotics (ROS, Motion Planning)" },
      { type: "info", text: "  - Embedded Systems (RTOS, Drivers)" },
      { type: "info", text: "  - Computer Vision (OpenCV, ML)" },
      { type: "info", text: "  - RF Communication" },
      { type: "info", text: "  - Sensor Systems" },
    ],
    contact: () => [
      { type: "info", text: "Contact Information:" },
      { type: "info", text: "  Email: (from Sanity CMS)" },
      { type: "info", text: "  GitHub: (from Sanity CMS)" },
      { type: "info", text: "  LinkedIn: (from Sanity CMS)" },
    ],
    easter: () => [
      { type: "success", text: "🎉 EASTER EGG UNLOCKED!" },
      { type: "success", text: ">>> Access gained to Secret Lab Projects <<<" },
      { type: "success", text: "Navigate to /secret for exclusive content" },
    ],
    clear: () => [],
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.toLowerCase().trim();

    if (!trimmedCmd) return;

    setOutput(prev => [...prev, { type: "command", text: `$ ${cmd}` }]);

    if (trimmedCmd === "clear") {
      setOutput([]);
    } else if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      if (result.length > 0) {
        setOutput(prev => [...prev, ...result]);
      } else {
        setOutput(prev => [...prev, { type: "info", text: "Terminal cleared" }]);
      }
    } else {
      setOutput(prev => [...prev, { type: "error", text: `command not found: ${cmd}` }]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  if (!open) return null;

  return (
    <div className={`fixed bottom-0 left-0 w-full h-1/3 border-t-2 z-50 flex flex-col ${debugMode
        ? "bg-black border-green-500 shadow-lg shadow-green-500/50"
        : "bg-slate-900 border-cyan-500"
      }`}>

      <div className="flex items-center justify-between p-4 border-b border-current">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${debugMode ? "bg-green-500" : "bg-cyan-400"}`}></div>
          <span className={debugMode ? "text-green-400" : "text-cyan-400"}>Engineer Terminal</span>
        </div>
        <button
          onClick={() => setOpen(false)}
          className={debugMode ? "text-green-400 hover:text-green-300" : "text-cyan-400 hover:text-cyan-300"}
        >
          <X size={20} />
        </button>
      </div>

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-1"
      >
        {output.map((line, idx) => (
          <div key={idx} className={`
            ${line.type === "command" && (debugMode ? "text-green-400" : "text-cyan-400")}
            ${line.type === "info" && (debugMode ? "text-green-300" : "text-gray-300")}
            ${line.type === "error" && "text-red-400"}
            ${line.type === "success" && "text-lime-400"}
            ${line.type === "system" && (debugMode ? "text-green-500" : "text-cyan-500")}
          `}>
            {line.text}
          </div>
        ))}
      </div>

      <div className={`p-4 border-t ${debugMode ? "border-green-500" : "border-cyan-500"}`}>
        <div className={`flex gap-2 ${debugMode ? "text-green-400" : "text-cyan-400"}`}>
          <span>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent outline-none"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}