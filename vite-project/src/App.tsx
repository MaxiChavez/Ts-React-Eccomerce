import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Common/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
