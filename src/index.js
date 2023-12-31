import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// SCSS
import "../src/assets/scss/index.scss";
// Animation CSS
import "animate.css";
// i18next
import "./utils/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
