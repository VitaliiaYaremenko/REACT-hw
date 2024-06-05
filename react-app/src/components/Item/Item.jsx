import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';
import '../TodoBox.css';

const Item = ({ task, onRemove }) => {
    return (
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="mb-3 mt-3">
            <Card className="task-item " border="secondary">
                <Card.Body>
                    <div className="task-text mb-2">{task.text}</div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onRemove(task.id)}
                        className="w-100"
                    >
                        Remove
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

Item.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;
