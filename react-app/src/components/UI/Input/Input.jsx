import React from "react";
import {Form} from "react-bootstrap";
import {random} from "lodash";
import PropTypes from "prop-types";

// для компонентів які не мають стану використовується стрілочна функція

const Input = ({label, name, type='text', placeholder, value, onChange,  ...restProps}) => {
    const controlId = 'form-input' + random(0, 1000); //генеруємо рандомний Id для елемента
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                name={name}
                type={type}
                value={value} // достається value email
                placeholder={placeholder}
                onChange={onChange}
                {...restProps}
            />
        </Form.Group>
    )
}


Input.propTypes = {
    name: PropTypes.string.isRequired, // обовязково мають бути передані isRequired
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
export default Input;
