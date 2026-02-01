// src/components/MainNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", color: "from-blue-600 to-indigo-600" },
  { href: "/about", label: "About", color: "from-emerald-600 to-teal-600" },
  { href: "/services", label: "Services", color: "from-purple-600 to-violet-600" },
  { href: "/contact", label: "Contact", color: "from-amber-600 to-orange-600" },
  { href: "/login", label: "Client Portal", color: "from-rose-600 to-pink-600" },
] as const;

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/70 shadow-sm">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-20 sm:gap-12 md:gap-8 lg:gap-15">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            const buttonBase = `
              group relative
              px-5 sm:px-6 py-2.5 sm:py-3
              rounded-xl font-medium text-white shadow-md
              bg-gradient-to-r ${item.color}
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-xl hover:-translate-y-0.5
              active:scale-95
            `.replace(/\s+/g, " ").trim();

            const activeStyles = isActive
              ? "ring-2 ring-offset-2 ring-offset-white ring-white/50 scale-105 shadow-xl"
              : "";

            const buttonClasses = [buttonBase, activeStyles].filter(Boolean).join(" ");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={buttonClasses}
              >
                <span className="relative z-10 whitespace-nowrap">
                  {item.label}
                </span>

                <span
                  className={`
                    absolute inset-0 rounded-xl
                    bg-gradient-to-r ${item.color}
                    blur-md opacity-0 group-hover:opacity-25
                    transition-opacity duration-300
                  `.replace(/\s+/g, " ").trim()}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}