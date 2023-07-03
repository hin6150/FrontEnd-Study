import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to={'/'}>
        <p>Home</p>
      </Link>
      <Link to={'/studyCase'}>
        <p>Study</p>
      </Link>
      <Link>
        <p>About</p>
      </Link>
      <Link to={'/login'}>
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Header;
