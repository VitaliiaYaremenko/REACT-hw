import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (title, description) => {
        const newTodo = { title, description, completed: false };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const clearTodos = () => {
        setTodos([]);
    };

    return (
        <div>
            <Row>
                <Col md={4}>
                    <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
                </Col>
                <Col md={8}>
                    <Row id="todoItems">
                        {todos.map((todo, index) => (
                            <TodoItem
                                key={index}
                                todo={todo}
                                index={index}
                                deleteTodo={deleteTodo}
                                toggleComplete={toggleComplete}
                            />
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default TodoList;
