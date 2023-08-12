import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const cartView = location.pathname === "/cart";
  const adminView = location.pathname === "/admin";

  if (cartView || adminView) {
    return null;
  } else
    return (
      <footer id="footer" className="footer-container">
        {/* <div className="container-fluid"> */}

        <div className="container">
          <div className="content">Desarrollado por: Maxi Chavez - 2023</div>
        </div>
      </footer>
    );
};

export default Footer;
