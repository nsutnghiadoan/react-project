import { ADD_TO_CART, UPDATE_CART, DELETE_CART } from "./action";
import { cartInit } from "./state";
export let cartReducer =  (state = cartInit, action)=>{
    let newCarts;
    switch(action.type){
        case ADD_TO_CART :
            newCarts = [...state]
            newCarts.push(action.payload)
            return newCarts
        case UPDATE_CART :
            newCarts = [...state]
            let index = newCarts.find((e)=> e.id == action.payload.id)
            index.quantity = action.payload.quantity
            return newCarts
        case DELETE_CART :
            // newCarts = [...state]
            // newCarts = newCarts.filter(todo => todo.id != action.payload)
            return newCarts
        default:
            return cartInit
    }
}
export const selectCart = (state) => state.cartReducer;
