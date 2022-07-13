import { ADD_TODO, UPDATE_TODO, DELETE_TODO, INCREMENT, MINUS } from "./action";
import { initState } from "./state";
export let todoReducer =  (state = initState, action)=>{
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
        default:
            return initState
    }
}
export const selectTodo = (state) => state.todoReducer;
