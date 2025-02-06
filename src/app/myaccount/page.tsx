"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Field from '@/components/field';
import { SignedOut, SignInButton } from '@clerk/nextjs';

function MyAccount() {
    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <div className="bg-gray-100">
               
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
                    My Account
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/myaccount" className="hover:underline">
                            My Account
                        </Link>
                    </p>
                </div>
            </div>

           {/* Content Section */}
<div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
    {/* Login Section */}
    <div className="p-4 rounded">
        <h2 className="text-3xl font-bold my-8">Log In</h2>
        <div className='flex flex-col'>
            <label className="my-2 text-gray-700 mb-2" htmlFor="username">
                Username or email address
            </label>
            <input
                type="text"
                id="username"
                className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
            />
        </div>
        <div className='flex flex-col'>
            <label className="my-2 text-gray-700 mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
            />
        </div>
        <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-800 my-4">
                Remember me
            </label>
        </div>
        <div className="flex items-center">
            
            <button className="border border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
                Log In
            </button>
        
           
            <p className="ml-6 text-gray-500 text-sm hover:underline cursor-pointer">
                Lost Your Password?
            </p>
        </div>
    </div>

    {/* Register Section */}
    <div className="p-4 rounded">
        <h2 className="text-3xl font-bold my-8">Register</h2>
        
        <label className="block my-2 text-gray-700 mb-2" htmlFor="register-email">
            Email address
        </label>
        <input
            type="text"
            id="register-email"
            className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
        />
        <p className="text-gray-500 my-4">
            A link to set a new password will be sent to your email address.
        </p>
        <p className="text-gray-500 mb-4">
            Your personal data will be used to support your experience throughout this
            website, to manage access to your account, and for other purposes described
            in our <span className="font-bold text-gray-700">privacy policy</span>.
        </p>
        <button className="border my-10 border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
            Register
        </button>
    </div>
</div>
            <Field/>
        </div>
    );
}

export default MyAccount;
// "use client"
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { SignIn, SignUp, SignedOut, SignedIn, RedirectToSignIn } from '@clerk/nextjs'; // Import Clerk components

// import Field from '@/components/field';

// function MyAccount() {
//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             <div className="bg-gray-100"></div>
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
//                     My Account
//                 </h1>
//                 {/* Breadcrumb Section */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                     <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                         <Link href="/" className="font-bold hover:underline">
//                             Home
//                         </Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <Link href="/myaccount" className="hover:underline">
//                             My Account
//                         </Link>
//                     </p>
//                 </div>
//             </div>

//             {/* Content Section */}
//             <div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
//                 {/* Login Section */}
//                 <div className="p-4 rounded">
//                     <h2 className="text-3xl font-bold my-8">Log In</h2>

//                     {/* SignedOut Check - Show SignIn when user is not authenticated */}
//                     <SignedOut>
//                         <SignIn path="/myaccount" routing="path" signUpUrl="/myaccount#sign-up">
//                             {({ isLoaded, signIn, setActive }) => {
//                                 if (!isLoaded) return <div>Loading...</div>;

//                                 return (
//                                     <div className="flex flex-col">
//                                         <label className="my-2 text-gray-700 mb-2" htmlFor="email">
//                                             Email address
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="email"
//                                             name="email"
//                                             className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
//                                             onChange={(e) => signIn.update({ emailAddress: e.target.value })}
//                                         />
//                                         <label className="my-2 text-gray-700 mb-2" htmlFor="password">
//                                             Password
//                                         </label>
//                                         <input
//                                             type="password"
//                                             id="password"
//                                             name="password"
//                                             className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
//                                             onChange={(e) => signIn.update({ password: e.target.value })}
//                                         />
//                                         <div className="flex items-center mb-4">
//                                             <input type="checkbox" id="remember" className="mr-2" />
//                                             <label htmlFor="remember" className="text-gray-800 my-4">
//                                                 Remember me
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <button
//                                                 className="border border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700"
//                                                 onClick={() => signIn.submit()}
//                                             >
//                                                 Log In
//                                             </button>
//                                             <p className="ml-6 text-gray-500 text-sm hover:underline cursor-pointer">
//                                                 Lost Your Password?
//                                             </p>
//                                         </div>
//                                     </div>
//                                 );
//                             }}
//                         </SignIn>
//                     </SignedOut>

//                     {/* If already signed in, show the user account */}
//                     <SignedIn>
//                         <p className="text-lg font-semibold">You are logged in!</p>
//                     </SignedIn>
//                 </div>

                // {/* Register Section */}
                // <div className="p-4 rounded">
                //     <h2 className="text-3xl font-bold my-8">Register</h2>

                //     {/* SignedOut Check - Show SignUp when user is not authenticated */}
                //     <SignedOut>
                //         <SignUp path="/myaccount" routing="path">
                //             {({ isLoaded, signUp }) => {
                //                 if (!isLoaded) return <div>Loading...</div>;

                //                 return (
                //                     <div className="flex flex-col">
                //                         <label className="block my-2 text-gray-700 mb-2" htmlFor="register-email">
                //                             Email address
                //                         </label>
                //                         <input
                //                             type="text"
                //                             id="register-email"
                //                             className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
                //                             onChange={(e) => signUp.update({ emailAddress: e.target.value })}
                //                         />
                //                         <p className="text-gray-500 my-4">
                //                             A link to set a new password will be sent to your email address.
                //                         </p>
                //                         <p className="text-gray-500 mb-4">
                //                             Your personal data will be used to support your experience throughout this
                //                             website, to manage access to your account, and for other purposes described
                //                             in our <span className="font-bold text-gray-700">privacy policy</span>.
                //                         </p>
                //                         <button
