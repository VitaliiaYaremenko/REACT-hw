import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import { Row } from 'react-bootstrap';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const clearTodos = () => {
        setTodos([]);
    };

    return (
        <div className="row">
            <div className="col-4">
                <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
            </div>
            <div className="col-8">
                <Row id="todoItems">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleComplete={toggleComplete}
                        />
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default TodoList;
