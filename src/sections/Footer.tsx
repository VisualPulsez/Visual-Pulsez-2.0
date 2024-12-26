"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Youtube, Github, ExternalLink, Heart, MapPin } from "lucide-react";

export const Footer = () => {
  const navLinks = [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Help", href: "#" },
    { name: "Careers", href: "#" }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "Github" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.1,
      color: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hover: { 
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 }
    }
  };

  const flagColors = ["#FF9933", "#FFFFFF", "#138808"]; // Indian flag colors

  return (
    <footer className="relative bg-black text-[#BCBCBC] py-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] animate-gradient-x"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Logo Section */}
        <motion.div 
          className="flex justify-center"
          variants={logoVariants}
          whileHover="hover"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] blur opacity-70 rounded-full"></div>
            <motion.div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">VP</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Indian Identity Banner */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-gray-800">
            <motion.div 
              className="flex gap-1"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              {flagColors.map((color, index) => (
                <div
                  key={index}
                  className="w-2 h-4"
                  style={{ backgroundColor: color }}
                />
              ))}
            </motion.div>
            <span className="text-white text-sm">Proudly Made in India</span>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav 
          className="mt-10 flex flex-wrap justify-center gap-8"
          variants={itemVariants}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[#BCBCBC] hover:text-white transition-colors duration-300 text-sm font-medium"
              variants={linkVariants}
              whileHover="hover"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Social Links */}
        <motion.div 
          className="mt-10 flex justify-center gap-6"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-[#BCBCBC] hover:text-white transition-colors duration-300"
              variants={socialVariants}
              whileHover="hover"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Location and Copyright Section */}
        <motion.div 
          className="mt-10 text-center space-y-4"
          variants={itemVariants}
        >
          {/* Office Location */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4 text-[#FF9933]" />
            <span>Headquarters: Chhatrapati Sambhajinagar , Maharashtra</span>
          </motion.div>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} Visual Pulsez. All rights reserved.
          </p>
          
          <motion.div 
            className="flex items-center justify-center gap-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                }
              }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>in India</span>
          </motion.div>

          {/* Additional Links */}
          <div className="flex justify-center gap-4 text-xs">
            <motion.a 
              href="#" 
              className="hover:text-white flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
              <ExternalLink className="w-3 h-3" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;