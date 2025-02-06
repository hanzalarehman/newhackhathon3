import Image from "next/image"

function Pick() {
  return (
    <main className='w-full h-full bg-[#FFFFFF]'>
    <div className='mx-auto p-6 mt-6'>
        <h1 className='text-center text-3xl font-medium'>Top Picks For You</h1> 
        <p className='text-center text-gray-400'>
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
    </div>
    <div className="flex justify-center items-center flex-wrap gap-6">
        <div className="flex flex-col items-center">
            <Image src="/moduler.png" alt="" width={287} height={287} className="max-w-full"/>
            <p className="text-center mt-2">Trenton modular sofa_3</p>
            <h1 className="text-center">Rs. 25,000.00</h1>
        </div>
        <div className="flex flex-col items-center">
            <Image src="/tables.png" alt="" width={287} height={287} className="max-w-full"/>
            <p className="text-center mt-2">Granite dining table with dining chair</p>
            <h1 className="text-center">Rs. 25,000.00</h1>
        </div>
        <div className="flex flex-col items-center">
            <Image src="/plane.png" alt="" width={287} height={287} className="max-w-full"/>
            <p className="text-center mt-2">Outdoor bar table and stool</p>
            <h1 className="text-center">Rs. 25,000.00</h1>
        </div>
        <div className="flex flex-col items-center">
            <Image src="/chairs.png" alt="" width={287} height={287} className="max-w-full"/>
            <p className="text-center mt-2">Plain console with teak mirror</p>
            <h1 className="text-center">Rs. 25,000.00</h1>
        </div>
    </div>
    <div className="flex p-4 flex-col justify-center items-center mt-6">
        <h1 className='text-xl font-semibold'>View More</h1>
        <div className="w-20 h-1 rounded-full bg-black inline-flex mt-2"></div>
    </div>
</main>

  )
}

export default Pick
