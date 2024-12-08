import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Scrolling() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0 0",
        height: "5px",
        backgroundColor: "#3498db",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    />
  );
}
