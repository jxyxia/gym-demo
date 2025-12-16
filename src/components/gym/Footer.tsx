import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2d2d2d] py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              IRON<span className="text-red-600">FORGE</span>
            </span>
            <span className="text-[#e0e0e0] text-sm">© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-red-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-red-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-red-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-[#e0e0e0] text-sm text-center md:text-right">
            Forge Your Strength. Build Your Legacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
