import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataList from "../data/ProductDataList";

import { useState } from "react";

function ProductList(props) {
  const baseURL = "https://codingapple1.github.io/shop/shoes";
  const extension = ".jpg";

  const data = props.productList[props.idx];

  return (
    <Col sm>
      <img
        src={baseURL + (data.id + 1) + extension}
        alt={"shoes" + props.idx}
        width="80%"
      ></img>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}</p>
    </Col>
  );
}

function AutoLayoutExample() {
  const [productList, setProductList] = useState(DataList);

  return (
    <Container>
      <Row>
        {productList.map((data, idx) => {
          return (
            <ProductList idx={idx} productList={productList}></ProductList>
          );
        })}
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
