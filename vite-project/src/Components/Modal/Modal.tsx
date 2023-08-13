import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { updateOrderProcessedStatus } from "../../Common/Services/OrderService";

interface ModalBotonProps {
  buttonText: string;
  processButtonText: string;
  modalText: string;
  buttonVariant: string;
  showDeleteButton?: boolean;
  onCloseClick?: () => void;
  orderId: number;
  isProcessed?: boolean;
}

export function ModalBoton({
  buttonText,
  processButtonText,
  modalText,
  buttonVariant,
  showDeleteButton = true,
  onCloseClick,
  orderId,
  isProcessed = false,
}: ModalBotonProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    if (onCloseClick) {
      onCloseClick();
    }
  };

  const handleShow = () => setShow(true);
  const handleProccess = async (orderId: number) => {
    console.log(orderId);
    try {
      await updateOrderProcessedStatus(orderId);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error processing order:", error);
    }
  };

  return (
    <>
      <Button variant={buttonVariant} onClick={handleShow}>
        {isProcessed ? "Order Processed" : buttonText}
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
          {showDeleteButton && processButtonText !== "" && (
            <Button
              variant="primary"
              onClick={() => handleProccess(orderId)}
              disabled={isProcessed}
            >
              {processButtonText}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBoton;
