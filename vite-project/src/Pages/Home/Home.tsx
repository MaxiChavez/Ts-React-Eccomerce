import { useState, useEffect } from "react";
import { fetchProducts } from "../../Common/Services/apicalls";
import CartaProducto from "../../Components/Carta/Carta";
import "./Home.css";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

const Home = () => {
  //variables de estado
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    const traerLosProductos = async () => {
      try {
        const data: Product[] = await fetchProducts();
        setProductos(data);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
    traerLosProductos();
  }, []);

  return (
    <div className="card-section">
      {productos.map((producto: Product) => (
        <CartaProducto
          key={producto.id}
          title={producto.title}
          // description={producto.description}
          price={`Price: $ ${producto.price}`}
          image={producto.image}
        />
      ))}
    </div>
  );
};

export default Home;
