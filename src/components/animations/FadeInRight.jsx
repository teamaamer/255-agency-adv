import React from "react";
import * as motion from "framer-motion/client";
import { useReducedMotion } from "framer-motion";

const FadeInRight = ({ children, className, style }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      style={{ position: 'relative', willChange: shouldReduceMotion ? 'auto' : 'opacity, transform', ...style }}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 100, scale: shouldReduceMotion ? 1 : 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRight;
