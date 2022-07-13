import React from 'react';
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';
import { selectTodo } from '../redux/reducer';

const TodoList = () => {
    let todos = useSelector(selectTodo)
    return (
        <>
            {todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.id} />
            })}
        </>
    );
}

export default TodoList;
