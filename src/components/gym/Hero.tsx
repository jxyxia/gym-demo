import { MessageCircle, Phone, Users, Clock, Award } from "lucide-react";

const trustSignals = [
  { icon: Users, text: "500+ Members" },
  { icon: Clock, text: "Open 5AM - 11PM" },
  { icon: Award, text: "Est. 2015" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 uppercase">
          Iron<span className="text-red-600">Forge</span> Fitness
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-[#e0e0e0] font-display font-medium tracking-wide mb-8 uppercase">
          Forge Your Strength. Build Your Legacy.
        </p>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 text-[#e0e0e0]">
              <signal.icon size={20} className="text-red-600" />
              <span className="text-sm md:text-base font-medium">{signal.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20joining%20Iron%20Forge%20Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded transition-all duration-150 active:scale-[0.98] min-h-[56px]"
          >
            <MessageCircle size={24} />
            WhatsApp Us
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white px-8 py-4 text-lg font-bold rounded transition-all duration-150 active:scale-[0.98] min-h-[56px]"
          >
            <Phone size={24} />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
