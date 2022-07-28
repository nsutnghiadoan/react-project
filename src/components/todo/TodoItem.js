import React, {useState} from 'react';
import { deleteTodo, updateTodo } from '../../redux/action';
import {useDispatch} from 'react-redux'
import { Input, Container, Text, Badge , Button, useToast} from '@chakra-ui/react'


const TodoItem = ({todo}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch()
    const toast = useToast()
    return (
        <Container>
            <div>
                {edit ? 
                    <Input 
                        variant='outline' 
                        placeholder='Outline' 
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                        type='text'
                    />
                    : <Text fontSize='xl' fontWeight='bold'>
                            {todo.name}
                        </Text>
                }
            </div>
            <Button
                colorScheme='green'
                variant='solid'
                onClick={()=>{
                    dispatch(updateTodo({
                        ...todo,
                        name : name
                    }))
                    if(edit){
                        setName(todo.name)
                        toast({
                            title: `Update todo ${todo.name} success!`,
                            description: "We've updated your todo.",
                            isClosable: true,
                            position: 'top-right'
                        })
                    }
                    setEdit(!edit)
                }}
            >{edit? 'Update ': 'Edit'}</Button>
            <Button
                colorScheme='red'
                variant='solid'
                onClick={()=>{
                    dispatch(deleteTodo(todo.id))
                    toast({
                        title: `Delete todo has id ${todo.id}  success!`,
                        description: "We've deleted your todo.",
                        isClosable: true,
                        position: 'top-right',
                        status: 'warning'
                    })
                }}
            >Delete</Button>
        </Container>
    );
}

export default TodoItem;
