import { useState, useEffect } from "react";
import { fetchProducts } from "../../Common/Services/apicalls";
import { useSelector } from "react-redux";
import CartaProducto from "../../Components/Carta/Carta";
import { categoryData } from "../../redux/categorySlice";
import "./Home.css";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

interface Category {
  description: string;
}

const Home = () => {
  //Traigo la información de la búsqueda desde el estado de Redux
  const categoryRdx: Category = useSelector(categoryData);

  //variables de estado
  const [productos, setProductos] = useState<Product[]>([]);
  const productosFiltrados =
    categoryRdx.description === "0" || categoryRdx.description === undefined
      ? productos
      : productos.filter(
          (producto) => producto.category === categoryRdx.description
        );

  useEffect(() => {
    const traerLosProductos = async () => {
      try {
        let data: Product[] = await fetchProducts();
        setProductos(data);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
    traerLosProductos();
  }, []);

  return (
    <div>
      <div className="card-section">
        {productosFiltrados.map((producto: Product) => (
          <CartaProducto
            key={producto.id}
            title={producto.title}
            id={producto.id}
            category={producto.category}
            description={producto.description}
            price={`Price: $ ${producto.price}`}
            image={producto.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
