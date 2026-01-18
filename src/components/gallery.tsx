"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Actual images from public folder
const galleryImages = [
  {
    id: 1,
    src: "/OIP.jpg",
    title: "Water Tank Cleaning Service",
    titleHindi: "पानी टंकी सफाई सेवा",
    category: "Residential",
    description: "Professional cleaning of residential water tanks",
    descriptionHindi: "घरेलू पानी टंकियों की पेशेवर सफाई",
  },
  {
    id: 2,
    src: "/OIP (1).jpg",
    title: "Industrial Tank Cleaning",
    titleHindi: "औद्योगिक टंकी सफाई",
    category: "Industrial",
    description: "Comprehensive cleaning for industrial storage tanks",
    descriptionHindi: "औद्योगिक भंडारण टैंकों के लिए व्यापक सफाई",
  },
  {
    id: 3,
    src: "/OIP (2).jpg",
    title: "Sintex Tank Cleaning",
    titleHindi: "Sintex टंकी सफाई",
    category: "Residential",
    description: "Modern machine cleaning for Sintex water tanks",
    descriptionHindi: "Sintex पानी टंकियों के लिए आधुनिक मशीन सफाई",
  },
  {
    id: 4,
    src: "/OIP (3).jpg",
    title: "Before & After Results",
    titleHindi: "पहले और बाद के परिणाम",
    category: "Results",
    description: "Transformation after professional cleaning service",
    descriptionHindi: "पेशेवर सफाई सेवा के बाद परिवर्तन",
  },
  {
    id: 5,
    src: "/OIP (4).jpg",
    title: "Commercial Tank Service",
    titleHindi: "व्यावसायिक टंकी सेवा",
    category: "Commercial",
    description: "Complete tank maintenance for commercial buildings",
    descriptionHindi: "व्यावसायिक भवनों के लिए पूर्ण टंकी रखरखाव",
  },
  {
    id: 6,
    src: "/OIP (5).jpg",
    title: "Water Tank Maintenance",
    titleHindi: "पानी टंकी रखरखाव",
    category: "Residential",
    description: "Regular maintenance and cleaning services",
    descriptionHindi: "नियमित रखरखाव और सफाई सेवाएं",
  },
  {
    id: 7,
    src: "/OIP (6).jpg",
    title: "Professional Equipment",
    titleHindi: "पेशेवर उपकरण",
    category: "Industrial",
    description: "Using modern machines for efficient cleaning",
    descriptionHindi: "कुशल सफाई के लिए आधुनिक मशीनों का उपयोग",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const categories = ["All", "Industrial", "Residential", "Commercial", "Results"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-4"
          >
            <span className="text-sm font-medium">Our Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
  <span className="text-black">Project</span>{" "}
  <span className="gradient-text">Gallery</span>
</h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing our professional tank cleaning projects and results
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredImage(image.id)}
              onHoverEnd={() => setHoveredImage(null)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Actual Image */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  {image.titleHindi && (
                    <h4 className="text-lg font-semibold mb-2 text-blue-200">{image.titleHindi}</h4>
                  )}
                  <p className="text-sm text-gray-200 mb-1">{image.description}</p>
                  {image.descriptionHindi && (
                    <p className="text-xs text-gray-300">{image.descriptionHindi}</p>
                  )}
                </div>
              </div>

              {/* Zoom Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: hoveredImage === image.id ? 1 : 0,
                  scale: hoveredImage === image.id ? 1 : 0,
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-full">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

