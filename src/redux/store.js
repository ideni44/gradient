import { createStore } from "redux";
import gradients from "./reducer";

const store = createStore(gradients,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store