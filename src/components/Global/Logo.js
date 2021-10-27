import React from 'react';

function Logo(props) {
  return (
    <img
      style={{
        width: 'auto',
        height: 100,
      }}
      alt="Logo"
      src="/public/static/logo.png"
      {...props}
    />
  );
}

export default Logo;
