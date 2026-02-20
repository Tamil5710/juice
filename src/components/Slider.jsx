import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";

const juices = [
  "/images/i6.png",
  "/images/i1.png",
  "/images/i2.png",
  "/images/i3.png",
  "/images/i4.png",
  "/images/i5.png",
];

const Slider = ({ index, onNext }) => {
  const current = juices[index % juices.length];

  return (
    <div className="slider-container">
      <div className="slider">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={current}
            alt="juice"
            className="bottle"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -150, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <button className="next-btn" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;