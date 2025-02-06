// "use client"
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { RiDeleteBin6Line } from 'react-icons/ri'
// import { useEffect } from 'react'
// import Field from '@/components/field'
// import { client } from '@/sanity/lib/client'
// import { useState } from 'react'
// function ViewCart() {


//  const [cartItems, setCartItems] = useState([])

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '{}');
//     const itemss:any=Object.values(storedCart)
//     setCartItems(itemss)
//     setCartItems(storedCart);
//   }, []);





//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             <div className='bg-[#faf4f4]'>
//             </div>
//             {/* Banner Section */}
//             <div className="relative text-black">
//                 <Image
//                     src="/shop.jpeg" // Replace with the correct image file path
//                     alt="Shop Banner"
//                     height={400}
//                     width={1600}
//                     className="w-full h-[200px] md:h-auto object-cover"
//                 />
//                 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
//                     Cart
//                 </h1>
//                 {/* Breadcrumb Section */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                     <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                         <Link href="/" className="font-bold hover:underline">Home</Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <Link href="/shop" className=" hover:underline">Cart</Link>
//                     </p>
//                 </div>
//             </div>

//             {/* Cart Table Section */}
//             <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
//                 {/* Cart Items */}
// <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
//     <table className="w-full text-xs md:text-lg table-auto border-collapse">
//         <thead className="bg-[#FFF9E5] text-gray-800">
//             <tr>
//                 <th className="py-3 text-left">Product</th>
//                 <th className="py-3 text-left hidden lg:table-cell">Price</th> {/* Hidden on small devices, visible on large */}
//                 <th className="py-3 text-left">Quantity</th>
//                 <th className="py-3 text-left">Subtotal</th>
//                 <th className="py-3 text-left"></th>
//             </tr>
//         </thead>
//         <tbody>
//             {cartItems.map((dip:any) => (
//             <tr className="border-t" key={dip.id}>
//                 <td className="flex flex-col md:flex-row items-center py-4">
//                     <Image
//                         src={dip.imagePath}
//                         height={120}
//                         width={120}
//                         alt={dip.name}
//                     />
//                     <p className="ml-4 text-gray-700 text-sm sm:text-base">Asgaard Sofa <br /> x 1</p>
//                 </td>
//                 <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">{dip.price}</td> {/* Hidden on small devices, visible on large */}
//                 <td className="py-4 text-xs md:text-lg text-gray-500">
//                     <input type="number" placeholder='/' value="1" className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md" />
//                 </td> 
//                 <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">{dip.price}</td>
//                 <td className="py-4 text-center">
//                     <RiDeleteBin6Line className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800" size={20} />
//                 </td>
//             </tr>
//             ))

// }
    
//         </tbody>
//     </table>
// </div>



//                 {/* Cart Totals Section */}
//                 <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
//                     <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
//                     <table className="w-full table-auto border-collapse">
//                         <thead>
//                             <tr>
//                                 <th className="py-3 text-left">Subtotal</th>
//                                 <th className="py-3 text-right text-gray-400">Rs: 250,000.00</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td className="py-3 text-left font-bold">Total</td>
//                                 <td className="py-3 text-right text-lg font-bold text-yellow-700">Rs: 250,000.00</td>
//                             </tr>
//                             <tr>
//                                 <td colSpan={2} className="py-4">
//                                     <button className="w-full px-6 py-3 border border-black rounded-xl" >
//                                         Checkout
//                                     </button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <div className='my-10'>
//                 <Field />
//             </div>
//         </div>
//     )
// }

// export default ViewCart;


//   const getTotalPrice = () => {
//     return Object.values(cartItems).reduce((total:any, item:any) => total + item.price * item.quantity, 0);
//   };

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import Field from "@/components/field";
import { useRouter } from "next/navigation";

