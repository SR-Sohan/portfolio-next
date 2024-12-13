import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sohanur Rahman",
  description: "Sohanur Rahaman Portfoliowh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} `}>
      <body className="font-open-sans">{children}</body>
    </html>
  );
}
