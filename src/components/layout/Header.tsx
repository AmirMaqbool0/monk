"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/20 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          
          <Image
            src="/images/home/logo.png"
            alt="MonkMaze"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-white font-semibold text-lg">MonkMaze</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-white hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-secondary">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-secondary">
            Showcase
          </Link>
          <Link href="#" className="text-white hover:text-secondary">
            Insights
          </Link>
        </nav>

        {/* Button */}
        <Link
          href="#"
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-sm bg-white text-black font-[600] rounded-full hover:bg-white/80 transition-colors pl-[-20px] group"
           
       >
          Book Strategy Call
          <span className="relative w-5 h-5 flex mt-[8px] " style={{ fontSize: "1em" }}>
            {/* Default arrow (scale with text via w-[1em] h-[1em]) */}
            <ChevronRight
              className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-x-1 w-[1em] h-[1em]"
            />
            {/* Hover arrow */}
            <ArrowRight
              className="absolute inset-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-1 w-[1em] h-[1em]"
            />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;