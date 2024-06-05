import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Item from '../Item';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className="mb-3 mt-3">
                <Form className="d-flex justify-content-center" onSubmit={handleAddTask}>
                    <Form.Group className="me-3 flex-grow-1">
                        <Form.Control
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            required
                            placeholder="I am going..."
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary">Add</Button>
                </Form>
            </div>
            <div>
                {tasks.map((task) => (
                    <Item key={task.id} task={task} onRemove={handleRemoveTask} />
                ))}
            </div>
        </Container>
    );
};

export default TodoBox;

