import React, { useEffect } from "react";
import "./App.css";
import "./tailwind.output.css";
import { Provider } from "react-redux";
import store from "./store";
import Songs from "./components/Songs";
import { setLoading, getSongs } from "./actions/data";

function App() {
  const setLoadingAndFetch = async () => {
    store.dispatch(setLoading(true));
    await store.dispatch(getSongs());
    store.dispatch(setLoading(false));
  };

  useEffect(async () => {
    setLoadingAndFetch();
  }, []);
  return (
    <Provider store={store}>
      <Songs />
    </Provider>
  );
}

export default App;
