import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Common/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Login } from "./Pages/Login/Login";
import Detail from "./Pages/Detail/Detail";
import { Cart } from "./Pages/Cart/Cart";
import Footer from "./Common/Footer/Footer";
import { VistaUser } from "./Pages/Usuarios/VistaUser/VistaUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="detail" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<VistaUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
