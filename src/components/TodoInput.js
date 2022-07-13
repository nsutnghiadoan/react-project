import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, ADD_TODO } from '../redux/action';
import { v1 as uuid } from 'uuid';
import { Container, Input, Button , Stack, useToast  } from '@chakra-ui/react'

const TodoInput = () => {
    let [name, setName] = useState('')
    let dispatch = useDispatch()
    const toast = useToast()
    return (
        <Container> 
            <Stack  direction='row' align='center' spacing={4}>
                <Input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <Button
                    colorScheme='blue'
                    onClick={()=>{
                        toast({
                            title: 'Add todo success!',
                            description: "We've created your todo.",
                            status: 'success',
                            duration: 6000,
                            isClosable: true,
                            position: 'top-right',
                            
                        })
                        dispatch(addTodo({
                            id: uuid(),
                            name : name
                        }))
                        setName('')
                    }}
                >Add</Button>
            </Stack> 
        </Container>
    );
}

export default TodoInput;
