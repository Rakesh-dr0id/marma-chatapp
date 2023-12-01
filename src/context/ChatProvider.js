import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";


const ChatContext = createContext();

const token = localStorage.getItem('token');


const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  

  useEffect(() => {

    const currentUser = async () => {
    const decodedToken = jwtDecode(token);
    
    await axios.get(`/getUserProfile/${decodedToken.id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => setUser(res.data))
    
  }
    currentUser()
  }, []);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
