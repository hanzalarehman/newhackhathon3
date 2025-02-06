"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'


function Asgard() {
  return (
    <>
    <div className='hidden md:block'>
          <section className='w-full h-full bg-[#FFF9E5]'>
              <div className='flex  items-center'>
                  <div><Image src="/asgaard.png" alt="asgardas" width={799} height={900} /></div>
                  <div className='flex flex-col ml-72'>
                      <p className='text-xl text-center text-black'>New Arrivals</p>
                      <h1 className='text-5xl font-bold text-center text-black p-2'>Asgaard sofa</h1>

                      <button className='mt-8 px-1 py-3 border-2 border-black text-black bg-transparent hover:bg-[#FF5B3B]'>
                      <Link href="/asgaarsofa">

                      Order Now
                      </Link>
                      </button>
                    
                  </div>
              </div>

          </section>
      </div><div className="block md:hidden">

              <section className='w-full h-full bg-[#FFF9E5]'>
                  <div className='flex flex-col  px-4 py-8'>
                      <div className='w-full mb-6 '>
                          <Image
                              src="/asgaard.png"
                              alt="Asgaard sofa"
                              width={799}
                              height={0}
                              className='w-full max-w-[799px] h-auto object-contain' />
                      </div>
                      <div className='w-full  flex flex-col items-center text-center space-y-4'>
                          <p className='text-lg  text-black'>New Arrivals</p>
                          <h1 className='text-3xl  font-bold text-black'>Asgaard sofa</h1>
          
                          <button className='mt-4  px-6 py-3 border-2 border-black text-black bg-transparent hover:bg-[#FF5B3B] transition-colors duration-300'>
                      <Link href="/asgaarsofa">
                              Order Now
                              </Link>
                          </button>
                          
                        
                      </div>
                  </div>
              </section>

          </div>
          </>
  )
}

export default Asgard
