import React from 'react'
import Image from 'next/image'
function Subsection() {
  return (
   <>
   <div className='hidden md:block'>
   <section className='w-full h-full bg-[#FAF4F4]'>
      <div className='flex items-center justify-center'>
        <div className='relative flex flex-col'>
          <Image src="/table.png" alt="jj" width={500} height={0} className='max-w-max ' />
          <div className='absolute top-[300px] left-[250px]'>
            <h1 className=" mx-auto text-2xl font-semibold">Side table</h1>
            <br />
            <span className='absolute mx-auto text-1xl font-semibold'>View More</span>
            <br />
            <div className="w-20 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>
        <div className='relative flex flex-col'>
          <Image src="/cloudsofa.png" alt="jj" width={500} height={0} className=' h-fit' />
          <div className='absolute top-[300px] left-[250px]'>
            <h2 className='mx-auto text-2xl font-semibold'>Side table</h2>
            <br />
            <span className='mx-auto text-1xl font-semibold '>View More</span>
            <br />
            <div className="w-20 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>
      </div>

    </section>
    </div>
    <div className='block md:hidden'>
        <section className='w-full h-full bg-[#FAF4F4] py-8'>
          <div className='flex flex-col  space-y-8  px-4'>
            <div className='flex flex-col items-center w-full max-w-[350px]'>
              <Image
                src="/table.png"
                alt="Side Table"
                width={500}
                height={0}
                className='w-full max-w-[500px] h-auto object-contain mb-4' />
              <div className='text-center'>
                <h1 className="text-2xl font-semibold mb-2">Side table</h1>
                <span className='block text-xl font-semibold mb-2'>View More</span>
                <div className="w-20 h-1 rounded-full bg-black mx-auto"></div>
              </div>
            </div>
            <div className='flex flex-col items-center w-full max-w-[350px]'>
              <Image
                src="/cloudsofa.png"
                alt="Cloud Sofa"
                width={500}
                height={0}
                className='w-full max-w-[500px] h-auto object-contain mb-4' />
              <div className='text-center'>
                <h2 className='text-2xl font-semibold mb-2'>Side table</h2>
                <span className='block text-xl font-semibold mb-2'>View More</span>
                <div className="w-20 h-1 rounded-full bg-black mx-auto"></div>
              </div>
            </div>
          </div>
        </section>
      </div></>
  )
}

export default Subsection
