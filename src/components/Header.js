/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../mainPage/components/Button';
import { css } from '@emotion/react';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        height: '124px',
        alignItems: 'center',
        margin: '0 80px',
      }}
    >
      <h2 style={{ flex: 1 }}>LikeLion</h2>
      <div css={header}>
        <Link to={'/'}>Home</Link>
        <Link to={'/studyCase'}>Study</Link>
        <Link>About</Link>
        <Link to={'/login'}>Login</Link>
        <Button width="179" height="53"></Button>
      </div>
    </div>
  );
};

export default Header;

const header = css`
  display: flex;
  gap: 50px;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  & a {
    text-decoration: none;
    color: #858a8f;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`;
