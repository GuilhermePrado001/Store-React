import { combineReducers } from "redux";
import { cart } from "./cart"
import { search } from "./search"

export const Reducers = combineReducers({
    cart,
    search
})