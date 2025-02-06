"use client"
import Link from 'next/link'

import Image from 'next/image'
import { Heart, Menu, Search, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
function Navbar() {
  function toggleMenu(){
    const mobileMenuContent = document.getElementById('mobileMenuContent') as HTMLElement;

    if (mobileMenuContent.getAttribute('class') === 'hidden') {
        mobileMenuContent.setAttribute('class', 'block');
    } else {
        mobileMenuContent.setAttribute('class', 'hidden');
    }
}
  return (
  <nav className='w-full bg-[#FBEBB5] p-4'>
    <div className='hidden md:block'>
    <div className='max-w-7xl mx-auto flex justify-between items-center'>
<div>
    
</div>
        <div className='flex items-center gap-x-16 ml-20'>
      <Link href="/" className='font-semibold'>Home</Link>
      <Link href="/shop" className='font-semibold'>Shop</Link>
      <Link href="/blog" className='font-semibold'>About</Link>
      <Link href="/contact" className='font-semibold'>Contact</Link>
        </div>
        <div className='flex items-center gap-10'>
    <Link href="/myaccount"> <Image src="/p.png" alt="icon"  width={28} height={28}/></Link>
    <Search/>
      <Button variant={'outline'} size={"icon"} className='rounded-full bg-[#FBEBB5]'>
            <Heart className='bg-[#FBEBB5]'/>
          </Button>
          <Button variant={'outline'} size={"icon"} className='rounded-full bg-[#FBEBB5]'>
           <Link href="/viewcart"> <ShoppingCart className='bg-[#FBEBB5]'/> </Link>
            </Button>
        </div>
    </div>
    </div>

<div className='block md:hidden'>
    <div className='flex justify-between items-center bg-[#FBEBB5]'>
      <div className='flex items-center gap-3'>
     
    <Search/>
      <Button variant={'outline'} size={"icon"} className='rounded-full bg-[#FBEBB5]'>
            <Heart className='bg-[#FBEBB5]'/>
          </Button>
          <Button variant={'outline'} size={"icon"} className='rounded-full bg-[#FBEBB5]'>
            <ShoppingCart className='bg-[#FBEBB5]'/>
            </Button>
      </div>
      <div>
        <Menu onClick={toggleMenu}/>
      </div>
    </div>
    <div className="hidden " id="mobileMenuContent">
      <div className='min-h-screen'>
              <div className="flex flex-col text-xl">
              <Link href="/" className="p-3">Home</Link>
              <Link href="/shop" className="p-3">Shop</Link>
              <Link href="/blog" className="p-3">About</Link>
              <Link href="/contact" className="p-3">Contact</Link>
              <Link href="/checkout" className="p-3">Checkout</Link>
            </div>
              <div className="flex ml-4 gap-x-4 mt-3">
              <Image
                  width={15}
                  height={0}
                  src="/facebook-brands-solid.svg"
                  alt={"facebook"}
                />
                <Image
                  width={15}
                  height={0}
                  src="/github-brands-solid.svg"
                  alt={"github"}
                />
                <Image
                  width={15}
                  height={0}
                  src="/whatsapp-brands-solid.svg"
                  alt={"whatsapp"}
                />
                <Image
                  width={15}
                  height={0}
                  src="/youtube-brands-solid.svg"
                  alt={"youtube"}
                />
              </div>
              </div>
            </div>
    </div>
  </nav>
  )
}

export default Navbar
