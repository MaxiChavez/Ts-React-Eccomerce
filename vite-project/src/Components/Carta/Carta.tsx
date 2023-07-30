import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Carta.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

function CartaProducto(productos: CardProps) {
  const navigate = useNavigate();
  return (
    <Card
      className="shadow border rounded-5 text-center hover"
      style={{ width: "15rem" }}
    >
      <Card.Img variant="top" src={productos.image} />
      <Card.Body>
        <Card.Title>{productos.title}</Card.Title>
        <Card.Text>
          <ul id={productos.id}>
            <p>{productos.description}</p>
            <p>{productos.price}</p>
          </ul>
        </Card.Text>
        <Button variant="outline-dark" onClick={() => navigate("/detail")}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;
