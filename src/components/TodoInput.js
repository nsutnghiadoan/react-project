import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, ADD_TODO } from '../redux/action';
import { v1 as uuid } from 'uuid';

const TodoInput = () => {
    let [name, setName] = useState('')
    let dispatch = useDispatch()
    return (
        <div>  
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <button
                onClick={()=>{
                    dispatch(addTodo({
                        id: uuid(),
                        name : name
                    }))
                    setName('')
                }}
            >Add</button>
        </div>
    );
}

export default TodoInput;
