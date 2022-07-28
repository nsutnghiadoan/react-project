import React, {useState, useEffect, useRef} from 'react'
import '../assets/css/todo.scss'
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
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
            </Row>
        </Container>
    </div>
   )
}
export default Todo;