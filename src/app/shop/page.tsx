// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Shopline from '@/components/shop'
// import Field from '@/components/field'
// import Navbar from '@/components/navbar'
// import Page from '@/components/Ourpage'
// import { client } from '@/sanity/lib/client'
// import { Interface } from 'readline'
// import { link } from 'fs'

// export interface ProductType {
//     [x: string]: any
//     _type: string;
//     id: string;
//     _id: string;
//     name: string;
//     imagePath: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     isFeaturedProduct: boolean;
//     stockLevel: number;
//     category: string;
//   }
  

//     async function  Shop() {
//  const query = `*[_type == 'product']{
//   id,
//   _id,
//     price,
//     imagePath,
//     name,
//     category,
//    stockLevel,
//     isFeaturedProduct,
//     discountPercentage,
//     description,
//     "slug":slug.current,
  
//     }
//     `
//  const receiveData = await client.fetch(query)

//         return (
    
//             <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//                 <div className='bg-[#faf4f4]'>
                  
//                 </div>
//                 {/* Banner Section */}
//                 <div className="relative text-black">
//                     <Image
//                         src="/shop.jpeg" // Replace with the correct image file path
//                         alt="Shop Banner"
//                         height={400}
//                         width={1600}
//                         className="w-full h-40 md:h-auto object-cover"
//                     />
//                     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold ">
//                         Shop
//                     </h1>
//                     {/* Breadcrumb Section */}
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                         <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                             <Link href="/" className="font-bold hover:underline">Home</Link>
//                             <span className="font-bold mx-2">{'>'}</span>
//                             <Link href="/shop" className=" hover:underline">Shop</Link>
//                         </p>
//                     </div>
//                 </div>
    
//                 <div className='my-6'>
//                     <Shopline />
//                 </div>
    
//                 <div>
//                     {/* Product List */}
//                     <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
//                         {/* Product Item */}
//                         {receiveData.map((product:ProductType) => (
//                         <Link href={`/shop/${product.slug}`} key={product.slug} className="flex flex-col text-left mx-auto ">
//                             {/* <Link href={item.href} passHref> */}
//                                 <Image
//                                     src={product.imagePath}
//                                     alt={product.name}
//                                     height={300}
//                                     width={300}
//                                     className="rounded-lg h-[300px] w-[300px] "
//                                 />
//                             {/* </Link> */}
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//                         </Link>
                        
//                     ))}
    
    
    
    
    
    
    
    
    
    
//     <div className='justify-center mx-auto'>
    
//     <Page />
//     </div>
    
//                     </div>
//                 </div>
                
//                 <Field/>
    
//             </div>
//         )
//     }
    
// //     export default Shop
// "use client"

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import SearchFilter from '@/components/SearchFilter';
// import { client } from '@/sanity/lib/client';

// export interface ProductType {
//     [x: string]: any;
//     _type: string;
//     id: string;
//     _id: string;
//     name: string;
//     imagePath: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     isFeaturedProduct: boolean;
//     stockLevel: number;
//     category: string;
// }

// async function fetchProducts(query: string) {
//     return await client.fetch(query);
// }

// function Shop() {
//     const [products, setProducts] = useState<ProductType[]>([]);
//     const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
//     const [categories, setCategories] = useState<string[]>([]);
//     const [minPrice, setMinPrice] = useState<number>(0);
//     const [maxPrice, setMaxPrice] = useState<number>(10000); // Set a reasonable max price range

//     useEffect(() => {
//         const getData = async () => {
//             const query = `*[_type == 'product']{
//                 id,
//                 _id,
//                 price,
//                 imagePath,
//                 name,
//                 category,
//                 stockLevel,
//                 isFeaturedProduct,
//                 discountPercentage,
//                 description,
//                 "slug":slug.current,
//             }`;
//             const data = await fetchProducts(query);
//             setProducts(data);
//             setFilteredProducts(data);

//             // Get unique categories
//             const uniqueCategories = [...new Set(data.map((product: ProductType) => product.category))] as string[];
//             setCategories(uniqueCategories);
//         };

//         getData();
//     }, []);

//     const handleFilterChange = (filters: { category: string; priceRange: number[] }) => {
//         const { category, priceRange } = filters;

//         // Filter products by category and price
//         const filtered = products.filter((product) => {
//             const isCategoryMatch = category === 'all' || product.category === category;
//             const isPriceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
//             return isCategoryMatch && isPriceInRange;
//         });

//         setFilteredProducts(filtered);
//     };

