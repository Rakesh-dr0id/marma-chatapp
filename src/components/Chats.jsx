import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';
import { ChatState } from '../context/ChatProvider';
import { toast } from 'react-toastify';
import SingleChat from './SingleChat';

// const ENDPOINT = 'https://marmachatapp-yef1.onrender.com';
const ENDPOINT = 'http://localhost:8000';
let selectedChatCompare;

const token = localStorage.getItem('token');

const Chats = ({ currentUser, selectedUser }) => {
  const [socketConnected, setSocketConnected] = useState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { id, name, image, role, employeeId, password } = currentUser;
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();
  const scrollRef = useRef();

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('setup', user);

    socket.on('connected', () => {
      console.log('Connected');
    });
    setSocketConnected(socket);

    socket.on('message received', (newMessage) => {
      // if(selectedChatCompare._id !== newMessage.chat._id)
      console.log('New message received:', newMessage);
      setMessages([...messages, newMessage]);
    });

    // return () => {
    //   socket.off('message received');
    //   socket.disconnect();
    // };
  }, []);

  // setTimeout(() => {
  //   getMessages();
  //   console.log('Get messages');
  // }, 5000);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  //Get All messages
  const getMessages = async () => {
    try {
      const { data } = await axios.get(`/getMessages/${selectedChat._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('API response', data);

      setMessages(data);
      socketConnected.emit('join chat', selectedChat._id);
      console.log('Join chat', selectedChat._id);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getMessages();

    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  // console.log(messages);

  const handleSendMessage = async () => {
    try {
      const { data } = await axios.post(
        `/sendMsg`,
        {
          content: newMessage,
          chatId: selectedChat._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // const mess = {
      //   chat: {
      //     users: [{ _id: id }, { _id: Frd?._id }],
      //   },
      //   content: newMessage,
      //   sender: {
      //     _id: id,
      //   },
      // };

      console.log('new message Data', data);
      socketConnected.emit('new message', data);
      getMessages();
      setNewMessage('');
      // if (Array.isArray(messages)) {
      //   setMessages([...messages, data]);
      // } else {
      //   console.error('Messages is not an Array', messages);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="px-5 flex flex-col h-screen ">
        {/*  */}
        <div className="flex-1 overflow-y-auto px-5" ref={scrollRef}>
          <SingleChat messages={messages} />
        </div>

        <div className="flex items-center py-5 px-5 bg-gray-100">
          <input
            className="flex-1 bg-gray-300 py-2 px-3 rounded-l-xl focus:outline-none"
            type="text"
            placeholder="type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="ml-2 px-4 py-2 rounded-r-xl  focus:outline-none">
            <IoMdSend
              className="ml-2 text-2xl cursor-pointer"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
