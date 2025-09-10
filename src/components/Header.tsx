import React from 'react';
import { Search, ShoppingBag, User, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  onCartToggle: () => void;
  cartItemsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onCartToggle, cartItemsCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white p-2 rounded-lg">
              <span className="font-bold text-lg">SH</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sneaker Heads</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors">Home</a>
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors">Men</a>
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors">Women</a>
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors">Kids</a>
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors">Brands</a>
          </nav>

          {/* Search bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
            <Search className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for sneakers..."
              className="bg-transparent outline-none flex-1"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-6 w-6 lg:hidden" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button
              onClick={onCartToggle}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};