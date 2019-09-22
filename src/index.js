import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

const rootEl = document.getElementById("root");
const store = configureStore({
  todos: {
    1: { id: 1, title: "Test" },
    2: { id: 2, title: "Try" },
    3: { id: 3, title: "Sample" }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
