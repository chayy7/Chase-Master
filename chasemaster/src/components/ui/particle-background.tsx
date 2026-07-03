"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Blaster {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let blasters: Blaster[] = [];
    
    const blasterCount = 8;   // Increased blasters since particles are gone

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBlasters();
    };

    const initBlasters = () => {
      blasters = [];
      for (let i = 0; i < blasterCount; i++) {
        createBlaster(true);
      }
    };

    const createBlaster = (randomizeY = false) => {
      const angle = Math.PI / 4; // 45 degrees
      blasters.push({
        x: Math.random() * canvas.width * 1.5,
        y: randomizeY ? Math.random() * canvas.height : -100,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 4,
        angle: angle,
        opacity: Math.random() * 0.5 + 0.2,
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const isDark = resolvedTheme === "dark";
    
    const blasterColor = isDark ? "rgba(200, 220, 255, " : "rgba(59, 130, 246, ";

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Draw Blasters (Shooting Stars) ---
      for (let i = blasters.length - 1; i >= 0; i--) {
        const b = blasters[i];
        
        ctx.beginPath();
        const endX = b.x - Math.cos(b.angle) * b.length;
        const endY = b.y - Math.sin(b.angle) * b.length;
        
        const grad = ctx.createLinearGradient(b.x, b.y, endX, endY);
        grad.addColorStop(0, blasterColor + b.opacity + ")");
        grad.addColorStop(1, blasterColor + "0)");
        
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Move blaster
        b.x += Math.cos(b.angle) * b.speed;
        b.y += Math.sin(b.angle) * b.speed;

        // Remove and recreate if off-screen
        if (b.x > canvas.width + 200 || b.y > canvas.height + 200) {
          blasters.splice(i, 1);
          createBlaster(false);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-50">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