function ViewCart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const itemss: any =  Object.values(cart);
    // console.log(itemss)

    setCartItems(itemss);
  }, []);

  const handleDelete = (id: string) => {
    // Remove item from the cart and update state
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const router=useRouter()
  const handleCheckout = () => {

    localStorage.setItem("checkout", JSON.stringify(cartItems));
    router.push("/checkout");
  };
 

  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]"></div>
      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/shop.jpeg" // Replace with the correct image file path
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-[200px] md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
          Cart
        </h1>
        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{">"}</span>
            <Link href="/shop" className="hover:underline">
              Cart
            </Link>
          </p>
        </div>
      </div>

      {/* Cart Table Section */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
          <table className="w-full text-xs md:text-lg table-auto border-collapse">
            <thead className="bg-[#FFF9E5] text-gray-800">
              <tr>
                <th className="py-3 text-left">Product</th>
                <th className="py-3 text-left hidden lg:table-cell">Price</th>
                <th className="py-3 text-left">Quantity</th>
                <th className="py-3 text-left">Subtotal</th>
                <th className="py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.name} className="border-t">
                  <td className="flex flex-col md:flex-row items-center py-4">
                    <Image
                      src={item.imagePath || "/shop14.jpeg"} // Assuming `image` exists in item data
                      height={120}
                      width={120}
                      alt={item.name || "Product Image"}
                    />
                    <p className="ml-4 text-gray-700 text-sm sm:text-base">
                      {item.name} <br/> x {item.quantity}
                    </p>
                  </td>
                  <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">
                    Rs: {item.price.toLocaleString()}
                  </td>
                  <td className="py-4 text-xs md:text-lg text-gray-500">
                    <input
                    placeholder="ddd"
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value);
                        const updatedItems = cartItems.map((cartItem) =>
                          cartItem.id === item.id
                            ? { ...cartItem, quantity: newQuantity }
                            : cartItem
                        );
                        setCartItems(updatedItems);
                        localStorage.setItem("cart", JSON.stringify(updatedItems));
                      }}
                      className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md"
                    />
                  </td>
                  <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">
                    Rs: {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="py-4 text-center">
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(item.id)}
                      className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800"
                      size={20}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-3 text-left">Subtotal</th>
                <th className="py-3 text-right text-gray-400">
                  Rs: {getTotal().toLocaleString()}
                  {/* {cartItems.reduce((total, item) => total + (item.quantity || 1) * item.price, 0).toLocaleString()} */}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 text-left font-bold">Total</td>
                <td className="py-3 text-right text-lg font-bold text-yellow-700">
                  Rs: {getTotal().toLocaleString()}
                  {/* {cartItems.reduce((total, item) => total + (item.quantity || 1) * item.price, 0).toLocaleString()} */}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="py-4">
                  
                  <button className="w-full px-6 py-3 border border-black rounded-xl" onClick={handleCheckout}>
                    Checkout
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-10">
        <Field />
      </div>
    </div>
  );
}

export default ViewCart;



// "use client"
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { RiDeleteBin6Line } from 'react-icons/ri'
// import Field from '@/components/field'

// function ViewCart() {
//   const [cartItems, setCartItems] = useState([])

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '{}');
//     const items: any = Object.values(storedCart);
//     setCartItems(items);
//   }, []);

//   // Calculate total
//   const calculateTotal = () => {
//     return cartItems.reduce((acc: number, item: any) => {
//       return acc + item.price * item.quantity;  // Assuming price and quantity are available
//     }, 0);
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       <div className='bg-[#faf4f4]'>
//       </div>
//       {/* Banner Section */}
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg" // Replace with the correct image file path
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-[200px] md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
//           Cart
//         </h1>
//         {/* Breadcrumb Section */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">Home</Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className=" hover:underline">Cart</Link>
//           </p>
//         </div>
//       </div>

//       {/* Cart Table Section */}
//       <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
//         {/* Cart Items */}
//         <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
//           <table className="w-full text-xs md:text-lg table-auto border-collapse">
//             <thead className="bg-[#FFF9E5] text-gray-800">
//               <tr>
//                 <th className="py-3 text-left">Product</th>
//                 <th className="py-3 text-left hidden lg:table-cell">Price</th> {/* Hidden on small devices, visible on large */}
//                 <th className="py-3 text-left">Quantity</th>
//                 <th className="py-3 text-left">Subtotal</th>
//                 <th className="py-3 text-left"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.length > 0 ? (
//                 cartItems.map((item: any, index: number) => (
//                   <tr key={index} className="border-t">
//                     <td className="flex flex-col md:flex-row items-center py-4">
//                       <Image
//                         src={item.image || '/shop14.jpeg'} // Dynamic image path from cart item
//                         height={120}
//                         width={120}
//                         alt={item.name}
//                       />
//                       <p className="ml-4 text-gray-700 text-sm sm:text-base">
//                         {item.name} <br /> x {item.quantity}
//                       </p>
//                     </td>
//                     <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">
//                       Rs: {item.price.toFixed(2)}
//                     </td>
//                     <td className="py-4 text-xs md:text-lg text-gray-500">
//                       <input
//                       placeholder='j'
//                         type="number"
//                         value={item.quantity}
//                         className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md"
//                         onChange={(e) => {
//                           const updatedItems = [...cartItems];
//                           updatedItems[index].quantity = parseInt(e.target.value, 10);
//                           setCartItems(updatedItems);
//                         }}
//                       />
//                     </td>
//                     <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">
//                       Rs: {(item.price * item.quantity).toFixed(2)}
//                     </td>
//                     <td className="py-4 text-center">
//                       <RiDeleteBin6Line
//                         className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800"
//                         size={20}
//                         onClick={() => {
//                           const updatedItems = cartItems.filter((_, i) => i !== index);
//                           setCartItems(updatedItems);
//                         }}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={5} className="py-4 text-center text-gray-500">
//                     Your cart is empty.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Cart Totals Section */}
//         <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
//           <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr>
//                 <th className="py-3 text-left">Subtotal</th>
//                 <th className="py-3 text-right text-gray-400">
//                   Rs: {calculateTotal().toFixed(2)}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-3 text-left font-bold">Total</td>
//                 <td className="py-3 text-right text-lg font-bold text-yellow-700">
//                   Rs: {calculateTotal().toFixed(2)}
//                 </td>
//               </tr>
//               <tr>
//                 <td colSpan={2} className="py-4">
//                   <button className="w-full px-6 py-3 border border-black rounded-xl">
//                     Checkout
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className='my-10'>
//         <Field />
//       </div>
//     </div>
//   );
// }

