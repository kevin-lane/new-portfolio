'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { LanguageContext } from '@/components/providers/language-provider';
import { ThemeContext } from "@/components/providers/theme-provider";
import { OpenNavbarContext } from "@/components/providers/open-mobile-navbar-provider";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayoutClient({ children }) {
  const [language, setLanguage] = useState('sv');
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false)
  const langValue = {
    language, setLanguage
  }
  const darkValue = {
    dark, setDark
  }
  const openNavbarValue = {
    open, setOpen
  }

  return (
    <ThemeContext value={darkValue}>
    <LanguageContext value={langValue}>
      <html lang={language}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${dark ? 'bg-gradient-to-b from-darkBg to-darkGradient text-white' : 'bg-gradient-to-b from-lightGradient to-lightBg'} antialiased`}
          >
          <OpenNavbarContext value={openNavbarValue}>
            <Navbar />
          </OpenNavbarContext>
            {children}
          </body>
      </html>
    </LanguageContext>
  </ThemeContext>
  );
}
