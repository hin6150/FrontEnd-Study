import React from 'react';
import StudyCaseBox from './components/StudyCaseBox';
import StudyLinkBox from './components/StudyLinkBox';

const index = () => {
  return (
    <div>
      <p>스터디 케이스</p>
      <StudyCaseBox></StudyCaseBox>
      <StudyLinkBox></StudyLinkBox>
    </div>
  );
};

export default index;
