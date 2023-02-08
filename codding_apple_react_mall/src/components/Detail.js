import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { id } = useParams();
  const [display, setDisplay] = useState(true);
  const [input, setInput] = useState();

  function setValue(e) {
    setInput(e.target.value);
  }
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 2000);
  }, []);
  useEffect(() => {}, [input]);

  let shoe = {
    id: -1,
    title: "",
    content: "",
    price: 0,
  };

  // props.productList.map((data) => {
  //   if (data.id === Number(id)) {
  //     shoe = data;
  //   }
  // });
  shoe = props.productList.find((data) => {
    return data.id === Number(id);
  });

  return (
    <div className="container">
      {display ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <input onChange={this.setValue()}></input>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (Number(id) + 1) +
              ".jpg"
            }
            width="100%"
            alt={"shoe" + Number(id)}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
