"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star, Rocket } from "lucide-react";
import Image from "next/image";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Star and Floating Animation Variants
  const starVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const, // Explicitly cast repeatType
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const, // Explicitly cast repeatType
      },
    },
  };

  // Button Animation Variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse" as const, // Explicitly cast repeatType
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #E8EFFF 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-blue-400 opacity-20"
          variants={floatingVariants}
          animate="animate"
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-purple-400 opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Star size={60} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-40 text-pink-400 opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Sparkles size={50} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          style={{ opacity, scale }}
        >
          {/* Heading */}
          <motion.div
            variants={starVariants}
            initial="initial"
            animate="animate"
            className="inline-block mx-auto mb-6"
          >
            <Sparkles className="w-12 h-12 text-blue-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Transform your creative process and join thousands of satisfied
            users who have already taken their work to the next level.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              <span>Get Started Free</span>
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-md flex items-center gap-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
