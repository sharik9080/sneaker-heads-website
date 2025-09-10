import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSidebarProps {
  selectedBrands: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onBrandChange: (brands: string[]) => void;
  onCategoryChange: (categories: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedBrands,
  selectedCategories,
  priceRange,
  onBrandChange,
  onCategoryChange,
  onPriceChange
}) => {
  const brands = ['Nike', 'Adidas', 'Jordan', 'Converse', 'Vans', 'Puma'];
  const categories = ['running', 'casual', 'basketball', 'skate', 'lifestyle'];

  const handleBrandToggle = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(updatedBrands);
  };

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Filters</h3>
      
      {/* Brands */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Brands</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="300"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
              className="flex-1"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$300</span>
          </div>
          <div className="text-sm font-medium">
            Up to ${priceRange[1]}
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onBrandChange([]);
          onCategoryChange([]);
          onPriceChange([0, 300]);
        }}
        className="w-full text-orange-500 font-medium hover:text-orange-600"
      >
        Clear All Filters
      </button>
    </div>
  );
};