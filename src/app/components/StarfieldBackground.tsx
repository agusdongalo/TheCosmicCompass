import { useEffect, useRef } from "react";

interface StarParticle {
  alpha: number;
  alphaDirection: 1 | -1;
  alphaSpeed: number;
  color: string;
  driftX: number;
  driftY: number;
  radius: number;
  x: number;
  y: number;
}

interface ShootingStar {
  alpha: number;
  angle: number;
  life: number;
  maxLife: number;
  speed: number;
  x: number;
  y: number;
}

const STAR_COLORS = [
  "255, 255, 255",
  "77, 208, 225",
  "179, 136, 255",
  "255, 244, 214",
];

function createStar(width: number, height: number): StarParticle {
  return createPositionedStar(width, height, Math.random() * width, Math.random() * height);
}

function createPositionedStar(width: number, height: number, x: number, y: number): StarParticle {
  const depth = Math.random();
  const radius = 0.5 + depth * 2.1;

  return {
    alpha: 0.2 + Math.random() * 0.8,
    alphaDirection: Math.random() > 0.5 ? 1 : -1,
    alphaSpeed: 0.0015 + Math.random() * 0.0045,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    driftX: (Math.random() - 0.5) * (0.16 + depth * 0.42),
    driftY: 0.08 + depth * 0.4,
    radius,
    x,
    y,
  };
}

function createStarField(width: number, height: number, starCount: number): StarParticle[] {
  const aspectRatio = width / Math.max(height, 1);
  const columns = Math.max(1, Math.ceil(Math.sqrt(starCount * aspectRatio)));
  const rows = Math.max(1, Math.ceil(starCount / columns));
  const cellWidth = width / columns;
  const cellHeight = height / rows;
  const cells: Array<{ x: number; y: number }> = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      cells.push({ x: column, y: row });
    }
  }

  for (let index = cells.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cells[index], cells[randomIndex]] = [cells[randomIndex], cells[index]];
  }

  return cells.slice(0, starCount).map((cell) => {
    const jitterX = 0.16 + Math.random() * 0.68;
    const jitterY = 0.16 + Math.random() * 0.68;
    const x = cell.x * cellWidth + jitterX * cellWidth;
    const y = cell.y * cellHeight + jitterY * cellHeight;
    return createPositionedStar(width, height, x, y);
  });
}

