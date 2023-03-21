import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AutoLayoutExample from "./components/AutoLayoutExample";
import Detail from "./components/Detail";
import DataList from "./data/ProductDataList";
import axios from "axios";
import Cart from "./components/Cart";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [productList, setProductList] = useState(DataList);
  const [buttonText, setButtonText] = useState("더보기");

  const navigate = useNavigate();

  let result = useQuery("query", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => {
        return a.data;
      });
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("detail/0");
              }}
            >
              Detail
            </Nav.Link>{" "}
            <Nav.Link
              onClick={() => {
                navigate("cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              className="ms-auto"
              style={{
                color: "white",
                position: "absolute",
                right: "0",
              }}
            >
              반가워요 kim
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <AutoLayoutExample productList={productList} />

              <button
                onClick={() => {
                  setButtonText("로딩 중...");
                  let url;
                  if (productList.length === 3) {
                    url = "https://codingapple1.github.io/shop/data2.json";
                  } else if (productList.length === 6) {
                    url = "https://codingapple1.github.io/shop/data3.json";
                  } else {
                    alert("상품이 더 없습니다.");
                    setButtonText("마지막 페이지");
                    return;
                  }
                  axios
                    .get(url)
                    .then((result) => {
                      let copy = [...productList, ...result.data];
                      setProductList(copy);
                      setButtonText("더보기");
                    })
                    .catch(() => {
                      console.log("data error");
                      setButtonText("더보기");
                    });
                }}
              >
                {buttonText}
              </button>
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail productList={productList} />}
        ></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
