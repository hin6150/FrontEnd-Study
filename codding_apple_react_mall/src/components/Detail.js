import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCart } from "../Store";
import TabComponents from "./TabComponents";

function Detail(props) {
  const navigate = useNavigate();

  let a = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  const { id } = useParams();
  const [display, setDisplay] = useState(true);
  const [tab, setTab] = useState();

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 2000);
  }, []);
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
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addCart(shoe));
              navigate("/cart");
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <TabComponents tab={tab} setTab={setTab}></TabComponents>
    </div>
  );
}

export default Detail;
