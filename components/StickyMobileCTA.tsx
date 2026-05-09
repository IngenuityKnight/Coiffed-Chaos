'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <div
      className={`lg:hidden fixed bottom-4 inset-x-4 z-30 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      aria-hidden={!show}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-ink text-cream rounded-full py-4 shadow-lift text-sm tracking-wide"
      >
        Book an Appointment
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
