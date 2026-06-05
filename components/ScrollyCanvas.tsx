"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 51;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isPreloaded, setIsPreloaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (0-74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        // Matching the confirmed filename pattern: frame_##_delay-0.066s.webp
        img.src = `/sequence/frame_${i.toString().padStart(2, "0")}_delay-0.066s.webp`;
        promises.push(
          new Promise((resolve) => {
            img.onload = () => resolve(img);
            img.onerror = () => resolve(img); // Avoid hanging if one fails
          })
        );
        loadedImages.push(img);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsPreloaded(true);
    };

    preloadImages();
  }, []);

  const renderCanvas = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = images[Math.floor(index)];
    if (!img || !img.complete) return;

    const canvas = canvasRef.current;
    
    // Object-fit: cover logic
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, newWidth, newHeight);
  };

  useEffect(() => {
    const updateCanvas = () => {
      renderCanvas(frameIndex.get());
    };

    const unsubscribe = frameIndex.on("change", updateCanvas);
    
    // Initial render
    if (isPreloaded) {
       updateCanvas();
    }

    return () => unsubscribe();
  }, [frameIndex, isPreloaded, images]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderCanvas(frameIndex.get());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isPreloaded, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
        />
        {!isPreloaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] text-white">
             <div className="mb-4 h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/3 animate-[loading_1s_infinite] bg-white" />
             </div>
             <div className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-40">
                Loading Sequence
             </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
