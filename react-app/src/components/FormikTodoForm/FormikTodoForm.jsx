import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import validationSchema from '../../validation/validationSchema.js';

const FormikTodoForm = ({ addTodo }) => {
    return (
        <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                addTodo({
                    id: Date.now(),
                    title: values.title,
                    description: values.description,
                    completed: false
                });
                resetForm();
            }}
        >
            {({ resetForm }) => (
                <Form id="todoForm">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Task title</label>
                        <Field
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Title"
                        />
                        <ErrorMessage name="title" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Task body</label>
                        <Field
                            as="textarea"
                            name="description"
                            className="form-control"
                            placeholder="Task body"
                            rows="10"
                        />
                        <ErrorMessage name="description" component="div" className="text-danger" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className='d-flex gap-3'>
                            <Button variant="primary" type="submit">Create Task!</Button>
                            <Button variant="warning" type="reset" className="ml-2" onClick={resetForm}>Очистить</Button>
                        </div>
                        <Button variant="danger" type="button" className="remove-all" onClick={() => addTodo([])}>Удалить все</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormikTodoForm;
