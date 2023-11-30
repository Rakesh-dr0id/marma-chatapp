import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chats from '../components/Chats';

const Home = () => {
  const [headerData, setHeaderData] = useState([]);
  return (
    <div>
      {/* <!-- This is an example component --> */}
      <div className=" h-screen m-2 mx-auto shadow-lg rounded-lg">
        {/* <!-- header --> */}
        <Header onHeaderDataChange={setHeaderData} />
        {/* <!-- end header --> */}

        {/* <!-- Chatting --> */}
        <div className="flex flex-row justify-between bg-white h-full">
          {/* <!-- chat list --> */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* <!-- user list --> */}
            <Sidebar headerData={headerData} />
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

export default Home;
