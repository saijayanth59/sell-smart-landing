
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, Check, DollarSign, FileUp, Globe, Search, Shield, Star, TrendingUp } from 'lucide-react';

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    if (elements) {
      elements.forEach(element => {
        observer.observe(element);
      });
    }
    
    return () => {
      if (elements) {
        elements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, [options]);
  
  return containerRef;
};

const Index = () => {
  const animationRef = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col antialiased" ref={animationRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-softsell-gray">
        <div className="container-section flex flex-col items-center text-center">
          <h1 className="heading-xl max-w-4xl gradient-text animate-fade-in">
            Unlock the Value of Your Unused Software Licenses
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            SoftSell helps businesses recover costs by reselling underutilized software licenses. 
            Turn unused assets into cash, quickly and securely.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="apple-button flex items-center justify-center space-x-2 hover-scale">
              <span>Get a Valuation</span>
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="apple-button-secondary hover-scale">
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

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="heading-lg">How SoftSell Works</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our simple three-step process makes it easy to convert your unused software licenses into cash
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="animate-on-scroll opacity-0 flex flex-col items-center text-center p-6 rounded-xl bg-softsell-gray hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-softsell-blue text-white flex items-center justify-center mb-6 animate-pulse">
                <FileUp size={24} />
              </div>
              <h3 className="heading-md mb-4">1. Upload License</h3>
              <p className="text-gray-600">
                Provide details of your unused software licenses through our secure platform.
              </p>
            </div>


            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-softsell-gray hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-softsell-blue text-white flex items-center justify-center mb-6 animate-pulse">
                  <Search size={24} />
                </div>
                <h3 className="heading-md mb-4">2. Get Valuation</h3>
                <p className="text-gray-600">
                  Our team analyzes current market rates and provides you with a competitive offer.
                </p>
              </div>
            </div>


            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-softsell-gray hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-softsell-blue text-white flex items-center justify-center mb-6 animate-pulse">
                  <DollarSign size={24} />
                </div>
                <h3 className="heading-md mb-4">3. Get Paid</h3>
                <p className="text-gray-600">
                  Accept our offer and receive payment within 48 hours via your preferred method.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="why-choose-us" className="bg-softsell-gray py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="heading-lg">Why Choose SoftSell</h2>
            <p className="mt-4 text-gray-600 text-lg">
              We provide the most secure and valuable way to monetize your unused software assets
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-softsell-blue/10 text-softsell-blue flex items-center justify-center mb-6">
                <TrendingUp size={24} className="animate-bounce" style={{ animationDuration: '2s' }} />
              </div>
              <h3 className="text-xl font-medium mb-3">Best Market Rates</h3>
              <p className="text-gray-600">
                We analyze the market continuously to ensure you get the highest possible value for your licenses.
              </p>
            </div>

        
            <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-full bg-softsell-blue/10 text-softsell-blue flex items-center justify-center mb-6">
                <Shield size={24} className="animate-pulse" style={{ animationDuration: '3s' }} />
              </div>
              <h3 className="text-xl font-medium mb-3">Secure Process</h3>
              <p className="text-gray-600">
                Our platform employs enterprise-grade security to protect your data and license information.
              </p>
            </div>

           
            <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-full bg-softsell-blue/10 text-softsell-blue flex items-center justify-center mb-6">
                <Globe size={24} className="animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <h3 className="text-xl font-medium mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Connect with buyers worldwide, expanding your opportunity to maximize license value.
              </p>
            </div>

            
            <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-full bg-softsell-blue/10 text-softsell-blue flex items-center justify-center mb-6">
                <Check size={24} className="animate-bounce" style={{ animationDuration: '2.5s' }} />
              </div>
              <h3 className="text-xl font-medium mb-3">Compliance Guaranteed</h3>
              <p className="text-gray-600">
                We ensure all license transfers comply with vendor terms and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="heading-lg">What Our Clients Say</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Don't just take our word for it. Here's what businesses like yours have to say about SoftSell
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
                  "SoftSell helped us recover over $50,000 from software licenses we were no longer using after downsizing. The process was seamless and the team was incredibly professional throughout."
                </p>
                
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 animate-pulse">
                    <span className="text-gray-600 font-medium">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jennifer Davis</h4>
                    <p className="text-softsell-dark-gray text-sm">CTO, Quantum Technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="animate-on-scroll opacity-0 bg-softsell-gray p-8 rounded-xl relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-4 left-8 text-softsell-blue">
                <Star fill="#0070c9" size={32} className="animate-pulse" />
              </div>
              <div className="pt-4">
                <p className="text-gray-700 text-lg italic">
                  "As a growing startup, every dollar counts. SoftSell allowed us to buy enterprise software at a fraction of the retail cost, while ensuring everything was properly licensed and transferred."
                </p>
                
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 animate-pulse">
                    <span className="text-gray-600 font-medium">RM</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Robert Martinez</h4>
                    <p className="text-softsell-dark-gray text-sm">Operations Manager, Elevate Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-softsell-gray py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="heading-lg">Get in Touch</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Ready to unlock the value of your unused software licenses? Fill out the form below and we'll be in touch within 24 hours
            </p>
          </div>

          <div className="mt-12 animate-on-scroll opacity-0">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-medium text-softsell-blue">SoftSell</h3>
              <p className="mt-4 text-gray-600 max-w-md">
                SoftSell helps businesses recover value from their unused software licenses through our secure, compliant marketplace.
              </p>
            </div>

            <div>
              <h4 className="text-base font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">How It Works</a></li>
                <li><a href="#why-choose-us" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-softsell-blue transition-colors story-link">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
