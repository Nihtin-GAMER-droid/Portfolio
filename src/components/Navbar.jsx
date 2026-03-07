import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/50 border-b border-cyan-500/20 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link to="/" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          ⚙️ NITHIN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link to="/Portfolio" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/Portfolio/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
          <Link to="/Portfolio/lab" className="hover:text-cyan-400 transition-colors">Lab</Link>
          <Link to="/Portfolio/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
          <Link to="/Portfolio/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-slate-900/80">
          <div className="flex flex-col gap-4 p-4">
            <Link to="/Portfolio" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/Portfolio/projects" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/Portfolio/lab" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Lab</Link>
            <Link to="/Portfolio/blog" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/Portfolio/contact" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}

    </nav>
  );
}