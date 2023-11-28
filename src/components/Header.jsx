import React from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className="">
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <img src={Logo} alt="logo" height="100" width="100" />
        <div className="w-1/3 flex items-center justify-around gap-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Contacts"
            className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
          />
          <div className="h-12 w-12 p-2 bg-gray-500 rounded-full text-white font-semibold flex items-center justify-center">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
