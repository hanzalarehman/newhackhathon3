"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Field from '@/components/field'
import { ProductType } from '../shop/page'
import { client } from '@/sanity/lib/client'

function CheckOut() {

  const [cartItems, setCartItems] = useState([])
  const [discount,setDiscount]=useState<number>(0)
  const [formValues,setFormValues]=useState({
    firstName:'',
    lastName:'',
    companyName:'',
    country:'',
    address:'',
    town:'',
    province:'',
    zipCode:'',
    phone:'',
    email:'',
    additionalInfo:'',
  })
  const [formError,setError]=useState({
    firstName:false,
    lastName:false,
    companyName:false,
    country:false,
    address:false,
    town:false,
    province:false,
    zipCode:false,
    phone:false,
    email:false,
    additionalInfo:false
  })
  const [selectedPayment, setSelectedPayment] = useState<string>('') // Track selected payment method
  useEffect(()=>{
    const cart=JSON.parse(localStorage.getItem('cart') || '{}')
    const itemss: any =  Object.values(cart);
    setCartItems(itemss)
    const appliedDiscount=localStorage.getItem('appliedDiscount')
    if(appliedDiscount){
      setDiscount(Number(appliedDiscount))
    }
  },[])
  const subTotal: number = cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0)
  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // const {name,value}=e.target
    setFormValues({...formValues,[e.target.id]:e.target.value})
 
  }
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value) // Set selected payment method
  }
  const validateForm = () => {

    const error={
        firstName:!formValues.firstName,
        lastName:!formValues.lastName,
        companyName:!formValues.companyName,
        country:!formValues.country,
        address:!formValues.address,
        town:!formValues.town,
        province:!formValues.province,
        zipCode:!formValues.zipCode,
        phone:!formValues.phone,
        email:!formValues.email,
        additionalInfo:!formValues.additionalInfo
    }
    setError(error)
    return Object.values(error).every((error) => !error)
  }

  const handleFormSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) {
        alert("Please fill in all required fields.");
        return;
    }

    // Prepare the order data
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      companyName: formValues.companyName,
      country: formValues.country,
      address: formValues.address,
      town: formValues.town,
      province: formValues.province,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      additionalInfo: formValues.additionalInfo,
      cartItems: cartItems.map((item: ProductType) => ({
        _type: 'reference',
        _ref: item.id, // Ensure item.id is a valid reference in Sanity
      })),
      total: subTotal,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    console.log('Order data to be created:', orderData); // Add this line

    try {
        await client.create(orderData);
        localStorage.removeItem('appliedDiscount');
        alert('Order placed successfully!');
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again later.');
    }
};

  
    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <div className='bg-[#faf4f4]'>
              
            </div>

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
                    Checkout
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className="hover:underline">Checkout</Link>
                    </p>
                </div>
            </div>

            {/* Billing Section */}
<div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
    <div className="w-full lg:w-1/2 md:mx-20">
        <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="firstName" className="block my-4">First Name</label>
                <input type="text" id="firstName" value={formValues.firstName} onChange={handleInputChange} className="w-full border border-gray-500 rounded p-3" />
                {formError.firstName &&( <p>first name is required</p>)}
            </div>
            <div>
                <label htmlFor="lastName" className="block my-4">Last Name</label>
                <input type="text" id="lastName" value={formValues.lastName} onChange={handleInputChange} className="w-full border border-gray-500 rounded p-3" />
                {formError.lastName &&( <p>last name is required</p>)}
            </div>
        </div>

        <div className="mt-4">
            <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
            <input type="text" id="companyName" value={formValues.companyName} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />

        </div>

        <div className="mt-4">
            <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
            <input type="text" id="country"value={formValues.country} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
            {formError.country &&( <p>country is required</p>)}
        </div>

        <div className="mt-4">
            <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
            <input type="text" id="address"value={formValues.address} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
            {formError.address &&( <p>address is required</p>)}
        </div>

        <div className="gap-4 mt-4">
            <div>
                <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                <input type="text" id="town"value={formValues.town} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
                {formError.town &&( <p>town is required</p>)}
            </div>
            <div>
                <label htmlFor="province" className="block my-4 mt-6">Province</label>
                <input type="text" id="province"value={formValues.province} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
                {formError.province &&( <p>province is required</p>)}
            </div>
        </div>

        <div className="mt-4">
            <label htmlFor="zipCode" className="block my-4 mt-6">ZIP Code</label>
            <input type="text" id="zipCode"value={formValues.zipCode} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
            {formError.zipCode &&( <p>zip code is required</p>)}
        </div>

        <div className="mt-4">
            <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
            <input type="text" id="phone"value={formValues.phone} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
            {formError.phone &&( <p>phone number is required</p>)}
        </div>

        <div className="mt-4">
            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
            <input type="text" id="email"value={formValues.email} onChange={handleInputChange} className="w-full border-gray-500 rounded border p-3" />
            {formError.email &&( <p>email address is required</p>)}
        </div>

        <div className="mt-4">
            <input type="text" id="additionalInfo"value={formValues.additionalInfo} onChange={handleInputChange} placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
            
        </div>
    </div>

    {/* Order Summary */}
    <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
        <div className="mt-4">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="py-2 text-left text-xl">Product</th>
                        <th className="py-2 text-right text-xl">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    
                {cartItems.map((item: ProductType, index: number) => (
    <tr key={index}>
      <td className="py-2 text-gray-500">{item.name} x {item.quantity}</td>
      <td className="py-2 text-right">Rs: {item.price * item.quantity}</td>
    </tr>
    ))}
                    <tr>
                        <td className="py-2 font-semibold">Subtotal</td>
                        <td className="py-2 text-right">Rs: {subTotal}</td>
                    </tr>
                    <tr className="border-b font-semibold">
                        <td className="py-2">Total</td>
                        <td className="py-2 text-yellow-700 text-right text-xl">Rs:{subTotal} </td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Payment Method */}
        <div className="flex items-center mt-4">
            <input type="radio" id="bankTransfer" name="payment"       checked={selectedPayment === 'bankTransfer'}
              onChange={handlePaymentChange} className="mr-2" />
            <label htmlFor="bankTransfer" className="text-md">Direct Bank Transfer</label>
        </div>
        <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

        <div className="flex items-center mt-4 text-gray-400">
            <input type="radio" id="cod" name="payment"   checked={selectedPayment === 'cod'}
              onChange={handlePaymentChange} className="mr-2" />
            <label htmlFor="cod" className="text-md">Cash On Delivery</label>
        </div>
        <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

        <button onClick={handleFormSubmit} className="mt-6 border border-black py-3 px-14 rounded-xl">Place Order</button>
    </div>
