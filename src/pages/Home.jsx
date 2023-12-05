import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chats from '../components/Chats';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import BaseURL from '../BaseURL';

const token = localStorage.getItem('token');

const Home = () => {
  const [headerData, setHeaderData] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const getCurrentUser = async () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken.id); // Logs the decoded payload to the console

        await axios
          .get(`${BaseURL}/getUserProfile/${decodedToken.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => setCurrentUser(res.data));
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div>
      {/* <!-- This is an example component --> */}
      <div className=" h-screen m-2 mx-auto shadow-lg rounded-lg">
        {/* <!-- header --> */}
        <Header onHeaderDataChange={setHeaderData} />
        {/* <!-- end header --> */}

        {/* <!-- Chatting --> */}
        <div className="flex flex-row justify-between bg-white h-full">
          {/* <!-- chat list --> */}
          <div className="flex flex-col w-1/5 border-r-2 overflow-y-auto">
            {/* <!-- user list --> */}
            <Sidebar headerData={headerData} />
            {/* <!-- end user list --> */}
          </div>
          {/* <!-- end chat list --> */}
          <div className="w-4/5">
            <Chats currentUser={currentUser} selectedUser={headerData} />
          </div>
          {/* <!-- message --> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
