import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import promiseMiddleware from "../middlewares/promise";

let Middlewares = [thunk, promiseMiddleware];

const store = createStore(
  rootReducer,
  //   window.__INITIAL_STATE__,
  compose(
    applyMiddleware(...Middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
