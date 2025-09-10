import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <span className="font-bold text-lg">SH</span>
              </div>
              <span className="text-xl font-bold">Sneaker Heads</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for the latest and greatest sneakers from top brands worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500">Size Guide</a></li>
              <li><a href="#" className="hover:text-orange-500">Shipping Info</a></li>
              <li><a href="#" className="hover:text-orange-500">Returns</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500">Men's Sneakers</a></li>
              <li><a href="#" className="hover:text-orange-500">Women's Sneakers</a></li>
              <li><a href="#" className="hover:text-orange-500">Kids' Sneakers</a></li>
              <li><a href="#" className="hover:text-orange-500">Limited Edition</a></li>
              <li><a href="#" className="hover:text-orange-500">Sale Items</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sneaker Heads. All rights reserved. | Developed by <span className="text-orange-500 font-medium">Md Sharik</span></p>
        </div>
      </div>
    </footer>
  );
};