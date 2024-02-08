import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // navigation
//import App from "./App2.jsx"; // users placeholder
//import App from "./App3.jsx"; // rick and morty

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
