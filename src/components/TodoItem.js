import React, {useState} from 'react';
import { deleteTodo, updateTodo } from '../redux/action';
import {useDispatch} from 'react-redux'

const TodoItem = ({todo}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch()
    return (
        <div>
            {/* <div>{todo.name}</div> */}
            <div>
                {edit ? 
                    <input 
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                        type='text'
                    />
                    : <h4>{todo.name}</h4>
                }
            </div>
            <button
                onClick={()=>{
                    dispatch(updateTodo({
                        ...todo,
                        name : name
                    }))
                    if(edit){
                        setName(todo.name)
                    }
                    setEdit(!edit)
                }}
            >{edit? 'Update ': 'Edit'}</button>
            <button
                onClick={()=>{
                    dispatch(deleteTodo(todo.id))
                }}
            >Delete</button>
        </div>
    );
}

export default TodoItem;