//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             <div className="bg-[#faf4f4]">
//                 {/* Banner Section */}
//                 <div className="relative text-black">
//                     <Image
//                         src="/shop.jpeg"
//                         alt="Shop Banner"
//                         height={400}
//                         width={1600}
//                         className="w-full h-40 md:h-auto object-cover"
//                     />
//                     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold ">
//                         Shop
//                     </h1>
//                 </div>

//                 <div className="my-6">
//                     {/* Search Filter Component */}
//                     <SearchFilter
//                         categories={categories}
//                         minPrice={minPrice}
//                         maxPrice={maxPrice}
//                         onFilterChange={handleFilterChange}
//                     />
//                 </div>

//                 <div>
//                     {/* Product List */}
//                     <div className="flex flex-wrap justify-center md:justify-start gap-6">
//                         {filteredProducts.map((product: ProductType) => (
//                             <Link href={`/shop/${product.slug}`} key={product.slug} className="flex flex-col text-left mx-auto">
//                                 <Image
//                                     src={product.imagePath}
//                                     alt={product.name}
//                                     height={300}
//                                     width={300}
//                                     className="rounded-lg h-[300px] w-[300px]"
//                                 />
//                                 <p className="text-sm font-medium">{product.name}</p>
//                                 <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Shop;
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import SearchFilter from '@/components/SearchFilter';
// import { client } from '@/sanity/lib/client';

// export interface ProductType {
//     [x: string]: any;
//     _type: string;
//     id: string;
//     _id: string;
//     name: string;
//     imagePath: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     isFeaturedProduct: boolean;
//     stockLevel: number;
//     category: string;
// }

// async function fetchProducts(query: string) {
//     return await client.fetch(query);
// }

// function Shop() {
//     const [products, setProducts] = useState<ProductType[]>([]);
//     const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
//     const [categories, setCategories] = useState<string[]>([]);
//     const [minPrice, setMinPrice] = useState<number>(0);
//     const [maxPrice, setMaxPrice] = useState<number>(10000); // Set a reasonable max price range

//     useEffect(() => {
//         const getData = async () => {
//             const query = `*[_type == 'product']{
//                 id,
//                 _id,
//                 price,
//                 imagePath,
//                 name,
//                 category,
//                 stockLevel,
//                 isFeaturedProduct,
//                 discountPercentage,
//                 description,
//                 "slug":slug.current,
//             }`;
//             const data = await fetchProducts(query);
//             setProducts(data);
//             setFilteredProducts(data);

//             // Get unique categories
//             const uniqueCategories = [...new Set(data.map((product: ProductType) => product.category))] as string[];
//             setCategories(uniqueCategories);
//         };

//         getData();
//     }, []);

//     const handleFilterChange = (filters: { category: string; priceRange: number[] }) => {
//         const { category, priceRange } = filters;

//         // Filter products by category and price
//         const filtered = products.filter((product) => {
//             const isCategoryMatch = category === 'all' || product.category === category;
//             const isPriceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
//             return isCategoryMatch && isPriceInRange;
//         });

//         setFilteredProducts(filtered);
//     };

//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             <div className="bg-[#faf4f4]">
//                 {/* Banner Section */}
//                 <div className="relative text-black">
//                     <Image
//                         src="/shop.jpeg"
//                         alt="Shop Banner"
//                         height={400}
//                         width={1600}
//                         className="w-full h-40 md:h-auto object-cover"
//                     />
//                     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold ">
//                         Shop
//                     </h1>
//                 </div>

//                 <div className="my-6">
//                     {/* Search Filter Component */}
//                     <SearchFilter
//                         categories={categories}
//                         minPrice={minPrice}
//                         maxPrice={maxPrice}
//                         onFilterChange={handleFilterChange}
//                     />
//                 </div>

//                 <div>
//                     {/* Product List */}
//                     <div className="flex flex-wrap justify-center md:justify-start gap-6">
//                         {filteredProducts.map((product: ProductType) => (
//                             <Link href={`/shop/${product.slug}`} key={product.slug} className="flex flex-col text-left mx-auto">
//                                 <Image
//                                     src={product.imagePath}
//                                     alt={product.name}
//                                     height={300}
//                                     width={300}
//                                     className="rounded-lg h-[300px] w-[300px]"
//                                 />
//                                 <p className="text-sm font-medium">{product.name}</p>
//                                 <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Shop;
// "use client"


// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Shopline from '@/components/shop';
// import Field from '@/components/field';
// import Navbar from '@/components/navbar';
// import Page from '@/components/Ourpage';
// import { client } from '@/sanity/lib/client';
// import Search from '@/components/Search';
// import SearchFilter from '@/components/SearchFilter';

// export interface ProductType {
//   _type: string;
//   id: string;
//   _id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
//   slug: string;
// }

// function Shop() {
//   const [receiveData, setReceiveData] = useState<ProductType[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [filteredData, setFilteredData] = useState<ProductType[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == 'product']{
//         id,
//         _id,
//         price,
//         imagePath,
//         name,
//         category,
//         stockLevel,
//         isFeaturedProduct,
//         discountPercentage,
//         description,
//         "slug":slug.current
//       }`;

//       const data = await client.fetch<ProductType[]>(query);
//       setReceiveData(data);
//       setCategories([...new Set(data.map((product: ProductType) => product.category as string))]);
//       setFilteredData(data);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filterProducts = () => {
//       let filtered = receiveData;

//       if (searchQuery) {
//         filtered = filtered.filter((product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }

//       if (selectedCategory) {
//         filtered = filtered.filter((product) => product.category === selectedCategory);
//       }

//       setFilteredData(filtered);
//     };

//     filterProducts();
//   }, [searchQuery, selectedCategory, receiveData]);

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   const handleFilterChange = (category: string) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg"
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//           Shop
//         </h1>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">
//               Home
//             </Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className="hover:underline">
//               Shop
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="my-6">
//         <Shopline />
//       </div>

//       {/* Search and Filter Section */}
//       <div className="flex justify-between items-center mb-4">
//         <Search onSearch={handleSearch} />
//         <SearchFilter categories={categories} onFilterChange={handleFilterChange} />
//       </div>

//       {/* Product List */}
//       <div className="flex flex-wrap justify-center md:justify-start gap-6">
//         {filteredData.map((product: ProductType) => (
//           <Link href={`/shop/${product.slug}`} key={product.slug} className="flex flex-col text-left mx-auto">
//             <Image
//               src={product.imagePath}
//               alt={product.name}
//               height={300}
//               width={300}
//               className="rounded-lg h-[300px] w-[300px]"
//             />
//             <p className="text-sm font-medium">{product.name}</p>
//             <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//           </Link>
//         ))}
//       </div>

//       <div className="justify-center mx-auto">
//         <Page />
//       </div>

//       <Field />
//     </div>
//   );
// }

// export default Shop;
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Shopline from '@/components/shop';
// import Field from '@/components/field';
// import Navbar from '@/components/navbar';
// import Page from '@/components/Ourpage';
// import { client } from '@/sanity/lib/client';
// import Search from '@/components/Search';
// import SearchFilter from '@/components/SearchFilter';

// export interface ProductType {
//   _type: string;
//   id: string;
//   _id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
//   slug: string;
// }

// function Shop() {
//   const [receiveData, setReceiveData] = useState<ProductType[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [filteredData, setFilteredData] = useState<ProductType[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == 'product']{
//         id,
//         _id,
//         price,
//         imagePath,
//         name,
//         category,
//         stockLevel,
//         isFeaturedProduct,
//         discountPercentage,
//         description,
//         "slug":slug.current
//       }`;

//       const data = await client.fetch<ProductType[]>(query);
//       setReceiveData(data);
//       setCategories([...new Set(data.map((product: ProductType) => product.category as string))]);
//       setFilteredData(data);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filterProducts = () => {
//       let filtered = receiveData;

//       if (searchQuery) {
//         filtered = filtered.filter((product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }

//       if (selectedCategory) {
//         filtered = filtered.filter((product) => product.category === selectedCategory);
//       }

//       setFilteredData(filtered);
//     };

//     filterProducts();
//   }, [searchQuery, selectedCategory, receiveData]);

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   const handleFilterChange = (category: string) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg"
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//           Shop
//         </h1>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">
//               Home
//             </Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className="hover:underline">
//               Shop
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="my-6">
//         <Shopline />
//       </div>

//       {/* Search and Filter Section */}
//       <div className="flex justify-between items-center mb-6">
//         <Search onSearch={handleSearch} />
//         <SearchFilter categories={categories} onFilterChange={handleFilterChange} />
//       </div>

