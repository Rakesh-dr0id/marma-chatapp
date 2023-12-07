import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChatState } from '../context/ChatProvider';
import BaseURL from '../BaseURL';

const token = localStorage.getItem('token');

const Contact = (props) => {
  let { name, email, image, _id, chatName } = props.data; //headerData All data in single array => users and groups
  const { setSelectedChat } = ChatState();

  const handleChatId = async () => {
    console.log('Group or not', props.data);
    if (props.data.isGroupChat) {
      console.log('Request Payload:', { groupId: _id });
      const { data } = await axios.post(
        `${BaseURL}/accessGroupChat`,

        { groupId: _id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedChat(data);
      console.log('Group id Data', data);
    } else {
      console.log('chatID: ', _id);
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
    }
  };

  //! IMPORTANT
  const handleGroupId = async () => {
    console.log('Request Payload:', { groupId: _id });
    const { data } = await axios.post(
      `${BaseURL}/accessGroupChat`,

      { groupId: _id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSelectedChat(data);
    console.log('Group id Data', data);
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
