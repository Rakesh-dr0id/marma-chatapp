import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('token');

const Header = ({ onHeaderDataChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //Get all users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/getAllUsers?search=${encodeURIComponent(searchQuery)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        onHeaderDataChange(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Only make the API call when the searchQuery or token changes
    if (searchQuery || token) {
      fetchData();
    }
  }, [searchQuery, token]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <header className="">
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <img src={Logo} alt="logo" height="100" width="100" />
        <div className="w-1/3 flex items-center justify-around gap-2 relative text-left">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Contacts"
              className="rounded-2xl bg-gray-100 py-3 px-5 w-full ring-0 border-none"
              onChange={handleSearch}
            />
            {/* <div
              className="grid place-items-center h-full w-12 text-gray-300"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div> */}
          </div>
          <button
            className="h-12 w-12 p-2 bg-gray-500 rounded-full text-white font-semibold flex items-center justify-center"
            onClick={toggleDropdown}
          >
            <BsThreeDotsVertical />
          </button>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-5 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* Your dropdown content goes here */}
              <div className="py-1">
                <Link
                  to="/group"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Create Group
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/"
                  onClick={logoutHandler}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