//       {/* Product List */}
//       <div className="flex flex-wrap justify-center md:justify-start gap-6">
//         {filteredData.map((product: ProductType) => (
//           <Link href={`/shop/${product.slug}`} key={product.slug} className="flex flex-col text-left mx-auto">
//             <Image
//               src={product.imagePath}
//               alt={product.name}
//               height={300}
//               width={300}
//               className="rounded-lg h-[300px] w-[300px]"
//             />
//             <p className="text-sm font-medium">{product.name}</p>
//             <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//           </Link>
//         ))}
//       </div>

//       <div className="justify-center mx-auto">
//         <Page />
//       </div>

//       <Field />
//     </div>
//   );
// }

// export default Shop;

// "use client"
// import  {  useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Shopline from '@/components/shop';
// import Field from '@/components/field';

// import { client } from '@/sanity/lib/client';
// import Search from '@/components/Search';
// import SearchFilter from '@/components/SearchFilter';
// import Pagination from '@/components/Pagination';
// import  { useState } from 'react';
// // import dynamic from 'next/dynamic';
// // const ChildTwoComponent = dynamic(() => import('@/components/Search'), { ssr: false });




// export interface ProductType {
//   _type: string;
//   id: string;
//   _id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
//   slug: string;
//   quantity:number
// }

// function Shop() {
//   const [receiveData, setReceiveData] = useState<ProductType[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [filteredData, setFilteredData] = useState<ProductType[]>([]);
 
