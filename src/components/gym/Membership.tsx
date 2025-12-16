import { MessageCircle, Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    description: "Perfect for trying us out",
    features: [
      "Full gym access",
      "Locker room access",
      "Free fitness assessment",
      "Flexible commitment",
    ],
    popular: false,
    whatsappMessage: "Hi, I'm interested in the Monthly membership plan at Iron Forge Fitness",
  },
  {
    name: "Quarterly",
    description: "Our most popular choice",
    features: [
      "Everything in Monthly",
      "1 personal training session",
      "Nutrition consultation",
      "Priority booking",
    ],
    popular: true,
    whatsappMessage: "Hi, I'm interested in the Quarterly membership plan at Iron Forge Fitness",
  },
  {
    name: "Yearly",
    description: "Best value for committed athletes",
    features: [
      "Everything in Quarterly",
      "4 personal training sessions",
      "Guest passes included",
      "Exclusive member events",
    ],
    popular: false,
    whatsappMessage: "Hi, I'm interested in the Yearly membership plan at Iron Forge Fitness",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="bg-[#1a1a1a] py-20 md:py-28 noise-texture">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Membership <span className="text-red-600">Plans</span>
          </h2>
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            Choose the plan that fits your goals. Contact us for personalized pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#0d0d0d] border rounded p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_0_0_2px_rgba(220,38,38,0.3)] ${
                plan.popular
                  ? "border-red-600 scale-[1.02] md:scale-105"
                  : "border-[#2d2d2d] hover:border-red-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white uppercase mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#e0e0e0] text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={18} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#e0e0e0] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/1234567890?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold rounded transition-all duration-150 active:scale-[0.98] min-h-[56px] ${
                  plan.popular
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                }`}
              >
                <MessageCircle size={20} />
                Contact for Pricing
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
