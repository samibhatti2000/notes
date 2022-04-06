import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducers} from "./redux/reducers/rootReducers.js"

const middleware = [thunk];


const Store = createStore(rootReducers,  composeWithDevTools(applyMiddleware(...middleware)));

export default Store;
