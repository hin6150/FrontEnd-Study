import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col sm>
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            alt="shoes1"
            width="80%"
          ></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            alt="shoes2"
            width="80%"
          ></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            alt="shoes3"
            width="80%"
          ></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
