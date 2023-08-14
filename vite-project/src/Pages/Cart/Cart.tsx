import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartTotalQuantity,
  cartTotalPrice,
  cart,
  cleanCart,
} from "../../redux/cartSlice";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import {
  cartData,
  updateProductAmount,
  removeProduct,
} from "../../redux/cartSlice";

import { registerOrder } from "../../Common/Services/OrderService";
import { userData } from "../../redux/loginSlice";
import { ModalBoton } from "../../Components/Modal/Modal";

export const Cart = () => {
  const cantidadTotalCarrito = useSelector(cartTotalQuantity);
  const montoTotalCarrito = useSelector(cartTotalPrice);
  const cartArticlesRdx = useSelector(cartData);
  const cartRdx = useSelector(cart);
  const userRdx = useSelector(userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (idProduct: string, value: number) => {
    dispatch(updateProductAmount({ id: idProduct, newAmount: value }));
  };

  const removeElement = (idProduct: string) => {
    console.log(idProduct);
    dispatch(removeProduct(idProduct));
  };

  const generateOrder = () => {
    registerOrder(cartRdx, userRdx);
    dispatch(cleanCart());
  };

  return (
    <section id="cart-section" className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        {/* ARTICULOS */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Bag
                  </th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartArticlesRdx.map((item) => (
                  <>
                    <tr key={item.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            className="rounded-3"
                            style={{ width: "120px" }}
                            alt="Book"
                          />
                          <div className="flex-column ms-4">
                            <p className="mb-2">{item.title}</p>
                            <button
                              className="eliminarYseguir"
                              onClick={() => removeElement(item.id)}
                            >
                              Delete
                            </button>
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
                          <MDBBtn className="px-2" color="link">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
                          <MDBInput
                            min={1}
                            type="number"
                            size="sm"
                            style={{ width: "50px" }}
                            defaultValue={item.amount}
                            onChange={(e) =>
                              handleInputChange(item.id, e.target.value)
                            }
                          />
                          <MDBBtn className="px-2" color="link">
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
                    <tr></tr>
                  </>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
        {/* PAGO */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5"></th>
                  <th scope="col">TOTAL PRICE</th>
                  <th scope="col">NUMBER OF ARTICLES</th>
                  <th scope="col" />
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="flex-column ms-4"></div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      ${montoTotalCarrito}
                    </p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        {cantidadTotalCarrito}
                      </p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <ModalBoton
                      buttonText="Finish buy"
                      deleteButtonText="Remove"
                      modalText="Thanks you for your purchase!"
                      buttonVariant="secondary"
                      showDeleteButton={false}
                      onCloseClick={() => {
                        generateOrder();
                        navigate("/");

                        console.log("boton cerrar modal");
                      }}
                    />
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
