"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Diamond,
  Rocket,
  TrendingUp,
  Zap,
  Star,
  ArrowRight,
  Globe,
  Instagram,
  Play,
} from "lucide-react";

const pricingTiers = [
  {
    title: "Silver",
    subtitle: "For starters",
    monthlyPrice: "4,999",
    buttonText: "Choose Silver",
    icon: <Star className="w-6 h-6" />,
    gradient: "from-gray-400 via-gray-300 to-gray-400",
    features: [
      { text: "10 Reels + 10 Posts", icon: <Instagram className="w-5 h-5" /> },
      { text: "Social Media Management", icon: <Globe className="w-5 h-5" /> },
      { text: "10k+ Views", icon: <TrendingUp className="w-5 h-5" /> },
    ],
  },
  {
    title: "Gold",
    subtitle: "For growing brands",
    monthlyPrice: "9,999",
    buttonText: "Choose Gold",
    icon: <Crown className="w-6 h-6" />,
    gradient: "from-amber-500 via-yellow-400 to-amber-500",
    features: [
      { text: "10 Reels + 15 Posts", icon: <Instagram className="w-5 h-5" /> },
      { text: "Social Media Management", icon: <Globe className="w-5 h-5" /> },
      { text: "50K+ Views", icon: <TrendingUp className="w-5 h-5" /> },
      { text: "Templated Website", icon: <Rocket className="w-5 h-5" /> },
    ],
  },
  {
    title: "Platinum",
    subtitle: "For professionals",
    monthlyPrice: "14,999",
    buttonText: "Choose Platinum",
    popular: true,
    icon: <Diamond className="w-6 h-6" />,
    gradient: "from-slate-500 via-slate-400 to-slate-500",
    features: [
      { text: "15 Reels + 15 Posts", icon: <Instagram className="w-5 h-5" /> },
      { text: "Social Media Management", icon: <Globe className="w-5 h-5" /> },
      { text: "100K+ Views", icon: <TrendingUp className="w-5 h-5" /> },
      {
        text: "Personalized Website For 1 Year!",
        icon: <Rocket className="w-5 h-5" />,
      },
      { text: "Personalized Domain", icon: <Globe className="w-5 h-5" /> },
    ],
  },
];

export const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your social media presence with our premium packages
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="w-full"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`h-full relative overflow-hidden rounded-3xl p-8 bg-white ${
                  tier.popular
                    ? "bg-gradient-to-br from-purple-900 to-purple-700 text-white"
                    : "bg-white"
                } shadow-lg border-2 ${
                  tier.popular ? "border-purple-400" : "border-gray-100"
                }`}
              >
                <div className="relative z-10">
                  <div
                    className={`p-3 rounded-xl inline-block bg-gradient-to-br ${tier.gradient} text-white mb-4`}
                  >
                    {tier.icon}
                  </div>
                  <h3
                    className={`text-3xl font-bold ${
                      tier.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={`text-sm mt-2 ${
                      tier.popular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                  <div className="mt-6 mb-8">
                    <div className="flex items-baseline">
                      <span className="text-lg">₹</span>
                      <span
                        className={`text-5xl font-bold ${
                          tier.popular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tier.monthlyPrice}
                      </span>
                      <span
                        className={`text-sm ml-2 ${
                          tier.popular ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span
                          className={`${
                            tier.popular
                              ? "text-purple-300"
                              : "text-purple-500"
                          }`}
                        >
                          {feature.icon}
                        </span>
                        <span
                          className={`${
                            tier.popular ? "text-gray-200" : "text-gray-600"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-white text-purple-900 hover:bg-gray-100"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    {tier.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;