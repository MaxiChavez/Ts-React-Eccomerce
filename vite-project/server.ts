// import express from "express";
// import cors from "cors";
// import axios from "axios";

// const app = express();

// app.use(cors());
// app.use(express.json()); // Para parsear JSON en las solicitudes POST

// const backendUrl = "https://jsonapitemplate-2l15v6eoh-maxichavez.vercel.app"; // URL de tu backend

// app.get("/api/user", async (req, res) => {
//   const { email, password } = req.query;
//   const url = `${backendUrl}/users?email=${email}&password=${password}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching user data." });
//   }
// });

// app.post("/api/user", async (req, res) => {
//   const userData = req.body;
//   try {
//     const response = await axios.post(`${backendUrl}/users`, userData);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error adding user:", error);
//     res.status(500).json({ error: "An error occurred while adding user." });
//   }
// });

// app.get("/api/orders", async (req, res) => {
//   try {
//     const response = await axios.get(`${backendUrl}/orders`);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     res.status(500).json({ error: "An error occurred while fetching orders." });
//   }
// });

// app.post("/api/orders", async (req, res) => {
//   const orderData = req.body;
//   try {
//     const response = await axios.post(`${backendUrl}/orders`, orderData);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error adding order:", error);
//     res.status(500).json({ error: "An error occurred while adding order." });
//   }
// });

// app.patch("/api/orders/:orderId", async (req, res) => {
//   const orderId = req.params.orderId;
//   try {
//     const response = await axios.patch(`${backendUrl}/orders/${orderId}`, {
//       isProcessed: true,
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error updating order status:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating order status." });
//   }
// });

// // Otras rutas según las llamadas a la API que necesites

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
// });
