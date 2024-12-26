
"use client";
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const ContactSection = () => {
  return (
    <div id='contact' className="w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 top-10 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-20 right-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-gray-700 mt-4 text-lg animate-fade-in delay-300">
            Reach out through any of these platforms - I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {/* Contact Information */}
          <div className="space-y-6">
            {[
              {
                Icon: Mail,
                title: 'Email',
                link: 'pulsezvisual@gmail.com',
                text: 'pulsezvisual@gmail.com',
              },
              {
                Icon: Phone,
                title: 'Phone',
                link: 'tel:+9186694833688',
                text: '+9186694833688',
              },
              {
                Icon: MapPin,
                title: 'Address',
                text: 'Khadi Road Near Himalaya Public School, Chhatrapati Sambhajinagar, Maharashtra',
              },
            ].map(({ Icon, title, link, text }, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Icon className="w-8 h-8 text-blue-600 mr-4 group-hover:text-purple-600 transition-colors" />
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {title}
                  </h3>
                  {link ? (
                    <a href={link} className="text-blue-600 hover:underline">
                      {text}
                    </a>
                  ) : (
                    <p className="text-gray-600">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols gap-6">
            {[
              { Icon: Github, href: '#github' },
              { Icon: Linkedin, href: '#linkedin' },
              { Icon: Instagram, href: '#instagram' },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="flex items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Icon className="w-10 h-10 text-gray-800 group-hover:text-blue-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


