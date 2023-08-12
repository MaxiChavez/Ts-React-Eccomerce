import "./VistaUser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { userData } from "../../../redux/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getOrders } from "../../../Common/Services/OrderService";
import { IOrder } from "../../../Common/Interfaces/Ordenes";

//rdx

export const VistaUser = () => {
  const navigate = useNavigate();
  const userRdx = useSelector(userData);
  const loggedUserId = userRdx.id;

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const ordersData = await getOrders();
      setOrders(ordersData);
    } catch (error) {
      console.log("erorr:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  console.log(orders)
  return (
    <div id="userDiv" className="mx-auto border-right ">
      <div className="p-3 py-5 userDiv">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile</h4>
        </div>
        <div className="user-info">
          <div className="user-info-item">
            <label className="labels white-text">Name:</label>
            <div className="white-bg">{userRdx.name}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Email:</label>
            <div className="white-bg">{userRdx.email}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Mobile Number:</label>
            <div className="white-bg">{userRdx.phone}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Address city:</label>
            <div className="white-bg">{userRdx.address.city}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Address street:</label>
            <div className="white-bg">{userRdx.address.street}</div>
          </div>
          {/* <div className="user-info-item">
            <label className="labels white-text">Address number:</label>
            <div className="white-bg">{userRdx.address.number}</div>
          </div> */}
          <div className="user-info-item">
            <label className="labels white-text">Postcode:</label>
            <div className="white-bg">{userRdx.address.zipcode}</div>
          </div>
        </div>
        <div className="mt-5 text-center m-1 ">
          <Button variant="outline-dark" onClick={handleShow}>
            View my orders
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{orders.filter((order: IOrder) => order.user.id === loggedUserId).length > 0 ? "Thanks you, for your purchase:" : "No orders yet"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>{orders.filter((order: IOrder) => order.user.id === loggedUserId).length > 0 ? "Your orders:" : "😔"}</p>
                <ul>
                  {orders
                    .filter((order: IOrder) => order.user.id === loggedUserId)
                    .map((order, i) => (
                      <div key={i}>
                        <li>
                          Order ID: {order.id}
                          <br />
                          Order Articles:{" "}
                          {order.cart.items
                            .map((item) => item.title)
                            .join(", ")}
                          <br />
                          Total: €{order.cart.montoTotal}
                          <br />
                          <span
                            style={{
                              color: order.isProcessed ? "green" : "red"
                            }}>
                            Status: {order.isProcessed ? "Processed" : "Not Processed"}
                          </span>
                        </li>
                        <br />
                      </div>
                    ))}
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <button
            className="btn btn-outline-dark profile-button "
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
