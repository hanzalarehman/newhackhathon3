// import Link from "next/link";
// import Image from "next/image";
// import { BsFacebook } from "react-icons/bs";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";

// import { client } from "@/sanity/lib/client";

//   async function AsgaardSofa({params:{slug}}:{params:{slug:string}}) {

//   const sizes = ["L","MD", "XL", "XS"];
//   const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"];
//   const query = `*[_type == 'product' && slug.current == "${slug}"]{
//         id,
//         _id,
//           price,
//           imagePath,
//            name,
//            category,
//           stockLevel,
//            isFeaturedProduct,
//            discountPercentage,
//            description,
//            "slug":slug.current

//       }[0]`;
//  const receiveData = await client.fetch(query,)
// const images = [receiveData.imagePath,receiveData.imagePath,receiveData.imagePath]
//   return (

//    <div className="overflow-x-hidden">
//       {/* Updated Header with better responsiveness */}

//       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 ">
//         {/* Navigation */}
//         <nav className="text-gray-700 text-sm sm:text-base flex items-center space-x-2 mt-4">
//           <Link href="/" className="font-bold hover:underline">
//             Home
//           </Link>
//           <span className="font-bold">{">"}</span>
//           <Link href="/shop" className="hover:underline">
//             Shop
//           </Link>
//           <span className="font-bold">{">"}</span>
//           <span>{receiveData.name}</span>
//         </nav>

//         <div className="flex flex-col lg:flex-row gap-8 mt-8">
//           {/* Left Side: Small Images */}
//           <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[200px] md:w-[200px]">
//             {images.map((img:any, idx:any) => (
//               <Image
//                 key={idx}
//                 src={img}
//                 alt={receiveData.name}
//                 height={120}
//                 width={120}
//                 className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-yellow-100 lg:w-[200px] lg:h-[180px]"
//               />
//             ))}
//           </div>

//           {/* Center: Big Image */}
//           <div className="flex-1">
//             <Image
//               src={
//         receiveData.imagePath

//               }
//               alt={receiveData.name}
//               height={500}
//               width={500}
//               className="w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-lg object-cover"
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="flex-1 space-y-4">
//             <h3 className="text-xl sm:text-2xl font-medium">{receiveData.name}</h3>
//             <p className="text-lg sm:text-xl text-gray-500">Rs: {receiveData.price}</p>
//             <div className="flex items-center space-x-2 mt-2">
//               <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
//               <span className="text-gray-700 text-sm sm:text-base">(5 Customer Reviews)</span>
//             </div>
//             <p className="mt-4 text-gray-700 text-sm sm:text-base">
//        {receiveData.description}
//             </p>

//             {/* Size Options */}
//             <div className="mt-4">
//               <h4 className="font-semibold">Size</h4>
//               <div className="flex gap-4 mt-2">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-gray-200"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Color Options */}
//             <div className="mt-4">
//               <h4 className="font-semibold">Color</h4>
//               <div className="flex gap-2 mt-2">
//                 {colors.map((color, idx) => (
//                   <div
//                     key={idx}
//                     className={`rounded-full h-5 w-5 ${color}`}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity and Add to Cart */}
//             <div className="flex items-center gap-4 mt-6 flex-wrap">
//               <div className="flex items-center border p-2 gap-4">
//                 <button aria-label="Decrease quantity">-</button>
//                 <span>1</span>
//                 <button aria-label="Increase quantity">+</button>
//               </div>
//               <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
//                 Add To Cart
//               </button>
//             </div>

//             <hr className="my-6" />

//             {/* Additional Information */}
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span>SKU:</span>
//                 <span>SS001</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Category:</span>
//                 <span>{receiveData.category}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tags:</span>
//                 <span>Sofa, Chair, Home, Shop</span>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <span>Share:</span>
//                 <div className="flex space-x-2">
//                   <BsFacebook className="cursor-pointer" size={25} />
//                   <FaLinkedin className="cursor-pointer" size={25} />
//                   <FaTwitter className="cursor-pointer" size={25} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="mt-8" />

//         {/* Description Section */}
//         <div>
//           <h3 className="text-xl sm:text-2xl font-medium my-10 flex justify-center space-x-8">
//             <span>Description</span>
//             <span className="text-gray-400">Additional Information</span>
//             <span className="text-gray-400">Reviews [5]</span>
//           </h3>
//           <p className="text-sm sm:text-base leading-6">
//           {receiveData.description}
//           </p>
//         </div>

