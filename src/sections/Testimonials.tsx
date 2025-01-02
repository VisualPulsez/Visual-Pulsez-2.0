"use client"


import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef } from "react";
import Mimage from "@/assets/male.jpeg"
import Fimage from "@/assets/female.jpeg"
const testimonials = [
  {
    text: "Thanks to Visual Pulsez, our cafe is now the go-to spot in town. Their creative social media strategies have increased our footfall and made us a favorite among locals.",
    imageSrc: Mimage,
    name: "Ravi Malhotra",
    username: "@raviscafe",
    designation: "Owner, Cozy Cafe"
  },
  {
    text: "Visual Pulsez helped us transform our small bakery into an online sensation. Their digital marketing efforts have boosted our sales and attracted customers from neighboring areas.",
    imageSrc: Fimage,
    name: "Anjali Verma",
    username: "@anjalibakes",
    designation: "Founder, Sweet Cravings Bakery"
  },
  {
    text: "Our supermarket's digital presence was nonexistent until we partnered with Visual Pulsez. Their targeted campaigns and creative content have made us a household name in our community.",
    imageSrc: Mimage,
    name: "Manoj Patel",
    username: "@manojsupershop",
    designation: "Owner, Patel Supermarket"
  },
  {
    text: "Visual Pulsez gave our restaurant a new lease on life by bringing us into the digital era. Their engaging social media content has doubled our weekend reservations.",
    imageSrc: Fimage,
    name: "Kavita Nair",
    username: "@nairfoodies",
    designation: "Manager, Spice Villa"
  },
  {
    text: "We run a small flower shop, and Visual Pulsez has helped us connect with customers online like never before. Their work has brought us visibility and loyal customers.",
    imageSrc: Fimage,
    name: "Neha Singh",
    username: "@nehasblooms",
    designation: "Owner, Bloom & Petal"
  },
  {
    text: "Our bookstore now gets more visitors than ever, thanks to Visual Pulsez's creative campaigns. They made us realize how powerful a strong online presence can be.",
    imageSrc: Mimage,
    name: "Arjun Khanna",
    username: "@arjunreads",
    designation: "Owner, Tales & Chapters Bookstore"
  },
  {
    text: "As a local grocery shop, we never imagined we’d have an online presence. Visual Pulsez not only made it possible but also brought us a steady increase in online orders.",
    imageSrc: Mimage,
    name: "Suresh Yadav",
    username: "@sureshgrocery",
    designation: "Owner, Fresh Basket"
  },
  {
    text: "Our small restaurant gained a lot of traction after Visual Pulsez revamped our digital strategy. Their creative marketing has made us a must-visit spot in town.",
    imageSrc: Fimage,
    name: "Farah Ahmed",
    username: "@farahscuisine",
    designation: "Owner, Farah &apos;s Kitchen"
  },
  {
    text: "Visual Pulsez has helped us create a brand identity online that resonates with our local audience. Their expertise has brought our clothing store into the spotlight.",
    imageSrc: Mimage,
    name: "Aditya Mehta",
    username: "@adityafashion",
    designation: "Owner, Mehta Fashions"
  }
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
type Testimonial = {
  text: string;
  imageSrc: string | StaticImageData; // Allow both string and StaticImageData types
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

