// components/AvatarPlaceholder.js
import React from 'react';
import '../styles/AvatarPlaceholder.css'; 

const AvatarPlaceholder = () => {
  return (
    <div className="avatar-placeholder">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="avatar-icon"
        fill="white" 
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v1h20v-1c0-3.33-6.69-5-10-5z"/>
      </svg>
    </div>
  );
};

export default AvatarPlaceholder;
