import React from "react";
import { Card, Button, Form } from 'react-bootstrap';

function TodoItem ({todo, deleteTodo, toggleComplete}) {
    return (
        <div className="col-4 mb-3">
            <Card>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Form.Check
                        type="checkbox"
                        label="Завершено?"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    <Button variant="danger" onClick={() => deleteTodo(todo.id)} className="mt-3">
                        Удалить
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TodoItem;
