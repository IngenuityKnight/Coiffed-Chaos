'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Button from './Button';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Hair Education' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About Ava' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-line/60'
          : 'bg-canvas border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-40 md:h-44 flex items-center justify-between">
        <Link href="/" aria-label="Coiffed Chaos home">
          <Image
            src="/images/logo.webp"
            alt="Coiffed Chaos"
            width={448}
            height={224}
            className="h-40 md:h-44 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className="block h-px bg-gold mt-1"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-canvas">
          <nav className="px-5 py-6 flex flex-col gap-1">
            {NAV.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 px-2 text-base border-b border-line/60 last:border-0 ${
                    active ? 'text-ink font-medium' : 'text-muted'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-5">
              <Button href="/contact" variant="secondary" className="w-full">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
