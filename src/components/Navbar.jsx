import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-8 py-4 flex justify-between items-center bg-gray-900 fixed top-0 z-50">
      {/* Logo */}
      <h1 className="text-lg md:text-xl font-bold text-blue-500 leading-tight">
        Muh Zayyan Al Thaaf Nur
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;