</div>

           <div className='my-10'>
           <Field/>
           </div>
        </div>
    )
}

export default CheckOut

    // const handleFormSubmit=(e:React.FormEvent)=>{
    //     e.preventDefault()
    //     if(validateForm()){
    //         // Submit the form to the server
    //         localStorage.removeItem('cartItems')
    //         localStorage.removeItem('appliedDiscount')
    //         // router.push('/')
    //     }
    // }
    // const handleFormSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     if (validateForm() && selectedPayment) {
    //       // Submit the form to the server or handle further actions
    //       localStorage.removeItem('cartItems')
    //       localStorage.removeItem('appliedDiscount')
    //       // Proceed with the payment method selected (either COD or Bank Transfer)
    //       console.log('Payment method:', selectedPayment)
    //       // You can redirect the user or show a success message here
    //     } else {
    //       alert('Please fill in all the fields and select a payment method')
    //     }
    //   }
// {/* <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
// <div className='bg-[#faf4f4]'>
  
// </div>

// {/* Banner Section */}
// <div className="relative text-black">
//     <Image
//         src="/shop.jpeg" // Replace with the correct image file path
//         alt="Shop Banner"
//         height={400}
//         width={1600}
//         className="w-full h-[200px] md:h-auto object-cover"
//     />
//     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
//         Checkout
//     </h1>
//     {/* Breadcrumb Section */}
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//         <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">Home</Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shop" className="hover:underline">Checkout</Link>
//         </p>
//     </div>
// </div>

// {/* Billing Section */}
// <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
// <div className="w-full lg:w-1/2 md:mx-20">
// <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
// <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// <div>
//     <label htmlFor="firstName" className="block my-4">First Name</label>
//     <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
// </div>
// <div>
//     <label htmlFor="lastName" className="block my-4">Last Name</label>
//     <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
// </div>
// </div>

// <div className="mt-4">
// <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
// <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
// </div>

// <div className="mt-4">
// <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
// <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
// </div>

// <div className="mt-4">
// <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
// <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
// </div>

// <div className="gap-4 mt-4">
// <div>
//     <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
//     <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
// </div>
// <div>
//     <label htmlFor="province" className="block my-4 mt-6">Province</label>
//     <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
// </div>
// </div>

// <div className="mt-4">
// <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
// <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
// </div>

// <div className="mt-4">
// <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
// <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
// </div>

// <div className="mt-4">
// <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
// <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
// </div>

// <div className="mt-4">
// <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
// </div>
// </div>

// {/* Order Summary */}
// <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
// <div className="mt-4">
// <table className="w-full table-auto">
//     <thead>
//         <tr>
//             <th className="py-2 text-left text-xl">Product</th>
//             <th className="py-2 text-right text-xl">Subtotal</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
//             <td className="py-2 text-right">Rs: 250,000.00</td>
//         </tr>
//         <tr>
//             <td className="py-2 font-semibold">Subtotal</td>
//             <td className="py-2 text-right">Rs: 250,000.00</td>
//         </tr>
//         <tr className="border-b font-semibold">
//             <td className="py-2">Total</td>
//             <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
//         </tr>
//     </tbody>
// </table>
// </div>

// {/* Payment Method */}
// <div className="flex items-center mt-4">
// <input type="radio" id="bankTransfer" name="payment" className="mr-2" />
// <label htmlFor="bankTransfer" className="text-md">Direct Bank Transfer</label>
// </div>
// <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

// <div className="flex items-center mt-4 text-gray-400">
// <input type="radio" id="cod" name="payment" className="mr-2" />
// <label htmlFor="cod" className="text-md">Cash On Delivery</label>
// </div>
// <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

// <button className="mt-6 border border-black py-3 px-14 rounded-xl">Place Order</button>
// </div>
// </div>

// <div className='my-10'>
// <Field/>
// </div>
// </div> */}


// 'use client'
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// function CartPage() {
//   const [cartItems, setCartItems] = useState<any>({});

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '{}');
//     setCartItems(storedCart);
//   }, []);

//   const getTotalPrice = () => {
//     return Object.values(cartItems).reduce((total:any, item:any) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//       <h2 className="text-2xl sm:text-3xl font-medium my-8">Shopping Cart</h2>
//       {Object.keys(cartItems).length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {Object.entries(cartItems).map((key:any, item:any) => (
//             <div key={key} className="flex justify-between items-center mb-4">
//               <div className="flex items-center">
//                 <Image
//                   src={item.imagePath}
//                   alt={item.name}
//                   height={80}
//                   width={80}
//                   className="rounded-lg object-cover"
//                 />
//                 <p className="ml-4">{item.name}</p>
//               </div>
//               <p>{item.quantity} x Rs. {item.price}</p>
//             </div>
//           ))}
//           <div className="text-right">
//             <strong>Total: Rs. {getTotalPrice()}</strong>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartPage;
