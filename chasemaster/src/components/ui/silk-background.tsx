"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from "next-themes";

export const SilkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // alpha: false for slight performance boost
    if (!ctx) return;

    let time = 0;
    const speed = 0.02;
    const scale = 2;
    const noiseIntensity = 0.8;

    // Use lower resolution for better performance (it will be scaled up by CSS)
    const resolution = 0.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * resolution;
      canvas.height = window.innerHeight * resolution;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple noise function
    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const isDark = resolvedTheme === "dark";

    // Colors
    // Blue for light mode
    // Black/Dark gray for dark mode
    const baseR = isDark ? 20 : 59;
    const baseG = isDark ? 20 : 130;
    const baseB = isDark ? 25 : 246;

    const animate = () => {
      const { width, height } = canvas;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (isDark) {
        gradient.addColorStop(0, '#050505');
        gradient.addColorStop(0.5, '#0a0a0a');
        gradient.addColorStop(1, '#050505');
      } else {
        gradient.addColorStop(0, '#f0f9ff'); // sky-50
        gradient.addColorStop(0.5, '#e0f2fe'); // sky-100
        gradient.addColorStop(1, '#f0f9ff');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Create silk-like pattern
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      
      // Step size for performance
      const step = 2;

      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;
          
          const tOffset = speed * time;
          let tex_x = u;
          let tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern = 0.6 + 0.4 * Math.sin(
            5.0 * (tex_x + tex_y + 
              Math.cos(3.0 * tex_x + 5.0 * tex_y) + 
              0.02 * tOffset) +
            Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
          );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - rnd / 15.0 * noiseIntensity);
          
          // Color
          const r = Math.floor(baseR * intensity);
          const g = Math.floor(baseG * intensity);
          const b = Math.floor(baseB * intensity);
          
          // Apply to all pixels in the step block
          for (let dx = 0; dx < step; dx++) {
            for (let dy = 0; dy < step; dy++) {
              if (x + dx < width && y + dy < height) {
                const index = ((y + dy) * width + (x + dx)) * 4;
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
                data[index + 3] = 255;
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Add subtle overlay for depth
      const overlayGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      if (isDark) {
        overlayGradient.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
        overlayGradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
      } else {
        overlayGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        overlayGradient.addColorStop(1, 'rgba(255, 255, 255, 0.6)');
      }
      
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [resolvedTheme, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="w-full h-full object-cover opacity-60 dark:opacity-40 blur-[1px]"
      />
    </div>
  );
};
