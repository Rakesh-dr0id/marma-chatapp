// import React from 'react';
// import Logo from '../assets/Logo.png';
// import backgroundImage from "../assets/HomePage.jpg"

// const Login = () => {

//   const containerStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', // You can set the height of the container as per your requirement
//     color: 'white', // Adding text color to make it visible
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   return (
//     <div style={containerStyle} className="h-screen flex">
//       <div className="flex h-screen">
//         <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
//           <div className="max-w-md text-center">
//             <img src={Logo} alt="logo" />
//           </div>
//           <div className="border-l border-solid border-gray-300/90 ml-10 h-full mx-4"></div>
//         </div>

//         <div className="w-full  lg:w-1/2 flex items-center justify-center">
//           <div className="max-w-md w-full p-6">

//             <h1 className="text-3xl font-extrabold   mb-6 text-black text-center">
//               Welcome Back!

//             <h1 className="text-base font-serif font-extralight mb-10  text-center">
//               Login to continue
//             </h1>
//             </h1>

//             <form className="space-y-4 mt-36">

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   placeholder='Enter you Email'
//                   id="email"
//                   name="email"
//                   className="mt-1 p-2 w-full bg-gray-200 border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder='Enter your Password'
//                   name="password"
//                   className="mt-1 p-2 w-full bg-gray-200 border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                 />
//               </div>
//               <div className="flex justify-end">

//                   <a href="#" className="text-black text-sm hover:underline">Forgot Password?</a>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//             <div className="mt-4 text-sm text-gray-600 text-center">
//               <p>
//                 Already have an account?{' '}
//                 <a href="#" className="text-black flex flex-col hover:underline">
//                   Create account
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import backgroundImage from "../assets/HomePage.jpg";

const Login = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // You can set the height of the container as per your requirement
    color: "white", // Adding text color to make it visible
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      <div className="flex h-screen">
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center ">
            <img src={Logo} alt="logo" className="" />
          </div>
          <div className="border-l border-solid border-gray-300/90 ml-10 h-full mx-4"></div>
        </div>

        <div className="w-full  lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-black text-center">
              Welcome Back?
              <h1 className="text-base font-serif font-extralight mb-10  text-center">
                Login to continue
              </h1>
            </h1>

            <form className="space-y-4">
            <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder='Enter Your Email'
                  name="email"
                  className="mt-1 p-2 w-96 bg-gray-200 text-black   rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Create Your Password'
                  className="mt-1 p-2 w-96 bg-gray-200  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div className="flex justify-end">

                  <a href="#" className="text-blue-900 text-sm hover:underline">Forgot Password?</a>
               </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-black flex flex-col hover:underline"
                >
                  Create account
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;