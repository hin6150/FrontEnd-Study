import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Modal(props) {
  const modalStyle = css`
    background-color: #eee;
    padding: 20px;
    margin-top: 20px;
    text-align: left;
  `;
  return (
    <div className="modal" css={modalStyle}>
      <h4>{props.listArry[props.index]}</h4>
      <p>날짜</p>
      <p>상세 정보</p>
      <button
        onClick={() => {
          let copy = [...props.listArry];
          copy[0] = "여자코트 추천";
          props.setListArry(copy);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

function List() {
  const divStyle = css`
    margin-left: 20px;
  `;
  const [listArry, setListArry] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [liked, setLiked] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {listArry.map((list, idx) => (
        <div key={idx}>
          <div css={divStyle}>
            <h4
              onClick={() => {
                setModal(!modal);
                setIndex(idx);
              }}
            >
              {list}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  liked[idx] += 1;
                  setLiked([...liked]);
                }}
              >
                👍
              </span>
              {liked[idx]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...listArry];
                copy.splice(idx, 1);
                setListArry(copy);
                let copyLiked = [...liked];
                copyLiked.splice(idx, 1);
                setLiked(copyLiked);
              }}
            >
              글 삭제
            </button>
          </div>
          <hr></hr>
        </div>
      ))}
      <button
        onClick={() => {
          const copy = [...listArry];
          copy[0] = "여자코트 추천";
          setListArry(copy);
        }}
      >
        제목 바꾸기
      </button>
      <button
        onClick={() => {
          const copy = [];
          let pushed = false;
          listArry.map((list, idx) => {
            copy.map((compareList, i) => {
              if (list < compareList && pushed === false) {
                copy.splice(i, 0, list);
                pushed = true;
              }
              return 0;
            });
            pushed ? (pushed = false) : copy.push(list);
            return 0;
          });
          setListArry(copy);
        }}
      >
        가나다순 정렬하기
      </button>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copyList = [...listArry];
          copyList.push(inputValue);
          setListArry(copyList);

          let copyLiked = [...liked];
          copyLiked.push(0);
          setLiked(copyLiked);
        }}
      >
        글 추가
      </button>
      {modal ? (
        <Modal listArry={listArry} setListArry={setListArry} index={index} />
      ) : null}
    </div>
  );
}

export default List;
