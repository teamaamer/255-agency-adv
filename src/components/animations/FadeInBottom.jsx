import React from "react";
import * as motion from "framer-motion/client";
import { useReducedMotion } from "framer-motion";

const FadeInBottom = ({ children, className, style }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      style={{ position: 'relative', willChange: shouldReduceMotion ? 'auto' : 'opacity, transform', ...style }}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 50, scale: shouldReduceMotion ? 1 : 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInBottom;
