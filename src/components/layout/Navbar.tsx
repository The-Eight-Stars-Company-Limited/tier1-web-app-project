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
        font-medium px-3 py-1.5 rounded-button transition-colors duration-200 font-poppins
        ${isActive
          ? 'bg-nav-active-bg text-white border border-nav-active-border ring-2 ring-white hover:bg-nav-active-border/50 rounded-full'
          : 'text-theme-blue hover:text-white rounded-button'
        }
      `}
    >
      {label}
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-nav-background py-3 shadow-sm">
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