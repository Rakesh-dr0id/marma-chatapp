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
    socket.emit('setup', user);
    socket.on('connected', () => console.log('Connected'));
    setSocketConnected(socket);

    socket.on('message received', (newMessage) => {
      console.log('New message received:', newMessage);

      // Update the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Join the chat with the selectedChat._id
      // socket.emit('join chat', selectedChat._id);
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

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

      // let mess = {
      //   chat: {
      //     users: [
      //       {
      //         _id: '65687e20fdc8e41a51a502f9',
      //       },
      //       {
      //         _id: '656dbc354a87d4ea785e7660',
      //       },
      //     ],
      //   },
      //   content: newMessage,
      //   sender: {
      //     _id: '65687e20fdc8e41a51a502f9',
      //   },
      // };

      console.log('Data', data);
      socketConnected.emit('new message', data);
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
      <div className="w-full px-5 flex flex-col justify-between">
        {/*  */}
        <SingleChat messages={messages} />

        <div className="py-5 fixed bottom-0 w-[80%] lg:w-[70%] flex items-center ">
          <input
            className="flex-1 bg-gray-300 py-5 px-3 rounded-l-xl focus:outline-none"
            type="text"
            placeholder="type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
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
