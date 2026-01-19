import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleaning Hero | शुद्ध पानी, स्वस्थ परिवार | AC, Tank & Deep Cleaning Services Darbhanga",
  description: "Cleaning Hero - दरभंगा में AC सफाई, पानी टंकी सफाई, एक्वेरियम सफाई, बाथरूम गहरी सफाई और सेप्टिक टैंक सेवाएं। शुद्ध पानी, स्वस्थ परिवार। 10+ वर्षों का अनुभव। सुरक्षित, कुशल और पर्यावरण के अनुकूल समाधान।",
  keywords: "cleaning hero, AC cleaning, water tank cleaning, aquarium cleaning, bathroom deep cleaning, septic tank cleaning, darbhanga cleaning services, tank cleaning darbhanga, cleaning services bihar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen pb-20 md:pb-0">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

