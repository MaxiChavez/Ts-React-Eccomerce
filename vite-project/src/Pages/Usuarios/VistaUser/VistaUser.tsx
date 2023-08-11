// import "./VistaUser.css";

// export const VistaUser = () => {
//   return (
//     <div id="userDiv" className="col-md-5 border-right">
//       <div className="p-3 py-5 userDiv">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4 className="text-right">Profile Settings</h4>
//         </div>
//         <div className="row mt-2">
//           <div className="col-md-6">
//             <label className="labels">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="first name"
//               value=""
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="labels">Surname</label>
//             <input
//               type="text"
//               className="form-control"
//               value=""
//               placeholder="surname"
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <label className="labels">Mobile Number</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter phone number"
//               value=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Address Line 1</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address line 1"
//               value=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Address Line 2</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address line 2"
//               value=""
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <label className="labels">Postcode</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address line 2"
//               value=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">State</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address line 2"
//               value=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Area</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address line 2"
//               value=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Email ID</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter email id"
//               value=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Education</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="education"
//               value=""
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-6">
//             <label className="labels">Country</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="country"
//               value=""
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="labels">State/Region</label>
//             <input
//               type="text"
//               className="form-control"
//               value=""
//               placeholder="state"
//             />
//           </div>
//         </div>
//         <div className="mt-5 text-center">
//           <button className="btn btn-primary profile-button" type="button">
//             Save Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

//
//////////////////////
// import "./VistaUser.css";

// export const VistaUser = () => {
//   return (
//     <div id="userDiv" className="col-md-5 border-right">
//       <div className="p-3 py-5 userDiv">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4 className="text-right">Profile Settings</h4>
//         </div>
//         <div className="user-info">
//           <div className="user-info-item">
//             <label className="labels">Name:</label>
//             <div>user.firstName</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Surname:</label>
//             <div>user.surname</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Mobile Number:</label>
//             <div>user.mobileNumber</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Address Line 1:</label>
//             <div>user.addressLine1</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Address Line 2:</label>
//             <div>user.addressLine2</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Postcode:</label>
//             <div>user.postcode</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">State:</label>
//             <div>user.state</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Area:</label>
//             <div>user.area</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Email ID:</label>
//             <div>user.emailID</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Education:</label>
//             <div>user.education</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">Country:</label>
//             <div>user.country</div>
//           </div>
//           <div className="user-info-item">
//             <label className="labels">State/Region:</label>
//             <div>user.stateRegion</div>
//           </div>
//         </div>
//         <div className="mt-5 text-center">
//           <button className="btn btn-primary profile-button" type="button">
//             Save Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//////////////////////

import "./VistaUser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { IUserData } from "../../../Common/Services/IUserInterface";
import { userData } from "../../../redux/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { cart } from "../../../redux/cartSlice";
import {
  ICartState,
  IProductoCarrito,
} from "../../../Common/Interfaces/Productos";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//rdx

export const VistaUser = () => {
  const navigate = useNavigate();
  const userRdx = useSelector(userData);
  const cartRdx = useSelector(cart);
  console.log("soy cartRDX de vista user ", cartRdx);

  console.log("userdata de vistaUSer:", userRdx);

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="userDiv" className="col-md-5 border-right ">
      <div className="p-3 py-5 userDiv">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="user-info">
          <div className="user-info-item">
            <label className="labels white-text">Name:</label>
            <div className="white-bg">{userRdx.name}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Email:</label>
            <div className="white-bg">{userRdx.email}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Mobile Number:</label>
            <div className="white-bg">{userRdx.phone}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Address city:</label>
            <div className="white-bg">{userRdx.address.city}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Address street:</label>
            <div className="white-bg">{userRdx.address.street}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Address number:</label>
            <div className="white-bg">{userRdx.address.number}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">Postcode:</label>
            <div className="white-bg">{userRdx.address.zipcode}</div>
          </div>
          <div className="user-info-item">
            <label className="labels white-text">id:</label>
            <div className="white-bg">{userRdx.id}</div>
          </div>
        </div>
        <div className="mt-5 text-center m-1 ">
          {/* <button
            className="btn btn-outline-dark profile-button mr-4"
            type="button"
          >
            Edit Profile
          </button> */}
          {/* <ModalBoton
            buttonText="View order (Admin)"
            modalText={`Articles: ${cartRdx.items
              .map((item) => item.title)
              .join(", ")} |||||   Price: ${cartRdx.montoTotal}`}
            buttonVariant="dark"
          /> */}
          <Button variant="outline-dark" onClick={handleShow}>
            Purchase
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thanks you, for your purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                Articles: {cartRdx.items.map((item) => item.title).join(", ")}
                <br />
                Total: {cartRdx.montoTotal}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <button
            className="btn btn-outline-dark profile-button "
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
