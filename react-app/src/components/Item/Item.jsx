import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Container } from 'react-bootstrap';

const Item = ({ task, onRemove }) => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onRemove(task.id)}
                    >
                        -
                    </Button>
                </Col>
                <Col>{task.text}</Col>
            </Row>
            <hr />
        </Container>
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
