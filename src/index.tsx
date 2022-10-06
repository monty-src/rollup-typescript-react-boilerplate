import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <section>
      <p>testing</p>
    </section>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
