import "./Footer.css";

const Footer = () => {
  const isCartView = location.pathname === "/cart";

  if (isCartView) {
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
