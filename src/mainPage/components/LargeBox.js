import React from 'react';

const LargeBox = () => {
  return (
    <div>
      <div className="image">image</div>
      <h1 className="h1">h1</h1>
      <p className="p">p</p>
      <button className="button">button</button>
      <div>
        <div className="box">box</div>
        <img
          className="image"
          alt="Nothing"
          src="C:\Users\User\Desktop\Image-18.png"
          width="1024px"
          height="682px"
        ></img>
        <div className="block">
          <img className="icon" alt="Nothing" src="C:\Users\User\Desktop\icon-2.png" width="392px" height="135px"></img>
          <p className="p1">p</p>
          <p className="p2">p</p>
        </div>
      </div>
    </div>
  );
};

export default LargeBox;
