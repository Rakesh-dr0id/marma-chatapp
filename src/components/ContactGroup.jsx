import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ChatState } from '../context/ChatProvider';
import BaseURL from '../BaseURL';

const token = localStorage.getItem('token');

const ContactGroup = (props) => {
  let { chatName, email, image, _id } = props.data; //headerData
  const { setSelectedChat, selectedContacts, selectedGroup, setSelectedGroup } =
    ChatState();

  // useEffect(() => {}, []);
  const handleChatId = async () => {
    console.log('HI');
    console.log('Request Payload:', { userId: _id });
    const { data } = await axios.post(
      `${BaseURL}/accessGroupChat`,

      { groupId: '657064ea05a8f2734a4f4077' },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSelectedChat(data);
    console.log('Group id Data', data);
  };

  // console.log('Selected contacts', selectedContacts);

  return (
    <div onClick={() => props.handleContactClick(props.data)}>
      <div
        className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 hover:bg-blue-400 hover:cursor-pointer }`}
        onClick={handleChatId}
        // style={{ backgroundColor: selectedContacts === _id ? 'transparent' : 'green' }}
      >
        <div className="w-1/4">
          <img
            src={image}
            className="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full">
          {/* <div className="text-lg font-semibold">{name}</div> */}
          <div className="text-lg font-semibold">{chatName}</div>
          <span className="text-gray-500">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactGroup;
