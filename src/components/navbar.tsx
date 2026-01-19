"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Menu,
  X,
  MessageCircle,
  Languages,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: t("home"), nameEn: "Home", href: "#" },
    { name: t("services"), nameEn: "Services", href: "#services" },
    { name: t("about"), nameEn: "About", href: "#about" },
    { name: t("gallery"), nameEn: "Gallery", href: "#gallery" },
    { name: t("contact"), nameEn: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between py-1 sm:py-2 md:h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center flex-shrink-0">
  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28">
    <Image
      src="/Cleaning Hero.svg"
      alt="Cleaning Hero Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>


            {/* ===== DESKTOP NAV LINKS ===== */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 transition"
                >
                  {language === "hi" ? item.name : item.nameEn}
                </Link>
              ))}
            </div>

            {/* ===== RIGHT ICONS ===== */}
            <div className="flex items-center gap-1">
              <button
                onClick={toggleLanguage}
                className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              >
                <Languages className="w-4 h-4" />
              </button>

              {mounted && (
                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 transition"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-700" />
                  )}
                </button>
              )}

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[999] bg-white dark:bg-gray-900"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium"
                >
                  {language === "hi" ? item.name : item.nameEn}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t shadow-lg">
        <div className="flex items-center justify-around px-4 py-2 gap-2">
          <a
            href="tel:+919031117300"
            className="flex flex-col items-center justify-center flex-1 py-3 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs font-medium mt-1">Call</span>
          </a>

          <a
  href="https://wa.me/919031117300?text=Hello%20Cleaning%20Hero,%0A%0AI%20am%20looking%20for%20professional%20water%20tank%20cleaning%20services%20for%20my%20premises.%0AKindly%20share%20details%20regarding%20the%20cleaning%20process,%20pricing,%20availability,%20and%20booking%20procedure.%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center justify-center flex-1 py-3 px-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
>
  <MessageCircle className="w-5 h-5" />
  <span className="text-xs font-medium mt-1">WhatsApp</span>
</a>

        </div>
      </div>
    </>
  );
}
