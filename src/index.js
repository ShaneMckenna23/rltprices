import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  store  from "./store.js";
import { router } from "./router.js";
import './index.css'
// render the main component
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);