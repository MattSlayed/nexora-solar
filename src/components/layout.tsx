import React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/app-preview", label: "App" },
    { href: "/website", label: "Website" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2">
          <span className="text-secondary">NEXORA</span>
          <span className="text-primary">Solar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="font-bold rounded-none">
            <Link href="/services">Get Compliant Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2 mb-4">
            <span className="text-primary-foreground">NEXORA</span>
            <span className="text-primary">Solar</span>
          </Link>
          <p className="text-secondary-foreground/70 max-w-sm mb-6">
            South Africa's first-mover solar compliance platform. We guide homeowners, SMEs, and commercial property owners through SSEG registration and ongoing panel maintenance.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/app-preview" className="text-secondary-foreground/80 hover:text-primary transition-colors">App Preview</Link></li>
            <li><Link href="/website" className="text-secondary-foreground/80 hover:text-primary transition-colors">Web Platform</Link></li>
            <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services & Pricing</Link></li>
            <li><Link href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary">Contact</h4>
          <ul className="space-y-2 text-secondary-foreground/80">
            <li>Gauteng, South Africa</li>
            <li>Johannesburg · Pretoria · Ekurhuleni</li>
            <li className="pt-4 text-xs">Launched June 2026</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-secondary-foreground/10 text-sm text-secondary-foreground/50 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} NEXORA Solar. All rights reserved.</p>
        <p className="mt-2 md:mt-0">SSEG Compliance Enforcement Deadline: September 2026</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
