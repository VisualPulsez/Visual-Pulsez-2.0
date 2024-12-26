"use client"


import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef } from "react";
const testimonials = [
  {
    text: "Visual Pulsez has revolutionized how our design studio approaches client projects. The intuitive interface perfectly blends traditional Indian design elements with modern functionality.",
    imageSrc: "/api/placeholder/40/40",
    name: "Priya Sharma",
    username: "@priyathedesigner",
    designation: "Creative Director, Design Studios Mumbai"
  },
  {
    text: "Being a UI/UX designer from Bangalore, I've used many tools, but Visual Pulsez stands out for its attention to detail and smooth workflow management.",
    imageSrc: "/api/placeholder/40/40",
    name: "Arjun Mehta",
    username: "@arjunmehta_designs",
    designation: "Senior UX Designer"
  },
  {
    text: "The AI-powered features in Visual Pulsez have helped our startup deliver projects 40% faster. It's a game-changer for the Indian tech ecosystem.",
    imageSrc: "/api/placeholder/40/40",
    name: "Kavita Reddy",
    username: "@kavitacreates",
    designation: "Founder, TechArt Solutions"
  },
  {
    text: "As a freelancer working with global clients, Visual Pulsez helps me maintain consistency and quality across all my design projects.",
    imageSrc: "/api/placeholder/40/40",
    name: "Rajesh Iyer",
    username: "@rajeshcreative",
    designation: "Independent Design Consultant"
  },
  {
    text: "The integration of Indian typography and design patterns in Visual Pulsez makes it perfect for creating culturally relevant designs.",
    imageSrc: "/api/placeholder/40/40",
    name: "Neha Gupta",
    username: "@nehagupta_art",
    designation: "Art Director"
  },
  {
    text: "Visual Pulsez's collaboration features have made it easier for our pan-India team to work seamlessly on complex design projects.",
    imageSrc: "/api/placeholder/40/40",
    name: "Aditya Patel",
    username: "@adidesigns",
    designation: "Design Team Lead"
  },
  {
    text: "The localization features in Visual Pulsez are outstanding. Perfect for creating designs that resonate with both global and local audiences.",
    imageSrc: "/api/placeholder/40/40",
    name: "Zara Khan",
    username: "@zarakreates",
    designation: "Brand Designer"
  },
  {
    text: "Being able to seamlessly switch between Indian and global design systems has made Visual Pulsez an essential tool in our agency.",
    imageSrc: "/api/placeholder/40/40",
    name: "Vikram Singh",
    username: "@vikramdesigns",
    designation: "Creative Head"
  },
  {
    text: "The responsiveness and support from the Visual Pulsez team is exceptional. They truly understand the needs of Indian designers.",
    imageSrc: "/api/placeholder/40/40",
    name: "Ananya Desai",
    username: "@ananyaarts",
    designation: "UI Designer"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
  designation: string;
};


const TestimonialCard: React.FC<Testimonial> = ({ text, imageSrc, name, username, designation }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
    id="testimonial"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div className="text-gray-800 mb-6 text-lg leading-relaxed font-medium">
        &quot;{text}&quot;
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={imageSrc}
              alt={name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-500 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">{name}</div>
            <div className="text-blue-600 font-medium">{username}</div>
            <div className="text-sm text-gray-700 font-medium mt-1">{designation}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

type TestimonialsColumnProps = {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
};
const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({ className = "", testimonials, duration = 15 }) => {
    const controls = useAnimationControls();
  const [height, setHeight] = useState(0);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (columnRef.current) {
      setHeight(columnRef.current.scrollHeight / 2);
    }
  }, []);

  useEffect(() => {
    controls.start({
      y: -height,
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    });
  }, [controls, height, duration]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      y: -height,
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    });
  };

  return (
    <div 
      className={`${className} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: '738px' }}
    >
      <motion.div
        ref={columnRef}
        animate={controls}
        className="flex flex-col gap-8 pb-2"
      >
        {[...new Array(2)].map((_, index) => (
          <div key={index} className="space-y-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-base font-semibold">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mt-8 text-gray-900 tracking-tight"
          >
            Trusted by Creative Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700 mt-6 text-xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Empowering Indian designers and creative professionals with cutting-edge tools for exceptional digital experiences.
          </motion.p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={25}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;