import React, { useState } from 'react';
import ContactGroup from './ContactGroup';
import { ChatState } from '../context/ChatProvider';

const SidebarGroup = ({ headerData }) => {
  const { selectedContacts, setSelectedContacts } = ChatState();

  const handleContactClick = (contact) => {
    setSelectedContacts([...selectedContacts, contact]);
  };

  return (
    <div>
      {headerData.map((data, idx) => (
        <ContactGroup
          key={idx}
          data={data}
          handleContactClick={handleContactClick}
          selectedContacts={selectedContacts}
        />
      ))}
    </div>
  );
};

export default SidebarGroup;
