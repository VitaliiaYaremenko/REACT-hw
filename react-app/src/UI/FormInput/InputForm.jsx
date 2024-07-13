import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const InputForm = ({ id, type, name, label, variant, value, onChange, onBlur, error, helperText }) => {
    return (
        <TextField
            id={id}
            type={type}
            name={name}
            label={label}
            variant={variant}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            fullWidth
            margin="normal"
        />
    );
};

InputForm.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
};

export default InputForm;
