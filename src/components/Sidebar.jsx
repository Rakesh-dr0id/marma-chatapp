import React, { useState, useEffect } from 'react';
import Contact from './Contact';

const Sidebar = ({ headerData }) => {
  return (
    <div>
      {headerData.map((data, idx) => (
        <Contact key={idx} data={data} />
      ))}
    </div>
  );
};

export default Sidebar;
