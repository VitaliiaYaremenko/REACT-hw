import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TodoDetail = ({ location }) => {
    const { id } = useParams();
    const todo = location.state?.todo;

    if (!todo) {
        return <div>Task not found</div>;
    }

    const { title, description, completed } = todo;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Completed: {completed ? "Yes" : "No"}</p>
            <Link to="/" className="btn btn-primary">Back to List</Link>
        </div>
    );
};

export default TodoDetail;