//         {/* Related Products */}
//         <h2 className="text-2xl sm:text-3xl font-medium mt-8">
//           Related Products
//         </h2>
//         <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
//           {[
//             {
//               src: "/hero3.jpeg",
//               name: "Trenton modular sofa_3",
//               price: "Rs. 25,000.00",
//             },
//             {
//               src: "/hero4.jpeg",
//               name: "Granite dining table with dining chair",
//               price: "Rs. 25,000.00",
//             },
//             {
//               src: "/hero5.jpeg",
//               name: "Outdoor bar table and stool",
//               price: "Rs. 25,000.00",
//             },
//             {
//               src: "/hero6.jpeg",
//               name: "Plain console with teak",
//               price: "Rs. 25,000.00",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col text-left h-[250px] w-[150px] sm:h-[300px] sm:w-[300px]"
//             >
//               <Image
//                 src={item.src}
//                 alt={item.name}
//                 height={300}
//                 width={300}
//                 className="rounded-lg object-cover"
//               />
//               <p className="text-sm font-medium">{item.name}</p>
//               <h3 className="text-base font-semibold">{item.price}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//   );
// }

// export default AsgaardSofa;

// server
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

function AsgaardSofa({ params }: { params: { slug: string } }) {
  const [receiveData, setReceiveData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const sizes = ["L", "MD", "XL", "XS"];
  const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"];

  // Fetch product data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == 'product' && slug.current == "${params.slug}"]{
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
       
      }[0]`;
      try {
        const data = await client.fetch(query);
        setReceiveData(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  // Return loading state while fetching
  if (loading) {
    return <div className="text-center font-bold text-4xl">Loading...</div>;
  }

  if (!receiveData) {
    return <div>Product not found</div>;
  }

  const images = [
    receiveData.imagePath,
    receiveData.imagePath,
    receiveData.imagePath,
  ]; // Use images from received data
  const handleClick = (receiveData: any) => {
  const cart=JSON.parse(localStorage.getItem('cart') || '{}')
const existingData=cart.findIndex((item:any)=>item._id===receiveData._id)
if(existingData>-1){
  cart[existingData].quantity+=1
}else{
  cart.push({...receiveData,quantity:1})
}
  // if(cart[receiveData.name]){
  //   // cart[receiveData.name].quantity+=1
  //   cart[receiveData.name]={
  //     ...cart[receiveData.name],
  //     quantity: cart[receiveData.name].quantity+1
  //   };

  // }else{
  //   cart[receiveData.name]={
  //     ...receiveData,quantity:1
  //     // name:receiveData.name,
  //     // price:receiveData.price,
  //     // quantity:1
  //   }
  // }
  localStorage.setItem('cart',JSON.stringify(cart))

  console.log(cart)
  //  const jsonProduct=JSON.stringify(receiveData)
  //  console.log(jsonProduct)
  //   localStorage.setItem("cart", jsonProduct);
  };
  return (
    <div className="overflow-x-hidden">
      {/* Updated Header with better responsiveness */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Navigation */}
        <nav className="text-gray-700 text-sm sm:text-base flex items-center space-x-2 mt-4">
          <Link href="/" className="font-bold hover:underline">
            Home
          </Link>
          <span className="font-bold">{">"}</span>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <span className="font-bold">{">"}</span>
          <span>{receiveData.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Left Side: Small Images */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[200px] md:w-[200px]">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={receiveData.name}
                height={120}
                width={120}
                className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-yellow-100 lg:w-[200px] lg:h-[180px]"
              />
            ))}
          </div>

          {/* Center: Big Image */}
          <div className="flex-1">
            <Image
              src={receiveData.imagePath}
              alt={receiveData.name}
              height={500}
              width={500}
              className="w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-lg object-cover"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-medium">
              {receiveData.name}
            </h3>
            <p className="text-lg sm:text-xl text-gray-500">
              Rs: {receiveData.price}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base">
                (5 Customer Reviews)
              </span>
            </div>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              {receiveData.description}
            </p>

            {/* Size Options */}
            <div className="mt-4">
              <h4 className="font-semibold">Size</h4>
              <div className="flex gap-4 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-4">
              <h4 className="font-semibold">Color</h4>
              <div className="flex gap-2 mt-2">
                {colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`rounded-full h-5 w-5 ${color}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center border p-2 gap-4">
                <button aria-label="Decrease quantity">-</button>
                <span>1</span>
                <button aria-label="Increase quantity">+</button>
              </div>
              <button
                className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
                onClick={() => handleClick(receiveData)}
              >
                Add To Cart
              </button>
            </div>

            <hr className="my-6" />

            {/* Additional Information */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>SKU:</span>
                <span>SS001</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span>{receiveData.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span>Share:</span>
                <div className="flex space-x-2">
                  <BsFacebook className="cursor-pointer" size={25} />
                  <FaLinkedin className="cursor-pointer" size={25} />
                  <FaTwitter className="cursor-pointer" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8" />

        {/* Description Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-medium my-10 flex justify-center space-x-8">
            <span>Description</span>
            <span className="text-gray-400">Additional Information</span>
            <span className="text-gray-400">Reviews [5]</span>
          </h3>
          <p className="text-sm sm:text-base leading-6">
            {receiveData.description}
          </p>
        </div>

        {/* Related Products */}
        <h2 className="text-2xl sm:text-3xl font-medium mt-8">
          Related Products
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
          {[
            {
              src: "/hero3.jpeg",
              name: "Trenton modular sofa_3",
              price: "Rs. 25,000.00",
            },
            {
              src: "/hero4.jpeg",
              name: "Granite dining table with dining chair",
              price: "Rs. 25,000.00",
            },
            {
              src: "/hero5.jpeg",
              name: "Outdoor bar table and stool",
              price: "Rs. 25,000.00",
            },
            {
              src: "/hero6.jpeg",
              name: "Plain console with teak",
              price: "Rs. 25,000.00",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-left h-[250px] w-[150px] sm:h-[300px] sm:w-[300px]"
            >
              <Image
                src={item.src}
                alt={item.name}
                height={300}
                width={300}
                className="rounded-lg object-cover"
              />
              <p className="text-sm font-medium">{item.name}</p>
              <h3 className="text-base font-semibold">{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsgaardSofa;
// "use client"


// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsFacebook } from "react-icons/bs";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";

// function AsgaardSofa({ params }: { params: { slug: string } }) {
//   const [receiveData, setReceiveData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [cartItems, setCartItems] = useState<any>({});

//   const [cartCount, setCartCount] = useState<number>(0);

//   const sizes = ["L", "MD", "XL", "XS"];
//   const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"];

//   useEffect(() => {
//     // Fetch product data
//     const fetchData = async () => {
//       const query = `*[_type == 'product' && slug.current == "${params.slug}"]{
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
//       }[0]`;
//       try {
//         const data = await client.fetch(query);
//         setReceiveData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//         setLoading(false);
//       }
//     };
//     fetchData();

//     // Load cart items from localStorage
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '{}');
//     setCartItems(storedCart);
//   }, [params.slug]);

//   const handleClick = (receiveData: any) => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//     if (cart[receiveData.name]) {
//       cart[receiveData.name].quantity += 1;
//     } else {
//       cart[receiveData.name] = { ...receiveData, quantity: 1 };
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     setCartItems(cart); // Update the cart state to trigger re-render
//   };

//   // const getCartItemCount = () => {
//   //   const pro= Object.values(cartItems).reduce((total, item:any) => total + item.quantity, 0);
//   //   return pro;
//   // };
//   useEffect( ()=>{
      
//   const getCartItemCount = () => {
//     const pro:any= Object.values(cartItems).reduce((total, item:any) => total + item.quantity, 0);
//     setCartCount(pro)
//   };
//   return getCartItemCount();
  
//   },[ cartItems ])



//   // Return loading state while fetching
//   if (loading) {
//     return <div className="text-center font-bold text-4xl">Loading...</div>;
//   }

//   if (!receiveData) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="overflow-x-hidden">
//       {/* Navigation and other content */}

//       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//         <nav className="text-gray-700 text-sm sm:text-base flex items-center space-x-2 mt-4">
//           <Link href="/" className="font-bold hover:underline">
//             Home
//           </Link>
//           <span className="font-bold">{">"}</span>
//           <Link href="/shop" className="hover:underline">
//             Shop
//           </Link>
//           <span className="font-bold">{">"}</span>
//           <span>{receiveData.name}</span>
//         </nav>

//         <div className="flex flex-col lg:flex-row gap-8 mt-8">
//           {/* Left Side: Small Images */}
//           <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[200px] md:w-[200px]">
//             <Image
//               key={receiveData.id}
//               src={receiveData.imagePath}
//               alt={receiveData.name}
//               height={500}
//               width={500}
//               className="w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-lg object-cover"
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="flex-1 space-y-4">
//             <h3 className="text-xl sm:text-2xl font-medium">
//               {receiveData.name}
//             </h3>
//             <p className="text-lg sm:text-xl text-gray-500">
//               Rs: {receiveData.price}
//             </p>

//             {/* Size, Color Options, etc. */}

//             {/* Quantity and Add to Cart */}
//             <div className="flex items-center gap-4 mt-6 flex-wrap">
//               <button
//                 className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
//                 onClick={() => handleClick(receiveData)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Cart Icon with Item Count */}
//         <div className="absolute top-4 right-4">
//           <Link href="/viewcart">
//             <div className="relative">
//               <span className="text-white font-bold bg-red-600 rounded-full text-xs px-2 py-1 absolute top-0 right-0">
//                 {cartCount}
//               </span>
//               <span className="text-white text-2xl">🛒</span>
//             </div>
//           </Link>
//         </div>

//         {/* Related Products, Description, etc. */}
//       </div>
//     </div>
//   );
// }

// export default AsgaardSofa;



