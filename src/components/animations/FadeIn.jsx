import React from "react";
import * as motion from "framer-motion/client";
import { useReducedMotion } from "framer-motion";

const FadeIn = ({ children, className, style }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      style={{ position: 'relative', willChange: 'opacity', ...style }}
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
