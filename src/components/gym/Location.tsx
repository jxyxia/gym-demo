import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-[#1a1a1a] py-20 md:py-28 noise-texture">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Find <span className="text-red-600">Us</span>
          </h2>
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            Conveniently located in the heart of the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="aspect-video lg:aspect-square rounded overflow-hidden border border-[#2d2d2d]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iron Forge Fitness Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                  Address
                </h3>
                <p className="text-[#e0e0e0] leading-relaxed">
                  123 Fitness Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                  Hours
                </h3>
                <p className="text-[#e0e0e0] leading-relaxed">
                  Monday - Friday: 5:00 AM - 11:00 PM<br />
                  Saturday - Sunday: 6:00 AM - 10:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                  Contact
                </h3>
                <p className="text-[#e0e0e0] leading-relaxed">
                  Phone: <a href="tel:+1234567890" className="hover:text-red-600 transition-colors">+1 (234) 567-890</a><br />
                  Email: <a href="mailto:info@ironforge.com" className="hover:text-red-600 transition-colors">info@ironforge.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
