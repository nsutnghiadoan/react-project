import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducer";
import { increReducer } from "./increReducer";
const store = createStore(combineReducers({
    todoReducer,
    increReducer,
}))
export default store
