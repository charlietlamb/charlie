"use client";

import React from "react";
import { motion, MotionValue, useMotionTemplate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HeroContent({ color }: { color: MotionValue<string> }) {
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <div className="relative z-10 flex flex-col items-center gap-8">
      <div className="relative">
        <h1 className="bg-gradient-to-b from-zinc-200 to-zinc-300 bg-clip-text text-center text-4xl font-medium leading-none text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
          Charlie Lamb
        </h1>
      </div>
      <div className="grid max-w-[75%] grid-cols-1 items-center gap-8 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-2 lg:gap-4">
          <h2 className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-2xl font-black leading-none text-transparent sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
            Landing Pages
          </h2>
          <p className="text-center text-zinc-300">
            Landing pages that convert with Nextjs, taking the customer from
            your landing page to checkout and minimizing clicks in the process.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 lg:gap-4">
          <h2 className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-2xl font-black leading-none text-transparent sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
            Web Applications
          </h2>
          <p className="text-center text-zinc-300">
            Complex web applications with Nextjs capable of handling large user
            bases and heavy requests.
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
      <a href="mailto:charlie@charlielamb.com" className="cursor-pointer">
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
  );
}
