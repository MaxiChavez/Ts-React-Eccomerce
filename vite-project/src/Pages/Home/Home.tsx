import { useState, useEffect, ChangeEvent } from "react";
import { fetchCategorias, fetchProducts } from "../../Common/Services/apicalls";
import CartaProducto from "../../Components/Carta/Carta";
import Form from "react-bootstrap/Form";
import "./Home.css";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

const Home = () => {
  //variables de estado
  const [productos, setProductos] = useState<Product[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("0");
  //handler
  const handleCategoriaChange = (event: ChangeEvent<HTMLElement>) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const productosFiltrados =
    categoriaSeleccionada === "0"
      ? productos
      : productos.filter(
          (producto) => producto.category === categoriaSeleccionada
        );

  useEffect(() => {
    const traerLosProductos = async () => {
      try {
        const data: Product[] = await fetchProducts();
        const categories: string[] = await fetchCategorias();
        setProductos(data);
        setCategorias(categories);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
    traerLosProductos();
  }, []);

  return (
    <div>
      <Form.Select
        aria-label="Default select example"
        defaultValue={"0"}
        onChange={handleCategoriaChange}
      >
        <option value="0" disabled>
          categories
        </option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </Form.Select>

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
