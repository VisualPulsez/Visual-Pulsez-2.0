"use client"

import acmeLogo from "@/assets/logo-acme.png";
import quantamLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return (
    <div className="relative py-8 bg-gradient-to-b from-white via-gray-50 to-white md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(0,0,0,0.05),transparent)]" />
        
        {/* Main ticker container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] animate-scroll group">
            <motion.div 
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              whileHover={{
                animationPlayState: "paused"
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-14">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="transform transition-all duration-300 hover:brightness-110"
                  >
                    <Image src={acmeLogo} alt="Acme Company Logo" className="logo-ticker-image w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="transform transition-all duration-300 hover:brightness-110"
                  >
                    <Image src={quantamLogo} alt="Quantum Technologies Logo" className="logo-ticker-image w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="transform transition-all duration-300 hover:brightness-110"
                  >
                    <Image src={echoLogo} alt="Echo Solutions Logo" className="logo-ticker-image w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="transform transition-all duration-300 hover:brightness-110"
                  >
                    <Image src={celestialLogo} alt="Celestial Systems Logo" className="logo-ticker-image w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="transform transition-all duration-300 hover:brightness-110"
                  >
                    <Image src={pulseLogo} alt="Pulse Innovations Logo" className="logo-ticker-image w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="transform transition-all duration-300 hover:brightness-110"
                  >
                    <Image src={apexLogo} alt="Apex Enterprises Logo" className="logo-ticker-image w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .logo-ticker-image {
            max-width: 100px;
          }
        }
      `}</style>
    </div>
  );
};