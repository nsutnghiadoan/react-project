import { createStore } from "redux";
import { reducer ,increReducer} from "./reducer";
const store = createStore(reducer, increReducer)
export default store