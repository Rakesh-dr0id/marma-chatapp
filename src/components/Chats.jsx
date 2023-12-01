import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';

const EndPoint = 'http://localhost:8000';
let socket, selectedChatCompare;

const token = localStorage.getItem('token');

const Chats = ({ currentUser }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [allMessages, setAllMessages] = useState('');
  const [singleChat, setSingleChat] = useState('');
  const { id, name, image, role, employeeId, password } = currentUser;

  // useEffect(() => {
  //   socket = io(EndPoint);
  //   // socket.emit('setup', user);
  //   socket.on('connection', () => setSocketConnected(true));
  // }, []);

  //Latest chat api
  // useEffect(() => {
  //   const fetchChats = async () => {
  //     axios.get('/fetchChats', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   };
  //   fetchChats()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  //Get All messages
  useEffect(() => {
    const getAllMessages = async () => {
      axios.get(`/getMessages/656971436bf4dc4f2e913fe0`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };
    getAllMessages().then((res) => setAllMessages(res));
  }, []);

  // console.log(allMessages);

  const msgData = {
    content: singleChat,
    chatId: '656971436bf4dc4f2e913fe0',
  };

  const handleSendMessage = async () => {
    axios
      .post(`/sendMsg`, msgData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <div className="w-full px-5 flex flex-col justify-between ">
        <div className="flex flex-col mt-5">
          <div className="flex justify-end mb-4">
            <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
              Welcome to group everyone !
            </div>
            <img
              src={image}
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
              {singleChat}
            </div>
          </div>
        </div>
        <div className="py-5 fixed bottom-0 w-[80%] lg:w-[70%] flex items-center ">
          <input
            className="flex-1 bg-gray-300 py-5 px-3 rounded-l-xl focus:outline-none"
            type="text"
            placeholder="type your message here..."
            value={singleChat}
            onChange={(e) => setSingleChat(e.target.value)}
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
