import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';


const AllTodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                All Todos
            </Typography>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Typography variant="h6">{todo.title}</Typography>
                        <Typography>{todo.description}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => history.push(`/todo/${todo.id}`)}
                        >
                            View
                        </Button>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default AllTodosPage;

