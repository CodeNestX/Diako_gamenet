import { Vazirmatn } from "next/font/google";
import Navbar from "@/components/Navbar.jsx";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-vazirmatn",
});

export const metadata = {
  title: "گیم‌نت دیاکو | DIAKO GameNet",
  description: "رزرو آنلاین سیستم‌های گیمینگ و کنسول",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans bg-dark-bg text-white selection:bg-neon-purple selection:text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}