function createShootingStar(width: number, height: number): ShootingStar {
  return {
    alpha: 0.9,
    angle: Math.PI / (2.7 + Math.random() * 0.8),
    life: 0,
    maxLife: 56 + Math.random() * 28,
    speed: 10 + Math.random() * 5,
    x: Math.random() * width,
    y: Math.random() * (height * 0.38),
  };
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stars: StarParticle[] = [];
    const shootingStars: ShootingStar[] = [];

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let spawnCooldown = 0;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const starCount = Math.min(260, Math.max(120, Math.floor((width * height) / 9000)));

      stars.length = 0;
      stars.push(...createStarField(width, height, starCount));
    };

    const drawBackdrop = () => {
      const baseGradient = context.createLinearGradient(0, 0, 0, height);
      baseGradient.addColorStop(0, "#04050b");
      baseGradient.addColorStop(0.18, "#060912");
      baseGradient.addColorStop(0.45, "#0b1020");
      baseGradient.addColorStop(0.72, "#070b16");
      baseGradient.addColorStop(1, "#020308");
      context.fillStyle = baseGradient;
      context.fillRect(0, 0, width, height);

      const ambientGlow = context.createRadialGradient(
        width * 0.5,
        height * 0.12,
        0,
        width * 0.5,
        height * 0.12,
        width * 0.72,
      );
      ambientGlow.addColorStop(0, "rgba(255, 255, 255, 0.05)");
      ambientGlow.addColorStop(0.28, "rgba(77, 208, 225, 0.03)");
      ambientGlow.addColorStop(0.62, "rgba(179, 136, 255, 0.02)");
      ambientGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = ambientGlow;
      context.fillRect(0, 0, width, height);

      const nebulaLeft = context.createRadialGradient(
        width * 0.18,
        height * 0.22,
        0,
        width * 0.18,
        height * 0.22,
        width * 0.46,
      );
      nebulaLeft.addColorStop(0, "rgba(77, 208, 225, 0.16)");
      nebulaLeft.addColorStop(0.2, "rgba(77, 208, 225, 0.1)");
      nebulaLeft.addColorStop(0.48, "rgba(77, 208, 225, 0.045)");
      nebulaLeft.addColorStop(1, "rgba(77, 208, 225, 0)");
      context.fillStyle = nebulaLeft;
      context.fillRect(0, 0, width, height);

      const nebulaRight = context.createRadialGradient(
        width * 0.8,
        height * 0.18,
        0,
        width * 0.8,
        height * 0.18,
        width * 0.42,
      );
      nebulaRight.addColorStop(0, "rgba(179, 136, 255, 0.18)");
      nebulaRight.addColorStop(0.22, "rgba(179, 136, 255, 0.115)");
      nebulaRight.addColorStop(0.5, "rgba(179, 136, 255, 0.05)");
      nebulaRight.addColorStop(1, "rgba(179, 136, 255, 0)");
      context.fillStyle = nebulaRight;
      context.fillRect(0, 0, width, height);

      const lowerHaze = context.createRadialGradient(
        width * 0.55,
        height * 0.92,
        0,
        width * 0.55,
        height * 0.92,
        width * 0.6,
      );
      lowerHaze.addColorStop(0, "rgba(10, 15, 28, 0.16)");
      lowerHaze.addColorStop(0.45, "rgba(10, 15, 28, 0.08)");
      lowerHaze.addColorStop(1, "rgba(10, 15, 28, 0)");
      context.fillStyle = lowerHaze;
      context.fillRect(0, 0, width, height);
    };

    const drawStars = () => {
      for (const star of stars) {
        if (!reducedMotion) {
          star.x += star.driftX;
          star.y += star.driftY;
          star.alpha += star.alphaSpeed * star.alphaDirection;

          if (star.alpha >= 1 || star.alpha <= 0.15) {
            star.alphaDirection *= -1;
            star.alpha = Math.min(1, Math.max(0.15, star.alpha));
          }

          if (star.x < -10) star.x = width + 10;
          if (star.x > width + 10) star.x = -10;
          if (star.y > height + 10) {
            star.x = Math.random() * width;
            star.y = -10;
          }
        }

        context.beginPath();
        context.fillStyle = `rgba(${star.color}, ${star.alpha})`;
        context.shadowBlur = star.radius * 6;
        context.shadowColor = `rgba(${star.color}, 0.45)`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();

        if (star.radius > 1.8) {
          context.strokeStyle = `rgba(${star.color}, ${star.alpha * 0.35})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(star.x - star.radius * 3, star.y);
          context.lineTo(star.x + star.radius * 3, star.y);
          context.moveTo(star.x, star.y - star.radius * 3);
          context.lineTo(star.x, star.y + star.radius * 3);
          context.stroke();
        }
      }

      context.shadowBlur = 0;
    };

    const drawShootingStars = () => {
      if (!reducedMotion) {
        if (spawnCooldown <= 0 && shootingStars.length < 5 && Math.random() > 0.976) {
          shootingStars.push(createShootingStar(width, height));
          spawnCooldown = 16;
        } else {
          spawnCooldown -= 1;
        }
      }

      for (let index = shootingStars.length - 1; index >= 0; index -= 1) {
        const star = shootingStars[index];

        if (!reducedMotion) {
          star.life += 1;
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.alpha = 1 - star.life / star.maxLife;
        }

        if (star.alpha <= 0) {
          shootingStars.splice(index, 1);
          continue;
        }

        const tailLength = 88;
        const tailX = star.x - Math.cos(star.angle) * tailLength;
        const tailY = star.y - Math.sin(star.angle) * tailLength;
        const gradient = context.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
        gradient.addColorStop(0.4, `rgba(179, 136, 255, ${star.alpha * 0.55})`);
        gradient.addColorStop(1, "rgba(179, 136, 255, 0)");

        context.strokeStyle = gradient;
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(star.x, star.y);
        context.lineTo(tailX, tailY);
        context.stroke();
      }
    };

    const drawFrame = () => {
      drawBackdrop();
      drawStars();
      drawShootingStars();
      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    setCanvasSize();
    drawFrame();

    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />
      <div className="absolute left-[-14%] top-[-18%] h-[34rem] w-[34rem] rounded-full bg-[#4dd0e1]/10 blur-[160px]" />
      <div className="absolute right-[-10%] top-[-16%] h-[32rem] w-[32rem] rounded-full bg-[#b388ff]/12 blur-[170px]" />
      <div className="absolute left-1/2 top-[-12%] h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-white/4 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),rgba(255,255,255,0.012)_22%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,5,11,0.02),rgba(4,5,11,0.08)_42%,rgba(2,3,8,0.42)_100%)]" />
    </div>
  );
}
