import React from "react";
import Logo from "../assets/Logo.png";      // Logo pertama
import teksRE from "../assets/teksRE.png"; // Logo kedua

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* FLEX UTAMA */}
        <div className="flex justify-between items-center">

          {/* BAGIAN KIRI - LOGO LOGO */}
          <div className="flex items-center space-x-4">
            <img
              src={Logo}
              alt="Logo 1"
              className="h-10 w-auto object-contain"
            />
            <img
              src={teksRE}
              alt="Logo 2"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* BAGIAN KANAN - MENU */}
          <div className="hidden md:flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Program</a>
            <a href="#" className="hover:text-blue-600">News</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>

        </div>

      </div>
    </nav>
  );
}