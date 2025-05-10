import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (  
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-softsell-gray">
      <div className="container-section flex flex-col items-center text-center">
        <h1 className="heading-xl max-w-4xl gradient-text animate-fade-in">
          Unlock the Value of Your Unused Software Licenses
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          SoftSell helps businesses recover costs by reselling underutilized
          software licenses. Turn unused assets into cash, quickly and securely.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#contact"
            className="apple-button flex items-center justify-center space-x-2 hover-scale"
          >
            <span>Get a Valuation</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="apple-button-secondary hover-scale"
          >
            Learn How It Works
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-16 w-full max-w-4xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 h-32 bottom-0"></div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 transform perspective-1000 hover-tilt">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Software license management dashboard"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
