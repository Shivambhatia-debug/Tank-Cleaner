"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

export default function CTASection() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const service = serviceRef.current?.value || "";
    const message = messageRef.current?.value || "";

    try {
      // Save to Google Sheets via API
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      // Build WhatsApp message
      const whatsappMessage = `Hello Cleaning Hero,

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}
Message: ${message}

Looking forward to your response.`;

      // Redirect to WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/919031117300?text=${encodedMessage}`,
        "_blank"
      );

      setSubmitStatus("success");
      // Reset form
      if (nameRef.current) nameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (serviceRef.current) serviceRef.current.value = "AC Cleaning";
      if (messageRef.current) messageRef.current.value = "";

      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <span className="text-sm font-medium">Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              शुरू करने के लिए तैयार हैं?
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100"
            >
              Ready to Get Started?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-blue-100 mb-4 leading-relaxed font-medium"
            >
              आज ही मुफ्त सलाह और उद्धरण के लिए हमसे संपर्क करें। हमारी विशेषज्ञ टीम आपकी सभी टंकी सफाई जरूरतों में मदद के लिए तैयार है।
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-lg text-blue-100 mb-8 leading-relaxed"
            >
              Contact us today for a free quote and consultation. Our expert team is ready to help you with all your tank cleaning needs.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {[
                { en: "Free consultation and quote", hi: "मुफ्त सलाह और उद्धरण" },
                { en: "24/7 emergency service available", hi: "24/7 आपातकालीन सेवा उपलब्ध" },
                { en: "Certified and insured professionals", hi: "प्रमाणित और बीमाकृत पेशेवर" },
                { en: "Satisfaction guaranteed", hi: "संतुष्टि की गारंटी" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-white font-medium">{benefit.en}</span>
                    <span className="text-blue-100 text-sm">{benefit.hi}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/919031117300?text=Hello%20Cleaning%20Hero%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-green-500/90 backdrop-blur-sm rounded-lg hover:bg-green-500 transition-all shadow-lg text-white"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="font-medium text-white">WhatsApp: 9031117300</span>
              </motion.a>
              <motion.a
                href="tel:+919031117300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all text-gray-900"
              >
                <Phone className="w-5 h-5 text-gray-900" />
                <span className="font-medium text-gray-900">Call: 9031117300</span>
              </motion.a>
              <motion.a
                href="mailto:kccdbg@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all text-gray-900"
              >
                <Mail className="w-5 h-5 text-gray-900" />
                <span className="font-medium text-gray-900">Email Us</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Request a Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="9031117300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Type
                  </label>
                  <select ref={serviceRef} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>AC Cleaning</option>
                    <option>Aquarium Tank Cleaning</option>
                    <option>Water Tank Cleaning</option>
                    <option>Bathroom Deep Cleaning</option>
                    <option>Septic Tank (Tie-up Model)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    ref={messageRef}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Request"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </motion.button>
                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">
                    ✓ Form submitted! Redirecting to WhatsApp...
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 dark:text-red-400 text-center font-medium">
                    ✗ Error submitting form. Please try again.
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  We&apos;ll respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

