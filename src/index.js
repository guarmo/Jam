import React from "react";
import { render } from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./tailwind.output.css";
import App from "./App";

const options = {
  position: positions.TOP_LEFT,
  timeout: 3000,
  offset: "10px",
  transition: transitions.SCALE,
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

render(<Root />, document.getElementById("root"));
