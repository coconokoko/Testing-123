"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-6">
      <div className="flex gap-12">
        <Link href="#home" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          Home
        </Link>
        <Link href="#about" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          About
        </Link>
        <Link href="#work" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          Work
        </Link>
        <Link href="#contact" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </div>
    </nav>
  );
}
