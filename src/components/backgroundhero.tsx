import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
function Backgroundhero() {
  return (
//     <div className="relative bg-gradient-to-r to-blue-600 h-screen text-white overflow-hidden">
//   <div className="absolute inset-0">
//     <Image src="/Rectangle 17.png" alt="Background Image" width={800} height={0} className="object-cover object-center w-full" />
//     <div className="absolute inset-0 bg-white opacity-[30%]"></div>
//   </div>
  
//   <div className="relative z-10 flex flex-col justify-center items-center  text-center mt-40">
//     <h1 className="text-[50px] text-black font-bold leading-tight mb-4">Our Instagram</h1>
//     <p className="text-[20px]  text-black mb-8">Follow our store on Instagram</p>
//     <Button className="bg-white text-gray-900  hover:bg-yellow-300 py-2 px-12 rounded-full text-lg  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">follow us</Button>

//   </div>
// </div>
<div className="relative bg-gradient-to-r to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <Image src="/Rectangle 17.png" alt="Background Image" width={800} height={0} className="object-cover object-center w-full" />
    <div className="absolute inset-0 bg-white opacity-[30%]"></div>
  </div>
<div className="relative z-10 flex flex-col justify-center items-center text-center mt-40 px-4">
  <h1 className="text-[50px] text-black font-bold leading-tight mb-4 sm:text-4xl md:text-5xl text-xl">
    Our Instagram
  </h1>
  <p className="text-[20px] text-black mb-8 sm:text-base md:text-lg text-sm">
    Follow our store on Instagram
  </p>
  <Button className="bg-white text-gray-900 py-1 hover:bg-yellow-300 px-12 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg sm:px-6 sm:text-base">
    Follow Us
  </Button>
</div>
</div>




  )
}

export default Backgroundhero
