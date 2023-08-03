import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { detailData } from "../../redux/detailSlice";
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

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.primaryColor,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const Detail = () => {
  const detailRdx: DetailArticle = useSelector(detailData);
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
              <List.Item> Category: {detailRdx.article.category}</List.Item>
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
              >
                Add to Cart
              </Button>
            </Group>
          </div>
          <Image src={detailRdx.article.image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
};

export default Detail;
