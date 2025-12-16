import { MessageCircle, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0d0d0d] py-20 md:py-28 overflow-hidden noise-texture">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #dc2626 10px,
              #dc2626 11px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6">
          Ready to <span className="text-red-600">Transform</span>?
        </h2>
        <p className="text-[#e0e0e0] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Take the first step towards your fitness goals. Contact us today and start your journey at Iron Forge Fitness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20joining%20Iron%20Forge%20Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-lg font-bold rounded transition-all duration-150 active:scale-[0.98] min-h-[60px]"
          >
            <MessageCircle size={24} />
            WhatsApp Us
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-[#0d0d0d] text-white px-10 py-5 text-lg font-bold rounded transition-all duration-150 active:scale-[0.98] min-h-[60px]"
          >
            <Phone size={24} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
