import React from 'react';
import Button from './components/Button';
import LargeBox from './components/LargeBox';
import RateBox from './components/RateBox';
import SmallBox from './components/SmallBox';
import Content from './components/Content';

const index = () => {
  return (
    <div>
      <p>메인페이지입니다.</p>
      <Button></Button>
      <LargeBox></LargeBox>
      <RateBox></RateBox>
      <SmallBox></SmallBox>
      <Content />
    </div>
  );
};

export default index;
