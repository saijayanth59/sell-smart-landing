import { DollarSign, FileUp, Search } from 'lucide-react'
import React from 'react'

export default function Procedure() {
  return (
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
  )
}
