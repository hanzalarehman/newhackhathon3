
// // components/Search.tsx
// import React, { useState } from 'react';

// interface SearchProps {
//   onSearch: (query: string) => void;
// }

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearchChange}
//         placeholder="Search for products..."
//         className="px-4 py-2 border rounded-lg w-full md:w-1/2"
//       />
//     </div>
//   );
// };

// export default Search;
// components/Search.tsx
// import React, { useState } from 'react';

// interface SearchProps {
//   onSearch: (query: string) => void;
// }

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="w-full md:w-1/2 lg:w-1/3">
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearchChange}
//         placeholder="Search for products..."
//         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
//       />
//     </div>
//   );
// };

// export default Search;

// Search.tsx
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query to the parent component to filter data
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 w-full md:w-1/4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="outline-none p-2 w-full text-sm"
      />
    </div>
  );
};

export default Search;
