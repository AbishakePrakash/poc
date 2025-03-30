import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ThemeProvider } from "@/app/context/themeContext";
import { DataProvider } from "./context/dataContext";

export const metadata = {
  title: "Kishore Krishnakumar",
  description: "Kishore's Portfolio Website",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <DataProvider>
            <Header />
            {/* <div className="sticky top-[0rem] w-full bg-red-500 z-50">
              Sticky
            </div> */}

            {children}
            <Footer />
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
