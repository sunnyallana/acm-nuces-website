import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

const WavyBackground = ({
  children,
  className,
  containerClassName,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef(null);
  const wRef = useRef(window.innerWidth);
  const hRef = useRef(window.innerHeight);
  let nt = 0;
  let ctx;

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.0015;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    ctx.filter = `blur(${blur}px}`;
    wRef.current = ctx.canvas.width = window.innerWidth;
    hRef.current = ctx.canvas.height = window.innerHeight;
    render();
  };

  const waveColors = ["#e5d9cb", "#227ebd"];

  const drawWave = (n) => {
    nt += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 150; 
        ctx.lineTo(x, y + hRef.current * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.fillStyle = "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(2); // Reduced number of waves
    animationId = requestAnimationFrame(render);
  };

  const handleResize = () => {
    wRef.current = window.innerWidth;
    hRef.current = window.innerHeight;
    ctx.canvas.width = wRef.current;
    ctx.canvas.height = hRef.current;
    ctx.filter = `blur(${blur}px)`;
  };

  useEffect(() => {
    init();
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`h-screen w-full overflow-hidden flex flex-col items-center justify-center ${containerClassName}`}>
      <canvas
        className="absolute top-0 left-0 z-0 w-full h-full"
        ref={canvasRef}
        style={{ display: 'block' }}
      />
      <div className={`relative z-10 ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;
