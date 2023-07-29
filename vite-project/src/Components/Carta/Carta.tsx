import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Carta.css";

interface CardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

function CartaProducto(productos: CardProps) {
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
        <Button variant="outline-dark ">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;
