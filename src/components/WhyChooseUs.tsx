import { Check, Globe, Shield, TrendingUp } from 'lucide-react'
import React from 'react'

export default function WhyChooseUs() {
  return (
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
  )
}
