import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";


const SelectComponent = ({label, value, onChange, children}) => {

    return (
        <>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    sx={{mb:2}}
                    value={value}
                    label={label}
                    onChange={onChange}
                >
                    {children}
                </Select>
            </FormControl>
        </>
    )
}

SelectComponent.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}
export default SelectComponent;
