import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Tank Clean Service | शुद्ध पानी, स्वस्थ परिवार | पानी टंकी सफाई दरभंगा",
  description: "दरभंगा में पानी टंकी सफाई सेवा। शुद्ध पानी, स्वस्थ परिवार। आधुनिक मशीन द्वारा Sintex टंकी की सफाई। 10+ वर्षों का अनुभव। सुरक्षित, कुशल और पर्यावरण के अनुकूल समाधान।",
  keywords: "पानी टंकी सफाई, water tank clean service, शुद्ध पानी स्वस्थ परिवार, darbhanga tank cleaning, sintex tank cleaning, tank cleaning darbhanga, industrial tank cleaning, residential tank cleaning",
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
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

