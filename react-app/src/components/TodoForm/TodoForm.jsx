import React from 'react';
import FormikTodoForm from '../FormikTodoForm';

const TodoForm = ({ addTodo }) => {
    return (
        <FormikTodoForm addTodo={addTodo} />
    );
};

export default TodoForm;

