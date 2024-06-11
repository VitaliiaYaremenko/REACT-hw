import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import '../TodoItem/cardStyle.css';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
    return (
        <div className="col-4">
            <Card className="mb-3">
                <Card.Body className='cardStyle'>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <hr/>
                    <Form.Check
                        type="checkbox"
                        label="Завершено?"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    <hr />
                    <Button variant="danger" className="ml-2" onClick={() => deleteTodo(todo.id)}>Удалить</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TodoItem;
