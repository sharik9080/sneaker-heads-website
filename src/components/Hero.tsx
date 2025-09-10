import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Step Into <span className="text-orange-500">Style</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Discover the latest and greatest in sneaker culture. From limited editions to everyday essentials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Explore Brands
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
          <div>
            <div className="text-2xl font-bold text-orange-500">500+</div>
            <div className="text-sm text-gray-400">Sneaker Models</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">50+</div>
            <div className="text-sm text-gray-400">Top Brands</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};