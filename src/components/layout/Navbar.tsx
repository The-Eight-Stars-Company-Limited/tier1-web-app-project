'use client';

import { useEffect, useState } from 'react';
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
        font-medium font-poppins rounded-full transition-colors duration-200
        text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-[18px]
        px-2 sm:px-4 md:px-4 py-1.5 sm:py-2 md:py-2.5
        ${isActive
          ? 'bg-nav-active-bg text-white border border-nav-active-border ring-2 ring-white hover:bg-nav-active-border/50'
          : 'text-theme-blue hover:text-white'
        }
      `}
    >
      {label}
    </Link>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        hidden md:block sticky top-0 z-50 transition-all duration-300 py-2 sm:py-3
        ${scrolled
          ? 'bg-nav-background/60 backdrop-blur-md shadow-md'
          : 'bg-nav-background'
        }
      `}
    >
      <div className="
        max-w-screen-xl mx-auto flex flex-wrap items-center justify-start 
        gap-x-4 sm:gap-x-6 md:gap-x-8 sm:px-6
        ">
        <NavLink href="/" label="Home" />
        <NavLink href="/products" label="Products" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/portfolio" label="Portfolio" />
      </div>
    </nav>
  );
}
