import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./action";
import { INCREMENT, MINUS} from './numAction'
import { initState, initNum } from "./state";
export let reducer =  (state = initState, action)=>{
    let newTodos;
    switch(action.type){
        case ADD_TODO :
            newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos
        case UPDATE_TODO :
            newTodos = [...state]
            let index = newTodos.find((e)=> e.id == action.payload.id)
            index.name = action.payload.name
            return newTodos
        case DELETE_TODO :
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id != action.payload)
            return newTodos
    }
}
export let increReducer = (state = initNum, numAction)=>{
    switch(numAction.typeAction){
        case INCREMENT :
            state +=1
            return state
        case MINUS :
            state -=1
            return state
    }
}