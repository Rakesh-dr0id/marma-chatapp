import React from 'react';

const GroupProfile = ({ contact }) => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center p-4 rounded-3xl md:flex-row gap-2">
          <div
            className="-mt-28 md:-my-16 md:-ml-32"
            // style="clip-path: url(#roundedPolygon)"
          >
            <img className="w-20 h-20" src={contact.image} alt="" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-xl font-medium">{contact.name}</h2>
              <p className="text-base font-medium text-gray-400">
                {contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProfile;
