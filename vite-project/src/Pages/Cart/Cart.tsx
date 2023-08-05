// export const Cart = () => {
//   return (
//     <div className="h-screen  pt-20">
//       <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//       <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//         <div className="rounded-lg md:w-2/3">
//           {/* Cart item 1 */}
//           <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//             <img
//               src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//               alt="product-image"
//               className="w-full rounded-lg sm:w-40"
//             />
//             <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//               <div className="mt-5 sm:mt-0">
//                 <h2 className="text-lg font-bold text-gray-900">
//                   Nike Air Max 2019
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
//               </div>
//               <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                 <div className="flex items-center border-gray-100">
//                   <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                     {" "}
//                     -{" "}
//                   </span>
//                   <input
//                     className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                     type="number"
//                     value="2"
//                     min="1"
//                   />
//                   <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                     {" "}
//                     +{" "}
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <p className="text-sm">259.000 ₭</p>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Cart item 2 */}
//           <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//             <img
//               src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
//               alt="product-image"
//               className="w-full rounded-lg sm:w-40"
//             />
//             <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//               <div className="mt-5 sm:mt-0">
//                 <h2 className="text-lg font-bold text-gray-900">
//                   Nike Air Max 2019
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
//               </div>
//               <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                 <div className="flex items-center border-gray-100">
//                   <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                     {" "}
//                     -{" "}
//                   </span>
//                   <input
//                     className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                     type="number"
//                     value="2"
//                     min="1"
//                   />
//                   <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                     {" "}
//                     +{" "}
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <p className="text-sm">259.000 ₭</p>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sub total */}
//         <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//           <div className="mb-2 flex justify-between">
//             <p className="text-gray-700">Subtotal</p>
//             <p className="text-gray-700">$129.99</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="text-gray-700">Shipping</p>
//             <p className="text-gray-700">$4.99</p>
//           </div>
//           <hr className="my-4" />
//           <div className="flex justify-between">
//             <p className="text-lg font-bold">Total</p>
//             <div className="">
//               <p className="mb-1 text-lg font-bold">$134.98 USD</p>
//               <p className="text-sm text-gray-700">including VAT</p>
//             </div>
//           </div>
//           <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
//             Check out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

//////////////////
import "./Cart.css";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export const Cart = () => {
  const navigate = useNavigate();
  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Bag
                  </th>
                  <th scope="col">Format</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://i.imgur.com/2DsA49b.webp"
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Thinking, Fast and Slow</p>
                        <p className="mb-0">Daniel Kahneman</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      Digital
                    </p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        defaultValue={2}
                      />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $9.99
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://i.imgur.com/Oj1iQUX.webp"
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                          Homo Deus: A Brief History of Tomorrow
                        </p>
                        <p className="mb-0">Yuval Noah Harari</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      Paperback
                    </p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        defaultValue={1}
                      />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $13.50
                    </p>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
        {/* Tarjeta */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="4" xl="6">
            <MDBCard
              id="tarjeta"
              className="shadow-2-strong mb-5 mb-lg-4"
              style={{ borderRadius: "16px" }}
            >
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                    <form>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            checked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-mastercard fa-2x text-dark pe-2"
                            />
                            Credit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            checked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                            Debit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            checked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-paypal fa-2x text-dark pe-2"
                            />
                            PayPal
                          </p>
                        </div>
                      </div>
                    </form>
                  </MDBCol>
                  <MDBCol md="6" lg="4" xl="6">
                    <MDBRow>
                      <MDBCol size="12" xl="6">
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Name on card"
                          placeholder="John Smiths"
                          size="lg"
                        />
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Expiration"
                          placeholder="MM/YY"
                          size="lg"
                          maxLength={7}
                          minLength={7}
                        />
                      </MDBCol>
                      <MDBCol size="12" xl="6">
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Card Number"
                          placeholder="1111 2222 3333 4444"
                          size="lg"
                          minlength="19"
                          maxlength="19"
                        />
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          label="Cvv"
                          placeholder="&#9679;&#9679;&#9679;"
                          size="lg"
                          minlength="3"
                          maxlength="3"
                          type="password"
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol lg="4" xl="3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$23.49</p>
                    </div>

                    <div>
                      <MDBInput
                        label="Dirección de envío"
                        placeholder="Ingresa tu dirección"
                      />
                      <MDBInput
                        label="Código postal"
                        placeholder="Ingresa tu código postal"
                      />

                      <MDBBtn color="outline-dark">Finalizar Compra</MDBBtn>

                      <MDBBtn
                        color="outline-dark"
                        onClick={() => navigate("/")} // La función navigate debe estar definida correctamente
                      >
                        Volver
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
