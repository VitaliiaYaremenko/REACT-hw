import {FormControl, FormGroup, Input, Typography} from "@mui/material";
import PropTypes from "prop-types";

const FormInput = ({label, id, name, value, type, onChange, autoComplete={}, ...restProps }) => {
    return (
        <FormGroup>
            <FormControl>
                {label && <Typography componet='div' variant='h4'>{label}</Typography>}
                <Input
                    id={id}
                    mane={name}
                    value={value}
                    type={type}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    {...restProps}
                />
            </FormControl>
        </FormGroup>
    )
}

FormInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
    onChange: PropTypes.func.isRequired,
    autoComplete: PropTypes.object,
}
export default FormInput;
