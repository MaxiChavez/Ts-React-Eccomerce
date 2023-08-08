import { useState, useEffect, ChangeEvent } from "react";
import { fetchCategorias } from "../../Common/Services/apicalls";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDebounce } from "use-debounce";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/categorySlice";
import { addSearch } from "../../redux/searchSlice";
import { cartData, removeToCart } from "../../redux/cartSlice";
import { updateUser } from "../../redux/loginSlice";
import { loginData } from "../../redux/loginSlice";
import { IUserData } from "../Services/IUserInterface";
import { cartTotalQuantity } from "../../redux/cartSlice";

interface Category {
  description: string;
}

export const Header = () => {
  const cantidadTotalCarrito = useSelector(cartTotalQuantity);
  const cartState = useSelector(cartData);
  const location = useLocation();
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 1000);
  const isLogged = useSelector((state: any) => state.login.isLogged);

  const dispatch = useDispatch();

  const userLogRd: IUserData = useSelector(loginData);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  const handleCategoriaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const categoriaSeleccionada: Category = {
      description: event.target.value,
    };
    dispatch(setCategory({ categorySelected: categoriaSeleccionada }));
  };

  useEffect(() => {
    const traerLosProductos = async () => {
      try {
        if (location.pathname === "/") {
          const categories: string[] = await fetchCategorias();
          setCategorias(categories);
        }
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
    traerLosProductos();
  }, []);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        dispatch(addSearch({ search: debouncedSearch }));
      } catch (error) {
        console.log("Error al buscar productos:", error);
      }
    };
    searchProducts();
  }, [debouncedSearch]);

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
                <Form id="Searchh" className="d-flex mx-2 mx-auto mt-2 ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearchChange}
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>

                <Form.Select
                  id="SelectCategories"
                  aria-label="Default select example"
                  defaultValue={"0"}
                  onChange={handleCategoriaChange}
                >
                  <option value="0" disabled>
                    Select categories
                  </option>
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </Form.Select>
              </>
            )}

            <div id="logincart">
              <div className="buttons-container">
                <Nav
                  className="d-flex"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {isLogged ? (
                    <>
                      <span className="mx-2 mt-2">Hi: {userLogRd.email}</span>
                      <Button
                        className="mx-2 mt-2"
                        variant="outline-dark"
                        onClick={() => {
                          dispatch(updateUser({ isLogged: false, user: {} }));
                          dispatch(removeToCart([]));
                        }}
                      >
                        Logout
                      </Button>
                      {isLogged && (
                        <Button
                          id="btn-cart"
                          className="mx-4"
                          variant="outline-dark"
                          onClick={() => navigate("/cart")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart-fill ms-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zm5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            />
                          </svg>
                          ( {cartState.cantidadTotal} )
                        </Button>
                      )}
                    </>
                  ) : (
                    <>
                      <Button
                        className="mx-2 mt-2"
                        variant="outline-dark"
                        onClick={() => navigate("/login")}
                      >
                        Login / Register
                      </Button>
                    </>
                  )}
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
