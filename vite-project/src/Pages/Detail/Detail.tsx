import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailData } from "../../redux/detailSlice";
import { addToCart } from "../../redux/cartSlice";
import { loginData } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Detail.css";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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
    console.log(articuloACargar);
    dispatch(addToCart(articuloACargar));
    setShow(true);
  };

  if (!detailRdx) {
    return <div>Loading...</div>;
  }

  return (
    <div id="detailSection">
      <section id="todo">
        <div className="container">
          <div className="row">
            {/* Art */}
            <div className="col-lg-6">
              <img
                src={detailRdx.image}
                alt="Imagen"
                className="img-fluid"
                id="imagenDetalle"
              />
            </div>

            {/* Detalle */}
            <div className="col-lg-6 mt-2">
              <h2>{detailRdx.title}</h2>
              <p>{detailRdx.description}</p>
              <p>{detailRdx.category}</p>
              <p>{detailRdx.price}</p>

              <div className="row d-flex justify-content-between flex-wrap">
                <div className="col-lg-6 mb-2">
                  <Button variant="secondary" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thanks!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Item added to cart</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="col-lg-6">
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
        </div>
      </section>
    </div>
  );
};

export default Detail;
