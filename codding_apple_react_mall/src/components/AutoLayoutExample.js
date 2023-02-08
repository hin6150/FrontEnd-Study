import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList(props) {
  const baseURL = "https://codingapple1.github.io/shop/shoes";
  const extension = ".jpg";

  const data = props.data;

  let navigate = useNavigate();

  return (
    <Col
      sm
      onClick={() => {
        navigate("/detail/" + data.id);
      }}
    >
      <img
        src={baseURL + (data.id + 1) + extension}
        alt={"shoes" + data.id}
        width="80%"
      ></img>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}</p>
    </Col>
  );
}

function AutoLayoutExample(props) {
  return (
    <Container>
      <Row>
        {props.productList.map((data, idx) => {
          return <ProductList data={data} key={idx}></ProductList>;
        })}
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
