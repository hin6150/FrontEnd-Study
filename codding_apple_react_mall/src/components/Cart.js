import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../Store";

function Cart() {
  let cart = useSelector((state) => state.cart);
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  return (
    <div>
      <h6>{state.user}의 장바구니</h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        {cart.map((data) => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increaseCount(data.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default Cart;
