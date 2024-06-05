import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Item from '../Item';
import '../TodoBox.css';

function uniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([{ id: uniqueId(), text: task }, ...tasks]);
            setTask('');
        }
    };

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <div className="mb-3 mt-5">
                        <Form onSubmit={handleAddTask}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                    required
                                    placeholder="I am going..."
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary" className="w-100">Add</Button>
                        </Form>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="task-list">
                        {tasks.map((task) => (
                            <Item key={task.id} task={task} onRemove={handleRemoveTask} />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoBox;


