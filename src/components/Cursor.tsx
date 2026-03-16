"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("clickable")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    // Hide on touch devices or if not moved yet
    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="cursor-dot"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    x: position.x - 4,
                    y: position.y - 4,
                    pointerEvents: "none",
                    zIndex: 9999,
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="cursor-ring"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 1 : 0.5,
                    borderColor: isHovering ? "var(--teal)" : "var(--accent-primary)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "2px solid var(--accent-primary)",
                    pointerEvents: "none",
                    zIndex: 9998,
                    mixBlendMode: "difference",
                }}
            />
            <style jsx global>{`
        @media (hover: none) and (pointer: coarse) {
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
        }
        body {
          cursor: none;
        }
        a,
        button {
          cursor: none;
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--teal);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--teal-glow);
        }
      `}</style>
        </>
    );
}
