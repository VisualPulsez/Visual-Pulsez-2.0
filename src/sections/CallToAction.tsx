"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";
import { ArrowRight, Sparkles, Star, Rocket } from "lucide-react";
import Image from "next/image";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const starVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #E8EFFF 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-blue-400 opacity-20"
          animate={floatingVariants.animate}
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-purple-400 opacity-20"
          animate={floatingVariants.animate}
          transition={{ delay: 0.5 }}
        >
          <Star size={60} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-40 text-pink-400 opacity-20"
          animate={floatingVariants.animate}
          transition={{ delay: 1 }}
        >
          <Sparkles size={50} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity,
            scale
          }}
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              variants={starVariants}
              initial="initial"
              animate="animate"
              className="inline-block mx-auto mb-6"
            >
              <Sparkles className="w-12 h-12 text-blue-500" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Start Your Journey Today
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform your creative process and join thousands of satisfied users who have already taken their work to the next level.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started Free</span>
              </motion.button>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="mt-12 flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold"
                  >
                    {/* Placeholder for user avatars */}
                    <Image
                      src="/api/placeholder/32/32"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
              Partner with us to create <span className="font-semibold text-blue-600">impactful strategies and achieve</span> business success.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 text-blue-200 opacity-20"
        style={{ translateY }}
      >
        <Star className="w-full h-full" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 text-purple-200 opacity-20"
        style={{ translateY }}
      >
        <Sparkles className="w-full h-full" />
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;