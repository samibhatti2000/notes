import {combineReducers} from "redux";
import { contactReducer } from "./contactReducer";
import { productOneReducer, productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const rootReducers = combineReducers({
    product: productReducer,
    onProduct: productOneReducer,
    contact: contactReducer,
    user: userReducer,
    
})