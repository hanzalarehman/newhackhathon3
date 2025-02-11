// "use client"
// import React, { useEffect, useState } from "react";
// import { ShoppingCart } from 'lucide-react';
// import Link from "next/link";

// const CartIcon: React.FC = () => {
//   const [cartCount, setCartCount] = useState<number>(0);

//   // Function to update cart count
//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const itemCount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
//     setCartCount(itemCount);
//   };

//   useEffect(() => {
//     // Update cart count on component mount
//     updateCartCount();

//     // Optional: Listen for storage changes to update cart count
//     const handleStorageChange = () => {
//       updateCartCount();
//     };

//     window.addEventListener('storage', handleStorageChange);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   });

//   return (
//     <Link href="/viewcart" className="relative">
//       <ShoppingCart size={24} />
//       {cartCount > 0 && (
//         <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//           {cartCount}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default CartIcon;



// import React, { useEffect, useState } from "react";
// import { ShoppingCart } from 'lucide-react';
// import Link from "next/link";

// const CartIcon: React.FC = () => {
//   const [cartCount, setCartCount] = useState<number>(0);

//   // Function to update cart count
//   const updateCartCount = () => {
//     if (typeof window !== "undefined") {
//       const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//       const itemCount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
//       setCartCount(itemCount);
//     }
//   };

//   useEffect(() => {
//     // Update cart count on component mount
//     updateCartCount();

//     // Optional: Listen for storage changes to update cart count
//     const handleStorageChange = () => {
//       updateCartCount();
//     };

//     window.addEventListener('storage', handleStorageChange);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   return (
//     <Link href="/viewcart" className="relative">
//       <ShoppingCart size={24} />
//       {cartCount > 0 && (
//         <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//           {cartCount}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default CartIcon;
// "use client";

// import React, { useEffect, useState } from "react";
// import { ShoppingCart } from 'lucide-react';
// import Link from "next/link";

// const CartIcon: React.FC = () => {
//   const [cartCount, setCartCount] = useState<number>(0);

//   // Function to update cart count based on localStorage data
//   const updateCartCount = () => {
//     if (typeof window !== "undefined") {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const itemCount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
//       setCartCount(itemCount);
//     }
//   };

//   useEffect(() => {
//     // Update cart count on component mount
//     updateCartCount();
//   }, []); // This effect runs once when the component mounts

//   const handleClick = (receiveData: any) => {
//     // Retrieve the current cart from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     // Check if the product already exists in the cart
//     const existingProductIndex = cart.findIndex((item: any) => item._id === receiveData._id);

//     // If the product exists, update its quantity
//     if (existingProductIndex > -1) {
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       // Otherwise, add the new product to the cart
//       cart.push({ ...receiveData, quantity: 1 });
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Update cart count immediately after modifying the cart
//     updateCartCount();
//   };

//   return (
//     <Link href="/viewcart" className="relative">
//       <ShoppingCart size={24} />
//       {cartCount > 0 && (
//         <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//           {cartCount}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default CartIcon;
"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart } from 'lucide-react';
import Link from "next/link";

const CartIcon: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  // Function to update cart count based on localStorage data
  const updateCartCount = () => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const itemCount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
      setCartCount(itemCount);
    }
  };

  // Using useEffect to listen to localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      updateCartCount(); // Update cart count whenever localStorage changes
    };

    window.addEventListener("storage", handleStorageChange); // Listen to storage events

    // Initially update cart count when component mounts
    updateCartCount();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Link href="/viewcart" className="relative">
      <ShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;


