import React from 'react';
import './inputbox.css';

const InputBox = () => {
  return (
    <div>
      <div className="account-rectangle">
        <img className="account-image" src="img/smile.png" width="28px" height="28px" alt="" />
        <i class="fas fa-search"></i>
        <input className="account-content" type="text" value="Sergei Filatov"></input>
      </div>
    </div>
  );
};

export default InputBox;
