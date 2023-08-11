import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export const ModalBoton = ({
  buttonText,
  deleteButtonText,
  modalText,
  buttonVariant,
  showDeleteButton = true,
  onCloseClick,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    if (onCloseClick) {
      onCloseClick();
    }
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={buttonVariant} onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {showDeleteButton && (
            <Button variant="danger" onClick={handleClose}>
              {deleteButtonText}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
