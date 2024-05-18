import React from "react";
import {Button, Form} from 'react-bootstrap';
import {random} from 'lodash';
import PropTypes from 'prop-types';

const Input = (props, name, type, placeholder, value, onChange, ...restProps) => {
    const controlId = 'form-input' + random(0, 100);
    return (

            <Form.Group className="mb-3" controlId={controlId}>
                {props.label && <Form.Label>{props.label}</Form.Label>}
                <Form.Control
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete='off'
                    value={value}
                    onChange={onChange}
                    {...restProps}
                 />
            </Form.Group>
    )
}
Input.defaultProps = {
    label: null,
    name: '',
    type: 'text',
    placeholder: 'Put your data here',
    value: '',
    onChange:  (event) =>  {
        console.log(event.target.value);
    }
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
}

export default Input;
