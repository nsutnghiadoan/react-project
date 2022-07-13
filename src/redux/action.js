export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const INCREMENT = "INCREMENT"
export const MINUS = "MINUS"

export function addTodo(todo) {
    return {
        type : ADD_TODO,
        payload : todo
    }
}
export function updateTodo(todo) {
    return {
        type : UPDATE_TODO,
        payload : todo
    }
}
export function deleteTodo(idTodo){
    return {
        type : DELETE_TODO,
        payload : idTodo
    }
}

export function incrementNum(){
    return {
        type : INCREMENT,
    }
}
export function minusNum(){
    return {
        type : MINUS,
    }
}