import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import BasketProvider from "./components/Provider/BasketProvider/BasketHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

// export const BasketContext = createContext();

root.render(
  <BrowserRouter>
    <BasketProvider>
      <App />
    </BasketProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
