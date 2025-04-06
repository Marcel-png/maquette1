"use client"
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-teal-800 text-white">
      {/* Barre de navigation */}
      <div className="flex justify-between items-center px-6 md:px-20 py-6">
        {/* Logo réel */}
        <div className="text-2xl font-bold">Influenca</div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#" className="hover:text-teal-300">Home</a>
          <a href="#" className="hover:text-teal-300">About</a>
          <a href="#" className="hover:text-teal-300">Services</a>
          <a href="#" className="hover:text-teal-300">Pages</a>
          <a href="#" className="hover:text-teal-300">Contact</a>
        </div>

        {/* Bouton + Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-white text-teal-800 px-4 py-2 rounded text-sm hover:bg-gray-200">
            Contact Us
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-teal-900 text-white py-4 space-y-4">
          <a href="#" className="hover:text-teal-300">Home</a>
          <a href="#" className="hover:text-teal-300">About</a>
          <a href="#" className="hover:text-teal-300">Services</a>
          <a href="#" className="hover:text-teal-300">Pages</a>
          <a href="#" className="hover:text-teal-300">Contact</a>
          <button className="bg-white text-teal-800 px-4 py-2 rounded text-sm hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}