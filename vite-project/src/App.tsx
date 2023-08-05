import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Common/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Login } from "./Pages/Login/Login";
import Detail from "./Pages/Detail/Detail";
import { Cart } from "./Pages/Cart/Cart";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
