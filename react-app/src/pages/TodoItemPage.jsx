import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TodoItemPage({ todos }) {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const selectedTodo = todos.find(todo => todo.id === parseInt(id));
        setTodo(selectedTodo);
    }, [id, todos]);

    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <Button variant="danger">Delete</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default TodoItemPage;
