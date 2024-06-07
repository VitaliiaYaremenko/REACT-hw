import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import uniqueId from 'lodash/uniqueId';
import Item from '../Item';

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) {
            setError('Both title and description are required.');
            return;
        }
        const newTask = {
            id: uniqueId(),
            title: formData.title,
            description: formData.description
        };
        setTasks([newTask, ...tasks]);
        setFormData({ title: '', description: '' });
        setError(null);
    };

    const handleRemoveTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <main>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <Form id="todoForm" onSubmit={handleAddTask}>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group className="mb-3">
                                <Form.Label>Task title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Task body</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    placeholder="Task body"
                                    rows={10}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary">Create Task!</Button>
                        </Form>
                    </Col>

                    <Col md={8}>
                        <Row id="todoItems">
                            {tasks.map(task => (
                                <Item key={task.id} task={task} onRemove={handleRemoveTask} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default TodoBox;


