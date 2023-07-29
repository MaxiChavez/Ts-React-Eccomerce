import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Common/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
