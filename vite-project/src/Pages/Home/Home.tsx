import { useState, useEffect, ChangeEvent } from "react";
import { fetchCategorias, fetchProducts } from "../../Common/Services/apicalls";
import CartaProducto from "../../Components/Carta/Carta";
import CartaM from "../../Components/CartaM/CartaM";
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
  const [productosBuscados, setProductosBuscados] = useState("");

  //handlers
  const handleCategoriaChange = (event: ChangeEvent<HTMLElement>) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const handleBusquedaChange = (event: ChangeEvent<HTMLElement>) => {
    setProductosBuscados(event.target.value);
  };

  //

  const productosFiltrados =
    categoriaSeleccionada === "0"
      ? productos
      : productos.filter(
          (producto) => producto.category === categoriaSeleccionada
        );

  const productosFiltradosYbuscados =
    categoriaSeleccionada === "0" && productosBuscados === ""
      ? productos
      : productosFiltrados.filter((producto) =>
          producto.title.includes(productosBuscados)
        );
  console.log("busquedaaaa", productosFiltradosYbuscados);

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
      <div className="d-flex justify-content-center align-items-center mb-3">
        {/* Form.Select */}
        <Form.Select
          id="selectCategories"
          aria-label="Default select example"
          defaultValue={"0"}
          onChange={handleCategoriaChange}
        >
          <option value="0" disabled>
            Categories
          </option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </Form.Select>

        {/* Form.Control */}
        <Form.Control
          id="search"
          type="text"
          placeholder="Search product"
          value={productosBuscados}
          onChange={handleBusquedaChange}
        />
      </div>

      <div className="card-section">
        {productosFiltradosYbuscados.map((producto: Product) => (
          <CartaProducto
            key={producto.id}
            title={producto.title}
            id={producto.id}
            category={producto.category.toUpperCase()}
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
