"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "AC Cleaning", href: "#services" },
    { name: "Aquarium Tank Cleaning", href: "#services" },
    { name: "Water Tank Cleaning", href: "#services" },
    { name: "Bathroom Deep Cleaning", href: "#services" },
    { name: "Septic Tank Service", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Safety Protocols", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative w-10 h-10 transform group-hover:scale-110 transition-transform">
                <Image
                  src="/Cleaning Hero.svg"
                  alt="Cleaning Hero Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Cleaning Hero</h3>
                <p className="text-sm text-gray-400">शुद्ध पानी, स्वस्थ परिवार</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              शुद्ध पानी, स्वस्थ परिवार। दरभंगा में पानी टंकी सफाई की अग्रणी सेवा प्रदाता। 10+ वर्षों के अनुभव के साथ सुरक्षित, 
              कुशल और पर्यावरण के अनुकूल समाधान। आधुनिक मशीन द्वारा Sintex टंकी की सफाई।
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="https://wa.me/919031117300?text=Hello%20Cleaning%20Hero%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>WhatsApp: 9031117300</span>
              </a>
              <a
                href="tel:+919031117300"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-500" />
                <span>Call: 9031117300</span>
              </a>
              <a
                href="mailto:kccdbg@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@guptacleaningservice.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span>दरभंगा, बिहार | Darbhanga, Bihar</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cleaning Hero, Darbhanga. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span>Certified & Insured</span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
              <span>Licensed Professionals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

