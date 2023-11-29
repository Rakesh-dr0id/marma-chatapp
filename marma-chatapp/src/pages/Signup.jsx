


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
        <h1 className="text-3xl mb-[35%] font-serif    font-semibold  text-black ">
               Create Your Account
               <h1 className="text-sm mb-[45%] font-serif  font-semibold  text-gray-600 ">
               Connect With MarmaFintech
             </h1>
             </h1>
             
     <div className="flex h-screen">
     
     
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          
          <div className="max-w-md text-center">
         
            <img src={Logo} alt="logo" className='ml-[-35%]' />
            
          </div>
          <div className="border-l border-solid border-gray-300/90 ml-10 h-full mx-4"></div>
        </div>

        <div className="w-full  lg:w-1/2 flex items-center justify-center">
          <div className=" w-full p-6">
          

             <form className="space-y-4">
               <div>
                 <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder='Enter Your Name'
                  name="name"
                  className="mt-1 p-2 w-full bg-gray-200  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
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
                  className="mt-1 p-2 w-full bg-gray-200  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="employeeid"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Employee Id
                  </label>
                  <input
                    type="text"
                    id="employeeid"
                    placeholder='Enter Your Emp id'
                    name="employeeid"
                    className="mt-1 p-2 w-full bg-gray-200  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    placeholder='Enter Your Role'
                    name="role"
                    className="mt-1 p-2 w-full bg-gray-200  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>
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
                  className="mt-1 p-2 w-full bg-gray-200  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Create
                </button>
              </div>
            </form>
            <div className="mt-2 text-sm text-gray-600 text-center">
              <p className='text-lg'>
                or
                <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;