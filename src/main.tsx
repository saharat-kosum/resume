import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RefContextProvider from "./context/refContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RefContextProvider>
      <App />
    </RefContextProvider>
  </React.StrictMode>
);
