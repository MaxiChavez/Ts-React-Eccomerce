import { useState, useEffect, ChangeEvent } from "react";
import { fetchCategorias } from "../../Common/Services/apicalls";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/categorySlice";
import { addSearch } from "../../redux/searchSlice";
import { cleanCart } from "../../redux/cartSlice";
import { estaLogueado, updateUser } from "../../redux/loginSlice";
import { loginData } from "../../redux/loginSlice";
import { IUserData } from "../Services/IUserInterface";
import { cartTotalQuantity } from "../../redux/cartSlice";
import { NavDropdown } from "react-bootstrap";

import "./Header.css";

interface Category {
  description: string;
}

const Header = () => {
  const cantidadTotalCarrito = useSelector(cartTotalQuantity);
  const location = useLocation();
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  // const [debouncedSearch] = useDebounce(search, 1000);
  const isLogged: boolean = useSelector(estaLogueado);

  const dispatch = useDispatch();

  const userLogRd: { user: IUserData } = useSelector(loginData);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    dispatch(addSearch({ search: searchTerm }));
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
  }, [location.pathname]);

  // useEffect(() => {
  //   const buscarProductos = async () => {
  //     try {
  //       dispatch(addSearch({ search: debouncedSearch }));
  //     } catch (error) {
  //       console.log("Error al buscar productos:", error);
  //     }
  //   };
  //   buscarProductos();
  // }, [debouncedSearch]);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand id="marca" onClick={() => navigate("/")}>
            ChicBoutique
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=" mb-2 mb-lg-0" navbarScroll>
              {userLogRd.user.rol !== "a" && location.pathname === "/" && (
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1 mt-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearchChange}
                  />
                </Form>
              )}

              {userLogRd.user.rol !== "a" && location.pathname === "/" && (
                <div className="d-flex align-items-center">
                  <NavDropdown title="Categories" id="Categories" align="start">
                    <NavDropdown.Item
                      onClick={() =>
                        handleCategoriaChange({
                          target: {
                            value: "0",
                          },
                        } as ChangeEvent<HTMLSelectElement>)
                      }
                    >
                      All categories
                    </NavDropdown.Item>
                    {categorias.map((categoria) => (
                      <NavDropdown.Item
                        key={categoria}
                        onClick={() =>
                          handleCategoriaChange({
                            target: { value: categoria },
                          } as ChangeEvent<HTMLSelectElement>)
                        }
                      >
                        {categoria}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </div>
              )}

              <NavDropdown
                title={
                  isLogged ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  )
                }
                id="cuentaDrop"
              >
                {isLogged ? (
                  <>
                    {userLogRd.user.rol === "u" ? (
                      <Link to="/user" className="dropdown-item">
                        Profile
                      </Link>
                    ) : null}
                    <Link
                      to="/"
                      onClick={() => {
                        dispatch(updateUser({ isLogged: false }));
                        dispatch(updateUser({ user: {} }));
                        dispatch(cleanCart());
                        navigate("/");
                      }}
                      className="dropdown-item"
                    >
                      Logout
                    </Link>
                    {isLogged && userLogRd.user.rol === "u" && (
                      <Link
                        to="/cart"
                        className={`dropdown-item ${
                          cantidadTotalCarrito === 0 ? "disabled" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart-fill ms-1"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fillRule="evenodd"
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zm5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                          />
                        </svg>
                        ( {cantidadTotalCarrito} )
                      </Link>
                    )}
                  </>
                ) : (
                  <Link to="/login" className="dropdown-item">
                    Login / Register
                  </Link>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
