import { useRef, useEffect, useCallback } from "react";

const AnimatedOrb = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);

    const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
        ctx.clearRect(0, 0, width, height);

        const cx = width * 0.65;
        const cy = height * 0.45;
        const radius = Math.min(width, height) * 0.35;
        const rings = 14;
        const pointsPerRing = 32;

        ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
        ctx.lineWidth = 0.8;

        // Horizontal rings (latitude)
        for (let r = 0; r < rings; r++) {
            const phi = (Math.PI * (r + 1)) / (rings + 1);
            ctx.beginPath();
            for (let p = 0; p <= pointsPerRing; p++) {
                const theta = (2 * Math.PI * p) / pointsPerRing + time * 0.3;
                const x = cx + radius * Math.sin(phi) * Math.cos(theta);
                const y = cy + radius * Math.cos(phi);
                const z = radius * Math.sin(phi) * Math.sin(theta);

                // Simple perspective
                const perspective = 1 + z / (radius * 3);
                const px = cx + (x - cx) * perspective;
                const py = cy + (y - cy) * perspective;

                if (p === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
        }

        // Vertical rings (longitude)
        for (let r = 0; r < rings; r++) {
            const theta = (2 * Math.PI * r) / rings + time * 0.3;
            ctx.beginPath();
            for (let p = 0; p <= pointsPerRing; p++) {
                const phi = (Math.PI * p) / pointsPerRing;
                const x = cx + radius * Math.sin(phi) * Math.cos(theta);
                const y = cy + radius * Math.cos(phi);
                const z = radius * Math.sin(phi) * Math.sin(theta);

                const perspective = 1 + z / (radius * 3);
                const px = cx + (x - cx) * perspective;
                const py = cy + (y - cy) * perspective;

                if (p === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
        }

        // Outer glow
        const gradient = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.2);
        gradient.addColorStop(0, "rgba(120, 120, 180, 0.04)");
        gradient.addColorStop(0.5, "rgba(100, 100, 160, 0.02)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = parent.clientWidth * dpr;
            canvas.height = parent.clientHeight * dpr;
            canvas.style.width = parent.clientWidth + "px";
            canvas.style.height = parent.clientHeight + "px";
            ctx.scale(dpr, dpr);
        };

        resize();
        window.addEventListener("resize", resize);

        let startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = (now - startTime) / 1000;
            const parent = canvas.parentElement;
            if (parent) {
                draw(ctx, parent.clientWidth, parent.clientHeight, elapsed);
            }
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 1 }}
        />
    );
};

export default AnimatedOrb;
