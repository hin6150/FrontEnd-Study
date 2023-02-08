import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AutoLayoutExample from "./components/AutoLayoutExample";
import Detail from "./components/Detail";
import DataList from "./data/ProductDataList";

function App() {
  const [productList, setProductList] = useState(DataList);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
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
                navigate("detail");
              }}
            >
              Detail
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
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail productList={productList} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
