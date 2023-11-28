import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chats from '../components/Chats';

const Home2 = () => {
  return (
    <div>
      {/* <!-- This is an example component --> */}
      <div className=" h-full m-2 mx-auto shadow-lg rounded-lg">
        {/* <!-- header --> */}
        <Header />
        {/* <!-- end header --> */}

        {/* <!-- Chatting --> */}
        <div className="flex flex-row justify-between bg-white h-full">
          {/* <!-- chat list --> */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* <!-- user list --> */}
            <Sidebar />
            {/* <!-- end user list --> */}
          </div>
          {/* <!-- end chat list --> */}
          <Chats />
          {/* <!-- message --> */}
        </div>
      </div>
    </div>
  );
};

export default Home2;
