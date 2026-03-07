import { useEffect, useRef } from 'react';

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit paths and nodes
    const nodes = [];
    const paths = [];
    let animationId;

    // Initialize nodes and paths
    const initCircuit = () => {
      nodes.length = 0;
      paths.length = 0;

      // Create random nodes
      for (let i = 0; i < 15; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }

      // Connect nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 250) {
            paths.push({
              from: i,
              to: j,
              distance: distance,
              signal: 0,
              speed: Math.random() * 0.02 + 0.01,
            });
          }
        }
      }
    };

    initCircuit();

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw paths
      paths.forEach((path) => {
        const fromNode = nodes[path.from];
        const toNode = nodes[path.to];

        // Update signal position
        path.signal += path.speed;
        if (path.signal > 1) path.signal = 0;

        // Draw path
        ctx.strokeStyle = `rgba(34, 211, 238, 0.15)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();

        // Draw glowing signal pulse
        const signalX = fromNode.x + (toNode.x - fromNode.x) * path.signal;
        const signalY = fromNode.y + (toNode.y - fromNode.y) * path.signal;

        const gradient = ctx.createRadialGradient(signalX, signalY, 0, signalX, signalY, 8);
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.5)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(signalX, signalY, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed;
        if (node.pulse > Math.PI * 2) node.pulse = 0;

        const pulseSize = Math.sin(node.pulse) * 0.5 + 1;

        // Node core
        ctx.fillStyle = 'rgba(34, 211, 238, 0.8)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node glow
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          node.radius,
          node.x,
          node.y,
          node.radius * 3 * pulseSize
        );
        glowGradient.addColorStop(0, 'rgba(34, 211, 238, 0.3)');
        glowGradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)',
      }}
    />
  );
}