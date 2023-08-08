import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../redux/loginSlice";
import {
  cartData,
  addToCart,
  removeToCart,
  cartTotalQuantity,
} from "../../redux/cartSlice";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

interface ProductoCarrito {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  amount: number;
}

export const Cart = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(loginData).isLogged;
  const cartItems = useSelector(cartData).items;
  const cartQuantity = useSelector(cartTotalQuantity);

  const addToCartHandler = () => {
    const articuloACargar: ProductoCarrito = {
      ...detailRdx,
      amount: 1,
    };
    dispatch(addToCart(articuloACargar));
  };
  const removeToCartHandler = () => {
    const articuloACargar: ProductoCarrito = {
      ...detailRdx,
      amount: 1,
    };
    dispatch(removeToCart(articuloACargar));
  };

  const navigate = useNavigate();
  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Bag
                  </th>
                  <th scope="col">Format</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartItems.map((item) => (
                  <div id={item.id}>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            fluid
                            className="rounded-3"
                            style={{ width: "120px" }}
                            alt="Book"
                          />
                          <div className="flex-column ms-4">
                            <p className="mb-2">{item.title}</p>
                            <p className="mb-0">{item.description}</p>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle">
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {item.category}
                        </p>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex flex-row align-items-center">
                          <MDBBtn
                            className="px-2"
                            color="link"
                            onClick={removeToCartHandler}
                          >
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          <MDBInput
                            min={0}
                            type="number"
                            size="sm"
                            style={{ width: "50px" }}
                            defaultValue={item.amount}
                          />

                          <MDBBtn
                            className="px-2"
                            color="link"
                            onClick={removeToCartHandler}
                          >
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {item.price}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <div className="d-flex flex-row align-items-center">
                          <MDBBtn
                            className="px-2"
                            color="link"
                            onClick={removeToCartHandler}
                          >
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          <MDBBtn
                            className="px-2"
                            color="link"
                            onClick={addToCartHandler}
                          >
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>
                      </td>
                    </tr>
                  </div>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
        {/* Tarjeta */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="4" xl="6">
            <MDBCard
              id="tarjeta"
              className="shadow-2-strong mb-5 mb-lg-4"
              style={{ borderRadius: "16px" }}
            >
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                    <form>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            checked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-mastercard fa-2x text-dark pe-2"
                            />
                            Credit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            checked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                            Debit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            checked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-paypal fa-2x text-dark pe-2"
                            />
                            PayPal
                          </p>
                        </div>
                      </div>
                    </form>
                  </MDBCol>
                  <MDBCol md="6" lg="4" xl="6">
                    <MDBRow>
                      <MDBCol size="12" xl="6">
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Name on card"
                          placeholder="John Smiths"
                          size="lg"
                        />
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Expiration"
                          placeholder="MM/YY"
                          size="lg"
                          maxLength={7}
                          minLength={7}
                        />
                      </MDBCol>
                      <MDBCol size="12" xl="6">
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Card Number"
                          placeholder="1111 2222 3333 4444"
                          size="lg"
                          minlength="19"
                          maxlength="19"
                        />
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Cvv"
                          placeholder="&#9679;&#9679;&#9679;"
                          size="lg"
                          minlength="3"
                          maxlength="3"
                          type="password"
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol lg="4" xl="3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$23.49</p>
                    </div>

                    <div>
                      <MDBInput
                        label="Dirección de envío"
                        placeholder="Ingresa tu dirección"
                      />
                      <MDBInput
                        label="Código postal"
                        placeholder="Ingresa tu código postal"
                      />

                      <MDBBtn color="outline-dark">Finalizar Compra</MDBBtn>

                      <MDBBtn
                        color="outline-dark"
                        onClick={() => navigate("/")}
                      >
                        Volver
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
