const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Gym floor with equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Weight training area",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alt: "Cardio machines",
  },
  {
    src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
    alt: "Free weights section",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
    alt: "Functional training zone",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    alt: "Personal training session",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0d0d0d] py-20 md:py-28 noise-texture">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Our <span className="text-red-600">Facility</span>
          </h2>
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            Take a look at our world-class training environment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
