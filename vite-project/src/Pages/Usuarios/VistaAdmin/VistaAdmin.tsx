import Table from "react-bootstrap/Table";
import { ModalBoton } from "./modal";

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
              <ModalBoton />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
