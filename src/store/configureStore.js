import {
  combineReducers,
  configureStore,

} from "@reduxjs/toolkit";
import contador from "./contador";
import alertMessage from "./alertMessage";

const reducer = combineReducers({ contador, alertMessage });

const store = configureStore({ reducer });

export default store;