// export default ViewCart;
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import Field from "@/components/field";

// function ViewCart() {
//   const [cartItems, setCartItems] = useState<any[]>([]);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "{}");
//     const itemss: any = Object.values(cart);
//     setCartItems(itemss);
//   }, []);

//   const handleDelete = (id: string) => {
//     // Remove item from the cart and update state
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);

//   // Update localStorage
//   localStorage.setItem("cart", JSON.stringify(updatedCart));
// };

//   const getTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       <div className="bg-[#faf4f4]"></div>
//       {/* Banner Section */}
//       <div className="relative text-black">
//         <Image
//           src="/shop.jpeg" // Replace with the correct image file path
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-[200px] md:h-auto object-cover"
//         />
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
//           Cart
//         </h1>
//         {/* Breadcrumb Section */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">
//               Home
//             </Link>
//             <span className="font-bold mx-2">{">"}</span>
//             <Link href="/shop" className="hover:underline">
//               Cart
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Cart Table Section */}
//       <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
//         {/* Cart Items */}
//         <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
//           <table className="w-full text-xs md:text-lg table-auto border-collapse">
//             <thead className="bg-[#FFF9E5] text-gray-800">
//               <tr>
//                 <th className="py-3 text-left">Product</th>
//                 <th className="py-3 text-left hidden lg:table-cell">Price</th>
//                 <th className="py-3 text-left">Quantity</th>
//                 <th className="py-3 text-left">Subtotal</th>
//                 <th className="py-3 text-left"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item: any) => (
//                 <tr key={item.id} className="border-t">
//                   <td className="flex flex-col md:flex-row items-center py-4">
//                     <Image
//                       src={item.imagePath || "/shop14.jpeg"} // Assuming `image` exists in item data
//                       height={120}
//                       width={120}
//                       alt={item.name || "Product Image"}
//                     />
//                     <p className="ml-4 text-gray-700 text-sm sm:text-base">
//                       {item.name} <br /> x {item.quantity}
//                     </p>
//                   </td>
//                   <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">
//                     Rs: {item.price.toLocaleString()}
//                   </td>
//                   <td className="py-4 text-xs md:text-lg text-gray-500">
//                     <input
//                     placeholder="enter"
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) => {
//                         const newQuantity = parseInt(e.target.value);
//                         const updatedItems = cartItems.map((cartItem) =>
//                           cartItem.id === item.id
//                             ? { ...cartItem, quantity: newQuantity }
//                             : cartItem
//                         );
//                         setCartItems(updatedItems);
//                         localStorage.setItem("cart", JSON.stringify(updatedItems));
//                       }}
//                       className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md"
//                     />
//                   </td>
//                   <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">
//                     Rs: {(item.price * item.quantity).toLocaleString()}
//                   </td>
//                   <td className="py-4 text-center">
//                     <RiDeleteBin6Line
//                       onClick={() => handleDelete(item.id)}
//                       className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800"
//                       size={20}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Cart Totals Section */}
//         <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
//           <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr>
//                 <th className="py-3 text-left">Subtotal</th>
//                 <th className="py-3 text-right text-gray-400">
//                   Rs: {getTotal().toLocaleString()}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-3 text-left font-bold">Total</td>
//                 <td className="py-3 text-right text-lg font-bold text-yellow-700">
//                   Rs: {getTotal().toLocaleString()}
//                 </td>
//               </tr>
//               <tr>
//                 <td colSpan={2} className="py-4">
//                   <button className="w-full px-6 py-3 border border-black rounded-xl">
//                     Checkout
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="my-10">
//         <Field />
//       </div>
//     </div>
//   );
// }

// export default ViewCart
