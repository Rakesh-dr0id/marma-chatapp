import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import GroupChat from '../components/GroupChat';
import BaseURL from '../BaseURL';
import SidebarGroup from '../components/SidebarGroup';
import GroupHeader from '../components/GroupHeader';

const token = localStorage.getItem('token');

let allUsers;
const Group = () => {
  const [headerData, setHeaderData] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [onClickSelect, setOnClickSelect] = useState([]);

  useEffect(() => {
    const selectUserGroup = async () => {
      const response = await axios.get(`${BaseURL}/getAllUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      allUsers = response.data.groupChats;
    };
    selectUserGroup();
  }, []);

  console.log('Group chats', allUsers);

  useEffect(() => {
    const getCurrentUser = async () => {
      if (token) {
        const decodedToken = jwtDecode(token);

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
      <div className=" h-screen m-2 mx-auto shadow-lg rounded-lg">
        <GroupHeader onHeaderDataChange={setHeaderData} />

        <div className="flex flex-row justify-between bg-white h-full">
          <div className="flex flex-col w-1/5 border-r-2 overflow-y-auto">
            {/* <Sidebar headerData={headerData} onUserSelect={onClickSelect} /> */}
            <SidebarGroup headerData={headerData} />
          </div>

          <div className="w-4/5">
            <GroupChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
