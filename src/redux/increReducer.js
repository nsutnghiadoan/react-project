import { INCREMENT, MINUS } from "./action";
import { initNum } from "./state";

export const increReducer = (state = initNum, action)=>{
    switch(action.type){
        case INCREMENT :
            return {
                ...state,
                value: state.value +1
            }
        case MINUS :
            return {
                ...state,
                value: state.value -1
            }
        default : 
            return state
    }
}

export const selectCount = (state) => state.increReducer;