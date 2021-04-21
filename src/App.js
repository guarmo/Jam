import React from "react";
import "./App.css";
import "./tailwind.output.css";
import { Provider } from "react-redux";
import store from "./store";
import Songs from "./components/Songs";

function App() {
  return (
    <Provider store={store}>
      <Songs />
    </Provider>
  );
}

export default App;
