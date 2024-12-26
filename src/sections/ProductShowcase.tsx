"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, Search, Shield, BarChart3, Share2, Layout,
  Sparkles, Stars, Zap
} from 'lucide-react';

export const ProductShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Manage and enhance your social media presence effortlessly. Boost engagement and connect with your audience on all platforms.",
      color: "from-blue-500 to-purple-600",
      accent: "bg-blue-500"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Custom Website Creation",
      description: "Create stunning, responsive websites tailored to your business needs. Enhance your online presence with a professional website.",
      color: "from-purple-500 to-pink-600",
      accent: "bg-purple-500"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Personalized Domain",
      description: "Establish a unique identity with a personalized domain name. Stand out and be easily recognizable online.",
      color: "from-indigo-500 to-blue-600",
      accent: "bg-indigo-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization (SEO)",
      description: "Optimize your website to rank higher on search engines. Attract more visitors and increase your online visibility.",
      color: "from-pink-500 to-rose-600",
      accent: "bg-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Guaranteed Results & Reach",
      description: "Experience 100% guaranteed results and expanded reach. Grow your business with proven strategies that deliver success.",
      color: "from-rose-500 to-orange-600",
      accent: "bg-rose-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Secured",
      description: "Ensure the highest level of security for your business data. Enjoy peace of mind with robust protection measures in place.",
      color: "from-green-500 to-emerald-600",
      accent: "bg-green-500"
    }
  ];

  // Floating background elements animation
  const FloatingElement = ({ children, index }) => (
    <motion.div
      animate={{
        y: [-10, 10],
        x: [-5, 5],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        delay: index * 0.5,
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );

  return (
    <section id='features' className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(120,119,198,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(120,119,198,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(120,119,198,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div className="text-center mb-16 relative">
          {[...Array(8)].map((_, i) => (
            <FloatingElement key={i} index={i}>
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            </FloatingElement>
          ))}
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 relative"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(139, 92, 246, 0.3)",
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 0px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Unleash the Power:
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Features That Transform
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Unveiling the Finest Arsenal: Power-Packed Features that Propel Your Business to New Heights!
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300">
                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: hoveredIndex === index ? [
                      `linear-gradient(0deg, transparent 50%, ${feature.accent} 50%)`,
                      `linear-gradient(360deg, transparent 50%, ${feature.accent} 50%)`
                    ] : "none",
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ opacity: 0.1 }}
                />

                {/* Icon Container with New Hover Effect */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white relative overflow-hidden`}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Shimmering effect on hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%", opacity: 0.3 }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  {feature.icon}
                  
                  {/* Sparkle effect around icon on hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Sparkles className="absolute top-0 right-0 w-3 h-3 text-white opacity-75" />
                      <Sparkles className="absolute bottom-0 left-0 w-3 h-3 text-white opacity-75" />
                      <Zap className="absolute top-0 left-0 w-3 h-3 text-white opacity-75" />
                      <Zap className="absolute bottom-0 right-0 w-3 h-3 text-white opacity-75" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Title with hover effect */}
                <motion.h3 
                  className="text-2xl font-semibold my-4 text-gray-800"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>

                {/* Corner Star - Now only rotates on hover */}
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  <Stars className={`w-6 h-6 ${feature.accent} text-white`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};