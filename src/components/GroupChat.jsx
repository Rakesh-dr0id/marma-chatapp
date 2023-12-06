import React, { useState, useEffect } from 'react';
import Cam from '../assets/camera.png';
import { ChatState } from '../context/ChatProvider';
import axios from 'axios';
import BaseURL from '../BaseURL';
import GroupProfile from './GroupProfile';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const token = localStorage.getItem('token');

const GroupChat = ({ selectedUser }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [groupName, setGroupName] = useState('');
  const { selectedContacts, setSelectedContacts } = ChatState();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedFile(null);
    setGroupName('');
  }, [selectedUser]);

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
    }
  };

  let ids = selectedContacts.map((item) => item._id);

  // const handleCreateGroup = async () => {
  //   const newGroup = {
  //     groupName: groupName,
  //     // Add other properties you need for a group object
  //   };

  //   // Update the selectedContacts array with the new group
  //   setSelectedContacts([...selectedContacts, newGroup]);

  //   try {
  //     // Perform the API call to create the group
  //     await axios.post(
  //       `${BaseURL}/createGroup`,
  //       {
  //         name: groupName,
  //         users: JSON.stringify(ids),
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     setSelectedFile(null);
  //     setGroupName('');
  //   } catch (error) {
  //     // Log and handle the error
  //     console.error('Error creating group:', error);
  //   }
  // };

  // console.log(selectedContacts);

  const handleCreateGroup = async () => {
    const newGroup = {
      groupName: groupName,
      // Add other properties you need for a group object
    };

    // Update the selectedContacts array with the new group
    setSelectedContacts([...selectedContacts, newGroup]);
    navigate('/home');
    toast.success('Group created successfully');
  };

  useEffect(() => {
    const createGroup = async () => {
      try {
        // Perform the API call to create the group
        await axios.post(
          `${BaseURL}/createGroup`,
          {
            name: groupName,
            users: JSON.stringify(ids),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setSelectedFile(null);
        setGroupName('');
      } catch (error) {
        // Log and handle the error
        console.error('Error creating group:', error);
      }
    };

    if (selectedContacts.length > 0) {
      createGroup();
    }
  }, [selectedContacts]); // Watch for changes in selectedContacts

  console.log(selectedContacts);

  return (
    <div>
      <div className=" flex flex-col justify-center">
        <div className="flex justify-start relative ">
          <label
            htmlFor="profilePicture"
            className="cursor-pointer rounded-full border-4 ml-10 mt-10 border-gray-500 p-2 h-20 w-20 "
          >
            {selectedFile && (
              <img
                src={selectedFile}
                alt="Selected Profile"
                className="object-cover h-full w-full rounded-full"
              />
            )}
            <img src={Cam} alt="" className="absolute bottom-4 ml-10 left-4" />
          </label>
          <input
            type="file"
            id="profilePicture"
            className="hidden"
            onChange={changeHandler}
            accept="image/*"
          />
          <div className="ml-10 mt-14">
            <input
              type="text"
              id="groupName"
              placeholder="Group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-64"
            />
          </div>
        </div>
        <div>
          {selectedContacts && (
            <div>
              {selectedContacts.map((s) => (
                <GroupProfile contact={s} />
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={handleCreateGroup}
        className="w-[200px] ml-[40%] mt-[40%] bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
      >
        Create Group
      </button>
    </div>
  );
};

export default GroupChat;
