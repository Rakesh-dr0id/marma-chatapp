import React from 'react';
import Contact from './Contact';

const Sidebar = () => {
  const DUMMY = [
    {
      name: 'Jack Terrell',
      email: 'diam.lorem@aol.net',
      image: 'https://source.unsplash.com/_7LbC5J-jw4/600x600',
    },
    {
      name: 'Gretchen Logan',
      email: 'enim.nisl@protonmail.edu',
      image: 'https://source.unsplash.com/otT2199XwI8/600x600',
    },
    {
      name: 'Indigo Brady',
      email: 'dui@yahoo.org',
      image: 'https://source.unsplash.com/L2cxSuKWbpo/600x600',
    },
    {
      name: 'Anjolie Puckett',
      email: 'mus@hotmail.net',
      image: 'https://source.unsplash.com/vpOeXr5wmR4/600x600',
    },
    {
      name: 'Wyatt Santana',
      email: 'augue.ut@google.ca',
      image: 'https://source.unsplash.com/vpOeXr5wmR4/600x600',
    },
    {
      name: 'Wynter Estrada',
      email: 'eget.dictum@hotmail.ca',
      image: 'https://source.unsplash.com/vpOeXr5wmR4/600x600',
    },
    {
      name: 'Yvonne Calderon',
      email: 'felis.orci@outlook.ca',
      image: 'https://source.unsplash.com/otT2199XwI8/600x600',
    },
    {
      name: 'Basia Shepard',
      email: 'sed@icloud.edu',
      image: 'https://source.unsplash.com/vpOeXr5wmR4/600x600',
    },
  ];

  return (
    <div>
      {DUMMY.map((data, idx) => (
        <Contact key={idx} data={data} />
      ))}
    </div>
  );
};

export default Sidebar;
