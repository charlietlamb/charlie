"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import SoftwareStack from "./SoftwareStack";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

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
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-zinc-950 px-4 py-24 text-zinc-200"
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-4xl font-black leading-none text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
          Charlie Lamb
        </h1>
        <div className="grid max-w-[75%] grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <div className="flex w-full flex-col gap-2 lg:gap-4">
            <h2 className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-2xl font-black leading-none text-transparent sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
              Landing Pages
            </h2>
            <p className="text-center text-zinc-300">
              Landing pages that convert with Nextjs, taking the customer from
              your landing page to checkout and minimizing clicks in the
              process.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 lg:gap-4">
            <h2 className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-2xl font-black leading-none text-transparent sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
              Web Applications
            </h2>
            <p className="text-center text-zinc-300">
              Complex web applications with Nextjs capable of handling large
              user bases and heavy requests.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 lg:gap-4">
            <h2 className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-2xl font-black leading-none text-transparent sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
              Mobile Development
            </h2>
            <p className="text-center text-zinc-300">
              Modern mobile applications with React Native that are fast,
              responsive, and regularly updated
            </p>
          </div>
        </div>
        <a href="mailto:charlie@charlielamb.com">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-zinc-950/10 px-4 py-2 text-zinc-50 transition-colors hover:bg-zinc-950/50"
          >
            Get In Touch
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </a>
      </div>
      <SoftwareStack />

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
