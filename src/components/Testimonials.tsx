import { Star } from "lucide-react";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
          <h2 className="heading-lg">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Don't just take our word for it. Here's what businesses like yours
            have to say about SoftSell
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Testimonial 1 */}
          <div className="animate-on-scroll opacity-0 bg-softsell-gray p-8 rounded-xl relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-4 left-8 text-softsell-blue">
              <Star fill="#0070c9" size={32} className="animate-pulse" />
            </div>
            <div className="pt-4">
              <p className="text-gray-700 text-lg italic">
                "SoftSell helped us recover over $50,000 from software licenses
                we were no longer using after downsizing. The process was
                seamless and the team was incredibly professional throughout."
              </p>

              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 animate-pulse">
                  <span className="text-gray-600 font-medium">JD</span>
                </div>
                <div>
                  <h4 className="font-medium">Jennifer Davis</h4>
                  <p className="text-softsell-dark-gray text-sm">
                    CTO, Quantum Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="animate-on-scroll opacity-0 bg-softsell-gray p-8 rounded-xl relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute -top-4 left-8 text-softsell-blue">
              <Star fill="#0070c9" size={32} className="animate-pulse" />
            </div>
            <div className="pt-4">
              <p className="text-gray-700 text-lg italic">
                "As a growing startup, every dollar counts. SoftSell allowed us
                to buy enterprise software at a fraction of the retail cost,
                while ensuring everything was properly licensed and
                transferred."
              </p>

              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 animate-pulse">
                  <span className="text-gray-600 font-medium">RM</span>
                </div>
                <div>
                  <h4 className="font-medium">Robert Martinez</h4>
                  <p className="text-softsell-dark-gray text-sm">
                    Operations Manager, Elevate Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
