/** @jsxImportSource @emotion/react */
import React from 'react';
import './footer.css';
import { css } from '@emotion/react';
import { Image } from './components';

const Footer = () => {
  const textList = [
    ['Desktop App', 'Modbile App', 'Sass', 'Event', 'Software'],
    ['About Us', 'Careers', 'Case Studies', 'Pricing'],
    ['Blog Listing', 'Blog Article', 'Newsroom'],
    ['Portfolio', 'Single Case'],
  ];
  return (
    <div
      css={css`
        position: relative;
        padding: 40px 40px 100px;
        display: flex;
        justify-content: space-around;
      `}
    >
      <CategoryLargeBox />
      <CategoryBox title="Home" data={textList[0]} />
      <CategoryBox title="Pages" data={textList[1]} />
      <CategoryBox title="Blog" data={textList[2]} />
      <CategoryBox title="Portfolio" data={textList[3]} />
    </div>
  );
};

const CategoryLargeBox = () => (
  <div className="category-large-box">
    <h2>Move</h2>
    <p>Move - Multipurpose Design Template will help you develop your website design.</p>
    <div className="category-icon-box">
      <Image src="Dribbble" width="50px" height="47px" />
      <Image src="Facebook" width="50px" height="47px" />
      <Image src="Twitter" width="50px" height="47px" />
      <Image src="YouTube" width="50px" height="47px" />
    </div>
    <div className="category-copylight">© 2019-2020 Wave Multipurpose Design Template.</div>
  </div>
);

const CategoryBox = ({ title, data }) => (
  <div className="category-box">
    <h2>{title}</h2>
    <ul>
      {data.map((text) => {
        return <li key={text}>{text}</li>;
      })}
    </ul>
  </div>
);

export default Footer;
