
// import React, { useState } from 'react';

// interface FilterProps {
//     categories: string[];
//     minPrice: number;
//     maxPrice: number;
//     onFilterChange: (filters: any) => void;
// }

// const SearchFilter: React.FC<FilterProps> = ({ categories, minPrice, maxPrice, onFilterChange }) => {
//     const [selectedCategory, setSelectedCategory] = useState<string>('all');
//     const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

//     const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCategory(e.target.value);
//         onFilterChange({ category: e.target.value, priceRange });
//     };

//     const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newPriceRange = [...priceRange];
//         newPriceRange[+e.target.name] = +e.target.value;
//         setPriceRange(newPriceRange);
//         onFilterChange({ category: selectedCategory, priceRange: newPriceRange });
//     };

//     return (
//         <div className="filter-container p-4 border rounded-lg bg-white shadow-lg">
//             <h2 className="text-lg font-semibold mb-4">Filters</h2>
//             {/* Category Filter */}
//             <div className="category-filter mb-4">
//                 <label htmlFor="category" className="block text-sm font-medium">Category</label>
//                 <select
//                     id="category"
//                     value={selectedCategory}
//                     onChange={handleCategoryChange}
//                     className="w-full p-2 border rounded mt-2"
//                 >
//                     <option value="all">All Categories</option>
//                     {categories.map((category, index) => (
//                         <option key={index} value={category}>{category}</option>
//                     ))}
//                 </select>
//             </div>

//             {/* Price Range Filter */}
//             <div className="price-filter mb-4">
//                 <label htmlFor="price" className="block text-sm font-medium">Price Range</label>
//                 <div className="flex items-center justify-between mt-2">
//                     <input
//                     placeholder='Min Price'
//                         type="number"
//                         name="0"
//                         value={priceRange[0]}
//                         onChange={handlePriceChange}
//                         min={minPrice}
//                         max={maxPrice}
//                         className="w-1/2 p-2 border rounded"
//                     />
//                     <span className="mx-2">-</span>
//                     <input
//                     placeholder='Max Price'
//                         type="number"
//                         name="1"
//                         value={priceRange[1]}
//                         onChange={handlePriceChange}
//                         min={minPrice}
//                         max={maxPrice}
//                         className="w-1/2 p-2 border rounded"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchFilter;

// import React, { useState } from 'react';

// interface FilterProps {
//     categories: string[];
//     minPrice: number;
//     maxPrice: number;
//     onFilterChange: (filters: any) => void;
// }

// const SearchFilter: React.FC<FilterProps> = ({ categories, minPrice, maxPrice, onFilterChange }) => {
//     const [selectedCategory, setSelectedCategory] = useState<string>('all');
//     const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

//     const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCategory(e.target.value);
//         onFilterChange({ category: e.target.value, priceRange });
//     };

//     const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newPriceRange = [...priceRange];
//         newPriceRange[+e.target.name] = +e.target.value;
//         setPriceRange(newPriceRange);
//         onFilterChange({ category: selectedCategory, priceRange: newPriceRange });
//     };

//     return (
//         <div className="filter-container p-6 bg-white rounded-lg shadow-lg border border-gray-200 mb-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Category Filter */}
//                 <div className="category-filter">
//                     <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
//                     <select
//                         id="category"
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                         className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         <option value="all">All Categories</option>
//                         {categories.map((category, index) => (
//                             <option key={index} value={category}>{category}</option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Price Range Filter */}
//                 <div className="price-filter">
//                     <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price Range</label>
//                     <div className="flex items-center mt-2 gap-4">
//                         <input
//                         placeholder='Min Price'
//                             type="number"
//                             name="0"
//                             value={priceRange[0]}
//                             onChange={handlePriceChange}
//                             min={minPrice}
//                             max={maxPrice}
//                             className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <span className="text-gray-600">-</span>
//                         <input
//                         placeholder='Max Price'
//                             type="number"
//                             name="1"
//                             value={priceRange[1]}
//                             onChange={handlePriceChange}
//                             min={minPrice}
//                             max={maxPrice}
//                             className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Apply Filters Button */}
//             <button
//                 onClick={() => onFilterChange({ category: selectedCategory, priceRange })}
//                 className="w-full mt-4 py-3 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//                 Apply Filters
//             </button>
//         </div>
//     );
// };

// export default SearchFilter;

// components/SearchFilter.tsx
// import React, { useState } from 'react';

// interface FilterProps {
//   categories: string[];
//   onFilterChange: (category: string) => void;
// }

// const SearchFilter: React.FC<FilterProps> = ({ categories, onFilterChange }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//     onFilterChange(category);
//   };

//   return (
//     <div className="mb-4">
//       <label htmlFor="category-select" className="sr-only">Category</label>
//       <select
//         id="category-select"
//         value={selectedCategory}
//         onChange={handleFilterChange}
//         className="px-4 py-2 border rounded-lg w-full md:w-1/3"
//       >
//         <option value="">All Categories</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SearchFilter;
// components/SearchFilter.tsx
import React, { useState } from 'react';

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const SearchFilter: React.FC<FilterProps> = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="w-full md:w-1/3 lg:w-1/4">
      <label htmlFor="category-select" className="sr-only">Category</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleFilterChange}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-medium transition ease-in-out duration-300"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
