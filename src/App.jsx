import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CircuitBackground from "./components/CircuitBackground";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Lab from "./pages/Lab";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      {/* <CircuitBackground / > */}
      <Terminal />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;