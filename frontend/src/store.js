import { createStore, applyMiddleware } from "redux";
import persistCombinedReducers from "./js/store/reducers/index";
import thunk from "redux-thunk";

export default createStore(persistCombinedReducers, applyMiddleware(thunk));
