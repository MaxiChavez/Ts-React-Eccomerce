import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailData } from "../../redux/detailSlice";
import { addToCart } from "../../redux/cartSlice";
import { loginData } from "../../redux/loginSlice";

//mantine
import {
  Container,
  Image,
  Title,
  Text,
  List,
  Button,
  Group,
} from "@mantine/core";
import useStyles from "./detailStyles";

interface Article {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}
interface ProductoCarrito {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  amount: number;
}

//////////////solucionar img en moviles ////////////////////

const Detail = () => {
  const isLogged = useSelector(loginData).isLogged;

  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailRdx: Article = useSelector(detailData).article;

  // Estilos que llevé a ts
  const { classes } = useStyles();

  // Handler para agregar al carrito
  const addToCartHandler = () => {
    // if (!isLogged) {
    //   navigate("/login");
    //   return;
    // }
    !isLogged && navigate("/login");
    //probando el ternario

    const articuloACargar: ProductoCarrito = {
      ...detailRdx,
      amount: 1,
    };
    dispatch(addToCart(articuloACargar));
  };

  // Si no hay datos de detalle, mostrar mensaje de carga
  if (!detailRdx) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{detailRdx.title}</Title>
            <Text color="dimmed" mt="md"></Text>
            <Text mt="md"></Text>

            <List mt={30} spacing="sm" size="sm">
              <List.Item>{detailRdx.description}</List.Item>
              <List.Item>Category: {detailRdx.category}</List.Item>
              <List.Item>Price: {detailRdx.price}</List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => navigate("/")}
              >
                Volver
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                onClick={addToCartHandler}
              >
                Add to Cart
              </Button>
            </Group>
          </div>
          <Image
            id="imagenDetalle"
            src={detailRdx.image}
            alt={detailRdx.title}
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
};

export default Detail;
