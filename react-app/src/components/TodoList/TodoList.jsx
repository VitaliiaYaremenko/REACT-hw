import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (Array.isArray(todo)) {
            setTodos([]);
        } else {
            setTodos([...todos, todo]);
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="row">
            <div className="col-4">
                <TodoForm addTodo={addTodo} />
            </div>
            <div className="col-8">
                <div className="row" id="todoItems">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleComplete={toggleComplete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
