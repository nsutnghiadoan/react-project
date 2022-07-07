import React from 'react';
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
    let todos = useSelector(state => state)
    return (
        <>
            {todos?.map((todo)=>{
                return <TodoItem todo={todo} key={todo.id} />
            })}
        </>
    );
}

export default TodoList;
