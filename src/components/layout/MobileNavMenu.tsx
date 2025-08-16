"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

function NavLink({ href, label, onLinkClick }: { href: string, label: string, onLinkClick: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onLinkClick}
      aria-current={isActive ? 'page' : undefined}
      className={`
        group relative block w-full text-center px-6 py-4 my-3 rounded-full font-poppins text-lg font-semibold overflow-hidden
        transition-colors duration-300
        ${isActive
          ? 'bg-theme-blue text-white border border-theme-blue ring-2 ring-white'
          : 'text-theme-blue hover:text-white hover:bg-theme-blue/80'
        }
      `}
    >
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 flex items-center justify-center
      text-6xl font-bold uppercase text-theme-blue/10 opacity-0
      group-hover:opacity-20 transition-opacity duration-300 z-0
        "
      >
        {label}
      </span>

      {/* Actual label */}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="ml-auto flex items-center justify-center p-2 rounded-full text-theme-blue hover:bg-theme-blue/20 focus:outline-none focus:ring-2 focus:ring-theme-blue"
        >
          <Menu size={30} />
        </button>
      </SheetTrigger>

      <SheetContent
        /* side="right" */
        className="
          fixed inset-0 z-50 bg-white/95 backdrop-blur-md
          flex flex-col items-center justify-start pt-24
          w-full h-full
        "
      >
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-theme-blue font-poppins mb-6 text-center">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col items-center w-full px-8">
          <NavLink href="/" label="Home" onLinkClick={handleLinkClick} />
          <NavLink href="/products" label="Products" onLinkClick={handleLinkClick} />
          <NavLink href="/services" label="Services" onLinkClick={handleLinkClick} />
          <NavLink href="/about" label="About us" onLinkClick={handleLinkClick} />
          <NavLink href="/contact" label="Contact us" onLinkClick={handleLinkClick} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
