import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';
import { ChatState } from '../context/ChatProvider';
import { toast } from 'react-toastify';
import SingleChat from './SingleChat';

const ENDPOINT = 'http://localhost:8000';
let socket, selectedChatCompare;

const token = localStorage.getItem('token');

const Chats = ({ currentUser, selectedUser }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { id, name, image, role, employeeId, password } = currentUser;
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
  ChatState();
  

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    

    // eslint-disable-next-line
  }, []);

  //Get All messages

  const getMessages = async () => {
   try {
    const {data } = await axios.get(`/getMessages/${selectedChat._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('API response',data);

    setMessages(data);
    socket.emit("join chat", selectedChat);

   } catch (error) {
    toast.error(error)
   }
  };

  useEffect(() => {
    getMessages()

    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  // console.log(messages);

  

  const handleSendMessage = async () => {
    try {
      const { data } = await axios.post(`/sendMsg`, {
        content: newMessage,
        chatId: selectedChat._id,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      socket.emit("new message", data);
      setNewMessage('');
      if(Array.isArray(messages)) {
        setMessages([...messages, data])
      } else {
        console.error('Messages is not an Array', messages)
      }
    } catch (error) {
      console.error(error);
    }
  };
 

  

  return (
    <div>
      <div className="w-full px-5 flex flex-col justify-between">
        {/*  */}
        <SingleChat messages={messages}/>
        
        <div className="py-5 fixed bottom-0 w-[80%] lg:w-[70%] flex items-center ">
          <input
            className="flex-1 bg-gray-300 py-5 px-3 rounded-l-xl focus:outline-none"
            type="text"
            placeholder="type your message here..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <IoMdSend
            className="ml-2 text-2xl cursor-pointer"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chats;
