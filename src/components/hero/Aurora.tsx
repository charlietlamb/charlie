"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Github from "./Github";
import HeroContent from "./HeroContent";
import { BackgroundBeams } from "./BackgroundBeams";

const COLORS_TOP = ["#ADD8E6", "#B2DFEE", "#87CEFA", "#B0E0E6"];

export const Aurora = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-zinc-950 px-4 py-24 text-zinc-200"
    >
      <HeroContent color={color} />
      <Github />
      <BackgroundBeams />
    </motion.section>
  );
};
