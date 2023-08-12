import "./VistaAdmin.css";
import Table from "react-bootstrap/Table";
import { ModalBoton } from "../../../Components/Modal/Modal";
import { useEffect, useState } from "react";
import { getOrders } from "../../../Common/Services/OrderService";
import { loginData } from "../../../redux/loginSlice";
import { useSelector } from "react-redux";
import { IUserData } from "../../../Common/Services/IUserInterface";

export const VistaAdmin = () => {

  const userLogRd: { user: IUserData } = useSelector(loginData);
  const [orders, setOrders] = useState([]);

  const fetchOrdersAdmin = async () => {
    try {
      const ordersData = await getOrders();
      setOrders(ordersData);
      console.log("son las ordenes de amind???:", ordersData);
    } catch (error) {
      console.log("erorr:", error);
    }
  };

  useEffect(() => {
    fetchOrdersAdmin();
  }, []);

  return (
    <div>
      <Table id="tablaAdmin" striped bordered hover>
        <thead>
          <tr>
            <th>Hi, {userLogRd.user.name}</th>
            <th>Customer name</th>
            <th>id</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>Order: {order.id}</td>
              <td>{order.user.name}</td>
              <td>{order.id}</td>


              <td>
                <ModalBoton
                  buttonText="View order"
                  processButtonText="Process Order"
                  orderId={order.id}
                  modalText={
                    <div>
                      {order.cart.items.length > 0 && (
                        <div>
                          Items:<br />
                          {order.cart.items.map((item, index) => (
                            <span key={index}>
                              ({item.amount}) {item.title}<br />
                            </span>
                          ))}
                        </div>
                      )}<br />
                      {order.user && (
                        <div>Address: <br />
                          City:{order.user.address.city}<br />
                          Street:{order.user.address.street}<br />
                          number:{order.user.address.number}<br />
                          Zipcode: {order.user.address.zipcode}<br />

                        </div>
                      )}
                      {order.cart.montoTotal && (

                        <div><br />Total: {order.cart.montoTotal}</div>
                      )}
                    </div>
                  }
                  buttonVariant={order.isProcessed ? "success" : "primary"}
                  isProcessed={order.isProcessed}
                  onCloseClick={() => { }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
