import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Navbar id="navbar" expand="lg" className="bg-secondary">
        <Container fluid>
          <Navbar.Brand className="mx-2" href="#">
            FallaBella
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="mx-2" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-2 mx-auto mt-2 ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <Nav className="d-flex" style={{ maxHeight: "100px" }} navbarScroll>
              <Button
                className="mx-2 mt-2"
                variant="outline-dark"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button className="mx-2 mt-2" variant="outline-dark">
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
