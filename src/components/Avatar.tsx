import React from 'react';

interface AvatarProps {
  avatar: any;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
  return (
    <div className="avatar">
      {avatar ? <img src={avatar.url} alt="Chat Avatar" /> : <p>Loading avatar...</p>}
    </div>
  );
};

export default Avatar;