import React from 'react'
import { ChatState } from '../context/ChatProvider';

const SingleChat = ({messages}) => {
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
  ChatState();

  return (
    <div>
    {messages && messages.map((m,i) => (
    m && <div>
      <div className="flex flex-col mt-5">
          {m.sender._id === user.id && m.content && 
          <div className="flex justify-end mb-4">
            <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
              {m.content}
            </div>
            <img
              src={user.image}
              className="object-cover h-8 w-8 rounded-full"
              alt=""
              />
          </div>
            }
          {
            m.sender._id !== user.id && m.content &&
          
          <div className="flex justify-start mb-4">
          <img
            src={m.sender.image}
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
          <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            {  m.content }
          </div>
        </div>
    }
        </div>
    </div>
    ))}
    </div>
  )
}

export default SingleChat
