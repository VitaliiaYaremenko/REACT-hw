import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { StorageKey } from "../../utils/const";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import SelectComponent from "../../UI/SelectComponent/index.js";
import {InputAdornment} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const TodoItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const  [todo, setTodo] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const storedItems = localStorage.getItem(StorageKey);
        if (storedItems) {
            try {
                const items = JSON.parse(storedItems);
                const item = items.find(todo => todo.id === id);
                if (item) {
                    setTodo(item);
                    setTitle(item.title);
                    setDescription(item.description);
                    setStatus(item.status);
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error("Failed to parse Local Storage data:", error);
                navigate('/');
            }
        }
    }, [id, navigate]);


    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }


    const handleSave = () => {
        const storedItems = localStorage.getItem(StorageKey);
        if (storedItems) {
            try {
                let items = JSON.parse(storedItems);
                items = items.map(item => item.id === id ? { ...item, title, description, status } : item);
                localStorage.setItem(StorageKey, JSON.stringify(items));
                setOpen(true);
            } catch (error) {
                console.error("Failed to update Local Storage data:", error);
            }
        }
    };

    const handleValueChange = (event) => {
        setStatus(event.target.value)
    }

    const handleClickReturn = () => {
        navigate('/')
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <BaseTemplate textTitle='Edit Todo Item'>
                <Box sx={{ flexGrow: 1 }}>
                    <Paper elevation={24} sx={{ bgcolor: '#dcedc8', p: 5, mt: 5 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="standard"
                                value={title}
                                onChange={handleTitleChange}
                                sx={{ mb: 3 }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><EditIcon/></InputAdornment>,
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Description"
                                variant="standard"
                                value={description}
                                onChange={handleDescriptionChange}
                                sx={{ mb: 3 }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><EditIcon/></InputAdornment>,
                                }}
                            />
                            <SelectComponent
                                value={status}
                                label='Status'
                                onChange={handleValueChange}
                            >
                                <MenuItem value='completed'>Completed</MenuItem>
                                <MenuItem value='not-completed'>Not Completed</MenuItem>
                                <MenuItem value='pending'>Pending</MenuItem>

                            </SelectComponent>

                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                                <Button variant="contained" color="secondary"  sx={{ mt: 2 }} endIcon={<ExitToAppIcon />} onClick={handleClickReturn}>
                                    Back to Main Page
                                </Button>
                            </Stack>

                        </Box>
                    </Paper>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                            Todo item updated successfully!
                        </Alert>
                    </Snackbar>
                </Box>
        </BaseTemplate>
    );
};

export default TodoItemPage;
