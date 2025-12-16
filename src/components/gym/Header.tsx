import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#2d2d2d]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-white">
          IRON<span className="text-red-600">FORGE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e0e0e0] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20joining%20Iron%20Forge%20Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-sm font-semibold rounded transition-all duration-150 active:scale-[0.98]"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0d0d0d] border-t border-[#2d2d2d] px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#e0e0e0] hover:text-white text-base font-medium py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20joining%20Iron%20Forge%20Fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 text-base font-semibold rounded text-center transition-all duration-150 active:scale-[0.98] mt-2"
            >
              Join Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
