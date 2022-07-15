import React, {useState, useEffect, useRef} from 'react'
import '../assets/css/todo.scss'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import {Container} from '@chakra-ui/react';
import { Row, Col } from 'react-bootstrap';

function Todo() {
   return (
    <div className='todo'>
        <Container>
            <Row>
                <Col>
                    <TodoInput />
                    <TodoList />
                </Col>
                <Col>
                    {/* <Filter></Filter> */}
                </Col>
            </Row>
        </Container>
    </div>
   )
}
export default Todo;