import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Carta.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDetail } from "../../redux/detailSlice";

interface CardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

function CartaProducto(producto: CardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateDetail = (producto: CardProps) => {
    dispatch(addDetail({ article: producto }));
    console.log(producto);
    navigate("/detail");
  };
  return (
    <Card
      className="shadow border rounded-5 text-center hover justify-content-center"
      style={{ width: "15rem" }}
    >
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>

        <Button variant="outline-dark" onClick={() => navigateDetail(producto)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;
