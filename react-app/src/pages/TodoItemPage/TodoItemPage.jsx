import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Container,
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
    Alert,
    Stack
} from "@mui/material";
import { StorageKey } from "../../utils/const";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import SelectComponent from "../../UI/SelectComponent/index.js";

const TodoItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
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
        <BaseTemplate>
                <Box sx={{ flexGrow: 1 }}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Todo item updated successfully!
                        </Alert>
                    </Snackbar>
                    <Paper elevation={12} sx={{ bgcolor: '#e0e0e0', p: 5, mt: 5 }}>
                        <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 3 }}>
                            Edit Todo Item
                        </Typography>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={handleTitleChange}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            value={description}
                            onChange={handleDescriptionChange}
                            sx={{ mb: 3 }}
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
                            <Button variant="contained" color="primary" onClick={handleSave}>
                                Save
                            </Button>
                            <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleClickReturn}>
                                Back to Main Page
                            </Button>

                        </Stack>
                    </Paper>
                </Box>
        </BaseTemplate>
    );
};

export default TodoItemPage;
