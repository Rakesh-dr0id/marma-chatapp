import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';
import { ChatState } from '../context/ChatProvider';
import { toast } from 'react-toastify';
import SingleChat from './SingleChat';

const ENDPOINT = 'https://marmachatapp-yef1.onrender.com';
// const ENDPOINT = 'https://localhost:8000';
let socket, selectedChatCompare;

const token = localStorage.getItem('token');

const Chats = ({ currentUser, selectedUser }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { id, name, image, role, employeeId, password } = currentUser;
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();
    const scrollRef = useRef();

    useEffect(() => {
      socket = io(ENDPOINT);
      socket.emit('setup', user);
      
      socket.on('connected', () => {
        console.log('Connected');
      });
    
      socket.on('message recieved', (newMessage) => {
        // if(selectedChatCompare._id !== newMessage.chat._id)
        console.log('New message received:', newMessage);
        setMessages([...messages, newMessage]);
        
      });
    
      return () => {
        socket.off('message recieved');
        socket.disconnect();
      };
    }, []);



    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    },[messages])

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
      socket.emit('join chat', selectedChat._id);
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

      console.log('new message Data', data);
      socket.emit('new message', data);
      
      setNewMessage('');
      if (Array.isArray(messages)) {
        setMessages([...messages, data]);
      } else {
        console.error('Messages is not an Array', messages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   socket.on('message recieved', (newMessageRecieved) => {
  //     if (
  //       !selectedChatCompare || // if chat is not selected or doesn't match current chat
  //       selectedChatCompare._id !== newMessageRecieved.chat._id
  //     ) {
  //       if (!notification.includes(newMessageRecieved)) {
  //         setNotification([newMessageRecieved, ...notification]);
  //         setFetchAgain(!fetchAgain);
  //       }
  //     } else {
  //       setMessages([...messages, newMessageRecieved]);
  //     }
  //   });
  // });

  return (
    <div>
      <div className="px-5 flex flex-col h-screen ">
        {/*  */}
        <div className='flex-1 overflow-y-auto px-5' ref={scrollRef}>
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
          <div className='ml-2 px-4 py-2 rounded-r-xl  focus:outline-none'>
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
