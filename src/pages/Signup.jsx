// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/Logo.png';
// import backgroundImage from "../assets/HomePage.jpg"

// const Signup = () => {

//   const containerStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', 
//     color: 'white', 
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };
  
//   return (
//     <div style={containerStyle} >
      
//       <div className="flex h-screen">
//         <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
//           <div className="max-w-md text-center">
//             <img src={Logo} alt="logo" />
//           </div>
//         </div>

//         <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
//           <div className="max-w-md w-full p-6">
//             <h1 className="text-3xl font-semibold mb-6 text-black text-center">
//               Sign Up
//             </h1>

//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div>
//                   <label
//                     htmlFor="employeeid"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Employee Id
//                   </label>
//                   <input
//                     type="text"
//                     id="employeeid"
//                     name="employeeid"
//                     className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="role"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Role
//                   </label>
//                   <input
//                     type="text"
//                     id="role"
//                     name="role"
//                     className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>
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
//                   name="password"
//                   className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                 />
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
//                 >
//                   Create
//                 </button>
//               </div>
//             </form>
//             <div className="mt-4 text-sm text-gray-600 text-center">
//               <p>
//                 Already have an account?{' '}
//                 <Link to="/" className="text-black hover:underline">
//                   Login here
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import backgroundImage from "../assets/HomePage.jpg"


const Signup = () => {

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    color: 'white', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
      <div style={containerStyle} >
        <div className="max-w-md text-center ">
            <img src={Logo} alt="logo" className="" />
          </div>
        <div className="flex h-screen">
        <div className=" lg:flex items-center justify-center flex-1 bg-white text-black">
          
          <div className="border-l border-solid border-gray-300/90 ml-28  h-full mx-4"></div>
        </div>

        <div className="w-full    flex items-center justify-start">
          <div className=" w-full p-6">
          <h1 className="text-3xl font-extrabold mb-20 text-black text-center ">
              Create Your Account
               <h1 className="text-base text-gray-800 font-serif font-extralight mb-10 ml-[18%] text-start">
               Connect with Marma Fintec
              </h1>
            </h1>

          <form className="space-y-4 text-start ml-20">
               <div>
                 <label
                  htmlFor="name"
                  className="block text-black font-extrabold text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder='Enter Your Name'
                  name="name"
                  className="mt-1  p-2 w-full text-black bg-gray-200  rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm  text-black font-extrabold"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder='Enter Your Email'
                  name="email"
                  className="mt-1 p-2  w-full text-black bg-gray-200  rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="employeeid"
                    className="block text-sm text-black font-extrabold"
                  >
                    Employee Id
                  </label>
                  <input
                    type="text"
                    id="employeeid"
                    placeholder='Enter Your Emp id'
                    name="employeeid"
                    className="mt-1  p-2 text-black w-full bg-gray-200  rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm ml-2 text-black font-extrabold"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    placeholder='Enter Your Role'
                    name="role"
                    className="mt-1 ml-2  p-2 text-black w-full bg-gray-200  rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm  text-black font-extrabold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Create Your Password'
                  className="mt-1 text-black  p-2 w-full bg-gray-200  rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[200px] ml-[25%]  mt-5 bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-xl hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Create
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center ml-12">
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 font-extrabold  hover:underline"
                >
                  Login
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;