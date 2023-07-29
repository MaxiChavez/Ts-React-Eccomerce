import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "./index.css";

//Rdx a la aplicacion
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import { Provider } from "react-redux";
// import store from "./redux/store.ts";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <MantineProvider>
      <App />
    </MantineProvider>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
