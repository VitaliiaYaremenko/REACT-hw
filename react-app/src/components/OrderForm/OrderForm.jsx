import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const OrderSchema = Yup.object().shape({
    products: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Product name is required'),
            quantity: Yup.number().required('Quantity is required').min(1)
        })
    )
});

const OrderForm = ({ initialValues, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={OrderSchema}
            onSubmit={onSubmit}
        >
            {({ values }) => (
                <Form>
                    <FieldArray name="products">
                        {({ push, remove }) => (
                            <div>
                                {values.products.map((_, index) => (
                                    <div key={index}>
                                        <Field name={`products.${index}.name`} as={TextField} label="Product Name" />
                                        <Field name={`products.${index}.quantity`} type="number" as={TextField} label="Quantity" />
                                        <Button onClick={() => remove(index)}>Remove</Button>
                                    </div>
                                ))}
                                <Button onClick={() => push({ name: '', quantity: 1 })}>Add Product</Button>
                            </div>
                        )}
                    </FieldArray>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

OrderForm.propTypes = {
    initialValues: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired
            })
        ).isRequired
    }).isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default OrderForm;
