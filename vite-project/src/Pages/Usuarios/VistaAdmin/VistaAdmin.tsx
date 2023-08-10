import Table from "react-bootstrap/Table";
import { ModalBoton } from "../../../Components/Modal/Modal";
export const VistaAdmin = () => {
  return (
    <div>
      <Table id="tablaAdmin" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>id</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <ModalBoton
                buttonText="View order (Admin)"
                deleteButtonText="Delete Order"
                modalText="27 remeras 3 reljos (Admin)"
                buttonVariant="primary"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
