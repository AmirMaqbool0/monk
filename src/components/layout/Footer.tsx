"use client";

import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0B0F2E] to-[#090C1F] text-white py-12 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-5 max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
           <Image 
            src={'/images/Home/logo.png'}
            alt="MonkMaze"
            width={26}
            height={26}
           />
            <span className="text-lg font-semibold">MonkMaze</span>
          </div>

          {/* Text */}
          <p className="text-sm leading-relaxed text-gray-300">
            “MonkMaze engineers intelligent digital ecosystems for startups and
            enterprises ready to dominate.”
          </p>

          <p className="text-sm text-gray-400">No Sales Talk. Just Smart Strategy.</p>

          {/* Button */}
          <button className="bg-[#3D3AFE] hover:bg-[#2c29c9] transition-colors text-white px-5 py-2 rounded-full text-sm font-medium w-fit">
            Let’s Talk — 100% Confidential →
          </button>

          <p className="text-sm text-gray-400">
            Tell Us Where You’re Stuck. We’ll Handle the Rest.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* Explore */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Explore:</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>Home</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Showcase</li>
              <li>Insights</li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Solutions:</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>AI</li>
              <li>SaaS</li>
              <li>Website</li>
              <li>App</li>
              <li>UI/UX</li>
              <li>SEO</li>
              <li>Packages</li>
            </ul>
          </div>

          {/* Client Favorite Packages */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Client Favorite Packages:</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>Ecommerce Power Stack</li>
              <li>Landing Page Launch Kit</li>
              <li>Custom AI Assistant</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Company:</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 border-t border-gray-700 pt-6">
        <p className="text-xs text-gray-400">© 2025 MonkMaze. All rights reserved.</p>

        {/* Socials */}
        <div className="flex gap-4 text-gray-300">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FaXTwitter className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp className="w-5 h-5 hover:text-white transition" />
          </a>
        </div>
      </div>
      
    </footer>
  );
}
