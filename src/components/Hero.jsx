import React, { useState } from "react";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "./Slider";

const juices = [
  {
    title: "ORANGE CREAM",
    desc: "Smooth orange cream blended with bold fizz.",
    bg: "/images/i1-bg.png",
    img: "/images/i1.png",
    bgColor: "#8a3b00",
  },
  {
    title: "COKE LIME",
    desc: "Zesty lime twist with refreshing cola.",
    bg: "/images/i2-bg.png",
    img: "/images/i2.png",
    bgColor: "#1f4d2b",
  },
  {
    title: "COKE RASPBERRY",
    desc: "Sweet raspberry burst meets classic fizz.",
    bg: "/images/i3-bg.png",
    img: "/images/i3.png",
    bgColor: "#7a1433",
  },
  {
    title: "COKE MANGO",
    desc: "Tropical mango splash with bold cola.",
    bg: "/images/i4-bg.png",
    img: "/images/i4.png",
    bgColor: "#c94f0f",
  },
  {
    title: "CHERRY COKE",
    desc: "Rich cherry flavor blended perfectly.",
    bg: "/images/i5-bg.png",
    img: "/images/i5.png",
    bgColor: "#7b0f1a",
  },
  {
    title: "COKE APPLE",
    desc: "Juicy apple twist with classic fizz.",
    bg: "/images/i6-bg.png",
    img: "/images/i6.png",
    bgColor: "#8b1a1a",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % juices.length);
  };

  const juice = juices[current];

  return (
    <div className="hero-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={juice.title}
          className="bg-circle"
          initial={{ scale: 0 }}
          animate={{ scale: 15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundColor: juice.bgColor }}
        />
      </AnimatePresence>

      <div className="hero">
        <div
          className="semi-circle"
          style={{ backgroundImage: `url(${juice.bg})` }}
        ></div>

        <div className="hero-center">
          <motion.div
            key={juice.title + "-text"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{juice.title}</h1>
            <p>{juice.desc}</p>
            <button>BUY NOW</button>
          </motion.div>
        </div>

        <div className="hero-right">
          <Slider
            index={current}
            juices={juices}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;