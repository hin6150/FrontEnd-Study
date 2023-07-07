import React from 'react';

const InputBox = () => {
  return (
    <div class="box">
      <div className="rectangle">
        <img className="image" src="src\assets\smile.png" width="28px" height="28px" alt="" />
        <input className="content" type="text" placeholder="Sergei Filatov"></input>
      </div>
    </div>
  );
};

export default InputBox;
