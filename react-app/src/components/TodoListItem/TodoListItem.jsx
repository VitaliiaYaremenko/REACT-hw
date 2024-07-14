import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";


const TodoListItem = ({title, description}) => {
    return (
        <>
            <Paper elevation={12} sx={{bgcolor: '#e0e0e0', mb: 5}}>
                <Box sx={{p:3}}>
                    <Typography sx={{textAlign:'center', mb:1, fontFamily: 'monospace'}} variant='h6' component='h6'>
                        {title}
                    </Typography>
                    <hr/>
                    <Box>
                        <Typography sx={{mb:2, fontFamily: 'monospace'}} variant='subtitle1' component='p'>
                            {description}
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<RemoveRedEyeIcon />}>Watch</Button>
                        <Button variant="contained" color="secondary" endIcon={<CreateIcon />}>Fix</Button>
                        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                    </Stack>
                </Box>
            </Paper>
        </>
    )
}

TodoListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default TodoListItem;
