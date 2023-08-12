// import "./Detail.css";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { detailData } from "../../redux/detailSlice";
// import { addToCart } from "../../redux/cartSlice";
// import { loginData } from "../../redux/loginSlice";

// //mantine
// import {
//   Container,
//   Image,
//   Title,
//   Text,
//   List,
//   Button,
//   Group,
// } from "@mantine/core";
// import useStyles from "./detailStyles";

// interface Article {
//   id: string;
//   title: string;
//   price: string;
//   description: string;
//   image: string;
//   category: string;
// }
// interface ProductoCarrito {
//   id: string;
//   title: string;
//   price: string;
//   description: string;
//   image: string;
//   category: string;
//   amount: number;
// }

// //////////////solucionar img en moviles ////////////////////

// const Detail = () => {
//   const isLogged = useSelector(loginData).isLogged;

//   // Hooks
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const detailRdx: Article = useSelector(detailData).article;

//   // Estilos que llevé a ts
//   const { classes } = useStyles();

//   // Handler para agregar al carrito
//   const addToCartHandler = () => {
//     // if (!isLogged) {
//     //   navigate("/login");
//     //   return;
//     // }
//     !isLogged && navigate("/login");
//     //probando el ternario

//     const articuloACargar: ProductoCarrito = {
//       ...detailRdx,
//       amount: 1,
//     };
//     dispatch(addToCart(articuloACargar));
//   };

//   // Si no hay datos de detalle, mostrar mensaje de carga
//   if (!detailRdx) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div>
//         <Image
//           id="imagenDetalle"
//           src={detailRdx.image}
//           alt={detailRdx.title}
//           className={classes.image}
//         />
//       </div>
//       <Container>
//         <div className={classes.inner}>
//           <div className={classes.content}>
//             <Title className={classes.title}>{detailRdx.title}</Title>
//             <Text color="dimmed" mt="md"></Text>
//             <Text mt="md"></Text>

//             <List mt={30} spacing="sm" size="sm">
//               <List.Item>{detailRdx.description}</List.Item>
//               <List.Item>Category: {detailRdx.category}</List.Item>
//               <List.Item> {detailRdx.price}</List.Item>
//             </List>

//             <Group mt={30}>
//               <Button
//                 color="dark"
//                 radius="xl"
//                 size="md"
//                 className={classes.control}
//                 onClick={() => navigate("/")}
//               >
//                 Home
//               </Button>
//               <Button
//                 variant="default"
//                 radius="xl"
//                 size="md"
//                 className={classes.control}
//                 onClick={addToCartHandler}
//               >
//                 Add to Cart
//               </Button>
//             </Group>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Detail;

///////////////

import "./Detail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { detailData } from "../../redux/detailSlice";
import { addToCart } from "../../redux/cartSlice";
import { loginData } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";

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

const Detail = () => {
  const isLogged = useSelector(loginData).isLogged;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailRdx: Article = useSelector(detailData).article;

  const addToCartHandler = () => {
    if (!isLogged) {
      navigate("/login");
      return;
    }

    const articuloACargar: ProductoCarrito = {
      ...detailRdx,
      amount: 1,
    };
    dispatch(addToCart(articuloACargar));
  };

  if (!detailRdx) {
    return <div>Loading...</div>;
  }

  return (
    <section id="todo">
      <div id="granContainer" className="container text-center my-5">
        <h1>Details</h1>
      </div>

      <div className="container">
        <div className="row">
          {/* Art */}
          <div className="col-lg-8">
            <img
              src={detailRdx.image}
              alt="Imagen"
              className="img-fluid"
              id="imagenDetalle"
            />
          </div>

          {/* Detalles */}
          <div className="col-lg-4">
            <h2>{detailRdx.title}</h2>
            <p>{detailRdx.description}</p>
            <p>{detailRdx.category}</p>
            <p>{detailRdx.price}</p>

            <div className="d-grid gap-2">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate("/")}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
