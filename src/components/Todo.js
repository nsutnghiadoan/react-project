import React, {useState, useEffect, useRef} from 'react'
import '../assets/css/todo.scss'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
function Todo() {
   return (
    <div className='todo'>
        <TodoInput />
        <TodoList />
    </div>
   )
}
export default Todo;