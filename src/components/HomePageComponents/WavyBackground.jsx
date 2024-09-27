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
  let w, h, nt, i, x, ctx;

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
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      render();
    };
    render();
  };

  const waveColors = ["#e5d9cb", "#227ebd"];

  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 150; // Changed from 100 to 150
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };
  

  let animationId;
  const render = () => {
    ctx.fillStyle = "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
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