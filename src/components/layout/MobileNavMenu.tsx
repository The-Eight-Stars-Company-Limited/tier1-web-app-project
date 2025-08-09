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
        block w-full text-center px-4 py-2 my-2 rounded-full transition-colors duration-200 font-poppins text-lg
        ${isActive
          ? 'bg-nav-active-bg text-white border border-nav-active-border ring-2 ring-white'
          : 'text-theme-blue hover:text-white hover:bg-theme-blue/10'
        }
      `}
    >
      {label}
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
        <button className="flex items-center justify-center p-2 rounded-full text-theme-blue hover:bg-gray-100">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="bg-white/95 backdrop-blur-md border-r-4 border-theme-yellow w-[250px] sm:w-[300px]"
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-center text-theme-blue font-poppins">
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center mt-8">
          <NavLink href="/" label="Home" onLinkClick={handleLinkClick} />
          <NavLink href="/products" label="Products" onLinkClick={handleLinkClick} />
          <NavLink href="/services" label="Services" onLinkClick={handleLinkClick} />
          <NavLink href="/about" label="About us" onLinkClick={handleLinkClick} />
          <NavLink href="/contact" label="Contact us" onLinkClick={handleLinkClick} />
        </div>
      </SheetContent>
    </Sheet>
  );
}