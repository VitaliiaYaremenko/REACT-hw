import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import  validationSchema  from '../../validation/validationSchema.js';

const buttonStyles = {
    primary: 'btn btn-primary',
    warning: 'btn btn-warning',
    danger: 'btn btn-danger',
};

const TodoForm = ({ addTodo = () => {}, clearTodos = () => {} }) => {
    const initialValues = { title: '', description: '' };

    const handleSubmit = (values, { resetForm }) => {
        addTodo(values.title, values.description);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ resetForm }) => (
                <Form>
                    <div className="mb-3">
                        <label className="form-label">Task title</label>
                        <Field
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Title"
                        />
                        <ErrorMessage name="title" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Task body</label>
                        <Field
                            as="textarea"
                            name="description"
                            className="form-control"
                            style={{ height: '300px' }}
                            placeholder="Task body"
                            rows="3"
                        />
                        <ErrorMessage name="description" component="div" className="text-danger" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className='d-flex gap-2'>
                            <Button
                                type="submit"
                                className={classNames(buttonStyles.primary)}
                            >
                                Create Task!
                            </Button>
                            <Button
                                type="reset"
                                className={classNames(buttonStyles.warning)}
                                onClick={() => resetForm()}
                            >
                                Очистить
                            </Button>
                        </div>
                        <Button
                            type="button"
                            className={classNames(buttonStyles.danger)}
                            onClick={clearTodos}
                        >
                            Удалить все
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;



