import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGE_PATHS = [
  "/images/Group 1.png",
  "/images/Group 2.png",
  "/images/Group 3.png",
  "/images/Group 5.png",
  "/images/Group 8.png",
  "/images/Group 9.png",
  "/images/Group 11.png",
  "/images/Group 12.png",
  "/images/Group 13.png",
];

interface ImagePosition {
  id: number;
  x: number;
  y: number;
  imageIndex: number;
}

function CursorImages() {
  const [images, setImages] = useState<ImagePosition[]>([]);
  const imageCounterRef = useRef(0);
  const lastMouseMoveRef = useRef(0);
  const throttleDelay = 50; // Delay between image spawns (ms) - higher frequency

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle image creation to avoid too many images
      if (now - lastMouseMoveRef.current < throttleDelay) {
        return;
      }
      
      lastMouseMoveRef.current = now;

      // Create a new image that follows the cursor
      const imageIndex = imageCounterRef.current % IMAGE_PATHS.length;
      const imagePath = IMAGE_PATHS[imageIndex];
      
      // Safety check: ensure we have a valid image path
      if (!imagePath) {
        return;
      }

      const newImage: ImagePosition = {
        id: imageCounterRef.current,
        x: e.clientX,
        y: e.clientY,
        imageIndex: imageIndex,
      };

      setImages((prev) => {
        // Keep only the last 5 images visible at a time
        const updated = [...prev, newImage];
        return updated.slice(-5);
      });
      
      imageCounterRef.current += 1;

      // Remove the image after full animation completes (1.5s total)
      setTimeout(() => {
        setImages((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <AnimatePresence>
        {images.map((img) => {
          const imagePath = IMAGE_PATHS[img.imageIndex];
          if (!imagePath) return null;
          
          return (
            <motion.div
              key={img.id}
              className="absolute"
              style={{
                left: img.x,
                top: img.y,
                transform: "translate(-50%, -50%)", // Center the image on cursor
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.8],
              }}
              exit={{}}
              transition={{
                duration: 1,
                times: [0, 0.1, 0.5, 1], // Quick fade in, long hold, quick fade out
                ease: "easeInOut",
              }}
            >
              <img
                src={imagePath}
                alt={`Work ${img.imageIndex + 1}`}
                width={200}
                height={200}
                className="object-contain"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default CursorImages;
