import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailData } from "../../redux/detailSlice";
import { cartData } from "../../redux/cartSlice";
import { addToCart } from "../../redux/cartSlice";

import {
  createStyles,
  Container,
  Image,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
  Button,
  Group,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface DetailArticle {
  article: Article;
}

interface Article {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: "100%",
    height: "auto",

    [theme.fn.smallerThan("md")]: {
      display: "block",
      margin: "0 auto",
      maxWidth: "80%",
    },
  },
}));
//////////////solucionar img en moviles ////////////////////

const Detail = () => {
  //conecto a rdx en modo lectura
  const detailRdx: DetailArticle = useSelector(detailData);
  const cart = useSelector(cartData);
  //conecto a rdx en modo escritura
  const dispatch = useDispatch();
  //handler para el carrito
  const addToCartHandler = () => {
    dispatch(addToCart(detailRdx.article));
    console.log("se agrego el art al carrito:", detailRdx.article);
  };

  const navigate = useNavigate();

  const { classes } = useStyles();

  if (!detailRdx) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{detailRdx.article.title}</Title>
            <Text color="dimmed" mt="md"></Text>
            <Text mt="md"></Text>

            <List mt={30} spacing="sm" size="sm">
              <List.Item>{detailRdx.article.description}</List.Item>
              <List.Item>Category: {detailRdx.article.category}</List.Item>
              <List.Item>Price: {detailRdx.article.price}</List.Item>
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
            src={detailRdx.article.image}
            alt={detailRdx.article.title}
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
};

export default Detail;