//                 //                             className="border my-10 border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700"
//                                             onClick={() => signUp.submit()}
//                                         >
//                                             Register
//                                         </button>
//                                     </div>
//                                 );
//                             }}
//                         </SignUp>
//                     </SignedOut>
//                 </div>
//             </div>
//             <Field />
//         </div>
//     );
// }

// export default MyAccount;
// "use client";
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { SignedOut, SignIn } from '@clerk/nextjs';

// function MyAccount() {
//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             {/* Banner Section */}
//             <div className="relative text-black">
//                 <Image
//                     src="/shop.jpeg"
//                     alt="Shop Banner"
//                     width={1600}
//                     height={400}
//                     className="w-full h-48 md:h-64 object-cover"
//                     priority
//                 />
//                 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
//                     My Account
//                 </h1>
//                 {/* Breadcrumb Section */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 md:translate-y-24">
//                     <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                         <Link href="/" className="font-bold hover:underline">
//                             Home
//                         </Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <span className="text-gray-600">My Account</span>
//                     </p>
//                 </div>
//             </div>

//             {/* Authentication Section */}
//             <div className="mt-8 flex justify-center mx-4 lg:mx-32">
//                 <SignedOut>
//                     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//                         <SignIn 
//                             signUpUrl="/sign-up"
//                             appearance={{
//                                 elements: {
//                                     formButtonPrimary: 'bg-gray-900 hover:bg-gray-700',
//                                     footerActionLink: 'text-gray-900 hover:text-gray-700'
//                                 }
//                             }}
//                         />
//                         <div className="mt-4 text-center">
//                             <Link 
//                                 href="/privacy-policy" 
//                                 className="text-sm text-gray-600 hover:underline"
//                             >
//                                 Privacy Policy
//                             </Link>
//                         </div>
//                     </div>
//                 </SignedOut>
//             </div>
//         </div>
//     );
// }

// export default MyAccount;

// "use client";
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { SignIn, SignUp } from '@clerk/nextjs';

// function MyAccount() {
//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             {/* Banner Section */}
//             <div className="relative text-black">
//                 <Image
//                     src="/shop.jpeg"
//                     alt="Shop Banner"
//                     height={400}
//                     width={1600}
//                     className="w-full h-[200px] md:h-auto object-cover"
//                 />
//                 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
//                     My Account
//                 </h1>
//                 {/* Breadcrumb Section */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                     <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                         <Link href="/" className="font-bold hover:underline">
//                             Home
//                         </Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <Link href="/myaccount" className="hover:underline">
//                             My Account
//                         </Link>
//                     </p>
//                 </div>
//             </div>

//             {/* Content Section */}
//             <div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
//                 {/* Login Section */}
//                 <div className="p-4 rounded">
//                     <h2 className="text-3xl font-bold my-8">Log In</h2>
//                     <SignIn
//                         appearance={{
//                             elements: {
//                                 formButtonPrimary: 'bg-black hover:bg-gray-700 text-white',
//                                 formFieldInput: 'w-full border border-gray-400 rounded p-2',
//                                 footerActionLink: 'text-gray-700 hover:text-black',
//                                 card: 'shadow-none border-none p-0',
//                                 headerTitle: 'hidden',
//                                 headerSubtitle: 'hidden',
//                                 socialButtonsBlockButton: 'border border-gray-400 hover:bg-gray-100',
//                                 dividerLine: 'bg-gray-400',
//                                 dividerText: 'text-gray-700',
//                                 formFieldLabel: 'text-gray-700 mb-2',
//                                 formFieldAction: 'text-gray-500 hover:text-black',
//                                 footer: 'hidden'
//                             }
//                         }}
//                         path="/myaccount"
//                         routing="path"
//                         signUpUrl="/myaccount"
//                     />
//                 </div>

//                 {/* Register Section */}
//                 <div className="p-4 rounded">
//                     <h2 className="text-3xl font-bold my-8">Register</h2>
//                     <SignUp
//                         appearance={{
//                             elements: {
//                                 formButtonPrimary: 'bg-black hover:bg-gray-700 text-white',
//                                 formFieldInput: 'w-full border border-gray-400  p-2',
//                                 footerActionLink: 'text-gray-700 hover:text-black',
//                                 card: 'shadow-none border-none p-0',
//                                 headerTitle: 'hidden',
//                                 headerSubtitle: 'hidden',
//                                 socialButtonsBlockButton: 'border border-gray-400 hover:bg-gray-100',
//                                 dividerLine: 'bg-gray-400',
//                                 dividerText: 'text-gray-700',
//                                 formFieldLabel: 'text-gray-700 mb-2',
//                                 formFieldAction: 'text-gray-500 hover:text-black',
//                                 footer: 'hidden'
//                             }
//                         }}
//                         path="/myaccount"
//                         routing="path"
//                         signInUrl="/myaccount"
//                     />
//                     <p className="text-gray-500 mt-4">
//                         Your personal data will be used to support your experience throughout this
//                         website, to manage access to your account, and for other purposes described
//                         in our <Link href="/privacy-policy" className="font-bold text-gray-700 hover:underline">privacy policy</Link>.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MyAccount;