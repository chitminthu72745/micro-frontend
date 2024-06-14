import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = (element: HTMLElement) => {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export { mount };
