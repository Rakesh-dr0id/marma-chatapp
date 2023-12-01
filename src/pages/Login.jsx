import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/Logo.png';
import backgroundImage from '../assets/HomePage.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.trim()) {
      setError('Please enter your email.');
      return;
    }

    // Basic password validation
    if (!password || password.length < 3) {
      setError('Please enter a valid password (at least 6 characters).');
      return;
    }

    try {
      const response = await axios.post('/login', {
        email,
        password,
      });

      const token = response.data.user.token;

      localStorage.setItem('token', token);

      toast.success('Login successful');

      navigate('/home');
    } catch (error) {
      console.error(
        'Login error:',
        error.response?.data?.message || 'Unknown error'
      );
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div style={containerStyle}>
      <div className="max-w-md text-center ">
        <img src={Logo} alt="logo" className="" />
      </div>
      <div className="flex h-screen">
        <div className=" lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="border-l border-solid ml-28 border-gray-300/90  h-full mx-4"></div>
        </div>
        <div className="w-full   flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-black text-center">
              Welcome Back?
              <h1 className="text-base font-serif font-extralight mb-10  text-start ml-[22%]">
                Login to continue
              </h1>
            </h1>

            <form className="space-y-4 ml-10" onSubmit={handleLogin}>
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
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-96 bg-gray-200 text-black   rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-black font-extrabold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-96 bg-gray-200 text-black  rounded-xl
                   focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className="flex text-end justify-end">
                <Link to="/forgot-password">
                  <Link
                    to="/forgot-password"
                    className="text-blue-600  text-sm hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className=" w-[200px] ml-[25%] bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center ml-8">
              <p>
                Already have an account?{' '}
                <Link
                  to="/signup"
                  className="text-black font-extrabold hover:underline"
                >
                  Create account
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
