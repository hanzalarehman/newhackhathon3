
import Image from 'next/image'
function Herosection() {
  return (

    <>
    <div className='hidden md:block'>
    <main className='  bg-[#FBEBB5]'>

      <section className='md:flex items-center '>
        <div className='md:flex flex-col justify-center ml-96 mb-52'>
          <h1 className='text-[30px]  md:text-[60px]  font-bold  text-black'>Rocketsingle</h1>
          <h1 className='text-[30px]  md:text-[60px] font-bold  text-black'>seater</h1>
          <span className='text-2xl'>Shop Now

          </span>
          <br />
          <div className="w-28 h-1 rounded-full bg-black inline-flex"></div>

        </div>
        <div className=''>
          <Image src="/Rocket.png" alt="sofa" width={854} height={1000} className=' flex-shrink-0' />
        </div>
      </section>
    </main>
    </div>
    
    <div className='block md:hidden'>
        <main className='w-full bg-[#FBEBB5]'>
          <section className='relative  max-w-[390px] mx-auto '>
            <div className=' flex-col justify-center  w-full px-4'>
              <h1 className='text-[30px] text-center  font-bold text-black'>
                Rocket single
              </h1>
              <h1 className='text-[30px]  font-bold text-black text-center '>
                seater
              </h1>
              <div className='flex flex-col items-center'>
                <span className='text-2xl'>Shop Now</span>
                <br />
                <div className="w-28 h-1 rounded-full bg-black inline-flex"></div>
              </div>
            </div>
            <div className='w-full'>
              <Image
                src="/Rocket.png"
                alt="Rocket"
                width={854}
                height={0}
                className='w-full  h-auto' />
            </div>
          </section>
        </main>
      </div></>
    
  )
}

export default Herosection
