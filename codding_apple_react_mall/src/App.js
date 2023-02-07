import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AutoLayoutExample from "./components/AutoLayoutExample";
import Detail from "./components/Detail";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <AutoLayoutExample />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