//   const [selectedCategory, setSelectedCategory] = useState('');
 

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == 'product']{
//         id,
//         _id,
//         price,
//         imagePath,
//         name,
//         category,
//         stockLevel,
//         isFeaturedProduct,
//         discountPercentage,
//         description,
//         "slug":slug.current
//       }`;

//       const data = await client.fetch<ProductType[]>(query);
//       setReceiveData(data);
//       setCategories([...new Set(data.map((product: ProductType) => product.category))]);
//       setFilteredData(data);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filterProducts = () => {
//       let filtered = receiveData;

     

//       if (selectedCategory) {
//         filtered = filtered.filter((product) => product.category === selectedCategory);
//       }

//       setFilteredData(filtered);
//     };

//     filterProducts();
//   }, [ selectedCategory, receiveData]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;
 

//   const handleFilterChange = (category: string) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page on category change
//   };

//   // Get current products to display based on page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

//   const totalPages = Math.ceil(filteredData.length / productsPerPage);

// // Add this function inside your Shop component
// const handlePageChange = (page: number) => {
//   setCurrentPage(page);
//   window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: scroll to top
// };

//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg"
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//           Shop
//         </h1>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">
//               Home
//             </Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className="hover:underline">
//               Shop
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="my-6">
//         <Shopline />
//       </div>

//       {/* Search and Filter Section */}
//       <div className="flex justify-between items-center mb-6">
        
//         {/* <ChildTwoComponent onSearch={handleSearch}/> */}
//         <SearchFilter categories={categories} onFilterChange={handleFilterChange} />
//       </div>

//       {/* Product List */}
//       <div className="flex flex-wrap justify-center md:justify-start gap-6">
//         {currentProducts.map((product: ProductType) => (
//           <Link href={`/shop/${product.slug}`} key={product.slug } className="flex flex-col text-left mx-auto">
//             <Image
//               src={product.imagePath}
//               alt={product.name}
//               height={300}
//               width={300}
//               className="rounded-lg h-[300px] w-[300px]"
//             />
//             <p className="text-sm font-medium">{product.name}</p>
//             <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination Component */}
  

//       <div className="justify-center mx-auto mb-8">
//       <Pagination
//   currentPage={currentPage}
//   totalPages={totalPages}
//   onPageChange={handlePageChange}  // Update this line
// />
//       </div>

//       <Field />
//     </div>
//   );
// }

// export default Shop;
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Shopline from '@/components/shop';
// import Field from '@/components/field';

// import { client } from '@/sanity/lib/client';
// import Search from '@/components/Search';
// import SearchFilter from '@/components/SearchFilter';
// import Pagination from '@/components/Pagination';

// export interface ProductType {
//   _type: string;
//   id: string;
//   _id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
//   slug: string;
//   quantity: number;
// }

// function Shop() {
//   const [receiveData, setReceiveData] = useState<ProductType[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [filteredData, setFilteredData] = useState<ProductType[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == 'product']{
//         id,
//         _id,
//         price,
//         imagePath,
//         name,
//         category,
//         stockLevel,
//         isFeaturedProduct,
//         discountPercentage,
//         description,
//         "slug":slug.current
//       }`;

//       const data = await client.fetch<ProductType[]>(query);
//       setReceiveData(data);
//       setCategories([...new Set(data.map((product: ProductType) => product.category))]); // Extract unique categories
//       setFilteredData(data); // Initially, show all products
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filterProducts = () => {
//       let filtered = receiveData;

//       // Filter by search query (case-insensitive)
//       if (searchQuery) {
//         filtered = filtered.filter((product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }

//       // Filter by category
//       if (selectedCategory) {
//         filtered = filtered.filter((product) => product.category === selectedCategory);
//       }

//       setFilteredData(filtered); // Update the filtered data
//     };

//     filterProducts(); // Reapply filtering whenever search query or category changes
//   }, [searchQuery, selectedCategory, receiveData]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     setCurrentPage(1); // Reset to first page on new search
//   };

//   const handleFilterChange = (category: string) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page on category change
//   };

//   // Get current products to display based on page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

//   const totalPages = Math.ceil(filteredData.length / productsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: scroll to top
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg"
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//           Shop
//         </h1>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">
//               Home
//             </Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className="hover:underline">
//               Shop
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="my-6">
//         <Shopline />
//       </div>

//       {/* Search and Filter Section */}
//       <div className="flex justify-between items-center mb-6">
//         <Search onSearch={handleSearch} />
//         <SearchFilter categories={categories} onFilterChange={handleFilterChange} />
//       </div>

//       {/* Product List */}
//       <div className="flex flex-wrap justify-center md:justify-start gap-6">
//         {currentProducts.map((product: ProductType) => (
//           <Link href={`/shop/${product.slug}`} key={product.slug} className="flex flex-col text-left mx-auto">
//             <Image
//               src={product.imagePath}
//               alt={product.name}
//               height={300}
//               width={300}
//               className="rounded-lg h-[300px] w-[300px]"
//             />
//             <p className="text-sm font-medium">{product.name}</p>
//             <h3 className="text-xl font-semibold">Rs {product.price}</h3>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination Component */}
//       <div className="justify-center mx-auto mb-8">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}  // Update this line
//         />
//       </div>

//       <Field />
//     </div>
//   );
// }

// export default Shop;
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Shopline from '@/components/shop';
import Field from '@/components/field';
import { client } from '@/sanity/lib/client';
import Search from '@/components/Search';
import SearchFilter from '@/components/SearchFilter';
import Pagination from '@/components/Pagination';

export interface ProductType {
  _type: string;
  id: string;
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  slug: string;
  quantity: number;
}

function Shop() {
  const [receiveData, setReceiveData] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == 'product']{
        id,
        _id,
        price,
        imagePath,
        name,
        category,
        stockLevel,
        isFeaturedProduct,
        discountPercentage,
        description,
        "slug":slug.current
      }`;

      const data = await client.fetch<ProductType[]>(query);
      setReceiveData(data);
      setCategories([...new Set(data.map((product) => product.category))]);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  // Filtering products based on selected category
  useEffect(() => {
    const filterProducts = () => {
      let filtered = receiveData;
  
      if (selectedCategory) {
        filtered = filtered.filter((product) => product.category === selectedCategory);
      }
  
      if (searchQuery) {
        filtered = filtered.filter((product) => {
          const nameMatch = (product.name?.toLowerCase() ?? '').includes(searchQuery.toLowerCase());
          const descriptionMatch = (product.description?.toLowerCase() ?? '').includes(searchQuery.toLowerCase());
          return nameMatch || descriptionMatch;
        });
      }
  
      setFilteredData(filtered);
    };
  
    filterProducts();
  }, [selectedCategory, receiveData, searchQuery]);
  

  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update search query and trigger filtering
  };

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="relative text-black">
        <Image
          src="/shop.jpeg"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
          Shop
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </p>
        </div>
      </div>

      <div className="my-6">
        <Shopline />
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <Search onSearch={handleSearch} />

        {/* Category Filter */}
        <SearchFilter categories={categories} onFilterChange={handleFilterChange} />
      </div>

      {/* Product List */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        {currentProducts.map((product) => (
          <Link href={`/shop/${product.slug}`} key={product.slug || product._id} className="flex flex-col text-left mx-auto">
            <Image
              src={product.imagePath}
              alt={product.name}
              height={300}
              width={300}
              className="rounded-lg h-[300px] w-[300px]"
            />
            <p className="text-sm font-medium">{product.name}</p>
            <h3 className="text-xl font-semibold">Rs {product.price}</h3>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="justify-center mx-auto mb-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>

      <Field />
    </div>
  );
}

export default Shop;

