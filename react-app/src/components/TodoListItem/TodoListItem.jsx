import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormControl, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import routeNames from "../../routerConfig/routeNames";

const TodoListItem = ({ id, title, description, status: initialStatus, onStatusChange, onDelete }) => {
    const [status, setStatus] = useState(initialStatus);
    const redirect = useNavigate();

    const handleChange = (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);
        onStatusChange(id, newStatus);
    };

    const goToTodoItemPage = () => {
        redirect(routeNames.todoItemPage)
    }


    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <Grid item xs={4}>
            <Paper elevation={12} sx={{ bgcolor: '#e0e0e0', mb: 5 }}>
                <Box sx={{ p: 3 }}>
                    <Typography sx={{ textAlign: 'center', mb: 1, fontFamily: 'monospace' }} variant='h6' component='h6'>
                        {title}
                    </Typography>
                    <hr />
                    <Box>
                        <Typography sx={{ mb: 2, fontFamily: 'monospace' }} variant='subtitle1' component='p'>
                            {description}
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={status}
                                label="Status"
                                onChange={handleChange}
                            >
                                <MenuItem value='completed'>Completed</MenuItem>
                                <MenuItem value='not-completed'>Not Completed</MenuItem>
                                <MenuItem value='pending'>Pending</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button variant="contained" endIcon={<RemoveRedEyeIcon />} onClick={goToTodoItemPage} >Watch</Button>
                        <Button variant="contained" color="secondary" endIcon={<CreateIcon />}>Fix</Button>
                        <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
                    </Stack>
                </Box>
            </Paper>
        </Grid>
    );
}

TodoListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TodoListItem;
