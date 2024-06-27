import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import styles from './style.module.scss'
const NotFound = ({label='Not Found: 404'}) => {
    return (
        <div className={styles.bgColor}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                {label && <Typography sx={{mt:5}} variant="h3">{label}</Typography>}
             </Box>
        </div>
    )
}


NotFound.propTypes = {
    label: PropTypes.string,
}
export default NotFound;
