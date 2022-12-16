import React from 'react';
import gravatar from 'gravatar';

function UserAvatar({ email,size }) {
  const avatarUrl = gravatar.url(email, {
    s: size,
    r: 'pg',
    d: 'mm'
  });

  return (
    <img className="rounded-full" src={avatarUrl} alt="User Avatar" />
  );
}

export default UserAvatar;
