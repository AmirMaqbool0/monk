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
        // past hero section
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-black/60 backdrop-blur-md shadow-md" : "bg-transparent backdrop-blur-md"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-[50px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/home/logo.png"
            alt="MonkMaze"
            width={32}
            height={32}
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
          className="hidden md:inline-flex items-center gap-2 px-4 justify-between py-[6px] text-[14px] bg-white text-black font-[500] rounded-full hover:bg-white/80 transition-colors group"
        >
          Book Strategy Call
          <span className="relative w-5 h-5">
            {/* Default arrow */}
            <ChevronRight
              className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-x-1"
              size={18}
            />
            {/* Hover arrow */}
            <ArrowRight
              className="absolute inset-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-1"
              size={18}
            />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
