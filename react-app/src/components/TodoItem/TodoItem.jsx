import React from 'react';
import { Col, Button, Form, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './cardStyle.css';

const buttonStyles = {
    danger: 'btn btn-danger',
};

const TodoItem = ({
                      todo = { title: '', description: '', completed: false },
                      index = 0,
                      deleteTodo = () => {},
                      toggleComplete = () => {}
                  }) => {
    return (
        <Col md={4} className="mb-3">
            <Card>
                <Card.Body className='cardStyle'>
                    <Card.Title className="taskHeading">{todo.title}</Card.Title>
                    <Card.Text className="taskDescription">{todo.description}</Card.Text>
                    <hr />
                    <Form.Check
                        type="checkbox"
                        className="completed form-check"
                        checked={todo.completed}
                        onChange={() => toggleComplete(index)}
                        label="Завершено ?"
                    />
                    <hr />
                    <Button
                        variant="danger"
                        className={classNames(buttonStyles.danger)}
                        onClick={() => deleteTodo(index)}
                    >
                        Удалить
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
