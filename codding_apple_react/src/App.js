import "./App.css";

import { useState } from "react";
import List from "./components/list";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="title">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          ReactBlog
        </h4>
      </div>
      <List />
      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  const modalStyle = css`
    background-color: #eee;
    padding: 20px;
    margin-top: 20px;
    text-align: left;
  `;
  return (
    <div className="modal" css={modalStyle}>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 정보</p>
    </div>
  );
}

export default App;
