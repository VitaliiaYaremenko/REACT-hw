import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'react-bootstrap';
import '../Styles/styles.css';

const Item = ({ task, onRemove }) => {
    const handleRemove = (e) => {
        e.preventDefault();
        onRemove(task.id);
    };

    return (
        <Col md={6} className="mb-3">
            <div className="taskWrapper">
                <div className="taskHeading">{task.title}</div>
                <div className="taskDescription">{task.description}</div>
                <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </div>
        </Col>
    );
};

Item.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Item;


