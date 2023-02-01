import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

  const printList = listArry.map((list, idx) => (
    <div key={idx}>
      <div css={divStyle}>
        <h4>
          {list}
          <span
            onClick={() => {
              liked[idx] += 1;
              setLiked([...liked]);
            }}
          >
            👍
          </span>
          {liked[idx]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <hr></hr>
    </div>
  ));

  return (
    <div>
      {printList}
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
    </div>
  );
}

export default List;
