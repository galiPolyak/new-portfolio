'use client';

import { useEffect, useRef } from 'react';

// Bubble class definition
class Bubble {
  x: number;
  y: number;
  velX: number;
  velY: number;
  radius: number;
  bubbleImageIndex: number;

  constructor(
    x: number,
    y: number,
    velX: number,
    velY: number,
    radius: number,
    bubbleImageIndex: number
  ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.radius = radius;
    this.bubbleImageIndex = bubbleImageIndex;
  }

  update(
    canvas: HTMLCanvasElement,
    c: CanvasRenderingContext2D,
    mouse: { x?: number; y?: number },
    gravity: number,
    yFriction: number,
    xFriction: number,
    bubbleImages: HTMLImageElement[]
  ) {
    if (this.y + this.radius + this.velY > canvas.height) {
      this.velY = -this.velY * yFriction;
    } else {
      this.velY += gravity;
    }

    if (this.x + this.radius + this.velX > canvas.width || 
        this.x - this.radius + this.velX < 0) {
      this.velX = -this.velX * xFriction;
    }

    if (mouse.x && mouse.y &&
        mouse.x > (this.x - this.radius) && mouse.x < (this.x + this.radius) &&
        mouse.y > (this.y - this.radius) && mouse.y < (this.y + this.radius)) {
      this.velX = randomIntInRange(-10, 10);
      this.velY = -15;
    }

    this.x += this.velX;
    this.y += this.velY;

    this.draw(c, bubbleImages);
  }

  draw(c: CanvasRenderingContext2D, bubbleImages: HTMLImageElement[]) {
    c.drawImage(bubbleImages[this.bubbleImageIndex], this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

// Helper function
function randomIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const BubbleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    const imageSources = ['images/bubbleImg.png', 'images/bubbleImg2.png', 'images/bubbleImg3.png'];
    const bubbleImages: HTMLImageElement[] = imageSources.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined
    };

    let gravity = 0.6;
    let yFriction = 0.75;
    let xFriction = 0.75;

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }
    });

    let bubbleArray: Bubble[] = [];

    function init() {
      bubbleArray = [];
      for (let i = 0; i < 130; i++) {
        let radius = randomIntInRange(40, 130);
        let x = randomIntInRange(radius, (canvas as any).width - radius);
        let y = randomIntInRange(0, (canvas as any).height - radius);
        let velX = randomIntInRange(-4, 4);
        let velY = randomIntInRange(-4, 4);
        let bubbleImageIndex = randomIntInRange(0, bubbleImages.length - 1);
        bubbleArray.push(new Bubble(x, y, velX, velY, radius, bubbleImageIndex));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      (c as any).clearRect(0, 0, (canvas as any).width, (canvas as any).height);

      bubbleArray.forEach(bubble => {
        bubble.update((canvas as any), (c as any), mouse, gravity, yFriction, xFriction, bubbleImages);
      });
    }

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        padding: 0, // Ensure no padding
        margin: 0,  // Ensure no margin
      }}
    />
  );
};

export default BubbleAnimation;
