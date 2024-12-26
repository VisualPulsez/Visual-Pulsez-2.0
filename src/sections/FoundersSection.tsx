"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import Image from "next/image";
import prasad from "@/assets/prasad.jpg";
import uzair from "@/assets/uzair.jpg";
import vaishnavi from "@/assets/vaishnavi.jpg";
import shantanu from "@/assets/shantanu.jpg";

const founders = [
    {
        name: "Prasad Pawar",
        title: "Co-Founder & CEO",
        photo: prasad,
        opinion:
            "At Visual Pulsez, we help businesses unlock their full potential through creative and impactful social media strategies. From designing stunning content to running targeted ad campaigns, we ensure your brand stands out and connects with the&nbsp;right&nbsp;audience.",
        socialLink: "https://linkedin.com/in/alice",
    },
    {
        name: "Mohammad Uzair",
        title: "Co-Founder & CFO",
        photo: uzair,
        opinion:
            "At Visual Pulsez, we help businesses grow by crafting impactful media marketing strategies that resonate with their audience. By blending creativity, technology, and analytics, we drive meaningful engagement and deliver results that propel brands to new heights.",
        socialLink: "https://linkedin.com/in/bob",
    },
    {
        name: "Vaishnavi Kothawade",
        title: "Co-Founder & COO",
        photo: vaishnavi,
        opinion:
            "At Visual Pulsez, we ignite your brand's online presence through innovative social media solutions. Our experts craft compelling content, develop tailored strategies, and execute precision-driven campaigns to amplify your reach, engagement, and conversions. Let us help you captivate your audience, drive growth, and leave a lasting impression in the digital&nbsp;landscape.",
        socialLink: "https://linkedin.com/in/clara",
    },
    {
        name: "Shantanu Kulkarni",
        title: "Co-Founder & CTO",
        photo: shantanu,
        opinion:
            "Through Visual Pulsez, we empower businesses to grow by delivering innovative and engaging media marketing solutions. Our platform combines creativity with data-driven strategies to enhance brand visibility, drive customer engagement, and achieve measurable results, helping businesses thrive in the digital age.",
        socialLink: "https://linkedin.com/in/david",
    },
];

export const FoundersSection = () => {
    return (
        <div id="founders" className="w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-16 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 top-10 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-30 bottom-20 right-20 animate-pulse delay-500"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent animate-fade-in">
                        Meet Our Founders
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg animate-fade-in delay-300">
                        Learn more about the minds and hearts behind our journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-gray-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <Image
                                src={founder.photo}
                                alt={founder.name}
                                width={96} // Set a fixed width
                                height={96} // Set a fixed height
                                className="mx-auto rounded-full border-4 border-gray-100 shadow-md transition-all object-cover"
                            />

                            <h3
                                className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                            >
                                {founder.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">{founder.title}</p>
                            <blockquote className="mt-4 text-gray-700 italic">
                                &quot;{founder.opinion}&quot;
                            </blockquote>
                            <a
                                href={founder.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
