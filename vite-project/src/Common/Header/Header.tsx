import { useState, useEffect, ChangeEvent } from "react";
import { fetchCategorias } from "../../Common/Services/apicalls";
import { useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/categorySlice";

interface Category {
  description: string
}

export const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<string[]>([]);

  //varuable de estado de el buscador
  const dispatch = useDispatch();

  const handleCategoriaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let categoriaSeleccionada: Category = {
      description: event.target.value
    }

    dispatch(setCategory({ categorySelected: categoriaSeleccionada }));
  };

  useEffect(() => {
    const traerLosProductos = async () => {
      try {
        if (location.pathname == "/") {
          let categories: string[] = await fetchCategorias();
          setCategorias(categories)
        }
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
    traerLosProductos();
  }, []);

  return (
    <div>
      <Navbar
        id="navbar"
        expand="lg"
        className="bg-secondary align-item-center"
      >
        <Container fluid>
          <Navbar.Brand className="mx-4 " onClick={() => navigate("/")}>
            FallaBella
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="mx-2" />
          <Navbar.Collapse id="navbarScroll">

            {location.pathname === "/" && (
              <>
                <Form className="d-flex mx-2 mx-auto mt-2 ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
                <Form.Select
                  aria-label="Default select example"
                  defaultValue={"0"}
                  onChange={handleCategoriaChange}
                >
                  <option value="0" disabled>Select categories</option>
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </Form.Select>
              </>
            )}




            <Nav className="d-flex" style={{ maxHeight: "100px" }} navbarScroll>
              <Button
                className="mx-2 mt-2"
                variant="outline-dark"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button className="mx-4" variant="outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-fill ms-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                ( 0 )
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
