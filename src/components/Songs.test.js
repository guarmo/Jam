import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Songs from "../components/Songs";
import { Provider } from "react-redux";
import store from "../store";

afterEach(cleanup);

it("renders correctly", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Songs />
    </Provider>
  );

  expect(queryByTestId("songs")).toBeTruthy();
});
