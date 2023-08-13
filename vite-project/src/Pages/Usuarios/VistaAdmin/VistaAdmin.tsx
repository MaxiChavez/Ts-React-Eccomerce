import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ModalBoton } from "../../../Components/Modal/Modal";
import { getOrders } from "../../../Common/Services/OrderService";
import { loginData } from "../../../redux/loginSlice";
import { useSelector } from "react-redux";
import { IUserData } from "../../../Common/Services/IUserInterface";
import "./VistaAdmin.css";

export const VistaAdmin = () => {
  const userLogRd = useSelector(loginData) as { user: IUserData };
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrdersAdmin = async () => {
    try {
      const ordersData = await getOrders();
      setOrders(ordersData);
      console.log("son las ordenes de admin:", ordersData);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchOrdersAdmin();
  }, []);

  return (
    <div id="containerAdmin">
      <Table id="tablaAdmin" striped bordered hover>
        <thead>
          <tr>
            <th>Hi, {userLogRd.user?.name}</th>
            <th>Customer name</th>
            <th>id</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>Order: {order.id}</td>
              <td>{order.user?.name}</td>
              <td>{order.id}</td>
              <td>
                <ModalBoton
                  buttonText="View order"
                  processButtonText="Process Order"
                  orderId={order.id}
                  modalText={`
                    ${
                      order.cart.items.length > 0
                        ? `Items:\n${order.cart.items
                            .map(
                              (item: any) => `(${item.amount}) ${item.title}\n`
                            )
                            .join("")}`
                        : ""
                    }
                    
                    ${
                      order.user && order.user.address
                        ? `Address:\nCity: ${
                            order.user.address.city || "Unknown"
                          }\nStreet: ${
                            order.user.address.street || "Unknown"
                          }\nnumber: ${
                            order.user.address.number || "Unknown"
                          }\nZipcode: ${
                            order.user.address.zipcode || "Unknown"
                          }\n`
                        : ""
                    }
                    
                    ${
                      order.cart.montoTotal
                        ? `\nTotal: ${order.cart.montoTotal}`
                        : ""
                    }
                    `}
                  buttonVariant={order.isProcessed ? "success" : "primary"}
                  isProcessed={order.isProcessed}
                  onCloseClick={() => {}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
