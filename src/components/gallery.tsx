"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Actual images from public folder
const galleryImages = [
  // WATER TANK CLEANING - Section 1
  {
    id: 1,
    src: "/OIP.jpg",
    title: "Water Tank Cleaning Service",
    titleHindi: "पानी टंकी सफाई सेवा",
    category: "Water Tank Cleaning",
    description: "Professional cleaning of residential water tanks",
    descriptionHindi: "घरेलू पानी टंकियों की पेशेवर सफाई",
  },
  {
    id: 2,
    src: "/OIP (1).jpg",
    title: "Industrial Water Tank Cleaning",
    titleHindi: "औद्योगिक पानी टंकी सफाई",
    category: "Water Tank Cleaning",
    description: "Comprehensive cleaning for industrial water storage tanks",
    descriptionHindi: "औद्योगिक पानी भंडारण टैंकों के लिए व्यापक सफाई",
  },
  {
    id: 3,
    src: "/OIP (2).jpg",
    title: "Sintex Water Tank Cleaning",
    titleHindi: "Sintex पानी टंकी सफाई",
    category: "Water Tank Cleaning",
    description: "Modern machine cleaning for Sintex water tanks",
    descriptionHindi: "Sintex पानी टंकियों के लिए आधुनिक मशीन सफाई",
  },
  {
    id: 19,
    src: "/362113827.jpg",
    title: "Professional Water Tank Cleaning",
    titleHindi: "पेशेवर पानी टंकी सफाई",
    category: "Water Tank Cleaning",
    description: "Residential water tank cleaning and maintenance",
    descriptionHindi: "आवासीय पानी टंकी सफाई और रखरखाव",
  },
  {
    id: 6,
    src: "/OIP (5).jpg",
    title: "Water Tank Maintenance Service",
    titleHindi: "पानी टंकी रखरखाव सेवा",
    category: "Water Tank Cleaning",
    description: "Regular maintenance and cleaning services",
    descriptionHindi: "नियमित रखरखाव और सफाई सेवाएं",
  },

  // SEPTIC TANK CLEANING - Section 2
  {
    id: 16,
    src: "/active-septic-tank-treatment-pods-before-after.jpg",
    title: "Septic Tank Treatment",
    titleHindi: "सेप्टिक टंकी उपचार",
    category: "Septic Tank",
    description: "Septic tank treatment and cleaning results",
    descriptionHindi: "सेप्टिक टंकी उपचार और सफाई परिणाम",
  },
  {
    id: 17,
    src: "/jasbeer-singh-septic-tank-cleaning-service-gandhinagar-jammu-jammu-septic-tank-cleaning-services-3lrt3xl4qv.avif",
    title: "Professional Septic Tank Service",
    titleHindi: "पेशेवर सेप्टिक टंकी सेवा",
    category: "Septic Tank",
    description: "Expert septic tank cleaning and maintenance",
    descriptionHindi: "विशेषज्ञ सेप्टिक टंकी सफाई और रखरखाव",
  },
  {
    id: 18,
    src: "/1625159882387-9585c7.jpeg",
    title: "Septic Tank Cleaning Service",
    titleHindi: "सेप्टिक टंकी सफाई सेवा",
    category: "Septic Tank",
    description: "Complete septic tank cleaning service",
    descriptionHindi: "पूर्ण सेप्टिक टंकी सफाई सेवा",
  },

  // AQUARIUM CLEANING - Section 3
  {
    id: 8,
    src: "/WhatsApp Image 2026-01-19 at 7.51.56 PM.jpeg",
    title: "Aquarium Cleaning - Before & After",
    titleHindi: "एक्वेरियम सफाई - पहले और बाद",
    category: "Aquarium Tank Cleaning",
    description: "Professional aquarium glass cleaning and maintenance",
    descriptionHindi: "पेशेवर एक्वेरियम सफाई और रखरखाव",
  },
  {
    id: 9,
    src: "/WhatsApp Image 2026-01-19 at 7.52.06 PM.jpeg",
    title: "Aquarium Glass Cleaning",
    titleHindi: "एक्वेरियम ग्लास सफाई",
    category: "Aquarium Tank Cleaning",
    description: "Crystal clear aquarium glass cleaning service",
    descriptionHindi: "क्रिस्टल क्लीन एक्वेरियम ग्लास सफाई सेवा",
  },
  {
    id: 10,
    src: "/WhatsApp Image 2026-01-19 at 7.52.15 PM.jpeg",
    title: "Professional Aquarium Maintenance",
    titleHindi: "पेशेवर एक्वेरियम रखरखाव",
    category: "Aquarium Tank Cleaning",
    description: "Expert aquarium tank cleaning and maintenance",
    descriptionHindi: "विशेषज्ञ एक्वेरियम सफाई और रखरखाव",
  },
  {
    id: 11,
    src: "/WhatsApp Image 2026-01-19 at 7.52.26 PM.jpeg",
    title: "Aquarium Tank Service",
    titleHindi: "एक्वेरियम टंकी सेवा",
    category: "Aquarium Tank Cleaning",
    description: "Complete aquarium cleaning with filter setup",
    descriptionHindi: "फिल्टर सेटअप के साथ पूर्ण एक्वेरियम सफाई",
  },

  // AC CLEANING - Section 4
  {
    id: 12,
    src: "/Air-Conditioner-before-and-after.jpg",
    title: "AC Cleaning - Before & After",
    titleHindi: "एयर कंडीशनर सफाई - पहले और बाद",
    category: "AC Cleaning",
    description: "Professional air conditioner cleaning service",
    descriptionHindi: "पेशेवर एयर कंडीशनर सफाई सेवा",
  },
  {
    id: 13,
    src: "/clean-vs-dirty-air-filter.jpg",
    title: "Air Filter Cleaning",
    titleHindi: "एयर फिल्टर सफाई",
    category: "AC Cleaning",
    description: "Clean vs dirty air filter comparison",
    descriptionHindi: "स्वच्छ और गंदे एयर फिल्टर की तुलना",
  },
  {
    id: 14,
    src: "/The-Effects-of-Dirty-Air-Filters-on-Your-HVAC-System.jpeg",
    title: "HVAC System Cleaning",
    titleHindi: "HVAC सिस्टम सफाई",
    category: "AC Cleaning",
    description: "Effects of dirty air filters on HVAC systems",
    descriptionHindi: "HVAC सिस्टम पर गंदे फिल्टर के प्रभाव",
  },

  // BATHROOM CLEANING - Section 5
  {
    id: 15,
    src: "/House-Cleaning-Bathroom-1.jpg",
    title: "Bathroom Deep Cleaning",
    titleHindi: "बाथरूम गहरी सफाई",
    category: "Bathroom Deep Cleaning",
    description: "Professional bathroom cleaning service",
    descriptionHindi: "पेशेवर बाथरूम सफाई सेवा",
  },
  {
    id: 4,
    src: "/OIP (3).jpg",
    title: "Bathroom Transformation",
    titleHindi: "बाथरूम परिवर्तन",
    category: "Bathroom Deep Cleaning",
    description: "Before & after bathroom cleaning results",
    descriptionHindi: "बाथरूम सफाई से पहले और बाद के परिणाम",
  },
  {
    id: 5,
    src: "/OIP (4).jpg",
    title: "Tile & Surface Cleaning",
    titleHindi: "टाइल और सतह सफाई",
    category: "Bathroom Deep Cleaning",
    description: "Professional tile and surface cleaning",
    descriptionHindi: "पेशेवर टाइल और सतह सफाई",
  },
  {
    id: 7,
    src: "/OIP (6).jpg",
    title: "Deep Sanitization Service",
    titleHindi: "गहरी सैनिटाइजेशन सेवा",
    category: "Bathroom Deep Cleaning",
    description: "Using modern machines for efficient deep cleaning",
    descriptionHindi: "कुशल गहरी सफाई के लिए आधुनिक मशीनों का उपयोग",
  },

  // ADDITIONAL GALLERY ITEMS
  {
    id: 20,
    src: "/3.jpg",
    title: "Professional Cleaning Results",
    titleHindi: "पेशेवर सफाई परिणाम",
    category: "Results",
    description: "Transformation of cleaning service results",
    descriptionHindi: "सफाई सेवा परिणामों का परिवर्तन",
  },
  {
    id: 21,
    src: "/IMG_0166.jpg",
    title: "Tank Maintenance Service",
    titleHindi: "टंकी रखरखाव सेवा",
    category: "Results",
    description: "Professional tank maintenance and care",
    descriptionHindi: "पेशेवर टंकी रखरखाव और देखभाल",
  },
  {
    id: 22,
    src: "/IMG_20210329_085213-scaled.jpg",
    title: "Cleaning Service Portfolio",
    titleHindi: "सफाई सेवा पोर्टफोलियो",
    category: "Results",
    description: "Complete cleaning service portfolio",
    descriptionHindi: "पूर्ण सफाई सेवा पोर्टफोलियो",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const categories = ["All", "Water Tank Cleaning", "Septic Tank", "Aquarium Tank Cleaning", "AC Cleaning", "Bathroom Deep Cleaning", "Results"];

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

