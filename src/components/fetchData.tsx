import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

// Type definition for the fetched product data
interface ProductType {
  id: string;
  _id: string;
  price: string;
  imagePath: string;
  name: string;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
  discountPercentage: number;
  description: string[];
  slug: string;
}

// Fetch product data server-side
export async function getServerSideProps({ params }: { params: { product: string } }) {
  try {
    const query = `*[_type == 'product' && slug.current == $slug] {
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
      "slug": slug.current
    }`;

    // Fetch product from Sanity CMS
    const resData = await client.fetch(query, { slug: params.product });

    // If no product found, return 404 page
    if (!resData || resData.length === 0) {
      return {
        notFound: true,
      };
    }

    // Pass the product data as props to the component
    return {
      props: {
        product: resData[0],
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}

function AsgaardSofa({ product }: { product: ProductType }) {
  const sizes = ["L", "MD", "XL", "XS"];
  const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"];

  // Fallback image if the product does not have an image
  const fallbackImage = "/default-image.jpg";

  if (!product) {
    return <div>Product not found.</div>; // Handle case when no product data is available
  }

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <nav className="text-gray-700 text-sm sm:text-base flex items-center space-x-2 mt-4">
          <Link href="/" className="font-bold hover:underline">
            Home
          </Link>
          <span className="font-bold">{">"}</span>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <span className="font-bold">{">"}</span>
          <span>{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="flex-1">
            {/* Use product image from data or fallback image */}
            <Image
              src={product.imagePath || fallbackImage}
              alt={product.name}
              height={500}
              width={500}
              className="w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-lg object-cover"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-medium">{product.name}</h3>
            <p className="text-lg sm:text-xl text-gray-500">Rs: {product.price}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base">(5 Customer Reviews)</span>
            </div>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">{product.description[0]}</p>

            {/* Size Options */}
            <div className="mt-4">
              <h4 className="font-semibold">Size</h4>
              <div className="flex gap-4 mt-2">
                {sizes.map((size) => (
                  <button key={size} className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-gray-200">
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
                  <div key={idx} className={`rounded-full h-5 w-5 ${color}`}></div>
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
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
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
                <span>{product.category}</span>
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

        <div>
          <h3 className="text-xl sm:text-2xl font-medium my-10 flex justify-center space-x-8">
            <span>Description</span>
            <span className="text-gray-400">Additional Information</span>
            <span className="text-gray-400">Reviews [5]</span>
          </h3>
          <p className="text-sm sm:text-base leading-6">{product.description.join(" ")}</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-medium mt-8">
          Related Products
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
          {[{ src: "/hero3.jpeg", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" }].map((item, index) => (
            <div key={index} className="flex flex-col text-left h-[250px] w-[150px] sm:h-[300px] sm:w-[300px]">
              <Image src={item.src} alt={item.name} height={300} width={300} className="rounded-lg object-cover" />
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

