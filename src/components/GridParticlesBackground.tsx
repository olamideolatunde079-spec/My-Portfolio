import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  axis: 'x' | 'y';
  direction: 1 | -1; // 1 = right/down, -1 = left/up
  speed: number;
  type: 'glowing-spark' | 'stone' | 'stone-with-halo' | 'twin-bead';
  size: number;
  haloSize: number;
  glow: number;
  color: string;
  tailLength: number;
}

interface StaticNode {
  col: number;
  row: number;
  hasHalo: boolean;
  haloRadius: number;
  nodeRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  opacity: number;
}

interface GridSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

export const GridParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isTabVisible = true;

    // Grid configuration
    const cellSize = 72; // Spacing between grid lines
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cols = Math.ceil(width / cellSize) + 1;
    let rows = Math.ceil(height / cellSize) + 1;

    // Mouse coordinates for interactive glow
    let mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize static nodes (anchor stones with halos as shown in screenshot)
    let staticNodes: StaticNode[] = [];
    let activeSegments: GridSegment[] = [];
    let particles: Particle[] = [];

    const setupScene = () => {
      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;

      staticNodes = [];
      activeSegments = [];

      // Generate prominent circuit-like active segments
      // Connect nodes horizontally and vertically
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Horizontal segments
          if (c < cols - 1 && Math.random() < 0.38) {
            activeSegments.push({
              x1: c * cellSize,
              y1: r * cellSize,
              x2: (c + 1) * cellSize,
              y2: r * cellSize,
              opacity: 0.12 + Math.random() * 0.12,
            });
          }
          // Vertical segments
          if (r < rows - 1 && Math.random() < 0.38) {
            activeSegments.push({
              x1: c * cellSize,
              y1: r * cellSize,
              x2: c * cellSize,
              y2: (r + 1) * cellSize,
              opacity: 0.12 + Math.random() * 0.12,
            });
          }

          // Anchor stones at selected grid intersections
          const rand = Math.random();
          if (rand < 0.18) {
            // Anchor stone
            const hasHalo = Math.random() < 0.45; // ~45% of anchor stones have a large glowing halo
            staticNodes.push({
              col: c,
              row: r,
              hasHalo,
              haloRadius: hasHalo ? 28 + Math.random() * 32 : 0, // 28px - 60px as in screenshot
              nodeRadius: 3.5 + Math.random() * 4, // 3.5px - 7.5px solid stone
              pulsePhase: Math.random() * Math.PI * 2,
              pulseSpeed: 0.6 + Math.random() * 0.8,
              opacity: 0.45 + Math.random() * 0.35,
            });
          }
        }
      }

      // Initialize traveling particles (left-right, up-down along grid rails)
      const particleCount = Math.max(18, Math.min(42, Math.floor((width * height) / 32000)));
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        const axis: 'x' | 'y' = Math.random() < 0.5 ? 'x' : 'y';
        const direction: 1 | -1 = Math.random() < 0.5 ? 1 : -1;

        const typeRand = Math.random();
        let type: Particle['type'] = 'glowing-spark';
        let size = 3;
        let haloSize = 0;
        let glow = 10;
        let tailLength = 24;

        if (typeRand < 0.35) {
          type = 'glowing-spark';
          size = 2.5 + Math.random() * 1.5;
          glow = 12;
          tailLength = 20 + Math.random() * 20;
        } else if (typeRand < 0.65) {
          type = 'stone';
          size = 4.5 + Math.random() * 2.5;
          glow = 6;
          tailLength = 0;
        } else if (typeRand < 0.85) {
          type = 'stone-with-halo';
          size = 4.5 + Math.random() * 2.5;
          haloSize = 24 + Math.random() * 18;
          glow = 8;
          tailLength = 0;
        } else {
          // Tandem twin-bead exactly as shown in user screenshot
          type = 'twin-bead';
          size = 2.8;
          glow = 8;
          tailLength = 0;
        }

        particles.push({
          x: col * cellSize,
          y: row * cellSize,
          axis,
          direction,
          speed: 0.8 + Math.random() * 1.4,
          type,
          size,
          haloSize,
          glow,
          color: '#ffffff',
          tailLength,
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      setupScene();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const timeSec = currentTime * 0.001;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // Clear frame with pure transparent back (body is solid black)
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background orthogonal grid lines
      ctx.lineWidth = 1;

      // Vertical background grid lines
      for (let c = 0; c < cols; c++) {
        const x = c * cellSize + 0.5;
        // Check mouse proximity to vertical line
        const distToMouse = Math.abs(x - mouse.x);
        let alpha = 0.035;
        if (mouse.active && distToMouse < cellSize * 1.5) {
          alpha += (1 - distToMouse / (cellSize * 1.5)) * 0.08;
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal background grid lines
      for (let r = 0; r < rows; r++) {
        const y = r * cellSize + 0.5;
        // Check mouse proximity to horizontal line
        const distToMouse = Math.abs(y - mouse.y);
        let alpha = 0.035;
        if (mouse.active && distToMouse < cellSize * 1.5) {
          alpha += (1 - distToMouse / (cellSize * 1.5)) * 0.08;
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw active circuit network segments
      for (let i = 0; i < activeSegments.length; i++) {
        const seg = activeSegments[i];
        ctx.strokeStyle = `rgba(255, 255, 255, ${seg.opacity})`;
        ctx.beginPath();
        ctx.moveTo(seg.x1 + 0.5, seg.y1 + 0.5);
        ctx.lineTo(seg.x2 + 0.5, seg.y2 + 0.5);
        ctx.stroke();
      }

      // 3. Draw grid intersection guide dots
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * cellSize;
          const y = r * cellSize;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
        }
      }

      // 4. Draw static nodes & translucent aura halos (matching the attached screenshot)
      for (let i = 0; i < staticNodes.length; i++) {
        const node = staticNodes[i];
        const x = node.col * cellSize;
        const y = node.row * cellSize;

        const pulse = Math.sin(timeSec * node.pulseSpeed + node.pulsePhase);

        // Large diffuse translucent halo disc
        if (node.hasHalo) {
          const currentHaloRadius = node.haloRadius * (1 + 0.08 * pulse);
          const haloGrad = ctx.createRadialGradient(x, y, 0, x, y, currentHaloRadius);
          haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.14)');
          haloGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.06)');
          haloGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(x, y, currentHaloRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Center solid stone
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, node.nodeRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Update and render moving particles (left/right and up/down along grid tracks)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move along the current axis
        if (p.axis === 'x') {
          p.x += p.direction * p.speed;
        } else {
          p.y += p.direction * p.speed;
        }

        // Check if reaching or crossing a grid vertex (cell intersection)
        const currentCoord = p.axis === 'x' ? p.x : p.y;
        const nearestVertex = Math.round(currentCoord / cellSize) * cellSize;
        const distToVertex = Math.abs(currentCoord - nearestVertex);

        // Turn decision at intersections:
        // When within speed range of an intersection vertex, decide whether to switch axis or continue
        if (distToVertex <= p.speed * 0.6) {
          // Snap precisely to the rail
          if (p.axis === 'x') {
            p.x = nearestVertex;
          } else {
            p.y = nearestVertex;
          }

          // Random decision:
          // 40% chance to turn 90 degrees (switch from x to y or y to x)
          if (Math.random() < 0.38) {
            if (p.axis === 'x') {
              p.axis = 'y';
              p.direction = Math.random() < 0.5 ? 1 : -1; // up or down
            } else {
              p.axis = 'x';
              p.direction = Math.random() < 0.5 ? 1 : -1; // left or right
            }
          }
        }

        // Boundary handling: wrap around or bounce cleanly within grid margins
        const margin = cellSize;
        if (p.x < -margin) {
          p.x = cols * cellSize;
          p.y = Math.floor(Math.random() * rows) * cellSize;
        } else if (p.x > cols * cellSize + margin) {
          p.x = 0;
          p.y = Math.floor(Math.random() * rows) * cellSize;
        }

        if (p.y < -margin) {
          p.y = rows * cellSize;
          p.x = Math.floor(Math.random() * cols) * cellSize;
        } else if (p.y > rows * cellSize + margin) {
          p.y = 0;
          p.x = Math.floor(Math.random() * cols) * cellSize;
        }

        // Render particle according to its type
        if (p.type === 'glowing-spark') {
          // Fading motion tail along track
          if (p.tailLength > 0) {
            const tailX = p.axis === 'x' ? p.x - p.direction * p.tailLength : p.x;
            const tailY = p.axis === 'y' ? p.y - p.direction * p.tailLength : p.y;

            const lineGrad = ctx.createLinearGradient(tailX, tailY, p.x, p.y);
            lineGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            lineGrad.addColorStop(1, 'rgba(255, 255, 255, 0.65)');

            ctx.lineWidth = 1.5;
            ctx.strokeStyle = lineGrad;
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }

          // Glowing spark head
          const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glow);
          glowGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
          glowGrad.addColorStop(0.35, 'rgba(255, 255, 255, 0.6)');
          glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.glow, 0, Math.PI * 2);
          ctx.fill();

          // Spark central core
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

        } else if (p.type === 'stone-with-halo') {
          // Moving stone with diffuse circular aura
          const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.haloSize);
          haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
          haloGrad.addColorStop(0.6, 'rgba(255, 255, 255, 0.04)');
          haloGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.haloSize, 0, Math.PI * 2);
          ctx.fill();

          // Solid stone
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

        } else if (p.type === 'twin-bead') {
          // Tandem twin beads following each other along the track
          const offset = 10;
          const bead2X = p.axis === 'x' ? p.x - p.direction * offset : p.x;
          const bead2Y = p.axis === 'y' ? p.y - p.direction * offset : p.y;

          // Bead 1 (front)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Subtle glow on bead 1
          const b1Glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
          b1Glow.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
          b1Glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = b1Glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
          ctx.fill();

          // Bead 2 (follower)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.beginPath();
          ctx.arc(bead2X, bead2Y, p.size, 0, Math.PI * 2);
          ctx.fill();

          const b2Glow = ctx.createRadialGradient(bead2X, bead2Y, 0, bead2X, bead2Y, 7);
          b2Glow.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
          b2Glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = b2Glow;
          ctx.beginPath();
          ctx.arc(bead2X, bead2Y, 7, 0, Math.PI * 2);
          ctx.fill();

        } else {
          // Standard solid gliding stone
          ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 6. Interactive cursor halo on nearest grid vertex
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const snapX = Math.round(mouse.x / cellSize) * cellSize;
        const snapY = Math.round(mouse.y / cellSize) * cellSize;

        const cursorGrad = ctx.createRadialGradient(snapX, snapY, 0, snapX, snapY, 48);
        cursorGrad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
        cursorGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(snapX, snapY, 48, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
