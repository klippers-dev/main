import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle Config
    const particleCount = Math.min(100, (window.innerWidth * window.innerHeight) / 10000);
    const maxDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Soft glowing nodes
        ctx.shadowBlur = 10;
        ctx.shadowColor = isDark ? '#64ffda' : '#00bfff';
        ctx.fillStyle = isDark ? '#64ffda' : '#00bfff';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Fade line opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = isDark ? `rgba(100, 255, 218, ${opacity * 0.5})` : `rgba(0, 191, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        if (mouse.x != null && mouse.y != null) {
          const dxMouse = particles[i].x - mouse.x;
          const dyMouse = particles[i].y - mouse.y;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          
          if (distanceMouse < maxDistance * 1.5) {
             ctx.beginPath();
             ctx.moveTo(particles[i].x, particles[i].y);
             ctx.lineTo(mouse.x, mouse.y);
             const opacity = 1 - (distanceMouse / (maxDistance * 1.5));
             ctx.strokeStyle = isDark ? `rgba(100, 255, 218, ${opacity * 0.8})` : `rgba(0, 191, 255, ${opacity * 0.8})`;
             ctx.lineWidth = 1.5;
             ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
};

export default AnimatedBackground;
