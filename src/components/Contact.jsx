import axios from 'axios';
import React, { useEffect } from 'react';
import { ChatState } from '../context/ChatProvider';
import BaseURL from '../BaseURL';

const token = localStorage.getItem('token');

const Contact = (props) => {
  let { name, email, image, _id, chatName } = props.data; //headerData
  const { setSelectedChat } = ChatState();

  // useEffect(() => {}, []);
  const handleChatId = async () => {
    const { data } = await axios.post(
      `${BaseURL}/accessChat`,

      { userId: _id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSelectedChat(data);
  };

  return (
    <div>
      <div
        className="flex flex-row py-4 px-2 justify-center items-center border-b-2 hover:bg-blue-400 hover:cursor-pointer"
        onClick={handleChatId}
      >
        <div className="w-1/4">
          <img
            src={image}
            className="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="text-lg font-semibold">{name || chatName}</div>
          <span className="text-gray-500">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
