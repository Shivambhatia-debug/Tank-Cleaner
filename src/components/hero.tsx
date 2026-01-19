"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: Shield, text: "100% Safe & Certified", textHindi: "सुरक्षित और प्रमाणित" },
    { icon: Clock, text: "24/7 Emergency Service", textHindi: "24/7 आपातकालीन सेवा" },
    { icon: Award, text: "10+ Years Experience", textHindi: "10+ वर्ष का अनुभव" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-last lg:order-first"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 500+ Clients</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">पानी टंकी की सफाई</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-300"
            >
              Professional Tank Cleaning Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl font-medium"
            >
              आधुनिक मशीन द्वारा Sintex (पानी टंकी) की सफाई करवाएं
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Expert solutions for industrial, residential, and commercial tanks. 
              Safe, efficient, and eco-friendly cleaning with certified professionals.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md"
                >
                  <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {feature.text}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {feature.textHindi}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Container with 3D Effect */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-30 blur-2xl"
                  ></motion.div>
                </div>
                
                {/* Actual Image */}
                <div className="relative z-10 h-full w-full">
                  <Image
                    src="/Gemini_Generated_Image_vfxlzhvfxlzhvfxl.png"
                    alt="Water Tank Cleaning Service"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

