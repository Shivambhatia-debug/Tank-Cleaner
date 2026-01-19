"use client";

import { motion } from "framer-motion";
import { Wind, Fish, Droplets, Sparkles, Trash2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "AC Cleaning",
    titleHindi: "एसी सफाई",
    description: "Professional AC cleaning services for optimal cooling performance and air quality.",
    descriptionHindi: "इष्टतम शीतलन प्रदर्शन और वायु गुणवत्ता के लिए पेशेवर एसी सफाई सेवाएं।",
    features: ["Deep cleaning", "Filter replacement", "Energy efficiency"],
    featuresHindi: ["गहरी सफाई", "फिल्टर प्रतिस्थापन", "ऊर्जा दक्षता"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Fish,
    title: "Aquarium Tank Cleaning",
    titleHindi: "एक्वेरियम टैंक सफाई",
    description: "Expert aquarium maintenance and cleaning services for healthy aquatic life.",
    descriptionHindi: "स्वस्थ जलीय जीवन के लिए विशेषज्ञ एक्वेरियम रखरखाव और सफाई सेवाएं।",
    features: ["Water quality", "Tank maintenance", "Fish care"],
    featuresHindi: ["पानी की गुणवत्ता", "टैंक रखरखाव", "मछली देखभाल"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Droplets,
    title: "Water Tank Cleaning",
    titleHindi: "पानी टंकी सफाई",
    description: "Safe and thorough cleaning for water tanks, ensuring clean and healthy water supply.",
    descriptionHindi: "पानी की टंकियों के लिए सुरक्षित और पूर्ण सफाई, स्वच्छ और स्वस्थ पानी की आपूर्ति सुनिश्चित करना।",
    features: ["Modern equipment", "Sanitization", "Health safety"],
    featuresHindi: ["आधुनिक उपकरण", "सैनिटाइजेशन", "स्वास्थ्य सुरक्षा"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Bathroom Deep Cleaning",
    titleHindi: "बाथरूम गहरी सफाई",
    description: "Comprehensive deep cleaning services for bathrooms with professional sanitization.",
    descriptionHindi: "पेशेवर सैनिटाइजेशन के साथ बाथरूम के लिए व्यापक गहरी सफाई सेवाएं।",
    features: ["Deep sanitization", "Tile cleaning", "Mold removal"],
    featuresHindi: ["गहरी सैनिटाइजेशन", "टाइल सफाई", "फफूंदी हटाना"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Trash2,
    title: "Septic Tank (Tie-up Model)",
    titleHindi: "सेप्टिक टैंक (टाई-अप मॉडल)",
    description: "Professional septic tank cleaning and maintenance services through partnership model.",
    descriptionHindi: "साझेदारी मॉडल के माध्यम से पेशेवर सेप्टिक टैंक सफाई और रखरखाव सेवाएं।",
    features: ["Regular maintenance", "Waste disposal", "Expert service"],
    featuresHindi: ["नियमित रखरखाव", "अपशिष्ट निपटान", "विशेषज्ञ सेवा"],
    color: "from-yellow-500 to-amber-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-4"
          >
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
  <span className="gradient-text">हमारी सेवाएँ</span>{" "}
  <span className="text-black">| Our Services</span>
</h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            सभी प्रकार की टंकियों और भंडारण प्रणालियों के लिए व्यापक सफाई समाधान
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mt-2">
            Comprehensive cleaning solutions for all types of tanks and storage systems
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  {service.titleHindi && (
                    <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      {service.titleHindi}
                    </h4>
                  )}

                  {/* Description */}
                  {service.descriptionHindi && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed font-medium">
                      {service.descriptionHindi}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mt-1.5 flex-shrink-0`}></div>
                        <div className="flex flex-col">
                          <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
                          {service.featuresHindi && service.featuresHindi[idx] && (
                            <span className="text-gray-600 dark:text-gray-400 text-xs">{service.featuresHindi[idx]}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

