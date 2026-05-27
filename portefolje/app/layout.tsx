import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menuList = [
  {
    link: "/",
    no: "Hjem",
    en: "Home"
  },
  {
    link: "/resume",
    no: "CV",
    en: "Resume"
  }
]

export const metadata: Metadata = {
  title: "Ahmad Faryabi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="topbar" id="topbar">
          <div className="logo">
            <b>Ahmad</b> Faryabi
          </div>
          <div className="middle">
            <div className="flex">
              {menuList.map(menu => (
                <a key={menu.link}>{menu.no}</a>
              ))}
            </div>
          </div>
          <div className="right">
            <div>
              Språkvalg
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
