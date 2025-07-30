'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`
        font-medium px-3 py-1.5 rounded-full transition-colors duration-200 font-poppins
        ${isActive
          ? 'bg-button-blue text-white border border-button-blue ring-2 ring-white hover:bg-button-blue/80' 
          : 'text-button-blue hover:bg-button-blue hover:text-white'
        }
      `}
    >
      {label}
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav className="bg-nav-background py-3 shadow-sm">
      <div className="container mx-auto flex justify-start items-center px-4 md:px-6 lg:px-8">
        <div className="flex space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/products" label="Products" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/about" label="About us" />
          <NavLink href="/contact" label="Contact us" />
        </div>
      </div>
    </nav>
  );
}
