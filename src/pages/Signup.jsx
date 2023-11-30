import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Cam from '../assets/camera.png';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const submitData = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('employeeId', data.employeeId);
    formData.append('role', data.role);

    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      const response = await axios.post('/createUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      toast.success('Account created Successfully, Please Login');
      navigate('/');
    } catch (error) {
      toast.error('Error creating user:', error);
    }
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('employeeId', data.employeeId);
    formData.append('role', data.role);

    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      const response = await axios.post('/createUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      toast.success('Account created Successfully, Please Login');
      navigate('/');
    } catch (error) {
      toast.error('Error creating user:', error);
    }
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the selected file and set it to the state
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setSelectedFile(reader.result);
      // };
      // reader.readAsDataURL(file);
      // console.log(file);
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-hero">
      <div className="flex h-screen">
        <div className="hidden lg:flex items-center justify-center flex-1 ">
          <div className="max-w-md text-center">
            <img src={Logo} alt="logo" />
          </div>
        <div className="flex h-screen">
        <div className=" lg:flex items-center justify-center flex-1 bg-white text-black">
          
          <div className="border-l border-solid border-gray-300/90 ml-28  h-full mx-4"></div>
        </div>

        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-1 text-black ">
              Create your Account
            </h1>

            {/* Profile picture */}
            <div className="flex justify-end relative">
              <label
                htmlFor="profilePicture"
                className="cursor-pointer rounded-full border-4 border-gray-500 p-2 h-40 w-40"
              >
                {/* Add your icon or text for "Choose File" */}
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected Profile"
                    className="object-cover h-full w-full rounded-full"
                  />
                )}
                <img src={Cam} alt="" className="absolute bottom-0 right-0" />
              </label>
              <input
                type="file"
                id="profilePicture"
                className="hidden"
                onChange={changeHandler}
                accept="image/*"
              />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
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
                  className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  {...register('name', { required: true, minLength: 6 })}
                />
                {errors.name && (
                  <small className="text-red-500 mt-1">
                    Name should be of atleast 6 characters
                  </small>
                )}
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
                  className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                />
                {errors.email && (
                  <small className="text-red-500 mt-1">
                    Please enter valid email
                  </small>
                )}
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
                    className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    {...register('employeeId', { required: true })}
                  />
                  {errors.employeeId && (
                    <small className="text-red-500 mt-1">
                      Please enter an Employee Id
                    </small>
                  )}
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
                    className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    {...register('role', { required: true })}
                  />
                  {errors.role && (
                    <small className="text-red-500 mt-1">
                      Please enter your role
                    </small>
                  )}
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
                  className="mt-1 p-2 w-full  rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  {...register('password', { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <small className="text-red-500 mt-1">
                    Please enter min 6 character password
                  </small>
                )}
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
