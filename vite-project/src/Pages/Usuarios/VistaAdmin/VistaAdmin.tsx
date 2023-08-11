import Table from "react-bootstrap/Table";
import { ModalBoton } from "../../../Components/Modal/Modal";
import { useEffect, useState } from "react";
import { getOrders } from "../../../Common/Services/OrderService";

export const VistaAdmin = () => {
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
            <th>Hi, Pepe !</th>
            <th>Name</th>
            <th>id</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>Order:</td>
              <td>{order.user.name}</td>
              <td>{order.id}</td>

              <td>
                <ModalBoton
                  buttonText="View order (Admin)"
                  deleteButtonText="Delete Order"
                  modalText={
                    <div>
                      <div>
                        Items:{" "}
                        {order.cart.items
                          .map((item) => `(${item.amount}) ${item.title}`)
                          .join(", ")}
                      </div>
                      <div>Total: {order.cart.montoTotal}</div>
                    </div>
                  }
                  buttonVariant="primary"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
