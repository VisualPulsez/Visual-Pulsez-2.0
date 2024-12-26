"use client";
import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Upload, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  Camera,
  Sparkles,
  CheckCircle2,
  Heart,
  Award,
  ThumbsUp
} from "lucide-react";

const starDescriptions = {
  1: { text: "Could be better", icon: <ThumbsUp className="w-5 h-5" /> },
  2: { text: "It's okay", icon: <ThumbsUp className="w-5 h-5" /> },
  3: { text: "Pretty good!", icon: <Heart className="w-5 h-5" /> },
  4: { text: "Really great!", icon: <Sparkles className="w-5 h-5" /> },
  5: { text: "Absolutely amazing!", icon: <Award className="w-5 h-5" /> }
};

export const AnimatedReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [imagePreview, setImagePreview] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    review: "",
    github: "",
    twitter: "",
    linkedin: "",
    instagram: ""
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.review) {
      alert("Please fill out all required fields.");
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const inputClasses =
    "w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 text-lg shadow-sm";

  const labelClasses = "block text-gray-700 text-sm font-semibold mb-2";

  const socialInputs = [
    { icon: <Github />, placeholder: "Github Username", key: "github", label: "GitHub Profile" },
    { icon: <Twitter />, placeholder: "Twitter Handle", key: "twitter", label: "Twitter Handle" },
    { icon: <Linkedin />, placeholder: "LinkedIn Profile", key: "linkedin", label: "LinkedIn Profile" },
    { icon: <Instagram />, placeholder: "Instagram Handle", key: "instagram", label: "Instagram Handle" },
  ];

  return (
    <div id="share-review" className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          </motion.div>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Share Your Experience
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-gray-600 text-lg"
          >
            Let us know what you think about Visual Pulsez
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-8">
            <label className={`${labelClasses} text-center mb-4`}>Profile Picture</label>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-36 h-36 rounded-full border-3 border-dashed border-blue-400 flex items-center justify-center cursor-pointer overflow-hidden bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                {imagePreview ? (
                  <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <Camera className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Click to upload</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
            </motion.div>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <label className={labelClasses}>Your Rating</label>
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  <Star
                    className={`w-10 h-10 ${
                      (hoverRating || rating) >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
            <AnimatePresence>
              {(rating || hoverRating) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-full"
                >
                  {starDescriptions[hoverRating || rating].icon}
                  <span className="text-lg">{starDescriptions[hoverRating || rating].text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <label className={labelClasses}>Your Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <label className={labelClasses}>Profession</label>
              <input
                type="text"
                placeholder="Enter your profession"
                className={inputClasses}
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
              />
            </motion.div>
          </div>

          {/* Review Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <label className={labelClasses}>Your Review *</label>
            <textarea
              placeholder="Share your thoughts with us..."
              rows={4}
              className={`${inputClasses} resize-none`}
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            />
          </motion.div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-6">
            {socialInputs.map((social, index) => (
              <motion.div
                key={social.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <label className={labelClasses}>{social.label}</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {social.icon}
                  </div>
                  <input
                    type="text"
                    placeholder={social.placeholder}
                    className={`${inputClasses} pl-12`}
                    value={formData[social.key]}
                    onChange={(e) => setFormData({ ...formData, [social.key]: e.target.value })}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-xl shadow-lg transition-all duration-300 mt-8 hover:from-blue-700 hover:to-blue-800"
          >
            Submit Review
          </motion.button>
        </form>

        {/* Success Message */}
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Review submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};