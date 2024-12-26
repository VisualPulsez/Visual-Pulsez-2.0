"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ChevronRight, Sparkles, ArrowRight, Mouse } from "lucide-react";
import vpLogo from "@/assets/vplogo.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      if (isMobile) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const features = [
    "Comprehensive Brand Strategy",
    "Digital Presence Optimization",
    "Creative Content Creation",
    "SEO Optimization",
    "Cross-Platform Promotion",
  ];

  const [currentFeature, setCurrentFeature] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
    id="about"
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: [0, Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100)],
              y: [0, Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100)],
              scale: [1, Math.random() * 1.5 + 0.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Version 2.0 is here</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
              style={isClient ? {
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transform: isMobile ? "none" : `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              } : {}}
            >
              Visual
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Pulsez
              </span>
            </motion.h1>
               {/* Features animation */}
            <motion.div
              className="mt-12 h-12 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                key={currentFeature}
                className="text-xl md:text-2xl font-bold text-white/90 absolute"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {features[currentFeature]}
              </motion.div>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Visual Pulsez is your one-stop solution for brand promotion, helping you establish a strong digital presence and make your brand accessible to everyone online.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 rounded-lg bg-white text-purple-600 font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                Get Started Free
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-bold border border-white/20 hover:bg-white/20 transition-all w-full sm:w-auto text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </div>

           
          </motion.div>

          {/* Right content column */}
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0"
            style={isClient ? {
              perspective: 1000,
            } : {}}
          >
            {/* Main logo container */}
            <motion.div
              className="absolute inset-0  rounded-2xl backdrop-blur-xl "
              style={isClient ? {
                transform: isMobile ? "none" : `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
              } : {}}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-full h-full relative p-8"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Image
                  src={vpLogo}
                  alt="Visual Pulsez Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Decorative images */}
            <motion.div
              className="absolute -top-20 -left-20 w-32 sm:w-40 md:w-48 z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={cylinderImage}
                alt="Cylinder Element"
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-24 -right-24 w-32 sm:w-40 md:w-48 z-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -20, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={noodleImage}
                alt="Noodle Element"
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 text-center">
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Mouse className="w-6 h-6" />
          <p className="text-sm font-medium">Scroll Down</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
