import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <h1>React is live!</h1>
  </Provider>
);

export default Root;
