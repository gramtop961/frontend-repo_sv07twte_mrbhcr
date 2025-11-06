import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-xl tracking-tight">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
            Binaryflow
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition"
            >
              Chat now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm"
              >
                Chat now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
