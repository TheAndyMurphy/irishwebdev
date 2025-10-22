
import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };
        
        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 120 // Interaction radius
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };
        
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', () => {
            resizeCanvas();
            init();
        });

        class Particle {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            
            constructor(x: number, y: number, size: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.vx = (Math.random() * 0.4) - 0.2; // Initial small random velocity
                this.vy = (Math.random() * 0.4) - 0.2;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(165, 180, 252, 0.7)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                 if (!canvas) return;

                // Interaction with mouse
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.vx += (dx / distance) * force * 0.25; // Attraction force
                        this.vy += (dy / distance) * force * 0.25;
                    }
                }

                // Apply friction
                this.vx *= 0.95;
                this.vy *= 0.95;
                
                // Add a little bit of random motion to keep them alive
                if (Math.abs(this.vx) < 0.1 && Math.abs(this.vy) < 0.1) {
                    this.vx += (Math.random() * 0.4) - 0.2;
                    this.vy += (Math.random() * 0.4) - 0.2;
                }

                // Update position
                this.x += this.vx;
                this.y += this.vy;

                // Screen wrapping
                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.x < -this.size) this.x = canvas.width + this.size;
                if (this.y > canvas.height + this.size) this.y = -this.size;
                if (this.y < -this.size) this.y = canvas.height + this.size;
            }
        }
        
        let particlesArray: Particle[] = [];
        
        const init = () => {
            if (!canvas) return;
            particlesArray = [];
            let numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 85);

            for (let i = 0; i < numberOfParticles; i++) {
                let size = Math.random() * 2 + 1;
                let x = Math.random() * (canvas.width - size * 2) + size;
                let y = Math.random() * (canvas.height - size * 2) + size;
                particlesArray.push(new Particle(x, y, size));
            }
        };

        const connect = () => {
            if (!ctx) return;
            let opacityValue = 1;
            const connectionDistance = 140;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = Math.sqrt(
                        Math.pow(particlesArray[a].x - particlesArray[b].x, 2) +
                        Math.pow(particlesArray[a].y - particlesArray[b].y, 2)
                    );

                    if (distance < connectionDistance) {
                        opacityValue = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(129, 140, 248, ${opacityValue * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if(!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        // Initial setup
        resizeCanvas();
        init();
        animate();

        return () => {
            if (canvas) {
              canvas.removeEventListener('mousemove', handleMouseMove);
              canvas.removeEventListener('mouseleave', handleMouseLeave);
            }
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticleBackground;
