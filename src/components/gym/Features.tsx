import { Dumbbell, Users, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art machines and free weights from top brands",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals to guide your fitness journey",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open 5AM to 11PM, 7 days a week for your convenience",
  },
  {
    icon: Zap,
    title: "High-Intensity Zone",
    description: "Dedicated space for CrossFit and functional training",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0d0d0d] py-20 md:py-28 noise-texture">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Why Choose <span className="text-red-600">Iron Forge</span>
          </h2>
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            Everything you need to transform your body and mind under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2d2d2d] p-6 rounded transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_0_2px_rgba(220,38,38,0.3)] group"
            >
              <div className="w-16 h-16 bg-red-600/10 rounded flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors duration-300">
                <feature.icon size={32} className="text-red-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-3">
                {feature.title}
              </h3>
              <p className="text-[#e0e0e0] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
