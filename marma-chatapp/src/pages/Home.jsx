import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chats from '../components/Chats';

const Chat = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 grid-rows-6 gap-2 m-2">
        <div className="col-span-3 border border-red-500">
          <Header />
        </div>
        <div className="row-span-5 row-start-2 border border-blue-500">
          <Sidebar />
        </div>
        <div className="col-span-2 row-span-5 row-start-2 border border-green-500">
          <Chats />
        </div>
      </div>
    </div>
  );
};

export default Chat;
