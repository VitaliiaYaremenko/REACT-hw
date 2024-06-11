import {Col, Form, Row} from "react-bootstrap";
import Buttons from '../Buttons';
import { Formik} from 'formik';
import validationSchema from '../../validation/validationSchema.js'

function TodoForm ({addTodo, clearTodos}) {
    const handleSubmit = (values, {resetForm}) => {
        addTodo({
            id: Date.now(),
            title: values.title,
            description: values.description,
            completed: false
        })
        resetForm();
    };

    return (
        <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleReset, isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
                <Form onSubmit={handleSubmit} id="todoForm">
                    <Form.Group as={Row} className="mb-3" controlId="todoFormTitle">
                        <Form.Label column sm={3}>Task title</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.title && errors.title}
                            />
                            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="todoFormDescription">
                        <Form.Label column sm={3}>Task body</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="description"
                                as="textarea"
                                placeholder="Task body"
                                rows={3}
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.description && errors.description}
                            />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Buttons
                        handleReset={handleReset}
                        clearTodos={clearTodos}
                        isDisabled={isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    )
}
export default TodoForm;
